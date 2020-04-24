import React, { Component }  from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Redirect, Router} from 'react-router-dom';

class Add extends Component {
    
    constructor(props){
        super(props)
        this.state = {      
        id: "",
        customer: "",
        destination: "",
        driver: "",
        deliveryDate: new Date(),
        redirect: false
        } 
        this.handleChange = this.handleChange.bind(this);
    }
   

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    onChange = deliveryDate => 
    this.setState({ deliveryDate })
  
  
    submitHandler = e => {
        
        var load = this.state
        load = JSON.stringify(load)
        axios.post('http://localhost:8080/add', load, { headers: {  "Content-Type": "application/json"  }})
        this.setState({redirect: true})
        
    }
    
    render() {
        const { customer, destination, driver, deliveryDate, redirect} = this.state
      
        return redirect ? <Redirect to='/' />: (
        <div className="add-form">
            <Form onSubmit={this.submitHandler}>
                <Form.Group >
                    <Form.Label>Customer</Form.Label>
                    <Form.Control type="text" name="customer" value = {customer} onChange={this.handleChange} />
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text"  name="destination" value= {destination}  onChange={this.handleChange} />
                    <Form.Label>Driver</Form.Label>
                    <Form.Control type="text"  name="driver" value= {driver} onChange={this.handleChange} />
                    <Form.Label>Delivery Date</Form.Label>
                    <Calendar   name="date" value= {deliveryDate} onChange={this.onChange}/>
                </Form.Group>
                <Button variant="success" type="submit" className="add-button1" >Add Load</Button>
            </Form>
        </div>
        
        );
    }
}

 // this.handleSubmit = this.handleSubmit.bind(this);
    // async handleSubmit(event){
    //     const {load} = this.state;
    //     await fetch('/add', {
    //         method : 'POST',
    //         headers : {
    //             'Accept' : 'application/json',
    //             'Content-Type' : 'application/json'
    //             },
    //         body : JSON.stringify(load),
    //         })
    //     this.props.history.push('/');
        
    // }
  
  export default Add;