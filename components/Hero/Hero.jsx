"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'




const Hero = () => {
  const [text] = useTypewriter({
    words: ['Fullstack Dev', 'UI/UX Designer'],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed:90,
    delaySpeed:3500,
  })
  return (
    <>
      <div >
        <div className="md:grid px-4 md:px-[120px] md:mt-[50px] xl:px-[250px] xl:mt-[100px] ">
        <div className="flex flex-col justify-center items-center text-center md:flex-row pt-[30px] md:justify-between    ">
          <div className="md:order-2">
              <img src="img/foto.svg" alt="" className="rounded-full size-[200px]" />
              </div>
              <div className="  pt-[30px] md:order-1  md:text-start ">
            <div>
          <h1 className=" text-[30px]">
            Hi, Iam Reno
        </h1>
        </div>
        <div className="">
            <span style={{fontWeight:'bold', color:'#facc15', fontSize:'27px'}}>
              {text}
              <Cursor cursorColor="#facc15" cursorStyle="|" />
            </span>
            </div>
            <div className="mt-2 max-w-[210px] md:max-w-[300px] lg:max-w-[450px] ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci consectetur, omnis labore architecto accusamus!</p>
            </div>

            <div className="mt-4 md:mt-5">
              <Link href={'/'}>
              <Button>Download Resume</Button>
              </Link>
            </div>
          </div>


            </div>
         
          
        </div>
        </div>
    </>
  )
}

export default Hero