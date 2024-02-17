import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderboardPage.module.css";
import { Leaderboard } from "../../components/Leaderboard/Leaderboard";
import { restart } from "../../store/slices";
import { useDispatch } from "react-redux";

export function LeaderboardPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Лидерборд</h1>
        <Button
          children={"Начать игру"}
          onClick={() => {
            dispatch(restart());
            navigate("/");
          }}
        />
      </div>
      <Leaderboard />
    </>
  );
}
