import React ,{useState} from 'react';
import {Form} from 'react-bootstrap'

const Search = (props) => {
    const [ searchValue, setSearchValue] = useState("");


    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputValue = () => {
        setSearchValue("");
    }
    
    const callSearchFunc = (e)  => {
        e.preventDefault();
        props.search(searchValue);
        resetInputValue();
    }



    return (
        <Form className="search">
            <input 
              value ={searchValue}
              onChange = {handleSearchValue}
              type = "text" 
              />
              <input onClick = {callSearchFunc} type ="submit" value ="SEARCH" />
        </Form>
    )
}

export default Search;