import React from 'react';

class MyInfo extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "NHao", age: 26},
            {id: 2, name: "Hao", age: 24},
            {id: 3, name: "Nhat", age: 21},
        ]
    }

    render() {
        const { age, name } = this.props;
        return (
            
            <div>
                <div>My name is {name}</div>
                <div>My age is {age }</div>

                
            </div>
        )
    }
}

export default MyInfo