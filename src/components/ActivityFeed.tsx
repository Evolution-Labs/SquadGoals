import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



const ActivityFeed = ({title, points}) => {
  return (
    <div className='grid grid-cols-1 p-2'>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className='text-xs ml-2'>@Someone in your squad <span>logged</span> +{points} points. <span>Completed</span> {title}</h4>
      </div>
      <div className='flex justify-end p-2'>
        <h4 className='text-xs text-gray-500'>5 mins ago</h4>
      </div>
      <div className='h-px bg-gray-200'></div>
    </div>
  );
};
export default ActivityFeed;