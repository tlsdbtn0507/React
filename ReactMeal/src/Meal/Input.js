import css from '../Css/Input.module.css'

const Input = props => {

    return(
        <div className={css.input}>
            <label>Amount</label>
            <input type='number'/>
        </div>
    )

};

export default Input;