import style from "./Bar.module.scss"";"

const Bar = (props) => {
  return (
    <div className={style.Container}>
      <div>
        <span> Home / </span>
        {props.pageName}
      </div>
    </div>
  );
};

export default Bar;
