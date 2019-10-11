import React from 'react';
import PropTypes from 'prop-types';
class Clicker extends React.Component
{   constructor(props) {
    super();

    this.state = {
        count: props.count
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
   }
   increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

   decrement() {
     this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

   reset() {
    this.setState(() => ({ count: 0 }));
    }
    render()
    {   var style={
     textAlign:"center",
     backgroundColor:"yellow",
     fontSize:"100px",
     marginLeft:"300px",
     marginRight:"300px",
     height:"300px",
    }
        return(
            <div > 
                <div style={style}>{this.state.count}</div>
                <div style={{textAlign:"center"}}>
                <a  href="#"onClick={this.increment}> <img src={require('./cong.png')} alt="Beautifull" width="20%"/></a>
                <a href="#"onClick={this.reset}> <img src={require('./refresh.png')} alt="Beautifull" width="20%"/></a>
                <a href="#"onClick={this.decrement}> <img src={require('./tru.png')} alt="Beautifull" width="20%"/></a>
                </div>
            </div>
        )
    }

}
Clicker.defaultProps = {
    count: 0
};

Clicker.propTypes = {
    count: PropTypes.number
};
export default Clicker;