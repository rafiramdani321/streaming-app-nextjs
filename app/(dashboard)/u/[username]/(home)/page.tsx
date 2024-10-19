import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";

interface CreatorPageProps {
  params: {
    username: string;
  }
}

const CreatorPage = async ({
  params
}: CreatorPageProps) => {
  const exxternalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if(!user || user.externalUserId !== exxternalUser?.id || !user.stream) {
    throw new Error("Unauathorized");
  }

  return (
    <div className="h-full">
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing
      />
    </div>
  )
}

export default CreatorPage