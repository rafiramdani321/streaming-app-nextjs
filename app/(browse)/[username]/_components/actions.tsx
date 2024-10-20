"use client"

import { onBlock, onUnblock } from "@/actions/block"
import { onFollow, onUnfollow } from "@/actions/follow"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import { toast } from "sonner"

interface ActionsProps {
  isFollowing: boolean
  userId: string
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  
  const onClick = () => isFollowing ? handleUnfollow() : handleFollow();
  
  const handleBlock = () => {
    startTransition(() => {

      // handle block
      onBlock(userId)
      .then((data) => toast.success(`Block the user ${data.blocked.username}`))
      .catch(() => toast.error("Something went wrong"))

      // handle unblock
      // onUnblock(userId)
      // .then((data) => toast.success(`Unblock the user ${data.blocked.username}`))
      // .catch(() => toast.error("Something went wrong"))
    })
  } 

  return (
    <>
      <Button 
        disabled={isPending} 
        onClick={onClick} variant="bgYellow"
      >
        { isFollowing ? "Unfollow" : "Follow" }
      </Button>
      <Button onClick={handleBlock} disabled={isPending}>
        Block
      </Button>
    </>
  )
}