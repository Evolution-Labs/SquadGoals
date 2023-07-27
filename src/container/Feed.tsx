import Navbar from '@/components/Navbar';
import Squad from '@/components/Squad';
import TopCardDisplay from '@/components/TopCardDisplay';
import ActivityFeedDisplay from '@/components/ActivityFeedDisplay';
import DailyDisplay from '@/components/DailyDisplay';
import TasksDisplay from '@/components/TasksDisplay';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../actions/actions';
// {
//   "getSquad": {
//       "_id": 1,
//       "name": "Cohort 58",
//       "description": "A big ole barrel of bakas",
//       "squad_key": "sussybaka",
//       "created_at": "2023-07-26T03:47:49.057Z",
//       "updated_at": null,
//       "deleted_at": null
//   },
//   "getUsers": {
//       "_id": 1,
//       "first_name": "Kasey",
//       "last_name": "Nguyen"
//   },
//   "getTasks": [
//       {
//           "_id": 1,
//           "name": "Touch Grass",
//           "points": 5,
//           "squad_id": 1,
//           "daily_challenge": true,
//           "created_at": "2023-07-25T20:58:22.000Z",
//           "updated_at": null,
//           "deleted_at": null
//       }
//   ],
//   "getCompletedTasks": [
//       {
//           "_id": 1,
//           "name": "Touch Grass",
//           "points": 5,
//           "squad_id": 1,
//           "daily_challenge": true,
//           "created_at": "2023-07-25T21:02:42.000Z",
//           "updated_at": null,
//           "deleted_at": null,
//           "task_id": 1,
//           "user_id": 1
//       }
//   ],
//   "getUserPoints": 0,
//   "getSquadPoints": 5
// }

const Feed = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userReducer);
  const squadInfo = useSelector((state) => state.squadReducer);
  const taskInfo = useSelector((state) => state.taskReducer);
  const fetchData = async () => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({squad_id:1})
      });
      if(response.ok) {
        const data = await response.json();
        const { getSquad } = data.dashboardData;
        dispatch(actions.setSquadActionCreator({ name: getSquad.name, description: getSquad.description, squad_key: getSquad.squad_key, points: data.dashboardData.getSquadPoints,members:data.dashboardData.getUsers.length }));
        dispatch(actions.setUserActionCreator({ points:data.dashboardData.getUserPoints,first_name:userInfo.first_name, last_name:userInfo.last_name })); 
        const nameTasks = data.dashboardData.getCompletedTasks.map(task=>task.name); // Array of names
        dispatch(actions.setTaskActionCreator({ tasks: data.dashboardData.getTasks, completed_tasks: data.dashboardData.getCompletedTasks}));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="border rounded-lg border-slate-200 overflow-hidden bg-slate-50 w-full h-full pb-24">
      <Navbar/>

      <div className='flex p-4 h-full overflow-y-scroll'>
        <div className='w-[40%] mx-2 sticky top-0'> 
          <Squad/> 
          <ActivityFeedDisplay/>  
        </div>

        <div className='w-[60%] mx-2'> 
          <TopCardDisplay />
          <DailyDisplay />
          <TasksDisplay /> 
        </div>
      </div>

    </div>

  );
};

export default Feed;