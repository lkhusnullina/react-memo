import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { restart } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postLeader } from "../../api";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const title = isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";
  const dispatch = useDispatch();
  const pairsCount = useSelector(state => state.game.level);
  const isLeader = pairsCount === 9 && isWon;

  const [leaderName, setLeaderName] = useState("");
  const addLeader = () => {
    postLeader({ name: leaderName, time: gameDurationMinutes * 60 + gameDurationSeconds });
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>

      {isLeader && (
        <>
          <input
            className={styles.inputName}
            placeholder="Пользователь"
            value={leaderName}
            onChange={e => setLeaderName(e.target.value)}
          ></input>
          <Button
            onClick={() => {
              addLeader();
            }}
          >
            Отправить в лидерборд
          </Button>
        </>
      )}

      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      <Button
        onClick={() => {
          onClick();
          dispatch(restart());
        }}
      >
        Начать сначала
      </Button>
      <Link className={styles.leaderboardLink} to="/leaderboard">
        Перейти к лидерборду
      </Link>
    </div>
  );
}
