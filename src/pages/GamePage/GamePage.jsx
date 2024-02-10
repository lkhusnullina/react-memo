import { Cards } from "../../components/Cards/Cards";
import { useSelector } from "react-redux";

export function GamePage() {
  const level = useSelector(state => state.game.level);

  return (
    <>
      <Cards pairsCount={parseInt(level, 10)} previewSeconds={5}></Cards>
    </>
  );
}
