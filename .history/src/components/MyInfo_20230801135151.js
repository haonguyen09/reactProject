import React from 'react';

class MyInfo extends React.Component {



    render() {
        const {listUsers } = this.props;
        return (
            
            

            <div>
                {/* <div>My id is {id}</div>
                <div>My name is {name}</div>
                <div>My age is {age }</div> */}
                {
                    listUsers.map((user) => {
                    return (
                    <div>
                            <div>My name is {user.name}</div>
                            <hr/>
                        <div>My age is {user.age }</div>
                    </div>
                    )
                })}
                
            </div>
        )
    }
}

export default MyInfo