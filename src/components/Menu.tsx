'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { animate, AnimatePresence, delay, motion } from 'framer-motion'

const Menu = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { title: 'Home', href: '/', id: 1 },
    { title: 'Shop', href: '/', id: 2 },
    { title: 'About Us', href: '/', id: 3 },
    { title: 'Contact', href: '/', id: 4 },

    //  <Link href="/">Homepage</Link>
    //       <Link href="/">Shop</Link>
    //       <Link href="/">Deals</Link>
    //       <Link href="/">About</Link>
    //       <Link href="/">Contact</Link>
    //       <Link href="/">Logout</Link>
    //       <Link href="/">Cart(1)</Link>
  ]

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      delay: 0.5,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  }

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen z-10 origin-top bg-black text-white p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-white">Pax Animi</h1>
                <p
                  className="cursor-pointer text-md text-white"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={link.id}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu

const mobileLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
}

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-white"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}
