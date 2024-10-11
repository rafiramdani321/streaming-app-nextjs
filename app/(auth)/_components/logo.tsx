import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
      <div className={cn("flex flex-col items-center")}>
        <p className={"text-xl text-textLightPrimary font-semibold"}>
          StreamApp
        </p>
      </div>
    </div>
  )
}

export default Logo