import styles from  '../css/UserList.module.css'

const UserCard = props => {

    const user = props.user;

    const sendKey = () => {
        props.onClick(user.key)
    }

    return(
        <li className={styles.li} onClick={sendKey}>
            {user.name} ({user.age} years old)
        </li>
    )
}

export default UserCard;