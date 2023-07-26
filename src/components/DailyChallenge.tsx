import { Button } from './ui/button';



const DailyChallenge = () => {
  return (
    <div className="grid grid-cols-1 px-2 row-span-2">
      <div className="flex justify-between items-center">
        <h5 className='font-medium'>Complete Two-Sum Algorithm in O(N) Time Complexity</h5>
        <div className='grid grid-cols-2 gap-2'>
          <Button className='bg-gray-200 text-black hover:bg-gray-300'>+5 points</Button>
          <Button className='bg-white text-black hover:bg-gray-100'>Mark Done</Button>
        </div>
      </div>
      <h5 className="text-sm text-gray-400 font-normal">Issued by @vkpatel007</h5>
      <div className='h-px bg-gray-200'></div>
    </div>
  );
};
export default DailyChallenge;