import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Task = () => {
  return (
    // <Card className="w-[250px] h-[140px]">
    <Card className="task">
      <CardHeader>
        <CardTitle>Task name</CardTitle>
        <CardDescription>Issued by @Username</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline">+5 points</Button>
        <Button>Log Task</Button>
      </CardFooter>
  </Card>
  );
};
export default Task;