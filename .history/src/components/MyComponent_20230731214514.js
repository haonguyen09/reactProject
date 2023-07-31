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
        
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <form>
                    <input type="text" onChange = {(event) => {}} />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}


export default MyComponent;