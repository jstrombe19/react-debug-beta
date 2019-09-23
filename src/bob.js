import React from 'react';

export default class Bob extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataPointes: this.dataPoints
    }
  }

  displayData = () => {
    const dataPointse = this.state.dataPoints;
    return dataPointse.map(dataPointe => <h1 className="bob-data-display" dataPointe />)
  }

  render() {
    return(
      <div className="bob-tainer">
        <h1>KING BOB!!!!</h1>
        {this.displayData}
      </div>
    )
  }
}
