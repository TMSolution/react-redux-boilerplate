import React from "react";

export  const reducerProvider=(connect,object,reducerName,reducer)=>{   
    return (props)=>{
       props.store.reducerManager.add(reducerName,reducer);
       const Child= connect(object);
       return (<Child {...props}/>)
   
   }
   }