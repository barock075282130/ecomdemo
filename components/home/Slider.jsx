'use client';

import { useState } from "react";

const Slider = () => {
    const [ page, setPage ] = useState(0)
    const next = () => {
        setPage((p)=> p + 1)
    }
    const prev = () => {
        setPage((p)=> p - 1)
    }
    const data = [{
        id: 1,
        image: 'a'
    },{
        id: 2,
        image: 'b'
    },{
        id: 3,
        image: 'c'
    },{
        id: 4,
        image: 'd'
    },]
  return (
    <div className="relative">
        <div>
            {data.map((img)=>(
                <div key={img.id}>
                    <p>{img.image}</p>
                </div>
            ))}
        </div>
        <div className="flex justify-between absolute">
            <button onClick={()=>next()}>{"next"}</button>
            <button onClick={()=>prev()}>{"prev"}</button>
        </div>
    </div>
  )
}

export default Slider