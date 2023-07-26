import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';



const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);

  function changeComponent (): void {
    // console.log('change components');
    setIsLogin(!isLogin);
  }
  
  
  return (
    <div className='landing'>
      { isLogin ? <Signup changeComponent={changeComponent}/> : <Login changeComponent={changeComponent}/> }
    </div>
  );
};
export default Landing;