
import { motion } from "framer-motion"

const Footer = () => {
  return (
      
        <div >
              <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                
                className="text-center tracking-tighter ">Copyright 2024</motion.p>

              <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}

                className="text-center tracking-tighter ">Designed and created by Ajay Tiwari</motion.p>
        </div>
    
  )
}

export default Footer
