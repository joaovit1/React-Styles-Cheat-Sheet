import React,{Component} from 'react';
import { Jumbotron,Container } from 'react-bootstrap'
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
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            backgroundColor:'white'
        }
    }
    
  changeBackground = (color,time) => {
      return new Promise(resolve=>{
          setTimeout(() => resolve(this.setState({backgroundColor:color})),time);
      })
  }
  
  callChange = async () =>{
      await this.changeBackground('darkviolet',1000);
  }
  
  render(){
      this.callChange();
  return (
    <div className="App" style={{backgroundColor:this.state.backgroundColor}}>        
            <h1>
            React Cheat Sheet
            </h1>
            <Container>
                   <div className='col small left'>                                          
                        <fieldset>
                            <legend>CSS Cheat Sheet</legend>
                            <Jumbotron style={{height:'400px'}}>
                                <Container>
                                    <Css/>
                                </Container>
                            </Jumbotron>   
                        </fieldset>      
                    </div>                    
                    <div className='col large right'>
                        <fieldset>
                            <legend>TicTacToe</legend>
                            <Jumbotron>
                                <Container>
                                    <TicTacToe/>
                                </Container>
                            </Jumbotron>
                        </fieldset>
                    </div>
                    <div className='col small text left'>                                  
                        <ClassTemplate/>
                    </div>
                    <div className='col large text right'>                                  
                        <BrowserTemplate/>
                    </div>
                    <div className='col small text left'>                                 
                        <StoreTemplate/>
                    </div>
                    <div className='col large text right'>                                  
                        <ProviderBrowserTemplate/>
                    </div>                    
                    <div className='col small text left'>                                 
                        <ActionTemplate/>
                    </div>
                    <div className='col small text left'>                                  
                        <ReducerTemplate/>
                    </div>
                    <div className='col large text right'>                                  
                        <MappingStateTemplate/>
                    </div>
                    <div className='col small text left'>                                                            
                        <AsyncAwaitExample/>                              
                    </div>
            </Container>
    </div>      
  );
  }
}

export default App;
