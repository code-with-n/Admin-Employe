import AcceptTask from "../../tasklist/acceptedTask";
import Complete from "../../tasklist/completeTask";
import Failed from "../../tasklist/failedTask";
import NewTask from "../../tasklist/newTask";
import style from "./employe.module.css";
import Greet from "./greet";
import TaskDetail from "./taskdetail";
const EmployeDash = ({data}) => {
  return (
    <>
      <div className={style.dashContainer}>
        <div className={style.dash}>
          <Greet data={data}/>

          {/* here will be appear task list  */}
          <div className={style.taskMenu}>
              <AcceptTask/>
              <Complete/>
              <Failed/>
              <NewTask/>

          
          </div>

          {/* here will detail of task  */}
          <TaskDetail/>
        </div>
      </div>
    </>
  );
};

export default EmployeDash;
