import { Button } from './ui/button';



const DailyChallenge = ({points,key,name}) => {
  return (
    <div className="flex flex-col px-4 py-2 mb-2">
      <div className="flex justify-between items-center">
        <h5 className='font-medium'>{name}</h5>
        <div className='flex'>
          <Button className='bg-slate-100 border shadow-none text-black text-sm p-2 mr-4 hover:bg-slate-100'>+{points} points</Button>
          <Button className='bg-white text-black text-sm p-2 hover:bg-slate-100'>Mark Done</Button>
        </div>
      </div>
      <div className='h-px bg-gray-200 mt-4'></div>
    </div>
  );
};
export default DailyChallenge;