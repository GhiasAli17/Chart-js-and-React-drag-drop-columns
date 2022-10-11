
import {
    Chart as ChartJS,CategoryScale,
    LinearScale,
BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement
 
  } from 'chart.js';
  import { Bar, Line, Pie } from 'react-chartjs-2';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from 'react';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    ChartDataLabels,
    Title,
    Tooltip,
    Legend
  );
  

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const options1 = {
    plugins: {
      datalabels: {
        
        display: true,
        color: "black",
        anchor: "end",
        offset: -20,
        align: "start"
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    
    scales: {
      x: {
        stacked: true,
        ticks: {
          maxRotation: 70,
          minRotation: 70
      }
        
      },
      y: {
        stacked: true,
      },
    },
  };

  export const data1 = {
    labels,
    datasets: [
      
      {
        label: 'Dataset One',
        data: [1,2,3,4,5,6,7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset Two',
        data: [1,8,3,4,9,6,7],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
  
    ],
  };


  export const options2 = {
    plugins: {
      datalabels: {
        
     
        anchor: "end",
        align: "start",
        formatter:(value,context)=>{
          
          const datasetArray = []
          context.chart.data.datasets.forEach((dataset)=>{

            if(dataset.data[context.dataIndex] != undefined){
              datasetArray.push(dataset.data[context.dataIndex])
            }
          })

          function totalSum(total, datapoint){
            return total + datapoint;
          }

          let sum = datasetArray.reduce(totalSum,0)
          if(context.datasetIndex == datasetArray.length-1)
          return sum
          else
          return ''
       },

      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    
    scales: {
      x: {
        stacked: true,
        ticks: {
          maxRotation: 70,
          minRotation: 70
      }
        
      },
      y: {
        stacked: true,
      },
    },
  };


export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset One',
      data: [1,2,3,4,5,6,7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset Two',
      data: [1,8,3,4,9,6,7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



export const Piedata = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4,5,6,7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  

function Chart() {
    const [type, setType] = useState("Bar");
  return (
    <div style={{width:'50%', height:'50%'}}>
        <button onClick={()=>setType("Bar")}>Bar Chart</button>
        <button onClick={()=>setType("Line")}>Line Chart</button>
        <button onClick={()=>setType("Pie")}>Pie chart</button>
        <button onClick={()=>setType("Stacked")}>Stacked chart</button>
        {
            type=="Bar"?<Bar options={options2} plugins={[ChartDataLabels]} data={data1} /> : type == "Line"?<Line options={options} data={data}/>:type =="Stacked"?
            <Bar options={options1} plugins={[ChartDataLabels]} data={data} />:<Pie data={Piedata}/>
        }
    
    </div> )
}

export default Chart