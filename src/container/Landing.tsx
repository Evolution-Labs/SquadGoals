import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';



const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  function changeComponent ():void {
    console.log('change componenets');
    setIsLogin(!isLogin);
  }
  
  
  return (
    <div className='landing'>
      { isLogin ? <Signup changeComponent={changeComponent}/> : <Login changeComponent={changeComponent}/> }
    </div>
  );
};
export default Landing;