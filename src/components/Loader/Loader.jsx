import style from "./Loader.module.scss";

export default function Loader() {
  const size = [15, 49, 89, 33, 49, 85, 81, 29, 15];

  return (
    <ul className={style.loaderContainer}>
      {size.map((height, index) => (
        <li key={index} className={style.loaderItem} style={{ height }}></li>
      ))}
    </ul>
  );
}
