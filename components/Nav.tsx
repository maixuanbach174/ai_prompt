"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = false

  const [providers, getProviders] = useState(null)

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex-center flex gap-2'>
          <Image 
          src='/assets/images/logo.svg' 
          alt='Chatopia Logo' 
          width={50} 
          height={50}
          className='object-contain' />
          <p className='logo_text'>Chatopia</p>
        </Link>

        {/* Mobile Nav */}
        <div className="sm:flex hidden">
           { isUserLoggedIn ? (
              <div className='flex gap-3 md:gap-5'>
                <Link href="/create-prompt"
                className='black_btn'>
                  Create Post
                </Link>
                <button onClick={() => signOut()} className='outline_btn'>
                  Sign Out</button>
                <Link href="/profile">
                  <Image src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'/>
                </Link>
              </div>
           ) : (
              <button onClick={() => signIn()} className='flex-center gap-4'>
                <Image 
                src='/assets/images/logo.svg' 
                alt='User Icon' 
                width={30} 
                height={30}
                className='object-contain' />
                <p className='text-white'>Login</p>
              </button>
            )
           }
        </div>
    </nav>
  )
}

export default Nav