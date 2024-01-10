
import Link from "next/link"

//Next Hooks
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  {path: '/', name:'Home'},
  {path: '/pages/about', name:'About'},
  {path: '/pages/project', name:'Project'},
  {path: '/pages/contact', name:'Contact'}
]


const NavContent = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <>
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
        <Link href={link.path} key={index} 
        className={`capitalize ${linkStyles}`}>

          {link.path === path && (
            <motion.span initial={{y: '-100%'}} animate={{y:0}} transition={{type:'tween'}} layoutId="underline" className={`${underlineStyles}`}/>
          )}

          {link.name}
          
          </Link>
        );
      })}
    </nav>
    </>
  )
};

export default NavContent