import React,{Component} from 'react';
import { Button } from 'react-bootstrap'
import Css from './components/css/Css'
import TicTacToe from './components/tictactoe/TicTacToe'
import ClassTemplate from './components/templates/ClassTemplate'
import BrowserTemplate from './components/templates/BrowserTemplate'
import StoreTemplate from './components/templates/StoreTemplate'
import ReducerTemplate from './components/templates/ReducerTemplate'
import ActionTemplate from './components/templates/ActionTemplate'
import MappingStateTemplate from './components/templates/MappingStateTemplate'
import ProviderBrowserTemplate from './components/templates/ProviderBrowserTemplate'
import AsyncAwaitExample from './components/templates/AsyncAwaitExample'
import ProviderConsumer from './components/templates/ProviderConsumerExample'
import HOCExample from './components/templates/HOCExample'
import ModalTemplate from './components/templates/ModalTemplate'
import RNRFTemplate from './components/templates/RNRouterFluxTemplate'

import './App.css';

export const Context = React.createContext(null);

const withTitle = Element => props =>(
<Element {...props} title="Higher Order Component Example" />)

const TitledHOCExample = withTitle(HOCExample);
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            backgroundColor:'white',
            react:true,
            reactNative:false,  //Needs to be changed for a better way
        }
    }
    
  changeBackground = (color,time) => {
      return new Promise(resolve=>{
          setTimeout(() => resolve(this.setState({backgroundColor:color})),time);
      })
  }
  
  callChange = async () =>{
      await this.changeBackground('darkviolet',500);
  }
  
  render(){
      this.callChange();
  return (
    <div className="App" style={{backgroundColor:this.state.backgroundColor,height:'100vh'}}>        
            <h1>
            React Cheat Sheet
            </h1>
            <Button variant="primary" 
                style={{marginRight:'15px'}} 
                className={this.state.react && 'active'} 
                onClick={()=> 
                    this.setState({
                        react:true,
                        reactNative:false
                })}>
                React
            </Button>
            <Button variant="primary" 
                className={this.state.reactNative && 'active'} 
                onClick={()=> 
                    this.setState({
                        react:false,
                        reactNative:true
                })}>
                React native
            </Button>
            {this.state.react?
                <ReactContainer/>
            :
                <div>
                    <ModalTemplate
                        Style={'col small left'}
                    />
                    <RNRFTemplate
                        Style={'col large left'}    
                    />
                </div>
            }
    </div>      
  );
  }
}

export default App;

const ReactContainer = () => {
    return(
    <div>
        <Css 
        Style={'col small left'}
        />                          
        <TicTacToe
            Style={'col large right'}
        />                                
        <ClassTemplate
            Style={'col small text left'}
        />                           
        <BrowserTemplate
            Style={'col large text right'}
        />                             
        <StoreTemplate
            Style={'col small text left'}
        />                             
        <ProviderBrowserTemplate
            Style={'col large text right'}
        />                        
        <ActionTemplate
            Style={'col small text left'}
        />                               
        <ReducerTemplate
            Style={'col small text left'}
        />
        <MappingStateTemplate
            Style={'col large text right'}
        />
        <AsyncAwaitExample
            Style={'col small text left'}
        />
        <TitledHOCExample
            Style={'col small text left'}
        />
        <Context.Provider value={'Provider-Consumer Example'}>
            <ProviderConsumer 
                Style={'col large text right'}
            />                    
        </Context.Provider>
    </div>
    )
}