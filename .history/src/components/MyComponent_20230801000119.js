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

    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handOnSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <UserInfo></UserInfo>
            </div>
            );
        }
    }
    


export default MyComponent;