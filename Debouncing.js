import { useEffect, useState } from "react";

function App()
{

  const [value,setValue] = useState("");
  const debouncing_value = useDeouncing(value);

  return(
  <>
    {debouncing_value}
    <br />
    <input type="text" onChange={e=>{setValue(e.target.value)}} />
  </>
  )
}

function useDeouncing(value)
{
      const [debouncing_value,setDebouncingValue] = useState();
     
    useEffect(()=>{
     const cleartiming  = setTimeout(()=>{
        setDebouncingValue(value);
      }
    ,500)

    return ()=>{
      clearTimeout(cleartiming);
    }
    },[value])

    return debouncing_value;
}

export default App
