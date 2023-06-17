import '../../css/FilterExpenses.css';

const FilterExpenses = (props) => {

    const getFilteredFunc = (e) =>{
        const val = e.target.value;
        props.getFiltered(val);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.filtered} onChange={getFilteredFunc}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpenses;