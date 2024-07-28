import React from "react";

interface IProps
{
    name:string;
}
export default function Normalprops(props: IProps)
{
    const{name}=props;
    return(
        <>
          <h1>Normal TS Props : {name}</h1>
        </>
    )
}