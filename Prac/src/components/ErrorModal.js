import styles from '../css/ErrorModal.module.css'

const ErrorModal = props => {

    const sendClose = e => {
        props.closeModal(false)
    }

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
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                </div>
                <p className={styles.content}>
                    {content}
                </p>
                <div className={styles.actions}>
                    <button onClick={sendClose}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal