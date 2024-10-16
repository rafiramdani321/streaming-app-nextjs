import React from 'react'
import { Poppins } from "next/font/google"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="flex lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className='bg-bgYellowPrimary rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink'>
          <Image
            src="/game.svg"
            alt='StreamApp'
            height='32'
            width='32'
          />
        </div>
        <div className={
          cn("hidden lg:block", font.className)
        }
        >
          <p className='text-lg text-textLightPrimary font-semibold'>
            StreamApp
          </p>
          <p className='text-xs text-muted-foreground'>
            Creator Dashboard
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Logo