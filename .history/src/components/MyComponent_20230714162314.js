import React from 'react';

class MyComponent extends React.Component {
    // JSX

    state = {
        name: "NHao",
        address: "Hoi dan IT",
        age: 26
    };

    handleClick() {
        console.log("click me");
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={this.state}>CLick me</button>
            </div>
        );
    }
}


export default MyComponent;