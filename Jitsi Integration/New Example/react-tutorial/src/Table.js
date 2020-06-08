// // import React, { Component } from 'react'
// //
// // class Table extends Component{
// //   render(){
// //     return(
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Job</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           <tr>
// //             <td>Nikhil</td>
// //             <td>Developer</td>
// //           </tr>
// //           <tr>
// //             <td>Abhraham</td>
// //             <td>Operational Head</td>
// //           </tr>
// //           <tr>
// //             <td>Suman</td>
// //             <td>Developer</td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     )
// //   }
// // }
// //
// // export default Table
//
// // New code
// import React, { Component } from 'react'
// const TableHeader = () => {
//   return(
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   )
// }
//
// const TableBody = () => {
//   return(
//     <tbody>
//       <tr>
//         <td>Nikhil</td>
//         <td>Developer</td>
//       </tr>
//       <tr>
//         <td>Abhraham</td>
//         <td>Operational Head</td>
//       </tr>
//       <tr>
//         <td>Suman</td>
//         <td>Developer</td>
//       </tr>
//     </tbody>
//   )
// }
//
// class Table extends Component{
//   render(){
//     return(
//       <table>
//         <TableHeader/>
//         <TableBody />
//       </table>
//     )
//   }
// }
//
// export default Table


//New code for dynamic display
import React, { Component } from 'react'

const TableBody = () =>{
  return <tbody />

}

class Table extends Component{
  render(){
    const { characterData } = this.props

    return(
      <table>
        <TableHeader />
        <TableBody characterData = {characterData} >
        </table>
    )
  }
}
export default Table