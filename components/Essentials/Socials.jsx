"use client"

import React from 'react'
import { RiFacebookFill, RiLinkedinFill, RiInstagramLine, RiGithubLine } from 'react-icons/ri'
import Link from 'next/link'

const icons = [
    {
        path: '/',
        name: <RiFacebookFill/>
    },
    {
        path: '/',
        name: <RiLinkedinFill/>
    },
    {
        path: '/',
        name: <RiInstagramLine/>
    },
    {
        path: '/',
        name: <RiGithubLine/>
    }
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}>
                    <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Socials