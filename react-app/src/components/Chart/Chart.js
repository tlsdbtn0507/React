import ChartBar from "./ChartBar";

import '../../css/Chart.css'

const Chart = (props) => {
    const {data} = props

    const totalValues = data.map(e=> e.value);
    const totalMax = Math.max(...totalValues)

    return(
        <div className="chart">
            {data.map(e=>
                <ChartBar 
                value={e.value} 
                maxValue={totalMax} 
                label={e.label}
                key={e.label} />
            )}
        </div>
    )
};

export default Chart;