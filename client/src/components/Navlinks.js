import links from '../utils/links';
import { NavLink } from 'react-router-dom';
const Navlinks = ({toggleSidebar}) => {
  return (
<div className="navlinks">
                {links.map((link)=>{
                    const{id,path,text,icon}=link
                    return <NavLink to={path} key={id} onClick={toggleSidebar} className={({isActive})=>isActive?"nav-link active":"nav-link"}>
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                })}
            </div>
  )
}

export default Navlinks