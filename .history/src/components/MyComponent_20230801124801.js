import React from 'react';
import Info from './Info';
import MyInfo from './MyInfo';

class MyComponent extends React.Component {
    // JSX



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