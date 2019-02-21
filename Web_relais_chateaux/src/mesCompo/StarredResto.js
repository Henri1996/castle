import React, { Component } from 'react';

import myBuffer from '../StarredRestaurant'
import { Table } from 'reactstrap';



class StarredResto extends Component {
  
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  onClick(){
    this.setState({
      count:+ 1
    })
  }
  render() {
    
  const listItems = Object.entries(myBuffer).map((d) => {
    const [val ,key ] = d;
    if("Restaurant Pierre Orsi" != val)
    {
      return (
        <tr>
        <th scope="row">{++this.state.count}</th>
        <td>{val}</td>
        <td>{key}</td>
        
      </tr>
      )

    }
    }
  );

    return (
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Chateaux</th>
          <th>Restaurants</th>
     
        </tr>
      </thead>
      <tbody>
        
        {listItems}
      </tbody>
    </Table>
      
    );
  }
   
}
export default StarredResto;
