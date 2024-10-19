"use client";

import { userViewerToken } from "@/hooks/use-viewer-token";
import { User } from "@clerk/nextjs/server";
import { Stream } from "stream";

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  user, stream, isFollowing
}: StreamPlayerProps) => {
  const {
    token,
    name, 
    identity
  } = userViewerToken(user.id);

  if(!token || !name || !identity){
    return (
      <div>
        Cannot watch the stream
      </div>
    )
  }

  return (
    <div>
      Allowed to watch the stream
    </div>
  )
}