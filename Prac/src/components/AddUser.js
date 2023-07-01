import {useState} from 'react'

import Button from './Button';
import ErrorModal from './ErrorModal';

import styles from '../css/AddUser.module.css'

const AddUser = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const [errorModal,showErrorModal] = useState(false);
    const [errContent, getErrContent] = useState('')

    const user = {
        name:'',
        age:''
    };

    const errorHandle = (n, a) => {
        let val = false
        if(n === '' && a === 0 ) {
            getErrContent('no input')
            return val
        }
        if(n > 0 || n < 0 || n === '' ){
            getErrContent('invalid name')
            return val
        }
        if(typeof a !== 'number' || !a){
            getErrContent('invalid age')
            return  val
        }
        else 
        val = true;
        return val
        
    };

    const getUserName = (e) => {
        const input = e.target.value;
        user.name = setUserName(input);
    };

    const getUserAge = e => {
        const input = e.target.value;
        user.age = `${setUserAge(input)}`;
    };

    const sendInfo = e => {
        e.preventDefault();

        setUserAge('');
        setUserName('');

        if(!errorHandle(userName,+userAge)){
            showErrorModal(true);
            return
        }

        user.name = userName;
        user.age = userAge;

        props.getUser(user);

    };

    const handleCloseModal = (a) => {
        showErrorModal(a)
    }

    return(
        <div>
            <form className={styles.input} onSubmit={sendInfo}>
                <label>UserName</label>
                    <input onChange={getUserName} value={userName}></input>
                <label>Age(Years)</label>
                    <input onChange={getUserAge} value={userAge}></input>

                <Button type='submit'/>
            </form>
            {errorModal && <ErrorModal 
                closeModal={handleCloseModal}
                errMessage={errContent}
            />}
        </div>
    );

}

export default AddUser;