import { Button } from "@/components/ui/button"
import Task from './Task';
import { useSelector } from "react-redux";





const TasksDisplay = () => {

  const taskInfo = useSelector((state) => state.taskReducer);
  const tasks = taskInfo.tasks.filter(task => !task.daily_challenge);
  console.log('tasks in tasks display', tasks);

  return (
    <div className='h-[80%] flex flex-col gap-2 0'>
      <div className=' w-full flex justify-between items-center font-bold text-xl mb-4'>
        Tasks
        <Button>Create Task</Button>
      </div>
      <div className='h-full flex flex-wrap overflow-y-scroll no-scrollbar'>
        {tasks.map((el) => {
          return <Task title={el.name} points={el.points}/>
        })}
        {/* <Task title={'win at life'}/>
        <Task title={'win at life'}/>
        <Task title={'win at life'}/>
        <Task title={'win at life'}/>
        <Task title={'win at life'}/>
        <Task title={'win at life'}/>
        <Task title={'win at life'}/>
        <Task title={'win at life'}/> */}
      </div>
    </div>
  );
};
export default TasksDisplay;