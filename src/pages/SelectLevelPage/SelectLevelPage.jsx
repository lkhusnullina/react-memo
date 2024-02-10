// import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../../store/slices";
import { Button } from "../../components/Button/Button";
import classNames from "classnames";

export function SelectLevelPage() {
  const dispatch = useDispatch();
  const level = useSelector(state => state.game.level);
  console.log(level);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <form className={styles.levels}>
          <label className={classNames([styles.level, { [styles.levelSelected]: level === 3 }])}>
            <input
              type="radio"
              name="myRadio"
              value="3"
              className={styles.levelInput}
              onChange={() => dispatch(setLevel({ level: 3 }))}
            />
            <span className={styles.levelLink}>1</span>
          </label>
          <label className={classNames([styles.level, { [styles.levelSelected]: level === 6 }])}>
            <input
              type="radio"
              name="myRadio"
              value="6"
              className={styles.levelInput}
              onChange={() => dispatch(setLevel({ level: 6 }))}
            />
            <span className={styles.levelLink}>2</span>
          </label>
          <label className={classNames([styles.level, { [styles.levelSelected]: level === 9 }])}>
            <input
              type="radio"
              name="myRadio"
              value="9"
              className={styles.levelInput}
              onChange={() => dispatch(setLevel({ level: 9 }))}
            />
            <span className={styles.levelLink}>3</span>
          </label>
        </form>
        <div className={styles.mode}>
          <input className={styles.input} type="checkbox" />
          <h2 className={styles.heading}>Легкий режим(3 жизни)</h2>
        </div>
        <Button className={styles.buttonStart}>Играть</Button>
      </div>
    </div>
  );
}

{
  /* <Link className={styles.levelLink} to="/game/9">
              3
            </Link> */
}
