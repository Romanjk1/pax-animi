import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import('./NavIcons'), { ssr: false })

const Navbar = () => {
  return (
    <>
      <div className=" leading-none py-3 px-0 bg-black border-b-1 border-gray">
        <div className="text-center text-white font-bold h-full whitespace-nowrap ">
          Welcome to Pax Animi
        </div>
      </div>
      <div className="xl:h-20 h-14 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* MOBILE */}
        <div className="flex items-center justify-between py-0 xl:hidden">
          <Link href="/">
            <h1 className="md:mr-[30px] md:text-left relative block text-[24px] m-[10px]">
              <span className="text-black">Pax Animi</span>
            </h1>
          </Link>
          <div className="flex items-center px-[8px]">
            <NavIcons />
            <div className="ml-[1rem]">
              <Menu />
            </div>
          </div>
        </div>

        {/* BIGGER SCREENS */}
        <div className="hidden xl:flex items-center justify-between gap-8 h-full">
          {/* LEFT */}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <h1 className="md:mr-[30px] md:text-left relative block text-[24px] m-[10px]">
                <span className="text-black">Pax Animi</span>
              </h1>
            </Link>
            <div className="hidden xl:flex gap-4">
              <Link href="/">Homepage</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
