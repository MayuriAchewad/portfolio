export const cntReducer = (state={ name : "", email : "", subject : "", submit : "" }, action)=>{
    switch(action.type){
        case "addname":
            return{
                ...state,
                name : action.payload
            }
        case "addemail":
            return{
                ...state,
                email : action.payload
            }
        case "addsubject":
            return{
                ...state,
                subject : action.payload
            }
        case "addsubmit":
            return{
                ...state,
                submit : action.payload
            }
    }
    return state;
}