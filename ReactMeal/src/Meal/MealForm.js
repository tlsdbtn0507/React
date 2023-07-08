import css from '../Css/MealItemForm.module.css'
import Input from './Input';

const MealForm = props => {

    return(
        <form className={css.form}>
            <Input/>
            <button>+Add</button>
        </form>
    ) 
    

};

export default MealForm;