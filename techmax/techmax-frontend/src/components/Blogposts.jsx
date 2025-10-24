import { ArrowRight, MessagesSquare, UserRound } from 'lucide-react';
import React from 'react'

function Blogposts() {
    const posts = [
        {
            date: '2023-02-01',
            banner: "/blog-1.jpg",
            title: 'Blog Post 1',
            content: 'Accelerate innovation with world-class tech teams We’ll match you to an entire remote.',
            author: "John Doe",
            numOfComments: 5,
        },
        {
            date: '2023-02-01',
            banner: "/blog-1.jpg",
            title: 'Blog Post 1',
            content: 'Accelerate innovation with world-class tech teams We’ll match you to an entire remote.',
            author: "John Doe",
            numOfComments: 5,
        },
        {
            date: '2023-02-01',
            banner: "/blog-1.jpg",
            title: 'Blog Post 1',
            content: 'Accelerate innovation with world-class tech teams We’ll match you to an entire remote.',
            author: "John Doe",
            numOfComments: 5,
        },

    ];

  return (
    <div className='mt-50'>
      
      <div className='max-w-6xl mx-auto flex flex-col'>
         
         {/* Blog Description */}
         <div className='text-center'>
            <p className='tracking-wider font-bold text-sm text-[#3b82f6]'>NEWS & BLOG</p>
            <h2 className='text-4xl/13 tracking-wide font-bold text-balance max-w-3xl mx-auto text-gray-800'>
                Trending article & stories
            </h2>
         </div>

        

        {/* Post Cards */}
         <div className='flex gap-10 overflow-x-scroll scrollbar-hide mt-15'>
            {posts.map((post,index) => {
                return (
                    <Post key={index} post={post}/>
                );
            })}
         </div>
      </div>
    </div>
  )
}

export default Blogposts


const Post = ({post}) => {
  return (
    <div className='flex flex-col relative bg-white border border-gray-100  z-10 text-black rounded-t-4xl shadow-2xl'>

         {/* Date Absolute Element */}
         <div className='absolute top-7 left-7 w-17 h-18 bg-linear-to-l from-[#1972D7]
       to-[#42AFDE] rounded-lg flex-col flex font-semibold items-center p-1 text-white'>
            

                <span className='text-3xl m-0'>08</span>
                <span className='m-0'>Aug</span>
             
         </div>
        
        <div className='w-full overflow-hidden rounded-t-4xl'>
            <img className='' src={post.banner} alt="" />
        </div>

        {/* Text Elements */}
        <div className='flex flex-col gap-4 p-8'>
            {/* Author and Comments */}
            <div className='flex justify-between'>
        
                <div className='flex gap-1'>
                    <UserRound fill='#3b82f6' stroke='none'/> 
                    <span>
                        {post.author}
                    </span>
                </div>

                <div className='flex gap-1'>
                    <MessagesSquare color='#3b82f6' /> 
                    <span>
                        {`${post.numOfComments} Comments`}
                    </span>
                </div>
            </div>

            {/* Title and content */}
            <div>
                <h2 className='text-2xl font-semibold'>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        </div>

        {/* Article Link */}
        <div className='flex border-t border-gray-200 text-[#3b82f6]'>
            <a className='w-full' href="">
            <div className='flex justify-between items-center px-8 py-4'>
                Read Full Article
                <ArrowRight />
            </div>    
            </a>
        </div>
    </div>
  )
}