import React from 'react';

class MyInfo extends React.Component {



    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            
            

            <div>
                
                {
                    listUsers.map((user) => {
                        if (user.age > 18) {
                            return (
                                <div key ={user.id} className="green">
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age }</div>
                                    <hr/>
                                </div>
                            )
                        } else {
                            return (
                                <div key ={user.id} className="red">
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age }</div>
                                    <hr/>
                                </div>
                            )
                        }
                })}
                
            </div>
        )
    }
}

export default MyInfo