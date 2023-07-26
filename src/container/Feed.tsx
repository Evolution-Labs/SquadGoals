import Navbar from '@/components/Navbar';
import Squad from '@/components/Squad';
import TopCardDisplay from '@/components/TopCardDisplay';
import ActivityFeedDisplay from '@/components/ActivityFeedDisplay';
import DailyDisplay from '@/components/DailyDisplay';
import TasksDisplay from '@/components/TasksDisplay';
import { useEffect } from 'react';

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

  const fetchData = async ()=>{
    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({squad_id:1})
      });
      if(response.ok){
        const data = await response.json();
        console.log('i am the data inside of feed me',data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className="border border-red-500 w-full bg-white feed-container">
      <Navbar/>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 h-full">
        <div className="left m-4 col-span-1 h-full grid gap-3 p-2">
          <Squad/> 
          <ActivityFeedDisplay/>  
        </div>
        <div className="right mt-4 mr-4 col-span-2  grid p-2">
          <TopCardDisplay />
          <DailyDisplay />
          <TasksDisplay /> 
        </div>
      </div>
    </div>
  );
};

export default Feed;