import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
function App() {
  const Users=[
    {name:"ANIL",email:"anil@gmail.com",contact:192345},
    {name:"IMTISAL",email:"imti@gmail.com",contact:102354},
    {name:"Hussain",email:"Hussain@gmail.com",contact:182543},
    {name:"Abass",email:"Abass@gmail.com",contact:175423},
    {name:"Abass",email:"Abass@gmail.com",contact:175423},
    {name:"Abass",email:"Abass@gmail.com",contact:175423},
  ]
  return (
    <div className="App">

<h1>List with bootsrap table</h1>

      
     
    
     <Table striped variant='dark'>
      <tbody>
     <tr>
        <td>Name</td>
        <td>Contact</td>
        <td>Email</td>
      </tr>

{
 Users.map((item,i)=>

//  this is condition

//  item.contact===175423?
// <tr key={i}>
//   <td>{item.name}</td>
//   <td>{item.email}</td>
//   <td>{item.contact}</td>
//  </tr> : null
//  )
<tr key={i}>
  <td>{item.name}</td>
  <td>{item.email}</td>
  <td>{item.contact}</td>
 </tr>
 )
}
</tbody>
</Table>
    
    </div>
  );
}

export default App;

