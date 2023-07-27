import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const ActivityFeed = ({ title, points, time }) => {
  return (
    <div className='grid grid-cols-1 p-2'>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://clipart-library.com/img1/1041778.png"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className='text-sm ml-2'>@Someone in your squad <span>logged</span> +{points} points. <span>Completed</span> {title}</h4>
      </div>
      <div className='flex justify-end p-2'>
        <h4 className='text-sm text-gray-500'>{time}</h4>
      </div>
      <div className='h-px bg-gray-200'></div>
    </div>
  );
};

export default ActivityFeed;