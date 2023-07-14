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
            </div>
        );
    }
}


export default MyComponent;