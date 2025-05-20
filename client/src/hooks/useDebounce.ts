import { useEffect, useState } from "react"

export const useDebounce= <T>(value:T,delay:number): T =>{
    const [searchValue,setSearchValue]= useState<T>(value);

    useEffect(()=>{

        const hander= setTimeout(()=>{
            setSearchValue(value);
        },delay)

        return ()=> clearTimeout(hander);
    },[delay,value])
    
    return searchValue;

}