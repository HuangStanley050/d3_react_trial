import React, { Component } from 'react';
//import logo from './logo.svg';
import * as d3 from "d3";
import './App.css';

class App extends Component {
  componentDidMount() {
    this.drawD3_example2();

  }
  drawD3_example2 = () => {
    const data = [
      { width: 200, height: 100, fill: "purple" },
      { width: 100, height: 60, fill: "red" },
      { width: 50, height: 30, fill: "blue" }
    ];
    const canvas = d3.select(".canvas");
    const svg = canvas.append('svg');


    const recs = svg.selectAll('rect')
      .data(data)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('fill', d => d.fill);

    recs.enter()
      .append('rect')
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('fill', d => d.fill);
  }
  drawD3 = () => {
    const canvas = d3.select(".canvas");

    const svg = canvas.append('svg')
      .attr('height', 600)
      .attr('width', 600);

    const group = svg.append('g')
      .attr('transform', 'translate(50,100)', );

    group.append('rect')
      .attr('height', 100)
      .attr('width', 200)
      .attr('fill', "blue")
      .attr('x', 20)
      .attr('y', 20);

    group.append('circle')
      .attr('r', 50)
      .attr('cx', 300)
      .attr('cy', 70)
      .attr('fill', 'pink');


    group.append('line')
      .attr('x1', 370)
      .attr('x2', 400)
      .attr('y1', 20)
      .attr('y2', 120)
      .attr('stroke', 'red');

    svg.append("text")
      .attr('x', 20)
      .attr('y', 200)
      .attr('fill', 'gray')
      .style('font-family', 'arial')
      .text("Hello World");
  }
  render() {
    return (
      <div className="canvas">
        
      </div>
    );
  }
}

export default App;
