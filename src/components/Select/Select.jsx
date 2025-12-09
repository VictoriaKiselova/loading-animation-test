import { useState } from "react";
import style from "./Select.module.scss";

export default function Select() {
  const list = [
    { option: "Best Malch" },
    { option: "Lowest Price" },
    { option: "Highest Pricee" },
    { option: "Lowest Followers" },
    { option: "Lowest Pricee" },
  ];

  const [selectOption, setSelectOption] = useState(list[0].option);
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <div
      onClick={() => {
        setOpenSelect(prev => !prev);
      }}
      className={style.appSelect}>
      <div style={{ color: "red" }}>{selectOption}</div>

      {openSelect ? (
        <div className={style.wrapper}>
          {list.map((item, i) => (
            <div
              key={i}
              className={style.appOptions}
              onClick={e => {
                e.stopPropagation();
                setSelectOption(item.option);
                setOpenSelect(false);
              }}>
              {item.option}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
