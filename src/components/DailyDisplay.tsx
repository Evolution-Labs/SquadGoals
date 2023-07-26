import zap from '../assets/squad-icons/zap.svg';
import { Button } from './ui/button';
import DailyChallenge from './DailyChallenge';

const DailyDisplay = () => {
  return (
    <div className='row-span-1 border border-primary grid grid-rows-5 rounded-md'>
      <div className='flex justify-between p-2 row-span-1'>
        <div className='flex'>
          <img src={zap} alt="heko" className='h-6 w-6 ' />
          <h3 className='font-semibold ml-2'>Daily Challenges</h3>
        </div>
        <Button variant="outline" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </Button>
      </div>
      <DailyChallenge />
      <DailyChallenge />
    </div>
  );
};
export default DailyDisplay;