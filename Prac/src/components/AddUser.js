import {useState,useRef} from 'react'

import Button from './Button';
import ErrorModal from './ErrorModal';
import Wrapper from './Helpers/Wrapper';


import styles from '../css/AddUser.module.css'

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    //useRef를 쓰면 dom의 밸류값의 접근이 편해짐

    const [,setUserAge] = useState();
    const [,setUserName] = useState();

    const [errorModal,showErrorModal] = useState(false);
    const [errContent, getErrContent] = useState('')

    const user = {
        name:'',
        age:'',
        key:''
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
        if(!a || a < 0){
            getErrContent('invalid age')
            return  val
        }
        else 
        val = true;
        return val
        
    };

    const sendInfo = e => {
        e.preventDefault();

        const userName = nameInputRef.current.value;
        const userAge = ageInputRef.current.value;

        if(!errorHandle(userName,+userAge)){
            showErrorModal(true);
            return
        }

        user.name = userName;
        user.age = userAge;
        user.key = `${userName}${Math.random()}`

        props.getUser(user);

        setUserAge('');
        setUserName('');

        // nameInputRef.current.value = '';
        // ageInputRef.current.value = ''; 이렇게 해도 가능은 하지만 보통 dom을 ref로 변경 x
        // 그리고 state를 쓰게 되지 않으면 input태그들은 제어되지 않는 react컴포넌트가 됨

    };

    const handleCloseModal = (a) => {
        showErrorModal(a)
    };

    return(
        <Wrapper>
            <form className={styles.input} onSubmit={sendInfo}>
                <label htmlFor='uName'>UserName</label>
                    <input id='uName' type='text' ref={nameInputRef}></input>
                <label htmlFor='uAge'>Age(Years)</label>
                    <input id='uAge' type='number' ref={ageInputRef}></input>
                <Button type='submit' title='Add User'/>
            </form>
            {errorModal && <ErrorModal 
                closeModal={handleCloseModal}
                errMessage={errContent}
            />}
        </Wrapper>
    );

}

export default AddUser;