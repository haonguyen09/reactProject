import React from 'react';

class MyComponent extends React.Component {
    // JSX

    state = {
        name: "NHao",
        address: "Hoi dan IT",
        age: 26
    };

    handleClick(value) {



    }


    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handOnSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <form onSubmit={(event) => this.handOnSubmit(event)}>
                    <input type="text" onChange = {(event) => {this.handleChange(event)}} />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}


export default MyComponent;