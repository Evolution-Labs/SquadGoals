import activity from '../assets/squad-icons/activity.svg';
import { Button } from './ui/button';
import ActivityFeed from './ActivityFeed';

const ActivityFeedDisplay = () => {
  return (
    <div className="border border-gray-200 shadow-md  row-span-3 rounded-md">
      <div className='flex p-2'>
        <img src={activity} alt="heko" className='h-6 w-6 mr-2 ' />
        <h3 className='font-semibold'>Activity Feed</h3>
      </div>
      <div className='grid grid-cols-1'>
        <ActivityFeed/>
        <ActivityFeed/>
        <ActivityFeed/>
        <ActivityFeed/>
      </div>   
    </div>
  );
};
export default ActivityFeedDisplay;