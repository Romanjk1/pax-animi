import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="border-t-[1px] border-[#e8e8e1] py-[30px] px-0 mt-[100px]">
        <div className="py-0 px-[40px] mx-auto max-w-[1500px]">
          <div className="flex justify-center items-center py-0 px-[20px] md:flex-row flex-col  ">
            <div className="py-0 md:px-[20px] text-[15px] font-bold md:text-[18px] mb-0 p-0">
              <p>Subscribe today to hear first about our sales</p>
            </div>
            <form action="" className="py-0 px-[20px] md:m-0 mt-[20px]">
              <div className="mb-0 flex max-w-[400px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="border-[1px] max-w-[100%] border-[#e8e8e1] py-[8px] px-[10px] flex-grow flex-shrink basis-auto"
                />
                <div className="m-0 flex flex-shrink flex-grow-0 basis-auto items-center">
                  <div className="hidden md:block">
                    <button
                      type="submit"
                      className="py-[11px] px-[20px] cursor-pointer inline-block text-center border-[1px] border-transparent font-bold text-[17px] bg-black text-white"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                  <div className="flex md:hidden">
                    <span className="text-2xl cursor-pointer py-[9px] px-[17px] bg-black text-white">
                      →
                    </span>{' '}
                    {/* Replace with your arrow icon */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex md:hidden py-[30px] border-[1px]  border-[#e8e8e1] "></div>
      <footer className="block text-[15px] bg-black text-white">
        <div className="border-t-[1px] border-white md:pt-[50px] py-[30px] px-0 ">
          <div className="py-0 px-[40px] max-w-[1500px] mx-auto">
            <div className="flex flex-wrap justify-center gap-[20px]">
              <div className="lg:max-w-[210px] lg:flex-shrink lg:flex-grow-0 lg:basis-1/4 flex-1 flex-shrink basis-1/2 max-w-none">
                <h2 className="text-[16px] font-bold mb-[15px] md:mb-5">
                  Menu
                </h2>
                <ul className="mb-[20px] py-0 px-0 list-none">
                  <li className="py-[4px] px-[0] text-white bg-transparent">
                    Search
                  </li>
                  <li className="py-[4px] px-[0] text-white bg-transparent">
                    Contact Us
                  </li>

                  <li className="py-[4px] px-[0] text-white bg-transparent">
                    Privacy Policy
                  </li>
                  <li className="py-[4px] px-[0] text-white bg-transparent">
                    Shipping Policy
                  </li>
                  <li className="py-[4px] px-[0] text-white bg-transparent">
                    Terms Of Service
                  </li>
                  <li className="py-[4px] px-[0] text-white bg-transparent">
                    Return Policy
                  </li>
                </ul>
              </div>
              <div className="lg:max-w-[210px] lg:flex-shrink lg:flex-grow-0 lg:basis-1/4 flex-1 flex-shrink basis-1/2 max-w-none">
                <div>
                  <h2 className="text-[16px] font-bold mb-[15px] md:mb-5">
                    Get in touch
                  </h2>
                  <ul className="mb-[20px] py-0 px-0 list-none">
                    <a
                      href=""
                      className="py-[10px] px-0 underline underline-offset-2"
                    >
                      <span className="flex-nowrap flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 mr-[10px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                        <span>+234 7026812513</span>
                      </span>
                    </a>
                    <a
                      href=""
                      className="py-[4px] px-0 underline underline-offset-2"
                    >
                      <span className="flex-nowrap flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 mr-[10px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>

                        <span>Email us</span>
                      </span>
                    </a>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-[16px] mb-[15px]">
                    Follow us
                  </div>
                </div>
              </div>
              <div className="max-w-[210px] flex-shrink flex-grow-0 basis-1/4"></div>
              <div className="max-w-[210px] flex-shrink flex-grow-0 basis-1/4"></div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#e8e8e1] py-[30px] px-0">
          <div className="py-0 px-[40px] max-w-[1500px] mx-auto text-center">
            <div className="text-[16px]">
              <p className="underline underline-offset-2">
                Pax Animi - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
