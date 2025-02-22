import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../../src/store/facts.slice';
import Form from './Form/Form';
import List from './List/List';
import './App.css';

const App = () => {
   const [count, setCount] = useState(''); // счетчик формы
   const items = useSelector((s) => s.facts.displayed); // элементы списка
   const dispatch = useDispatch();

   const handlerChangeValue = (e) => {
      const value = Math.max(0, Math.min(10, e.target.value)); // ограничиваем ввод от 0 до 10
      setCount(value);
      dispatch(show(value));
   };

   const handlerFormSubmit = (e) => e.preventDefault(); // запрет отправки по Enter

   return (
      <section className='container app-container'>
         <h1 className='h1'>Факты о Star Wars</h1>
         <Form value={count} onChangeValue={handlerChangeValue} onFormSubmit={handlerFormSubmit} />
         <List facts={items} />
      </section>
   );
};

export default App;
