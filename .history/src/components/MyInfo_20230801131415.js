import React from 'react';

class MyInfo extends React.Component {
    render() {
        const { age, name } = this.props;
        const arr = [1,2,3,4];
                const obj = {
                    age: 12,
                    name: "nj"
                }
        return (
            
            <div>
                <div>My name is {name}</div>
                <div>My age is {age }</div>

                
            </div>
        )
    }
}

export default MyInfo