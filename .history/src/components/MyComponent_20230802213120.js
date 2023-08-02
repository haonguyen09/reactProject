import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    // JSX
    state = {
        listUsers: [
            {id: 1, name: "NHao", age: 16},
            {id: 2, name: "Hao", age: 64},
            {id: 3, name: "Nhat", age: 21},
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(">>> check data from parent: ",userObj);
    }


    render() {
        return (
            <div>
                <AddUserInfo 
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfo
                    listUsers={this.state.listUsers} 
                    
                    />
            </div>
            );
    };

    }
    


export default MyComponent;