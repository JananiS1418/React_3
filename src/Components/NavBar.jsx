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
          <Link className="linklist" to="/State">
            State
          </Link>
          <Link className="linklist" to="/Fibanocci">
            Fibanocci
          </Link>
          <Link className="linklist" to="/Props">
            Props
          </Link>
        </div>
    </div>
    </>
)
}
export default NavBar