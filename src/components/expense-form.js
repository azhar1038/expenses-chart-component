import { useEffect, useState } from 'react';
import styles from './expense-form.module.css';

function FormInput({ value, setValue, label, index, data, setData }) {
  let onChange = (e) => {
    let val = e.target.value
    if (!val) val = 0;
    if (val < 0) return;
    val = Math.floor(parseFloat(val)*100)/100;
    setValue(val);
    if (val === data[index]) return;
    const newData = [...data];
    newData[index] = parseFloat(val);
    setData(newData);
  }

  return (
    <div className={`${styles['form-input']} | spaced-columns`}>
      <label htmlFor={'expense-form-'+label}>{label}</label>
      <input id={'expense-form-'+label} type='number' name={label} value={value} onChange={onChange}/>
    </div>
  );
}

function ExpenseForm({ open, data, setData }) {
  const [ mon, setMon ] = useState('');
  const [ tue, setTue ] = useState('');
  const [ wed, setWed ] = useState('');
  const [ thu, setThu ] = useState('');
  const [ fri, setFri ] = useState('');
  const [ sat, setSat ] = useState('');
  const [ sun, setSun ] = useState('');

  useEffect(()=>{
    setMon(data[0]??'');
    setTue(data[1]??'');
    setWed(data[2]??'');
    setThu(data[3]??'');
    setFri(data[4]??'');
    setSat(data[5]??'');
    setSun(data[6]??'');
  }, [data]);
  
  return (
    <form className={`${styles['expense-form']} | surface3`} data-open={open}>
      <FormInput value={mon} setValue={setMon} label='Monday' index={0} data={data} setData={setData} />
      <FormInput value={tue} setValue={setTue} label='Tuesday' index={1} data={data} setData={setData} />
      <FormInput value={wed} setValue={setWed} label='Wednesday' index={2} data={data} setData={setData} />
      <FormInput value={thu} setValue={setThu} label='Thursday' index={3} data={data} setData={setData} />
      <FormInput value={fri} setValue={setFri} label='Friday' index={4} data={data} setData={setData} />
      <FormInput value={sat} setValue={setSat} label='Saturday' index={5} data={data} setData={setData} />
      <FormInput value={sun} setValue={setSun} label='Sunday' index={6} data={data} setData={setData} />
    </form>
  );
}

export default ExpenseForm;