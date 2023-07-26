import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
 
const CreateTask = ({title, isDailyChallenge}) => {

  const [task, setTask] = useState('');
  const [points, setPoints] = useState(0);
  const { toast } = useToast();
  const dispatch = useDispatch();

  const createNewTask = async (event) => {
    event.preventDefault();
    console.log('clicked submit on task it up');

    const body = {name: task, points: points, daily_challenge: isDailyChallenge}
    // console.log('task', task, 'points', points)
    try {
      const newTask = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if (newTask.ok) {
        const data = await newTask.json();
        console.log(data);
        dispatch(actions.setTaskActionCreator({tasks: data.getTasks, completed_tasks: data.getCompletedTasks}));
      }
      // console.log(('newTask', newTask))
    } catch (error) {
      console.log(error);
    }
  };

  const buttonName = isDailyChallenge ? '+' : 'Create Task';
  const modalTitle = isDailyChallenge ? 'Create a daily task' : 'Create a task';

  return (

  //   <Button variant="outline" size="icon">
  //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  // </Button>

    <Dialog>
      <form onSubmit={createNewTask}>
        <DialogTrigger asChild>
          {isDailyChallenge ? <Button variant="outline" size="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    </Button>
          : <Button>{buttonName}</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription>
              Make a super sick task for your squad members to destroy!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task Name
              </Label>
              <Input id="task" onChange={e=>setTask(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="points" className="text-right">
                Points
              </Label>
              <Input id="points" onChange={e=>setPoints(e.target.value)} type='number' className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={createNewTask}>Task it up!</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};



export default CreateTask