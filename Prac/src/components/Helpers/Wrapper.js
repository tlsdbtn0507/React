const Wrapper = props => {
    return props.children
    //props에는 컴포넌트 함수안의 모든 요소에 접근할 수 있는데 그 중 children을 통해서
    //return안에 jsx만을 가져오게함 이렇게 하면 Wrapper를 통해 div의 중첩을 줄일 수 있음 
    //Wrapper를 쓰지 않으면 컴포넌트마다 div를 감싸게 되고 그러면 너무 많은 div의 중첩떄문에 속도 저하나
    //스타일링이 꺠질 수 있음
}

export default Wrapper