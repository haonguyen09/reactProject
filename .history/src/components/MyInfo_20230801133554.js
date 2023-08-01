import React from 'react';

class MyInfo extends React.Component {



    render() {
        const { id, age, name } = this.props;
        return (
            
            <div>
                <div>My id is {id}</div>
                <div>My name is {name}</div>
                <div>My age is {age }</div>

                
            </div>
        )
    }
}

export default MyInfo