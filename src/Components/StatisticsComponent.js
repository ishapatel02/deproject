import React, { Component } from 'react'
import { Chart, Bar, Line, Pie } from 'react-chartjs-2';
class Stats extends Component {
      constructor(props) {
          super(props);
              this.state = {
                 chartData:{                   
                          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
                          datasets: [
                          {
                             label:'Records',
                             data:[
                                 10, 
                                 20,
                                 25,
                                 15,
                                 10, 
                                 20,
                                 25,
                                 15,
                                 10, 
                                 45,
                                 35,
                                 15  
                              ],
                          backgroundColor:[
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
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
        
      static defaultProps = {
             displayTitle: true,
             displayLegend: true,
             legendPosition: 'right',
      }

      render() {
          return(
             <div className="container chart">
                  <Bar
                     data={this.state.chartData}
                     options={{
                         title:{
                           display: this.props.displayTitle,
                           text: 'Records of 2020',
                           fontSize:25
                          },
                         legend: {
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                          }
                      }}
                   />
             </div>
          );
      }
}

export default Stats;
