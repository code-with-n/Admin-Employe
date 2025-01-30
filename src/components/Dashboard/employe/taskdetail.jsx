import style from "./employe.module.css";
import TaskBox from "./taskBox";

const TaskDetail = () => {
  // const empName = JSON.parse(localStorage.getItem("loggedInUser"));
  // const newEmploye = JSON.parse(localStorage.getItem("employes"))
  // // const data = empName.data;
  // console.log(newEmploye)

  // const data = newEmploye.map((emp)=>{
  //   if (emp.name==empName.data.name) {
  //     return emp;
  //   }
  // })
  const empName = JSON.parse(localStorage.getItem("loggedInUser")) 
  const newEmploye = JSON.parse(localStorage.getItem("employes")) 

  const data = newEmploye.find((emp) => emp.name === empName.data?.name);

  console.log(data);

  console.log(data);

  return (
    <>
      <div className={style.taskDetail}>
        {data.tasks?.map((task, idx) => (
          <TaskBox task={task} key={idx} />
        ))}
        {/* <TaskBox/>
        <TaskBox/>
        <TaskBox/> */}
      </div>
    </>
  );
};

export default TaskDetail;
