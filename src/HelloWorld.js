import React, {useState} from 'react';

const Greetings = (props) => {
    let [inputVal, setInputVal] = useState('')
    let [submitTxt, setSubmitTxt] = useState('World')
    let inputHandler = (e) => {
        // console.log(e.target.value)
        setInputVal(e.target.value)
    }

    let buttonHandler = () => {
        setSubmitTxt(inputVal || props.name)
    }
    let clearInput = () => {
        setInputVal('')
    }
    return ( 
        <div>
            <h1>Hello {submitTxt}!!</h1> 
            <input type="text" value={inputVal} onChange={inputHandler} onClick={clearInput} placeholder='type your name'/>
            <button onClick={() => buttonHandler()}>Submit</button>
        </div>
    );
}
 

export default Greetings;
