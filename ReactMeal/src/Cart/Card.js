import css from '../Css/Card.module.css';

const Card = props => {


    return(
        <div className={css.card}>
            {props.children}
        </div>
    )
};

export default Card;