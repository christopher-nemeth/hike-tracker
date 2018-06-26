import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryContainer } from 'victory';

export class BarChart extends Component {

  render() {

    return (
      <div className='map'>
        <VictoryChart
          theme={VictoryTheme.material}
        >
        <VictoryBar
          horizontal={true}
          // categories={{ x: ["Rating"] }}
          containerComponent={<VictoryContainer responsive={true} height={100} width={100}/>}
          style={{ data: { fill: "#DF9951" } }}
          height={50}
          alignment="start"
            data={this.props.reviews}
            x="name"
            y="rating"
        />
          </VictoryChart>
      </div>
    );
  }
}

// render(<BarChart />, document.getElementById('app'));