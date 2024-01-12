"use client"

import React from 'react'
import { RiMailLine, RiLinkedinFill, RiInstagramLine, RiGithubLine } from 'react-icons/ri'
import Link from 'next/link'

const icons = [
    {
        URL: '/',
        name: <RiMailLine/>
    },
    {
        URL: 'https://linkedin.com/in/renoghifari/',
        name: <RiLinkedinFill/>
    },
    {
        URL: 'https://instagram.com/renoghifarii_',
        name: <RiInstagramLine/>
    },
    {
        URL: 'https://github.com/renoghifari',
        name: <RiGithubLine/>
    }
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.URL} key={index}>
                    <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Socials