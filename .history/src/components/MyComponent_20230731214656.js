import React from 'react';

class MyComponent extends React.Component {
    // JSX

    state = {
        name: "NHao",
        address: "Hoi dan IT",
        age: 26
    };

    handleClick(value) {

        console.log(">>> Hello world", this.state.name);


    }


    handleChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <form>
                    <input type="text" onChange = {(event) => {this.handleChange(event)}} />
                    <button onClick = {(event) => {this.handleClick(event)}}>Submit</button>
                </form>

            </div>
        );
    }
}


export default MyComponent;