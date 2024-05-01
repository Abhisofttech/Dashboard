
import '../index.css'
import { Link } from 'react-router-dom'
const Navbar = ({toggleNav}) => {
    return (
        <>
      
            <nav className="navbar navbar-expand-lg bg-dark text-white ps-2 top-nav">


                <Link className="navbar-brand  text-white fs-5 me-5 order-0" to="/">
                   DashBoard Website
                </Link>
                
                <div id="search " className='ms-auto search  d-block '>
                    <form className="d-flex me-2" role="search" id='search-form'>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search for..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary search-icon me-2" type="submit" >
                            <i className="bi bi-search"></i>
                        </button>
                        <div className='profile-logo me-5 '>

                            <div className="dropdown ">
                                <button
                                    className="btn btn-dark dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person-fill"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Setting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Activity log
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Log out
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </form>
                </div>
                <div className=" toggle-memu  ms-3 me-4  " onClick={toggleNav}>
                    <span></span><span></span><span></span>
                </div>


            </nav>
        </>
    )
}

export default Navbar
