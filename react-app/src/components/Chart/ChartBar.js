import '../../css/ChartBar.css'

const ChartBar = (props) => {
    let barHeight = '0%';

    if(props.maxValue > 0) {
        barHeight = `${Math.round((props.value/props.maxValue) * 100)}%`
    }
    
    //react에서 style을 동적으로 변경하려면 style에 {{}}를 넣고 원하는 style의 값에 barHeight같은 value
    //를 넣으면 됨 만약 style의 값이 background-color처럼 -가 들어가면 camelCase로 바꿔써도 됨
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" 
                style={{height:barHeight}}></div>
        </div>
            <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;