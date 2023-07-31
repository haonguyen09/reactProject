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

    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={(event) => { this.handleClick(event) }}>CLick me</button>
            </div>
        );
    }
}


export default MyComponent;