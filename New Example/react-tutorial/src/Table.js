import React, { Component } from 'react'

class Table extends Component{
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nikhil</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Abhraham</td>
            <td>Operational Head</td>
          </tr>
          <tr>
            <td>Suman</td>
            <td>Developer</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
