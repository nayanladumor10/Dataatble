import React from 'react'
import { Link, Outlet,  } from 'react-router-dom';


export default function Product() {
  return (
    <div>
       <div>
        <Link to="electronic">electronic</Link>       
        </div>
     <div>
<Outlet/>
     </div>
    </div>
  )
}
