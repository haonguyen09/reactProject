import React from 'react';

class MyInfo extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>My name is NHao</div>
                <div>My age is 21</div>
            </div>
        )
    }
}

export default MyInfo