import DataPoint from '../dataPoint/DataPoint';
import style from './competitions.module.css';

export default function Competitions({
  competitionSet,
  setActiveCompetition,
  activeCompetition,
  setCompetitionName,
}) {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>Competitions</div>

        {competitionSet.map((item, index) => (
          <DataPoint
            key={index}
            value={item}
            index={index}
            setActiveCompetition={setActiveCompetition}
            activeCompetition={activeCompetition}
            setCompetitionName={setCompetitionName}
          />
        ))}
      </div>
    </>
  );
}
