import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

const Actions = () => {
  return (
    <div className='flex items-center justify-end gap-x-2'>
      <Button
        size="sm"
        variant="bgYellow"
        asChild
      >
        <Link href="/">
          <LogOut className='h-5 w-5 mr-2' />
          Exit
        </Link>
      </Button>
      <UserButton />
    </div>
  )
}

export default Actions