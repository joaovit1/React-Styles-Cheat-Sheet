import React,{Component} from 'react';

class List extends Component {
    render(){
        return (
            <ul>
        {
            this.props.items.map(function(item) {
              return <li key={item}>{item}</li>
            })
        }
      </ul>
        );}
}

export default List;

//https://codepen.io/pjmtokyo/full/ZGVjVV