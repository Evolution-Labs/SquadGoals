import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Task = ({title, points}) => {
  console.log('title in task', title);
  return (
    // <Card className="w-[250px] h-[140px]">
    <div className='bg-white p-2 border rounded-lg w-full drop-shadow m-[8px]'>
      <div className='font-bold text-base mb-4'>{title}</div>
      <div className='flex justify-end'>
        <Button className="bg-slate-100 border shadow-none text-black text-sm p-2 mr-4 hover:bg-slate-100">+{points} points</Button>
        <Button className="bg-white text-black text-sm p-2 hover:bg-slate-100">Log Task</Button>
      </div>
    </div>
  );
};
export default Task;