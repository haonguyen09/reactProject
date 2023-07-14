import React from 'react';

class MyComponent extends React.Component {
    // JSX

    state = {
        name: "NHao",
        address: "Hoi dan IT",
        age: 26
    };

    handleClick(value) {
        console.log(value);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={this.handleClick(this.state.name)}>CLick me</button>
            </div>
        );
    }
}


export default MyComponent;