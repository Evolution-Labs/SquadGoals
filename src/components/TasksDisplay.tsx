import { Button } from '@/components/ui/button';
import Task from './Task';
import CreateTask from './CreateTask';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useState } from 'react';




const TasksDisplay = () => {

  // const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState([]);

  const taskInfo = useSelector((state) => state.taskReducer);
  // const tasks = taskInfo.tasks.filter(task => !task.daily_challenge);
  // let tasks;
  console.log('tasks in tasks display', tasks);
  useEffect(() => {
    setTasks(taskInfo.tasks.filter(task => !task.daily_challenge));
  }, [taskInfo.tasks]);
  // const createTask = () => {

  // };
  console.log('tasks', tasks);

  return (
    <div className='flex flex-col gap-2 bg-white border p-4'>
      <div className='w-full flex justify-between items-center font-bold text-xl'>
        Tasks
        <CreateTask isDailyChallenge={false}/>
      </div>
      <div className='flex flex-wrap shadow-md rounded-md'>
        {tasks.map((el) => {
          return <Task title={el.name} _id={el._id} points={el.points}/>;
        })}
      </div>
      
    </div>
  );
};
export default TasksDisplay;