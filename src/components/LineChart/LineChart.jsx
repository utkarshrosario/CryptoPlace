import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({historicalData}) => {
    const [data, setData] = useState([["Date", "Prices"]]);
    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if(historicalData && historicalData.prices && Array.isArray(historicalData.prices)) {
            historicalData.prices.forEach((item) => {
                if(item && item[0] && item[1]) {
                    dataCopy.push([`${new Date(item[0]).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric"
                    })}`, item[1]]);
                }
            })
            setData(dataCopy);
        }
    }, [historicalData])
    return (
        <div>
            <Chart chartType="LineChart" data={data} height="100%" legendToggle />
        </div>
    )
}
export default LineChart;