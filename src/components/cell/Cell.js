import React, {Component} from 'react';
import './cell.css'

class Cell extends Component {
    handleClick = () =>{        
        this.props.onClick(this.props.keys);
    }
    render(){
        const {value} = this.props;
        return (
                value==='X'?
                    <div className="cell" style={{width:"33%",height:"100%",backgroundColor:"red",display:"inline-block"}} onClick={this.handleClick}>
                    {this.props.value}
                    </div>
                :
                value==='O'?
                    <div className="cell" style={{width:"33%",height:"100%",backgroundColor:"blue",display:"inline-block"}} onClick={this.handleClick}>
                    {this.props.value}
                    </div>
                :
                    <div className="cell" style={{width:"33%",height:"100%",backgroundColor:"white",display:"inline-block"}} onClick={this.handleClick}>
                    -
                    </div>         
        );   
    }
}

export default Cell;
