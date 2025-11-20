import { Link } from "react-router-dom"

const NavBar = ()=>{
return(
    <>
    <div className="navbar">
        <div className="logo">
         LOGO
        </div>
        <div className="linkstyle">
         <Link className="linklist" to="/">
            StateProcess
          </Link>
        </div>
    </div>
    </>
)
}
export default NavBar