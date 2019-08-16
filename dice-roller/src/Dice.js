import React from 'react';

export default class Dice extends React.Component{

render(){
return(
<React.Fragment>
<button onClick={this.props.finalRoll}>{this.props.nums}</button>
</React.Fragment>

)
}
}