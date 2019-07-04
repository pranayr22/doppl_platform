import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import './BinChart.css';

class BinChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Empty', 'Partially Full', 'Almost Full', 'Full', 'Overfilled'],
                datasets: [
                    {
                        label: 'Bin Overview',
                        data: [],
                        backgroundColor: [
                            'rgba(255, 69, 155, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ]
                    }
                ]
                
            }
        }
    }
    
    componentDidUpdate() {
        if (!this.state.chartData.datasets["0"].data || this.state.chartData.datasets["0"].data !== this.props.data) {
            this.setState(prevState => {
                const inputs = {...prevState.chartData};
                inputs.datasets["0"].data = this.props.data;
                return { inputs }})
        }
    }

    render(){


    return (
        <div className="rightTop">
            <div className="chart">
            <Doughnut
                data={this.state.chartData}
                width={10}
                height={6}
                options={{
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: true,
                }}

            />
            </div>
        </div>
    )
    }
}

export default BinChart;