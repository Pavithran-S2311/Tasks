import React from 'react';
class Display extends React.Component{
    render() {
        return(
            <div>
                <p>This is from display component</p>
                <p>{this.props.firstname}</p>
                <p>{this.props.city}</p>
            </div>
        );
    }
}
export default Display;