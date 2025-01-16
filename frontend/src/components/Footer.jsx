import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div className="">
                <img src='/XTKLogo.png' className='mb-5 w-20' />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="">
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+91 878573903</li>
                    <li>contact@xentek.com</li>
                </ul>
            </div>

        </div>

        <div className="">
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025@ xentek.com - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer