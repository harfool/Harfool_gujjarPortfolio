import { useState ,useEffect} from "react"
import "./Cursor.css"
import { motion } from "framer-motion"
const Corsur = () => {
    const [position ,setPosition] = useState({
        y :0 ,
        x :0
    })

    useEffect(()=>{
        const mouseMove =(e)=>{
            setPosition({
                x: e.clientX,
                y : e.clientY
            })
        }

        window.addEventListener("mousemove" , mouseMove)

        return ()=>{

            window.removeEventListener("mousemove" , mouseMove)
        }
    } , [])

  return (
    <motion.div className="Corsur"  animate={{x :position.x+10 ,y : position.y+10}}></motion.div>
  )
}

export default Corsur