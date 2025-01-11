import React from "react";

class UserClassComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,

    };
}

    render()
    {
        const {names, location, type} = this.props;
        const {count} = this.state
        return(
            <div>
                <h2>Count : {count}</h2>

                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}> Count increase</button>

                <h2>Name: {names}</h2>
                <h3>Location: {location} </h3>
                <h3>Type: {type}</h3>
            </div>
        )
    }
}
export default UserClassComponent;
