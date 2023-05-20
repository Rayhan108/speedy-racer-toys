import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
document.title =`${title} | Speedy-Racer-Toys`
    },[title])
}
export default useTitle;