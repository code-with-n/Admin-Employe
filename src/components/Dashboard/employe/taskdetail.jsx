import style from "./employe.module.css";
import TaskBox from "./taskBox";

const TaskDetail = () => {
  return (
    <>
      <div className={style.taskDetail}>
        <TaskBox/>
        <TaskBox/>
        <TaskBox/>
        <TaskBox/>

      </div>
    </>
  );
};

export default TaskDetail;
