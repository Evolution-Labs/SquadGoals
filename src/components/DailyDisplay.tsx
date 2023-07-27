import DailyIcon from '../assets/squad-icons/daily.svg';
import { Button } from './ui/button';
import DailyChallenge from './DailyChallenge';
import { useSelector } from 'react-redux';
import CreateTask from './CreateTask';
import { useEffect, useState } from 'react'

const DailyDisplay = () => {
  const [tasks, setTasks] = useState([]);
  const taskInfo = useSelector((state) => state.taskReducer);
  useEffect(() => {
    setTasks(taskInfo.tasks.filter(task => task.daily_challenge));
  }, [taskInfo]);

  return (
    <div className='border border-gray-200 shadow-md rounded-md mb-4 bg-white '>
      <div className='flex justify-between p-2 row-span-1 mb-2'>
        <div className='flex items-center'>
          <img src={DailyIcon} alt="heko" className='h-[32px] w-[32px]' />
          <h3 className='font-semibold ml-2'>Daily Challenges</h3>
        </div>
        <CreateTask isDailyChallenge={true}/>
      </div>
      <div className='overflow-hidden'>
        {tasks.map((task,i) =><DailyChallenge key={i} _id={task._id} name={task.name} points={task.points} />)}
      </div>
    </div>
  );
};
export default DailyDisplay;