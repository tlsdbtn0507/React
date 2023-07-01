import styles from '../css/UserList.module.css'

const UserList = props => {

    const user = props.users

    console.log(user)

    return(
        <div className={styles.users}>
            <ul>
                {user.map(e=><li key={e.key}>{e.name} ({e.age} years old)</li>)}
            </ul>
        </div>
    )
}

export default UserList