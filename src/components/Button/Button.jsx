import style from "./button.module.css";
import { Link } from "react-router-dom";

const Button = ({ language, linkTo, linkLogo }) => {
  return (
    <div className={style.button_container}>
      <Link to={linkTo} className={style.button_lan}>
        <img className={style.img_button} src={linkLogo} alt="language_logo" />
        {language}
      </Link>
    </div>
  );
};

export default Button;
