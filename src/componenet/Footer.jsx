import React from 'react'
// import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2 '>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <a
                href="https://github.com/khubaib11"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2 " />
            </a>
            <a
                href="https://www.linkedin.com/in/khubaib-munawar-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <img src="assets/linkdin.svg" alt="linkdin" className="w1/2 h-1/2 border-0" />
                
            </a>
            <a
                href="https://x.com/Khankhubaib089"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <img src="assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2 " />
            </a>
            
        </div>
        <p className='text-white-500'>© 2025 Khubaib Khan. All rights reserved.</p>
        </section>
  )
}
