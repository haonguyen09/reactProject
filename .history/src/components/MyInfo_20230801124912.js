import React from 'react';

class MyInfo extends React.Component {
    render() {
        return (
            console.log(this.props)
            <div>
                <div>My name is NHao</div>
                <div>My age is 21</div>
            </div>
        )
    }
}

export default MyInfo