import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import astronaut from '../assets/astronaut_moon.png'
import { useToast } from '@/components/ui/use-toast';

const Login = ({changeComponent}) => {
  //setting username and password
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  
  //setting toast
  const { toast } = useToast();
  
  //setting navigate
  const navigate = useNavigate();

  //form submission function for login
  const formSubmission = async (event)=>{
    event.preventDefault();
    const body = {email,password};
    toast({
      description: 'Successful Signin',
    });
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if(response.ok){
        
        navigate('/feed', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <>
      <Card className="w-[100%]">
        <form onSubmit={formSubmission}>
          <CardHeader className="text-center flex flex-col justify-center">
            <CardTitle className='text-xl'>Squad Goals</CardTitle>
            <img src={astronaut} className='w-12 h-18 m-auto' alt="astronaut on moon" />
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input onChange={e=>setEmail(e.target.value)} id="email" type="email" placeholder="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input onChange={e=>setPassword(e.target.value)} id="password" type="password" placeholder="*****" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-2">    
            <Button type="submit">Login</Button>
            <Button onClick={changeComponent}>Sign up</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};
export default Login;