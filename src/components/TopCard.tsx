import award from '../assets/squad-icons/award.svg';
import users from '../assets/squad-icons/users.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

{/* <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>; */}



const TopCard = ({name,image,points}) => {
  return (
    <div className="h-20 grid grid-cols-1 border border-gray-200 p-2 rounded-md shadow-md bg-white">
      <div className='flex justify-between'>
        <h5 className='font-medium'>{name}</h5>
        {image ? <img src={image} className='h-6 w-6' alt="" /> : <Avatar className='h-6 w-6'>
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>  }
      </div>
      <h2 className='font-medium'>{points}</h2>
    </div>
  );
};
export default TopCard;