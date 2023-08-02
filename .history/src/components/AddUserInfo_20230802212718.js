import React from 'react';


class AddUserInfo extends React.Component {
    state = {
        name: "NHao",
        address: "Hoi dan IT",
        age: 26
    };


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
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100) + 1),
            name: "eric",
            age: '28'
        });
    }

    render() {
        return (

            <div>
                <em>
                    My name is {this.state.name}. 
                    My year old is {this.state.age}
                </em>
                <form onSubmit={(event) => this.handOnSubmit(event)}>
                    <input value= {this.state.name} type="text" onChange = {(event) => {this.handleChange(event)}} />
                    <button>Submit</button>
                
                    <input value= {this.state.age} type="text" onChange = {(event) => {this.handleChangeAge(event)}} />
                    <button>Submit</button>
                </form>
        
            </div>

        )
    }
}


export default AddUserInfo;