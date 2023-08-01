import React from 'react';

class MyInfo extends React.Component {



    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            
            

            <div>
                <div>
                    <span>Hide</span>
                </div>
                
                <div>
                    {
                        listUsers.map((user) => {
                            return (
                                    <div key ={user.id} className={user.age > 18 ? "green" : "red"}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age }</div>
                                        <hr/>
                                    </div>
                                )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default MyInfo