import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';

const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);

  console.log(`
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⣤⡄⠀⠀⠀⠀⣀⣤⢀⣿⣿⣿⣿⣿⣿⡀⣤⣀⠠⠄⢀⣤⣄⠀⠀⠀⠀
  ⠀⠀⠀⢹⠁⠀⠀⣠⣾⣿⠿⠸⠿⠟⠛⠛⠻⠿⠇⠿⣿⣷⣄⠘⠿⠿⠀⠀⠀⠀
  ⠀⠀⠀⢸⠀⠀⣴⡿⠁⣠⣶⡶⠒⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣦⠀⠶⡀⠀⠀⠀
  ⠀⠀⠀⢀⠀⣸⡟⠀⣾⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣇⠀⡀⠀⠀⠀
  ⠀⠀⣸⡏⢠⣿⠁⢸⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄⢹⣇⠀⠀
  ⠀⠀⣿⡇⢸⡏⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⢸⣿⠀⠀
  ⠀⠘⢿⡇⢸⣧⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⢸⡿⠃⠀
  ⠀⠀⠀⠁⠸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠇⠈⠀⠀⠀
  ⠀⠀⠀⠀⠀⠻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠙⢿⣷⣤⣀⣀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣾⡿⠋⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢼⣷⣤⣈⠙⠛⠿⠿⠿⣿⣿⠿⠿⠿⠛⠋⣁⣤⣾⡧⠀⠀⠀⠀⠀
  ⠀⠀⣠⣴⣷⣦⣈⠙⠛⠿⢷⣶⡆⢠⣤⣤⡄⢰⣶⡾⠿⠛⠋⣁⣴⣾⣦⣄⠀⠀
  ⠀⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣤⣤⣈⣉⣉⣁⣤⣤⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⠀
  ⠀⠛⠛⠃⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠘⠛⠛⠀
  `);

  function changeComponent (): void {
    setIsLogin(!isLogin);
  }
  //squad goals console.log logo

  
  return (
    <div className='landing'>
      { isLogin ? <Signup changeComponent={changeComponent}/> : <Login changeComponent={changeComponent}/> }
    </div>
  );
};
export default Landing;