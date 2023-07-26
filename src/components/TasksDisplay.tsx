import { Button } from "@/components/ui/button"
import Task from './Task';


const TasksDisplay = () => {
  return (
    <div className='row-span-3 flex flex-col gap-2 border border-blue-500'>
      <div className='border border-green-500 w-full flex justify-between items-center'>
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
      </div>
    </div>
  );
};
export default TasksDisplay;