import style from './houseSelection.module.css';
import { useState } from 'react';

export default function HouseSelection({
  activeCompetition,
  data,
  setActiveHouse,
  activeHouse,
}) {
  return (
    <div className={`${style.flex}`}>
      <div className={style.header}>Select House</div>

      <div
        onClick={() => setActiveHouse(0)}
        className={
          activeHouse === 0
            ? `${style.container}`
            : `${style.container} ${style.hidden}`
        }
      >
        ALL
      </div>
      <div
        onClick={() => setActiveHouse(1)}
        className={
          activeHouse === 1
            ? `${style.container} ${style.active}`
            : `${style.container} ${style.hidden}`
        }
      >
        RUBY
      </div>
      <div
        onClick={() => setActiveHouse(2)}
        className={
          activeHouse === 2
            ? `${style.container}`
            : `${style.container} ${style.hidden}`
        }
      >
        AMBER
      </div>
      <div
        onClick={() => setActiveHouse(3)}
        className={
          activeHouse === 3
            ? `${style.container}`
            : `${style.container} ${style.hidden}`
        }
      >
        PEARL
      </div>
      <div
        onClick={() => setActiveHouse(4)}
        className={
          activeHouse === 4
            ? `${style.container}`
            : `${style.container} ${style.hidden}`
        }
      >
        SAPPHIRE
      </div>
    </div>
  );
}
