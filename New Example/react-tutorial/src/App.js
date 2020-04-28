import React, { Component } from 'react'
import Table from './Table'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Table/>
//       </div>
//     )
//   }
// }
//
//


//Dynamic Entry
class App extends Component{
  render(){
    const characters = [
      {
        name: "Nikhil",
        job: "Software Developer",
      },
      {
        name: "Abhraham",
        job: "Operational Head",
      },
      {
        name: "Syed",
        job: "Intern",
      },
    ]

    return(
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }

}
export default App
