import React from 'react';

class MyInfo extends React.Component {


    handleShowHide = () => {

    }

    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            
            

            <div>
                <div>
                    <span onClick={()=> {this.handleShowHide()}}>Hide</span>
                </div>
                {true &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <hr />
                                    </div>
                                )
                            })}
                    
                    </div>
                }
            </div>
        )
    }
}

export default MyInfo