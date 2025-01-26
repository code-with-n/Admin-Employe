
import style from "./admin.module.css"
const WorkTable = () => {
  return (
    <>
      <div className={style.worktable}>
        <div className={`${style.EmplyName} ${style.wrktableDiv}`}>
          Nitesh
        </div>
        <div className={`${style.countNewTask} ${style.wrktableDiv}`}>
          1
        </div>
        <div className={`${style.countActiveTask} ${style.wrktableDiv}`}>
          2
        </div>
        <div className={`${style.countCompleted} ${style.wrktableDiv}`}>
         3
        </div>
        <div className={`${style.countFailed} ${style.wrktableDiv}`}>
            4
        </div>
      </div>
    </>
  );
};

export default WorkTable;
