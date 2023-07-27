import { Button } from './ui/button';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const DailyChallenge = ({ points, _id, name }) => {
  const dispatch = useDispatch();
  const taskInfo = useSelector((state) => state.taskReducer);
  const task = taskInfo.tasks.filter(task => task._id === _id);

  const logCompleted = async (task_id) => {
    try {
      const response = await fetch('/api/logTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task_id: task_id })
      });
      if (response.ok){
        const data = await response.json();
        const logTask = data.logTask;
        const message = data.message;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const completeDaily = (e)=>{
    e.preventDefault();
    logCompleted(task[0]._id);
    dispatch(actions.addSquadPointsActionCreator({ points }));
    dispatch(actions.setUserPointsActionCreator({ points }));
    dispatch(actions.addCompletedTaskActionCreator({ logTask: task[0] }));
    dispatch(actions.setCurrentCompletedActionCreator({ completed: task[0].name }));
  };
  
  return (
    <div className="flex flex-col px-4 py-2 mb-2">
      <div className="flex justify-between items-center">
        <h5 className='font-medium'>{name}</h5>
        <div className='flex'>
          <Button  className='bg-slate-100 border shadow-none text-black text-sm p-2 mr-4 hover:bg-slate-100'>+{points} points</Button>
          <Button onClick={completeDaily} className='bg-white border text-black text-sm p-2 hover:bg-slate-100'>Log Task</Button>
        </div>
      </div>
      <div className='h-px bg-gray-200 mt-4'></div>
    </div>
  );
};
export default DailyChallenge;