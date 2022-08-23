import styles from './bar-chart.module.css'

function BarChart({ title='', value=0, maxValue=1, highlight=false }) {
  if (maxValue <= 0) maxValue = 1;
  if (value > maxValue) value = maxValue;
  let height = value / maxValue * 100;
  if (height < 5) height = 5;
  return (
    <figure className={styles['bar-wrapper']} data-highlight={highlight} aria-label={title + ' $' + value}>
      <div className={styles['bar']}
        style={{
          height: `${height}%`
        }}
        data-value={`$${value}`}
      ></div>
      <figcaption className={styles['title']} aria-hidden="true" >{title}</figcaption>
    </figure>
  );
}

export default BarChart;