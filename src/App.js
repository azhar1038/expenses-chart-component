import { useEffect, useState } from 'react';
import ExpenseCard from './components/expense-card';
import ExpenseForm from './components/expense-form';
import ThemeToggle from './components/theme-toggle';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    fetch("data.json")
      .then(res => res.json())
      .then(rawData => {
        const amount = [];
        const day = [];
        rawData.forEach(item => {
          amount.push(item.amount);
          day.push(item.day);
        });
        setData(amount);
        setLabel(day);
      });
  }, []);
  
  const toggleForm = () => {
    setFormOpen(!formOpen)
  };

  return (
    <div className="App">
      <div className='container'>
        <main>
          <ExpenseCard data={data} label={label} />
          <button className='fav' onClick={toggleForm} aria-label={`${formOpen ? "Close" : "Open"} expense edit form`}>
            <svg aria-hidden="true" viewBox="0 0 512 512">
              <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" fill="currentColor"/>
            </svg>
          </button>
          <ExpenseForm open={formOpen} data={data} setData={setData}/>
          <div className='theme-toggle-wrapper'>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </main>
        <footer>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/azhar1038">Azhar</a>.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
