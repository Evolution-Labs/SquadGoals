import award from '../assets/squad-icons/award.svg';
import users from '../assets/squad-icons/users.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

{/* <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>; */}



const TopCard = () => {
  return (
    <div className="h-20 grid grid-cols-1 border border-gray-200 p-2 rounded-md shadow-md">
      <div className='flex justify-between'>
        <h5 className='font-medium'>Team Points</h5>
        <img src={award} className='h-6 w-6' alt="" />
      </div>
      <h2 className='font-medium'>143</h2>
    </div>
  );
};
export default TopCard;