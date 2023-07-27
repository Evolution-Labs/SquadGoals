import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const Task = ({ title, _id, points }) => {
  const dispatch = useDispatch();

  const taskInfo = useSelector((state) => state.taskReducer);
  const task = taskInfo.tasks.filter(task => task._id === _id);
  const completeDaily = (e)=>{
    e.preventDefault();
    dispatch(actions.addSquadPointsActionCreator({ points }));
    dispatch(actions.setUserPointsActionCreator({ points }));
    dispatch(actions.addCompletedTaskActionCreator({ logTask: task[0] }));
  };
  return (
    <div className='bg-white p-4 border rounded-lg w-full my-2 flex items-center'>
      <div className='font-medium text-base w-full'>{title}</div>
      <Button className="bg-slate-100 min-w-[100px] border shadow-none text-black text-sm p-2 mr-4 hover:bg-slate-100">+{points} points</Button>
      <Button onClick={completeDaily} className="bg-white border text-black min-w-[100px] text-sm p-2 hover:bg-slate-100">Log Task</Button>
    </div>
  );
};
export default Task;