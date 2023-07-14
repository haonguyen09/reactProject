import React from 'react';

class MyComponent extends React.Component {
    // JSX

    state = {
        name: "NHao",
        address: "Hoi dan IT",
        age: 26
    };

    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={(e) => {
                    console.log("click me");
                }}>CLick me</button>
            </div>
        );
    }
}


export default MyComponent;