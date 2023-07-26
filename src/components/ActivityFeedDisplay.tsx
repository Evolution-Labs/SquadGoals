import HeartIcon from '../assets/squad-icons/heart.svg';
import { Button } from './ui/button';
import ActivityFeed from './ActivityFeed';
import { useSelector } from "react-redux";

const ActivityFeedDisplay = () => {

  const taskInfo = useSelector((state) => state.taskReducer);
  console.log('taskInfo in activityFeed', taskInfo);
  // const tasks = taskInfo.tasks.filter(task => !task.daily_challenge);
  const completed = taskInfo.completed_tasks;
  return (
    <div className="border border-gray-200 shadow-md rounded-md bg-white max-h-[500px] overflow-hidden overflow-y-scroll px-4">
      <div className='flex items-center mb-2 sticky top-0 bg-white z-[1] py-2'>
        <img src={HeartIcon} alt="heko" className='h-[40px] w-[40px] mr-4' />
        <h3 className='font-semibold'>Activity Feed</h3>
        {/* hi grant hi yosuke */}
      </div>
      <div className='grid grid-cols-1'>
        {completed.map((el) => {
          return <ActivityFeed points={el.points} title={el.name} time={el.created_at}/>;
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