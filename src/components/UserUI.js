function element() {
   const refToElement = useRef()
   useEffect(() => {
     const Clicked = (event) => {
                  if(ref.current && ref.current.contains(event.target)){
                       event.stopPropagation() 
                       console.log("I HAVE BEEN CLICKED")
                       return
                 }
     }
 
      window.addEventListener("click", Clicked)
 
     return () => {
         window.removeEventListener("click", Clicked)
    }
   },[ref])
 
 
  return <element ref={refToElement}></element>
 }