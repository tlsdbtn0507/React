// import styled from 'styled-components'

// const Button = styled.button`
//   width: 100%
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
  
//   @media (min-width:768px){
//     width:auto
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
//styled-components를 통해 해당 Button의 css스타일은 이 Button컴포넌트에만 국한되고 다른 컴포넌트에
//영향을 주지 않음

import styles from "../../../css/Button.module.css";
//이렇게 하고 브라우저를 살펴보면 Button 컴포넌트를 위한 css클래스를 만들어 적용함

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
