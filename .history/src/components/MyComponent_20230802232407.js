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
        console.log(">>> check data from parent: ", userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }


    render() {
        return (
            <>
                <div className='a'>
                    <AddUserInfo 
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <DisplayInfo
                        listUsers={this.state.listUsers} 
                        
                        />
                </div>
                <div className='b'>
                    
                </div>
            </>
            );
    };

    }
    


export default MyComponent;