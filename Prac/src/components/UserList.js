import styles from '../css/UserList.module.css'

import UserCard from './UserCard';

const UserList = props => {

    const user = props.users;


    const sendUserKey = (gotKey) => {
        props.getUserKey(gotKey)
    }


    return(
        <div className={styles.users}>
            <ul>
                {user.map(e=><UserCard user={e} key={e.key} onClick={sendUserKey}/>)}
            </ul>
        </div>
    )
}

export default UserList