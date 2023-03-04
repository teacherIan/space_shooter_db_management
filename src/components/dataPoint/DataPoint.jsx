import style from './dataPoint.module.css';
import { useState } from 'react';

export default function DataPoint({
  value,
  index,
  setActiveCompetition,
  activeCompetition,
  setCompetitionName,
}) {
  function handleClick() {
    setActiveCompetition(index);
    setCompetitionName(value);
  }

  return (
    <div className={activeCompetition === index ? null : style.darken}>
      <div onClick={handleClick} className={style.container}>
        <div className={style.event}>{value}</div>
      </div>
    </div>
  );
}
