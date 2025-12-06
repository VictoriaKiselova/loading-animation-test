import Loader from "./components/Loader/Loader";
import GlassEffect from "./components/GlassEffect/GlassEffect";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.appContainer}>
      <Loader />
      <GlassEffect />
    </div>
  );
}

export default App;
