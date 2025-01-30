import style from "./employe.module.css";
import TaskBox from "./taskBox";

const TaskDetail = () => {
  const empName = JSON.parse(localStorage.getItem("loggedInUser"));
  const data = empName.data;
  
  return (
    <>
      <div className={style.taskDetail}>
       {data.tasks.map((task,idx)=>(
        
        <TaskBox task={task} key={idx}/>
       ))}
        {/* <TaskBox/>
        <TaskBox/>
        <TaskBox/> */}

      </div>
    </>
  );
};

export default TaskDetail;
