import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



const ActivityFeed = () => {
  return (
    <div className='grid grid-cols-1 p-2'>

      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className='text-xs ml-2'>@vkpatel007 <span>logged</span> +5 points. <span>Completed</span> Two-Sum Algorithm in 0(n) Time Complexity</h4>
      </div>
      <div className='flex justify-end p-2'>
        <h4 className='text-xs text-gray-500'>5 mins ago</h4>
      </div>
      <div className='h-px bg-gray-200'></div>
    </div>
  );
};
export default ActivityFeed;