import TaskCard from '@/Components/TaskCard'
import {prisma} from '@/libs/prisma'

async function LoadTasks(){
    const res = await fetch('http://127.0.0.1/api/tasks')
  return await res.json()
}

export default async function HomePage (){
  const data = await LoadTasks()
  const tasks = data.Tasks
  console.log(tasks);
return(
  <section className='container mx-auto'>
    <div className='grid grid-cols-3 gap-3 mt-10'>
      {tasks.map((task)=>(
        <TaskCard task = {task} key={task.id}/>
      ))}
    </div>
  </section>
)}