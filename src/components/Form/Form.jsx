const Form = ({ value, onChangeValue, onFormSubmit }) => {
   return (
      <form className='form' onSubmit={onFormSubmit}>
         <div className='mb-3'>
            <input
               type='number'
               min={0}
               max={10}
               value={value}
               onChange={onChangeValue}
               placeholder="сколько фактов вы хотите узнать?"
               className='form-control form-input'
            />
         </div>
      </form>
   );
};

export default Form;
