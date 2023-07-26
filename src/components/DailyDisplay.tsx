import zap from '../assets/squad-icons/zap.svg';
import { Button } from './ui/button';
import DailyChallenge from './DailyChallenge';
import { useSelector } from 'react-redux';

const DailyDisplay = () => {
  const taskInfo = useSelector((state) => state.taskReducer);
  const tasks = taskInfo.tasks.filter(task => task.daily_challenge);

  return (
    <div className='border border-gray-200 shadow-md rounded-md mb-4 bg-white h-[400px]'>
      <div className='flex justify-between p-2 row-span-1 mb-2'>
        <div className='flex items-center'>
          <img src={zap} alt="heko" className='h-6 w-6' />
          <h3 className='font-semibold ml-2'>Daily Challenges</h3>
        </div>
        <Button variant="outline" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </Button>
      </div>
      <div className=' overflow-y-scroll no-scrollbar'>
        {tasks.map(task=><DailyChallenge key={task._id} name={task.name} points={task.points} />)}
      </div>
    </div>
  );
};
export default DailyDisplay;