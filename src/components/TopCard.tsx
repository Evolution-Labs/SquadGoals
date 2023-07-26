import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

{/* <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>; */}



const TopCard = ({name, image, points}) => {
  return (
    <div className="grid grid-cols-1 border border-gray-200 p-4 rounded-md shadow-md bg-white">
      <div className='flex justify-between items-center'>
        <h5 className='font-medium'>{name}</h5>
        {image ? <img src={image} className='h-[32px] w-[32px]' alt="" /> : <Avatar className='h-[32px] w-[32px]'>
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>  }
      </div>
      <h2 className='font-bold text-xl'>{points}</h2>
    </div>
  );
};
export default TopCard;