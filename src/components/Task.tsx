import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Task = () => {
  return (
    // <Card className="w-[250px] h-[140px]">
    <div className='task'>
      <div className='task-title'>Task title</div>
      <div><span>Issued by @Username</span></div>
      <div className='task-button-container'>
        <Button className="task-button-point">+5 points</Button>
        <Button className="task-button-log">Log Task</Button>
      </div>
    </div>
  );
};
export default Task;