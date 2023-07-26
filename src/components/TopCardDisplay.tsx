import React from 'react';
import TopCard from './TopCard';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs';
import award from '../assets/squad-icons/award.svg';
import users from '../assets/squad-icons/users.svg';
import {useSelector} from 'react-redux';

const TopCardDisplay = () => {
  const userInfo = useSelector((state) => state.userReducer);
  const squadInfo = useSelector((state) => state.squadReducer);

  return (
    <div className='grid grid-rows-3'>
      <div className="row-span-1 flex justify-end mb-2">
        <Tabs defaultValue="account" className="w-34">
          <TabsList className="grid w-34 grid-cols-2">
            <TabsTrigger value="account">Daily</TabsTrigger>
            <TabsTrigger value="password">Weekly</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className='row-span-2 grid grid-cols-3 gap-2'>
        <TopCard name={'Team Points'}  image={award} points={squadInfo.points}/>
        <TopCard name={'Team Members'}  image={users} points={squadInfo.members}/>
        <TopCard name={'User Points'} points={userInfo.points}/>
      </div>
    </div>
  );
};

export default TopCardDisplay;