import { useContext, useState } from "react";
import Greet from "../employe/greet";
import style from "./admin.module.css";
import WorkTable from "./workTable";
import { AuthContext } from "../../../context/authProvider";
const Admin = ({changeUser}) => {
  const { authData } = useContext(AuthContext);
  // console.log(employes)
  // console.log(data)
  console.log(authData.employe)
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign , setAssign] = useState("");
  const [category , setCategory] = useState("");
  const [description , setDiscription] = useState("");
  // const [newTask ,setNewTask] = useState({})
  
  const onHandle =()=>{
    // console.log(assign)
    const employes  = JSON.parse(localStorage.getItem('employes'))
    let val = true;
    // setNewTask()
    let task = {title,date,assign,category,description}
    let  getData = employes.map((data)=>{
      if (assign == data.name) {
        return {...data, tasks:[...data.tasks , task]}
      
      }else{
        val = false;
      }

      return data;
    })
    // if (val==false) {
    //   alert(`${assign} is not exist..`)
    //   alert('try nitesh ,vishal,subham ,aryan, akash')
    // }
    // console.log(updatedArr)
    localStorage.setItem("employes",JSON.stringify(getData))
    
    
    setTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDiscription("");
  }
  return (
    <>
      <div className={style.admin}>
        <Greet changeUser={changeUser} />
        <div className={style.createTaskBox}>
          <div className={style.inputes}>
            <div className={style.taskTitleInput}>
              <label htmlFor="taskinput">Task Title</label>
              <input type="text" id="taskinput" placeholder="make a web.."  value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className={style.dateAdd}>
              <label htmlFor="dateInput">Date</label>
              <input type="date" id="dateInput" value={date} onChange={(e)=>setDate(e.target.value)} />
            </div>

            <div className={style.assignTo}>
              <label htmlFor="assinTo">Assign To</label>
              <input type="name" name="" id="assingTo" placeholder="Ram..." value={assign.toLowerCase()} onChange={(e)=>setAssign(e.target.value)}/>
            </div>
            <div className={style.category}>
              <label htmlFor="category">Category</label>
              <input type="text" placeholder="dev,design,etc.." value={category} onChange={(e)=>setCategory(e.target.value)}/>
            </div>
          </div>
          <div className={style.discripBox}>
            <h5>Discription</h5>
            <textarea
              name="discri"
              id="discri"
              rows={8}
              cols={40}
              placeholder="write discription in 20 words.." value={discription} onChange={(e)=>setDiscription(e.target.value)}
            ></textarea>
            <button className={style.createtask} onClick={onHandle}>Create Task</button>
          </div>
        </div>

        <div className={style.table}>
          <div className={`${style.tableEmplyName} ${style.tableDiv}`}>
            Employe Name
          </div>
          <div className={`${style.tableNewTask} ${style.tableDiv}`}>
            New Task
          </div>
          <div className={`${style.tableActiveTask} ${style.tableDiv}`}>
            Active Task
          </div>
          <div className={`${style.tableCompleted} ${style.tableDiv}`}>
            Completed
          </div>
          <div className={`${style.tableFailed} ${style.tableDiv}`}>Failed</div>
        </div>
        {authData.employe.map((val, idx) => (
           

          <WorkTable
            data={val}
            key={idx}

            newTaskCount={val.countTask.newTask}
            activeTaskCount={val.countTask.active}
            completedTaskCount={val.countTask.completedTask}
            failedTaskCount={val.countTask.failed}
          />
          ))}
      </div>
    </>
  );
};

export default Admin;
