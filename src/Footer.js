import React from 'react'
import { BiMailSend, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = () => {
  return (
      <footer className=' '>
          {/* logo text and email*/}
          <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:pl-16 lg:pr-16 text-white bg-[#125875] w-screen p-12 '>
              {/* logo text */}
              <div className='flex justify-center items-center flex-col lg:flex-row'>
                    <div className='mb-4 lg:mr-4 lg:mt-4 -rotate-45'>
                      <BiMailSend size={50}/>
                    </div>
                    <div className='text-center lg:text-left'>
                      <h1 className='text-4xl font-bold'>Subscribe for Newsletter</h1>
                      <p className='text-md mt-2'>Manage Your Business With Our Software</p>
                    </div>
              </div>
              <div>
                <form>
                      <div className='flex flex-center justify-between p-1 mt-12 bg-white h-16 md:w-[32rem] lg:w-[28rem] rounded-md'>
                          <input type="email" placeholder='Email address...' className='bg-transparent outline-none ml-4' />
                          <button type='submit' className='bg-[#125875] w-40 rounded-md text-lg'>Subscribe Now</button>
                      </div>
                  </form>
              </div>
          </div>
          <div className='flex justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#083344] w-screen py-20 px-16 '>
              {/* about us */}
              <div className='mt-0 mb-8 '>
                  <h1 className='text-white text-2xl font-bold'>About Us</h1>
                  <div className='border border-y-1 border-[#FF7350] w-20 mt-1'></div>
                  <p className='text-[#B2C0D8] mt-8'>Suspendisse non sem ante. Cras pretium gravida leo a convallis. Nam malesuada interdum metus, sit amet dictum ante congue eu. Maecenas ut maximus enim.</p>
                  {/* social icons */}
                  <div className='flex flex-row mt-4 gap-4'>
                      <a href='www.facebook.com' className='flex justify-center items-center bg-[#FFFFFF47] text-white w-10 h-10 rounded-full hover:bg-[#FF7350]'>
                          <BiLogoFacebook size={25}/>
                      </a>
                      <a href='www.instagram.com' className='flex justify-center items-center bg-[#FFFFFF47] text-white w-10 h-10 rounded-full hover:bg-[#FF7350]'>
                          <BiLogoInstagram size={25}/>
                      </a>
                      <a href='www.twittwe.com' className='flex justify-center items-center bg-[#FFFFFF47] text-white w-10 h-10 rounded-full hover:bg-[#FF7350]'>
                          <BiLogoTwitter size={25}/>
                      </a>
                 </div>
              </div>
              {/* our links */}
              <div className='mt-0 lg:ml-10 w-40 mb-8'>
                  <h1 className='text-white text-2xl font-bold'>Our Links</h1>
                  <div className='border border-y-1 border-[#FF7350] w-20 mt-1'></div>
                  <div className='flex flex-col mt-8'>
                      <a href='/' className='text-[#B2C0D8] mb-2'>Home</a>
                      <a href='/' className='text-[#B2C0D8] mb-2'>About Us</a>
                      <a href='/' className='text-[#B2C0D8] mb-2'>Courses</a>
                      <a href='/' className='text-[#B2C0D8] mb-2'>Blogs</a>
                      <a href='/' className='text-[#B2C0D8] mb-8'>Contact Us</a>
                  </div>
                  
              </div>
              {/* latest post */}
              <div className='mt-0 mb-8 '>
                  <h1 className='text-white text-2xl font-bold'>Latest Post</h1>
                  <div className='border border-y-1 border-[#FF7350] w-20 mt-1'></div>
                  <div className='flex flex-row mt-8'>
                      <img src="https://tse2.mm.bing.net/th?id=OIP.u1JnM9xVdO31tQrJKXwzgAHaHJ&pid=Api&P=0&h=180" alt='' className='w-20 h-20 rounded-lg' />
                      <div className='ml-4'>
                          <p className='text-[#B2C0D8] mb-2'>Nothing impossible,<br/> need hard work</p>
                          <p className='text-[#FF7350]'>17 July 2023</p>
                      </div>
                  </div>
                  <div className='flex flex-row mt-8'>
                      <img src="https://tse2.mm.bing.net/th?id=OIP.u1JnM9xVdO31tQrJKXwzgAHaHJ&pid=Api&P=0&h=180" alt='' className='w-20 h-20 rounded-lg' />
                      <div className='ml-4'>
                          <p className='text-[#B2C0D8] mb-2'>Nothing impossible,<br/> need hard work</p>
                          <p className='text-[#FF7350]'>17 July 2023</p>
                      </div>
                  </div>
              </div>
              {/* contact us */}
              <div className='mt-0 mb-8 '>
                  <h1 className='text-white text-2xl font-bold'>Contact Us</h1>
                  <div className='border border-y-1 border-[#FF7350] w-20 mt-1'></div>
                  <div className='flex flex-col mt-8 mb-4'>
                      <div className='flex flex-row'>
                        <div className='flex justify-center mr-4 mt-2 items-center bg-[#FF7350] text-white w-10 h-10 rounded-full'>
                          <AiOutlinePhone size={20 } />
                          </div>
                          <div className='flex flex-col'>
                          <p className='text-[#B2C0D8]'>+1 (444) 000-8888</p>
                          <p className='text-[#B2C0D8]'>+91 7052 101 786</p>
                          </div>
                      </div>

                  </div>
                   <div className='flex flex-col mt-8 mb-4'>
                      <div className='flex flex-row'>
                        <div className='flex justify-center mr-4 mt-2 items-center bg-[#FF7350] text-white w-10 h-10 rounded-full'>
                          <HiOutlineMail size={20 } />
                          </div>
                          <div className='flex flex-col'>
                          <p className='text-[#B2C0D8]'>info@example.com</p>
                          <p className='text-[#B2C0D8]'>help@example.com</p>
                          </div>
                      </div>

                  </div>
                   <div className='flex flex-col mt-8 mb-4'>
                      <div className='flex flex-row'>
                        <div className='flex justify-center mr-4 mt-2 items-center bg-[#FF7350] text-white w-10 h-10 rounded-full'>
                          <MdOutlineLocationOn size={20 } />
                          </div>
                          <div className='flex flex-col'>
                          <p className='text-[#B2C0D8]'>127/Plot No.39, 15th Phase,<br/> LHB Colony, Kanpur</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between text-white bg-[#FF7350] px-10 py-4'>
              <div className='flex flex-row '>
                  <FaGraduationCap size={40} />
                  {/* <FontAwesomeIcon icon="fa-light fa-graduation-cap" size='20' /> */}
              <h1 className='font-semibold text-3xl ml-4 mb-4 lg:mb-0'>QEDUCATO</h1>
              </div>
              <p>Copyright ©️ Qeducato 2023. All rights reserved.</p>
          </div>
    </footer>
  )
}

export default footer