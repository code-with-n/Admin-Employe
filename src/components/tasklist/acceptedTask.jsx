import style from "../Dashboard/employe/employe.module.css";
import task from "./task.module.css"

const AcceptTask = ()=>{
    return<>
        <div className={style.acceptTaskList}>
            <div className={task.task}>1</div>
            <div className={task.taskName}>Accepted Task</div>
            
        </div>
    </>
}

export default AcceptTask;