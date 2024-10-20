import React from 'react'
import { Wrapper } from './wrapper'
import Toggle, { ToggleSkeleton } from './toggle'
import { Recommended, RecommendedSkeleton } from './recommended'
import { getRecommended } from '@/lib/recommended-service'
import { getFollewedUser } from '@/lib/follow-service'
import { Following, FollowingSkeleton } from './following'

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollewedUser();

  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0'>
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  )
}

export const SidebarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-bgDarkSecondary border-r border-[#2D2E35]'>
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  )
}