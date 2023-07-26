import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <div className="navbar border border-gray-200 shadow-md">
      <div className="navbar-container mx-4">
        <div className="nav-section justify-start">
          <div className="profile-image">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
            @username
        </div>
        <div className="nav-section justify-center">
          Dashboard Leaderboard
        </div>
        <div className="nav-section justify-end">
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