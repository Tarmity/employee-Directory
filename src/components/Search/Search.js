import React from "react";
import './Search.css';
import { Form, Button, FormControl } from 'react-bootstrap';

const Search = (props) => {
    return (
        <Form inline className="containers">
            <FormControl
                className="search"
                type="text" 
                placeholder="Search.."
                value= {props.search}
                onChange= {props.handleInputChange}
                 name= "term"
                 id="term"
                />
                {/* <Button type="button" className="btn btn-secondary">Submit</Button>                */}
        </Form>

    )
}
export default Search;