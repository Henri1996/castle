import React, { Component } from 'react';
import {  Card , Button,CardTitle,CardText } from 'reactstrap';


class CardFilter extends Component{
    render()
    {
        return (
            <div >
            <Card body inverse color="info">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
          </div>
        )
    }
    
}
export default CardFilter