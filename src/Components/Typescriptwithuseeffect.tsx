import React, { useState, useEffect } from "react";

interface users
{
  id:number;
  name : string;
}
export function Useeffecttypescript() {
  const [data, setData] = useState<users[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const dataVal = await result.json();
        if (isMounted) {
          setData(dataVal);
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error.message);
          console.log('Error message:', error.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      {data && <div>
       <ul>
        <span>Typescript with useEffect</span>
       {data.map((d,index)=>(
         <li key={index}>
           {d.name}
         </li>
       ))} 
       </ul>
     </div>}
    </>
  );
}
