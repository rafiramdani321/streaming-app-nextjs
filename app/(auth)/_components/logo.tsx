import React from 'react'
import { Poppins } from "next/font/google"
import Image from 'next/image'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

const Logo = () => {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <div className='bg-bgYellowPrimary rounded-full p-1'>
        <Image
          src="/game.svg"
          alt="logo"
          height="80"
          width="80"
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className={"text-xl text-textLightPrimary font-semibold"}>
          StreamApp
        </p>
      </div>
    </div>
  )
}

export default Logo