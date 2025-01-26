import style from "./task.module.css";

const Complete = ()=>{
    return<>
        <div className={style.complete}>
            <div className={style.task}>1</div>
            <div className={style.taskName}>Completed </div>
        </div>
    </>
}

export default Complete;