import DailyIcon from '../assets/squad-icons/daily.svg';
import { Button } from './ui/button';
import DailyChallenge from './DailyChallenge';
import { useSelector } from 'react-redux';
import CreateTask from './CreateTask';
import { useEffect, useState } from 'react'

const DailyDisplay = () => {
  const [tasks, setTasks] = useState([]);
  const taskInfo = useSelector((state) => state.taskReducer);
  console.log('i am in daily display', taskInfo);
  // const tasks = taskInfo.tasks.filter(task => task.daily_challenge && !taskInfo.current_completed.includes(task.name));
  useEffect(() => {
    setTasks(taskInfo.tasks.filter(task => task.daily_challenge));
  }, [taskInfo]);
  // setTasks(taskInfo.tasks.filter(task => task.daily_challenge && !taskInfo.current_completed.includes(task.name)));
    //to remove daily challenges

  return (
    <div className='border border-gray-200 shadow-md rounded-md mb-4 bg-white '>
      <div className='flex justify-between p-2 row-span-1 mb-2'>
        <div className='flex items-center'>
          <img src={DailyIcon} alt="heko" className='h-[32px] w-[32px]' />
          <h3 className='font-semibold ml-2'>Daily Challenges</h3>
        </div>
        <CreateTask isDailyChallenge={true}/>
        {/* <Button variant="outline" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </Button> */}
      </div>
      <div className='overflow-hidden'>
        {tasks.map(task =><DailyChallenge _id={task._id} name={task.name} points={task.points} />)}
      </div>
    </div>
  );
};
export default DailyDisplay;