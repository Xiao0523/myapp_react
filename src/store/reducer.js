import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM ,INIT_LIST_ACTION} from './actionType';

const defaultState = {
    inputValue:"",
    List:[]
}
export default ( state = defaultState,action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === INIT_LIST_ACTION){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.List = action.data;
        return newState;
    }

    if(action.type === ADD_TODO_ITEM){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.List.push(newState.inputValue);
        newState.inputValue ='';
        //console.log(newState);
        return newState;
    }
    
    if(action.type === DELETE_TODO_ITEM){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.List.splice(action.index,1);
        return newState;
    }
   
   // console.log(state,action);
    return state;
}