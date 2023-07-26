import React from 'react';
import TopCard from './TopCard';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs';

const TopCardDisplay = () => {
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
        <TopCard/>
        <TopCard/>
        <TopCard/>
      </div>
    </div>
  );
};

export default TopCardDisplay;