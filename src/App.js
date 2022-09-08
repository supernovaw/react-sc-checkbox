import SelectionBlock from "./components/SelectionBlock.tsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SelectionBlock options={
        ["Intra-Clan Leaderboard",
          "Clan War Tiered Leaderboard",
          "World Domination",
          "Clan War Tiered Leaderboard"]
      } />
    </div>
  );
}

export default App;
