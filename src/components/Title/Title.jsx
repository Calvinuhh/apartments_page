import style from "./title.module.css";

const Title = ({ language }) => {
  return (
    <>
      <h1 id={style.main_title}>{language}</h1>
    </>
  );
};

export default Title;
