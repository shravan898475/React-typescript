import React,{useState} from "react";

export function Togglebutton()
{
    const[checked,setChecked]=useState(false);
    return(
        <>
        <h1>Toggle tsx</h1>
        <input type="checkbox"
        checked={checked}
        onClick={(e:any)=>setChecked(e.target.checked)}
        />
        </>
    )
}