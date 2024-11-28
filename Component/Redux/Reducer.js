const arr = []

export const myReducer = (state = arr, action)=>{
    if(action.type=="ADD"){
        state=[
            ...state,
            action.playload
        ]
    }
    if(action.type=="DELETE"){
       return state.filter((_,i) => i !== action.playload.i)
    }
    if(action.type=="EDIT"){
      state.i = action.playload.data
     }
    return state;
}