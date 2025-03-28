import React from 'react'
import img1 from '../assets/landing.png'
import Button from './Button'

const Landing = () => {
  return (
    <div className='flex justify-center items-center h-dvh'>
    <div className='flex flex-row items-center justify-center w-10/12'>
        <div className='w-1/2 px-20 flex flex-col gap-5 justify-center'>
        <small className='text-lg text-gray-300'>DISTINCT STYLES, CHOOSE YOUR IDENTITY.</small>
        <h1 className='text-6xl font-bold'>OxETHDao Members' Club</h1>
        <p className='text-sx w-11/12 text-gray-300'>Join a community of visionaries, creators, and innovators at the forefront of decentralized collaboration.</p>
        <div className='text-sx flex flex-row gap-10'>
            <div>
                <p className='mb-4'><span className='text-green-500'>✔</span> Exclusive Community</p>
                <p className='mb-4'><span className='text-green-500'>✔</span> Recognition and Visibility</p>
            </div>
            <div>
                <p className='mb-4'><span className='text-green-500'>✔</span> Collaborative Projects</p>
                <p className='mb-4'><span className='text-green-500'>✔</span> Empowerment and Impact</p>
            </div>
        </div>
        <Button/>
        </div>

        <div className='w-1/2 flex items-center justify-center'>
            <img src={img1} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Landing