import { applyMiddleware, createStore } from "redux";
import reducer from './reducer'
import { get_request,get_success,get_fail} from "./action";
import thunk from "redux-thunk";
import axios from "axios";

const getUser=()=>{
    return (dispatch)=>{
        dispatch(get_request())
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            const users=res.data;
            dispatch(get_success(users))
        }).catch((error)=>{
                dispatch(get_fail(error.message))
        })
    }
}
const store=createStore(reducer,applyMiddleware(thunk));

// console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})
// unsubscribe()
store.dispatch(getUser());
export default store