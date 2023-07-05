import React from 'react';
import styles from '../css/ErrorModal.module.css'
import  ReactDOM  from 'react-dom';
import Button from './Button';

const BackDrop = props => {
    const sendClose = () => {
        props.closeModal(false)
    };

    return <div className={styles.backdrop} onClick={sendClose}></div>
}

const ModalContent = props => {

    const sendClose = () => {
        props.closeModal(false)
    };

    const title = props.errMessage
    .split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1))
    .join(' ');

    let content;

    if(props.errMessage.includes('no')) content = 'Plz type info'
    else if(props.errMessage.includes('name')) 
        content = 'Your name is Invalid Check your input name'
    else if(props.errMessage.includes('age')) 
        content = 'Your age is Invalid Check your input age'
    else content = 'All your input is Invalid check your inputs'

    return(
        //지금 처럼 작은 앱은 모달과 백드롭이 중첩된 컴포넌트에 있어도 되지만 앱이 커지면
        //중첩되고 중첩된 컴포넌트 안에서 백드롭과 모달, 특히 백드롭(div)에 클릭이벤트를 달면 좋지 않음
        //그래서 백드롭과 모달을 컴포넌트로 분리 해서 divroot의 밖으로 뺀다
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <p className={styles.content}>
                {content}
            </p>
            <div className={styles.actions}>
                <Button onClick={sendClose} title="Okay"/>
            </div>
        </div>
    )
}

const ErrorModal = props => {

    //BackDrop과 ModalContent를 여기서 생성하고 ReactDOM의 내장 함수인 createPortal
    //를 통해 렌더링한다
    return(
        <>
            {ReactDOM.createPortal(
                <BackDrop closeModal={props.closeModal} ></BackDrop>,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalContent
                    errMessage={props.errMessage}
                    closeModal={props.closeModal}>
                </ModalContent>,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default ErrorModal