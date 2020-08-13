import React, { useContext } from 'react';
import ThemeContext from '../../theme/Theme';
import { Line } from 'react-chartjs-2';
import { StyledChart } from './Chart.styles';

const Chart = ({ dataSet }) => {

  const theme = useContext(ThemeContext);

  const options = {
    scales: {
      xAxes: [{
        ticks: {
          fontColor: theme.secondaryColor
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: theme.secondaryColor
        }
      }]
    },

    legend: {
      labels: {
        fontColor: theme.secondaryColor,
      }
    }
  }

  const chartData = {
    labels: dataSet.map(data => data.effectiveDate),
    datasets: [
      {
        label: 'Kurs',
        data: dataSet.map(data => data.mid.toFixed(4)),
        borderColor: theme.borderColor,
        backgroundColor: theme.chartBackgroundColor,
        pointBackgroundColor: theme.secondaryColor,
        pointBorderColor: 'black'
      }
    ]
  }

  return (
    <StyledChart theme={theme}>
      <Line data={chartData} options={options} />
    </StyledChart>
  )
}

export default Chart;
