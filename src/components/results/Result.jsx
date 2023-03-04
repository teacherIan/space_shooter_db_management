import style from './results.module.css';

export default function Result({ item }) {
  return (
    <div className={style.container}>
      <div className={style.item}>Name:{item.name}</div>
      <div className={style.item}>Score:{item.highScore}</div>
    </div>
  );
}
