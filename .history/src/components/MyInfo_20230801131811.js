import React from 'react';

class MyInfo extends React.Component {
    render() {
        const { age, name } = this.props;
        const arr = [1,2,3,4];
        const obj = {
                    a: 12,
                    n: "nj"
        }
        const { a, n } = obj;
        const { x, y } = arr;
        console.log({x, y});
        return (
            
            <div>
                <div>My name is {name}</div>
                <div>My age is {age }</div>

                
            </div>
        )
    }
}

export default MyInfo