import { title } from "framer-motion/client";
import style from "./employe.module.css";

const TaskBox = ({task}) => {
  return (
    <>
      <div className={style.taskBox}>
        <div className={style.wrkName}>
          <div className={style.work}>High</div>
          <div className={style.date}>{task.date}</div>
        </div>

        <div className={style.title}>
          <h5>{task.title}</h5>
        </div>
        <div className={style.discri}>
          {task.description}
        </div>

        <div className={style.markFailed}>
          <button className={style.complete}>Mark as completed</button>
          <button className={style.failed}>Mark as Failed</button>
        </div>
      </div>
    </>
  );
};
export default TaskBox;
