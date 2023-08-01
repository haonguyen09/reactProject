import React from 'react';

class MyInfo extends React.Component {


    state = {
        isShow: true,
    }

    handleShowHide = () => {
        this.setState.toggle({
            isShow: false
        })
    }

    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            
            

            <div>
                <div>
                    <span onClick={()=> {this.handleShowHide()}}>Hide</span>
                </div>
                {this.state.isShow &&
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