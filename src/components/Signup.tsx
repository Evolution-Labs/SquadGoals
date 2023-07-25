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

const Signup = ({changeComponent}) => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [password2,setPassword2] = useState('');

  const formSubmission = async (event)=>{
    event.preventDefault();
    if(password !== password2){
      return alert('BAKA! Passwords Do Not Match!!');
    }
    const body = {email,password,first_name:firstName,last_name:lastName};
    console.log('i am body',body);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      if(response.ok){
        changeComponent();
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <Card className="w-[100%]">
        <form onSubmit={formSubmission}>
          <CardHeader className="text-center">
            <CardTitle>Squad Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input onChange={e=>setFirstName(e.target.value)} id="first_name" type="text" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input onChange={e=>setLastName(e.target.value)} id="last_name" type="text" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input onChange={e=>setEmail(e.target.value)} id="email" type="email" placeholder="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input onChange={e=>setPassword(e.target.value)} id="password" type="password" placeholder="*****" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password2">Confirm Password</Label>
                <Input onChange={e=>setPassword2(e.target.value)} id="password2" type="password" placeholder="*****" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={changeComponent} variant="outline">Cancel</Button>
            <Button type="submit">Sign up</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};
export default Signup;