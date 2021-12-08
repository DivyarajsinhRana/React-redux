
const initialState={
    loading:false,
    users:[],
    error:""
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "get_request":{
            return{
                ...state,
                loading:true
            }
        }
        case "get_success":{
            return{
                loading:false,
                users:action.payload,
                error:""
            }
        }
        case "get_fail":
            return{
                loading:false,
                users:[],
                error:action.payload
            }
            default : return state
    }
}
export default reducer

// const response=()=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.data).catch(error=>alert(error))
// }
// const reducer=(state,action)=>{
    
//     if(action.type==="getposts"){
//            state=response();
//            return state;
//     }
//     else{
//         return state
//     }
//     // switch(action.type){
//     //     case "getposts":response()
//     //     default:
//     //         return state
//     // }
// }
