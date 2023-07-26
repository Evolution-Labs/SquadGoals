import Navbar from '@/components/Navbar';
import Squad from '@/components/Squad';
import TopCardDisplay from '@/components/TopCardDisplay';
import ActivityFeedDisplay from '@/components/ActivityFeedDisplay';
import DailyDisplay from '@/components/DailyDisplay';
import TasksDisplay from '@/components/TasksDisplay';

const Feed = () => {
  return (
    <div className="border border-red-500 w-full bg-white feed-container">
      <Navbar/>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 h-full">
        <div className="left m-4 col-span-1 border-2 border-green-500 h-full grid grid-rows-5 gap-3 p-2">
          <Squad/> 
          <ActivityFeedDisplay/>  
        </div>
        <div className="right mt-4 mr-4 col-span-2 border-4 border-indigo-500 h-full grid grid-rows-5p-2">
         <TopCardDisplay />
          <DailyDisplay />
          <TasksDisplay /> 

        </div>
      </div>
    </div>
  );
};

export default Feed;