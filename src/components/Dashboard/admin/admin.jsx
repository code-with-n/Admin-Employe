import Greet from "../employe/greet";
import style from "./admin.module.css";
import WorkTable from "./workTable";
const Admin = () => {
  return (
    <>
      <div className={style.admin}>
        <Greet />
        <div className={style.createTaskBox}>
          <div className={style.inputes}>
            <div className={style.taskTitleInput}>
              <label htmlFor="taskinput">Task Title</label>
              <input type="text" id="taskinput" placeholder="make a web.."/>
            </div>
            <div className={style.dateAdd}>
              <label htmlFor="dateInput">Date</label>
              <input type="date" id="dateInput" />
            </div>

            <div className={style.assignTo}>
              <label htmlFor="assinTo">Assign To</label>
              <input type="name" name="" id="assingTo" placeholder="Ram..." />
            </div>
            <div className={style.category}>
              <label htmlFor="category">Category</label>
              <input type="text" placeholder="dev,design,etc.." />
            </div>
          </div>
          <div className={style.discripBox}>
            <h5>Discription</h5>
           <textarea name="" id="" rows={8} cols={40} placeholder="write discription in 20 words.."></textarea>
            <button className={style.createtask}>Create Task</button>
          </div>
        </div>

        <div className={style.table}>
            <div className={`${style.tableEmplyName} ${style.tableDiv}`}>Employe Name</div>
            <div className={`${style.tableNewTask} ${style.tableDiv}`}>New Task</div>
            <div className={`${style.tableActiveTask} ${style.tableDiv}`}>Active Task</div>
            <div className={`${style.tableCompleted} ${style.tableDiv}`}>Completed</div>
            <div className={`${style.tableFailed} ${style.tableDiv}`}>Failed</div>
        </div>
      <WorkTable/>
      <WorkTable/>
      </div>
    </>
  );
};

export default Admin;
