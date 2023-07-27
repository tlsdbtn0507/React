import React from "react";

function DemoOp(props) {
  return <p>{props.show ? "new!" : ""}</p>;
}

//props.show로 오는 값의 변경 유무에 상관없이 DemoOp의 부모 컴포넌트가 state의 변경으로 재실행,평가
//되면 DemoOp역시 state변경이 없어도 재실행함

//DemoOp에 자식 컴포넌트가 있다면 그 자식 컴포넌트 역시 DemoOp의 부모 컴포넌트가 재실행,평가하면 모두 재실행함

//고로 DemoOp의 불필요한 재실행을 막기위해 함수형 컴포넌트의 경우 다음과 같이 함
export default React.memo(DemoOp);
// export default DemoOp;

//React.memo()는 인자로 들어간 컴포넌트 함수가 props를 받는데 그 props의 전과 후 값을 비교해 바뀌었을
//때만 재실행하게 해줌

//하지만 props의 전과 후를 비교하는데 저장하는 비용을 고려해야 하기 때문에 자식컴포넌트가 너무 많은게 아니라면
//사용하지 않는것이 낫다
