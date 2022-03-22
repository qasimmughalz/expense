import React,{useEffect, useState} from "react"


export default function useCustomHook(incomingtitle  ){
  
    const [title, setTitle]= useState(incomingtitle)
  
    return[title, setTitle]

}