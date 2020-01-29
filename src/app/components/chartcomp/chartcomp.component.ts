import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chartcomp',
  templateUrl: './chartcomp.component.html',
  styleUrls: ['./chartcomp.component.scss']
})
export class ChartcompComponent implements OnInit {
  chartOptions={};
  days = [
    {value: 'day1', viewValue: 'day1'},
    {value: 'day2', viewValue: 'day2'},
    {value: 'day3', viewValue: 'day3'}
  ];
  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById("doughnut-chart");
    var ctx1 = document.getElementById("doughnut-chart1");
  
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        legend:{
          position: 'right',
          labels: { boxWidth: 6, usePointStyle: true, padding: 5, fontSize: 11, fontFamily: 'sofia-pro, sans-serif' }
        },
        // title: {
        //   display: true,
        //   text: 'Predicted world population (millions) in 2050'
        // }
          
      }
    });
  
    var myChart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ["Andhra","TamilNadu","Gujarat","Kashmir","karnataka"],
        datasets: [
          {
            //label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        // plugins:{
        //   datalabels:{
        //     anchor: 'start',
        //     align: 'start'
        //   }
          
        // },
       
        legend:{
          position: 'right',
          labels: { boxWidth: 6, usePointStyle: true, padding: 5, fontSize: 11, fontFamily: 'sofia-pro, sans-serif' }
        },
        // title: {
        //   display: true,
        //   text: 'Predicted world population (millions) in 2050'
        // }
      }
    });
  
}
}
