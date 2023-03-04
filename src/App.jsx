import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import style from './App.module.css';
import { db } from './db';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import DataPoint from './components/dataPoint/DataPoint';
import Competitions from './components/competitions/Competitions';
import HouseSelection from './components/houseSelection/HouseSelection';
import Results from './components/results/Results';

function App() {
  //all data
  const [dataState, setDataState] = useState([]);
  //competition names
  const [competitionSet, setCompetitionSet] = useState([]);
  //currently active competition
  const [activeCompetition, setActiveCompetition] = useState(0);
  //currently active house
  const [activeHouse, setActiveHouse] = useState(0);
  //currently active result data
  const [competitionName, setCompetitionName] = useState('');

  useEffect(() => {
    let data = [];
    let localCompetitionSet = new Set();
    const q = query(collection(db, 'competition'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() });
        localCompetitionSet.add(doc.data().event);
      });
      let arr = [];
      localCompetitionSet.forEach((item) => {
        arr.push(item);
      });
      setCompetitionSet(arr);
      data.sort((a, b) => b.highScore - a.highScore);
      console.log(data);
      setDataState(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={style.container}>
      <Competitions
        competitionSet={competitionSet}
        setActiveCompetition={setActiveCompetition}
        activeCompetition={activeCompetition}
        setCompetitionName={setCompetitionName}
      />

      <HouseSelection
        activeCompetition={competitionSet[activeCompetition]}
        data={dataState}
        setActiveHouse={setActiveHouse}
        activeHouse={activeHouse}
      />
      <Results
        data={dataState}
        activeCompetition={activeCompetition}
        activeHouse={activeHouse}
        competitionName={competitionName}
      />
    </div>
  );
}

export default App;
