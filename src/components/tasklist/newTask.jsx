import style from "./task.module.css";

const NewTask = () => {
  return (
    <>
      <div className={style.newTask}>
        <div className={style.task}>1</div>
        <div className={style.taskName}>New Task</div>
      </div>
    </>
  );
};

export default NewTask;
