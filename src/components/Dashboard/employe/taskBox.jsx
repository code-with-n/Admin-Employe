import style from "./employe.module.css";

const TaskBox = () => {
  return (
    <>
      <div className={style.taskBox}>
        <div className={style.wrkName}>
          <div className={style.work}>High</div>
          <div className={style.date}>20/21/2022</div>
        </div>

        <div className={style.title}>
          <h5>Make a responsive website</h5>
        </div>
        <div className={style.discri}>
          Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
