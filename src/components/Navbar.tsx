import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {useSelector, useDispatch} from 'react-redux';

const Navbar = () => {

  const userInfo = useSelector((state)=>state.userReducer);
  const username = 'Konnichiwa ' + userInfo.first_name;
  // useEffect(() => {
  // }, []);
  
  return (
    <div className="p-2 border border-gray-200 shadow-md bg-white z-[2] sticky top-0 w-full">
      <div className="flex items-center justify-between w-full mx-4">
        <div className='flex items-center'>
          <div className="mr-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          {username}
        </div>
        <div className='font-medium'>
          Dashboard
        </div>
        <div className="justify-items-end mr-[32px]">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Squad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cohort 58">Cohort 58</SelectItem>
              <SelectItem value="Onsen Bros">Onsen Bros</SelectItem>
              <SelectItem value="Barbie babes">Barbie babes</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  );
};
export default Navbar;