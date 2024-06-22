import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-10'>
            <div className="container mx-auto flex flex-col items-center">
      <div className="flex mb-4 space-x-4">
        <a href="#" className="text-xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="text-right mb-4">
        <a href="#" className="text-gray-400 hover:text-white">Feedback</a>
      </div>
      <div className="text-xs text-gray-400">
        &copy; 2024 Mitumoni Kalita. All rights reserved.
      </div>
    </div>
    </div>
  )
}

export default Footer