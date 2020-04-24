import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

export default function Login () {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return userName.length > 0 && password.length > 0;
      }
    
      function handleSubmit(event) {
        event.preventDefault();
      }
    
      return (
        <div className="Login">
          <form onSubmit={handleSubmit}>
            
            <FormGroup controlId="userName" bsSize="large">
              <Form.Label>Username</Form.Label>
              <FormControl
                autoFocus
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
              Login
            </Button>
          </form>
        </div>
      );
}