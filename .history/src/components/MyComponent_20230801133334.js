import React from 'react';
import Info from './Info';
import MyInfo from './MyInfo';

class MyComponent extends React.Component {
    // JSX
    state = {
        listUsers: [
            {id: 1, name: "NHao", age: 26},
            {id: 2, name: "Hao", age: 24},
            {id: 3, name: "Nhat", age: 21},
        ]
    }


    render() {
        return (
            <div>
                <Info />
                <MyInfo name=" Hoi dan IT" age="30"/>
            </div>
            );
    };

    }
    


export default MyComponent;