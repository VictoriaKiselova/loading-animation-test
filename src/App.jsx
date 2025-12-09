import Loader from "./components/Loader/Loader";
import GlassEffect from "./components/GlassEffect/GlassEffect";
import Select from "./components/Select/Select";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.appContainer}>
      <Loader />
      <GlassEffect />
      <Select />
    </div>
  );
}

export default App;
