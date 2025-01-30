
import { useState } from "react";
import style from "./admin.module.css"

const WorkTable = ({data,newTaskCount,activeTaskCount,completedTaskCount,failedTaskCount}) => {
 

  return (
    <>
      <div className={style.worktable}>
        <div className={`${style.EmplyName} ${style.wrktableDiv}`}>
         {data.name}
        </div>
        <div className={`${style.countNewTask} ${style.wrktableDiv}`}>
          {newTaskCount}
        </div>
        <div className={`${style.countActiveTask} ${style.wrktableDiv}`}>
          {activeTaskCount}
        </div>
        <div className={`${style.countCompleted} ${style.wrktableDiv}`}>
         {completedTaskCount}
        </div>
        <div className={`${style.countFailed} ${style.wrktableDiv}`}>
            {failedTaskCount}
        </div>
      </div>
    </>
  );
};

export default WorkTable;
