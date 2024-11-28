import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {mydelete} from './Action'
import { myedit } from './Action'

export default function Display() {
    const data = useSelector((store=>{return store}))
    const dispatch = useDispatch();
    

    function deletee(index){
      dispatch(mydelete(index))
    }

    function edit(index){
      let keyword = prompt('enter the currect world');
      dispatch(myedit(index,keyword))
    }

    console.log(data);
  return (
    <div>
{
    data.map((el,i)=>{
        return <li>{el} <button onClick={()=>deletee(i)}>Delete</button>
                         <button onClick={()=>edit(i)}>Edit</button>                     
                                              </li>
    })
}
    </div>

  )
}
