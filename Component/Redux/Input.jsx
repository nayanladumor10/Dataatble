import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { myAction } from './Action';

export default function Input() {
    const [state,setstate] = useState((''));
    const dispatch = useDispatch()
    function addtext(e){
      setstate(e.target.value);
    }

    function add(){
        dispatch(myAction(state))
    }
  return (
    <div>
    <input type="text" onChange={addtext}/>
    <button onClick={add}>add</button>
    </div>
  )
}
