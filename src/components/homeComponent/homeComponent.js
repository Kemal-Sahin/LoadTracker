import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button}  from 'react-bootstrap';





class Home extends Component {
    state = {
        Loads : []
    }
    async componentDidMount(){
        const response=await fetch("http://localhost:8080")
        const body = await response.json();
        this.setState({Loads :body});
    }

    // async remove(id) {
    //     await fetch("http://localhost:8080", {
    //         method: 'DELETE',
    //         headers : {
    //             'Accept' : 'application/json',
    //             'Content-Type' : 'application/json'
    //         }
    //     }).then(() => {
    //         let updatedLoads = [this.state.Loads].filter(i => i.id !== id);
    //         this.setState({Loads : updatedLoads});
    //     },
    //     }
    // }
 
    render() {
    const {Loads} = this.state;
    
    
    return (
        <div >
        <Table striped bordered hover className="scrollTable">
        <thead>
            <tr>
            <th width="10px">Load #</th>
            <th>Customer</th>
            <th>Destination</th>
            <th>Driver</th>
            <th>Delivery Date</th>
            <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {Loads.map( load =>
                <tr key={load.id}>
                <td>{load.id}</td>
                <td>{load.customer}</td>
                <td>{load.destination}</td>
                <td>{load.driver}</td>
                <td>{load.deliveryDate}</td>
                <td><Button variant="outline-danger">Delete</Button></td>
            </tr>)}
        </tbody>
        </Table>
        <Button variant="outline-success" className="add-button" href="/add">Add Load</Button>
        </div>
        )
    }
}

export default Home;