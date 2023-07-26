import { Button } from "@/components/ui/button"
import Task from './Task';


const TasksDisplay = () => {
  return (
    <div className='h-[80%] flex flex-col gap-2 0'>
      <div className=' w-full flex justify-between items-center font-bold text-xl'>
        Tasks
        <Button>Create Task</Button>
      </div>
      <div className='task-container'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};
export default TasksDisplay;