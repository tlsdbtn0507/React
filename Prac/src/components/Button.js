import styles from '../css/Button.module.css'

const Button = props => {
    return(
        <div>
            <button className={styles.button}>Add User</button>
        </div>
    )
}

export default Button