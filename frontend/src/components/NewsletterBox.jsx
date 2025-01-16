import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% Off</p>
        <p className="text-gray-400 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form>
            <input className='w-full sm:flex-1 outline-none' required type="text" placeholder='Enter your email' />
            <button type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox