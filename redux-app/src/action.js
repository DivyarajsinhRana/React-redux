
const get_request=()=>{
        return{
            type:"get_request"
        }
}
const get_success=(users)=>{
    return{
        type:"get_success",
        payload:users
    }
}
const get_fail=(error)=>{
    return{
        type:"get_fail",
        payload:error
    }

}
export { get_request,get_success,get_fail}