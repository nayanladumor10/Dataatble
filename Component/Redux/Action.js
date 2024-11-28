export const myAction = (playload)=>{
    return{
        type:"ADD",
        playload
    }
}
export const mydelete = (i)=>{
    return{
        type:"DELETE",
        playload: {i},
    }
}
export const myedit = (i,data)=>{
    return{
        type:"EDIT",
        playload: {i,data},
    }
}