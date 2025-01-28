import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">XenStore was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: To provide a platform where customers can easily discover, explore and purschase a wide range of products from the comfort their homes</p>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatibus. Cupiditate minima ratione debitis fuga libero quisquam maxime asperiores alias at ut. Veniam eum, praesentium, deserunt earum porro hic molestiae necessitatibus vero voluptatem qui non exercitationem molestias in delectus. Quod dolores et quia obcaecati sunt illo maiores nam, id unde!</p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo minima, omnis earum voluptas nisi harum ipsa ullam perspiciatis quae. Quae libero recusandae cum obcaecati quasi amet quisquam odit quas ad odio modi aut provident unde maiores, quibusdam deserunt officiis quod praesentium laborum, suscipit similique natus ratione! Cumque, aspernatur obcaecati. Rerum!</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius nihil alias repudiandae aperiam, qui ipsum cumque quae beatae nam expedita in at fuga, maiores impedit corporis, fugit amet similique.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convinience:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius nihil alias repudiandae aperiam, qui ipsum cumque quae beatae nam expedita in at fuga, maiores impedit corporis, fugit amet similique.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius nihil alias repudiandae aperiam, qui ipsum cumque quae beatae nam expedita in at fuga, maiores impedit corporis, fugit amet similique.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About