import activity from '../assets/squad-icons/activity.svg';
import { Button } from './ui/button';
import ActivityFeed from './ActivityFeed';
import { useSelector } from "react-redux";

const ActivityFeedDisplay = () => {

  const taskInfo = useSelector((state) => state.taskReducer);
  console.log('taskInfo in activityFeed', taskInfo);
  // const tasks = taskInfo.tasks.filter(task => !task.daily_challenge);
  const completed = taskInfo.completed_tasks;

  return (
    <div className="border border-gray-200 shadow-md row-span-3 rounded-md bg-white">
      <div className='flex p-2'>
        <img src={activity} alt="heko" className='h-6 w-6 mr-2 ' />
        <h3 className='font-semibold'>Activity Feed</h3>
        {/* hi grant hi yosuke */}
      </div>
      <div className='grid grid-cols-1'>
        {completed.map((el) => {
          return <ActivityFeed points={el.points} title={el.name}/>
        })}
        {/* <ActivityFeed/>
        <ActivityFeed/>
        <ActivityFeed/>
        <ActivityFeed/> */}
      </div>   
    </div>
  );
};
export default ActivityFeedDisplay;