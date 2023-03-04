import style from './results.module.css';
import Result from './Result';

export default function Results({
  data,
  activeCompetition,
  activeHouse,
  competitionName,
}) {
  console.log(competitionName);

  return (
    <>
      <div className={style.list}>
        <div className={style.header}>Results</div>

        {data.map((item, index) =>
          item.house === 'Sapphire' &&
          activeHouse === 4 &&
          competitionName === item.event ? (
            <Result key={index} item={item} />
          ) : null
        )}
        {data.map((item, index) =>
          item.house === 'Pearl' &&
          activeHouse === 3 &&
          competitionName === item.event ? (
            <Result key={index} item={item} />
          ) : null
        )}
        {data.map((item, index) =>
          item.house === 'Amber' &&
          activeHouse === 2 &&
          competitionName === item.event ? (
            <Result key={index} item={item} />
          ) : null
        )}
        {data.map((item, index) =>
          item.house === 'Ruby' &&
          activeHouse === 1 &&
          competitionName === item.event ? (
            <Result key={index} item={item} />
          ) : null
        )}
        {data.map((item, index) =>
          activeHouse === 0 ? <Result key={index} item={item} /> : null
        )}
      </div>
    </>
  );
}
