import styles from './expense-card.module.css';
import logo from '../assets/images/logo.svg';
import BarChart from './bar-chart';

function ExpenseCard({ data = [], label = [] }) {
  let currentDay = new Date().getDay();
  currentDay = (currentDay + 6) % 7
  let maxValue = 0;
  let total = 0;
  for (const value of data) {
    total += value
    if (value > maxValue) {
      maxValue = value
    }
  }
  let extra = Math.round((total-222.6)/222.6*1000)/10;
  let sign = extra >= 0 ? '+' : '';

  return (
    <div className={styles['card']}>
      <section className={`${styles['header']} spaced-columns surface3`}>
        <div>
          <h3 className='text400'>My balance</h3>
          <p className='text500'>$921.48</p>
        </div>
        <img src={logo} alt='' aria-hidden="true" />
      </section>
      <section className={`${styles['chart-wrapper']} surface1`}>
        <h1 className='text500'>Spending - Last 7 days</h1>
        <div className={styles['chart']}>
          { data.map((value, i) => {
            return (
              <BarChart 
                title={label[i]} 
                value={value} 
                maxValue={maxValue}
                highlight={i === currentDay}
                key={label[i] }
              />
            )
          }) }
        </div>
        <hr className='hr300'/>
        <div className={`${styles['status']} spaced-columns`}>
          <div>
            <p data-style="light">Total this month</p>
            <p className='text700'>${Math.round(total*100)/100}</p>
          </div>
          <div className='align-right'>
            <p className='text-bold'>{sign+extra}%</p>
            <p data-style="light">from last month</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpenseCard;