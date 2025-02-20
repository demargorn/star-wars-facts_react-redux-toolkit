const List = ({ facts }) => {
   return (
      <ul className='list'>
         {facts.map((f) => (
            <li key={f.id} className='list-item'>
               {f.title}
            </li>
         ))}
      </ul>
   );
};

export default List;
