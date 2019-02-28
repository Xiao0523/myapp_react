import React ,{Component} from 'react';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios';
class TodoList extends Component{
    constructor (props){
        super(props);
        this.state = store.getState();
        console.log( this.state );
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
           <TodoListUI  
             inputValue = {this.state.inputValue}
             List = {this.state.List}
             handleInputChange = {this.handleInputChange}
             handleBtnClick = {this.handleBtnClick}
             handleItemDelete = {this.handleItemDelete}
           />
        )
    }
    componentDidMount(){
         axios.get('/List.json').then((res)=>{
              const  data = res.data;
              const action = initListAction(data);
              store.dispatch(action);
              console.log(res);
         })
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        //console.log(e.target.value);
    }
    handleStoreChange(){
        console.log('store changed');
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
       // console.log(index);
    }
}
export default TodoList;