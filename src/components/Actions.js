import React, {Component} from "react";

class Actions extends Component {
    render() {
        return (
            <div className="actionContainer">
                    <span onClick={this.props.onClick} data-action="Rock" className="symbol" role="img" aria-label="rock">👊</span> 
                    <span onClick={this.props.onClick} data-action="Paper" className="symbol " role="img" aria-label="paper">✋</span>
                    <span onClick={this.props.onClick} data-action="Scissors" className="symbol " role="img" aria-label="scissors">✌️</span>
            </div>
        )
    }
}


export default Actions;