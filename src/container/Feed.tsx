import Navbar from '@/components/Navbar';
import Squad from '@/components/Squad';
import TopCardDisplay from '@/components/TopCardDisplay';
import ActivityFeedDisplay from '@/components/ActivityFeedDisplay';
import DailyDisplay from '@/components/DailyDisplay';
import TasksDisplay from '@/components/TasksDisplay';
import { useEffect } from 'react';



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