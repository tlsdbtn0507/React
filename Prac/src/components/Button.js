import styles from '../css/Button.module.css'

const Button = props => {

    return(
        <div>
            <button className={styles.button} onClick={props.onClick}>
                {props.title}
            </button>
        </div>
    )
}

export default Button