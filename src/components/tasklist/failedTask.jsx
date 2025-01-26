import style from "./task.module.css";

const Failed = () => {
  return (
    <>
      <div className={style.fail}>
        <div className={style.task}>1</div>
        <div className={style.taskName}>Failed Task</div>
      </div>
    </>
  );
};

export default Failed;
