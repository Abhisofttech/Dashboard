import '../index.css'
import { Link } from 'react-router-dom'
const SideNav = () => {
  return (
    <>
      <div className="sidenav bg-dark text-white-50" >
        <div className="nav-item">
          <ul className='list-unstyled ms-4 fw-bold' id='sidebar'>
            <li className='mt-4'>CORE</li>
            <li> <i className="bi bi-speedometer  me-2"></i>  <Link className='text-decoration-none text-white-50 fw-lighter ' to='./'> Dashboard   </Link>   </li>
            <li className='mt-4'>INTERFACE</li>
            <li> <i className="bi bi-layout-split  me-2"></i>  <Link className='text-decoration-none text-white-50 fw-lighter ' to='' data-bs-toggle="collapse" data-bs-target="#showOne" aria-expanded="false" aria-controls="showOne" >  Layouts  &nbsp; <i className="bi bi-chevron-down"></i> </Link>
              <ul className='list-unstyled ms-4 fw-bold collapse' id="showOne" data-bs-parent="#sidebar">
                <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/StaticNavigation '>Static Navigation</Link></li>
                <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/LightSideNavigation '>Light Sidenav</Link></li>
              </ul>
            </li>
            <li> <i className="bi bi-book  me-2"></i>  <Link className='text-decoration-none text-white-50 fw-lighter ' to='' data-bs-toggle="collapse" data-bs-target="#showTwo" aria-expanded="false" aria-controls="showTwo">    Pages  &nbsp;  <i className="bi bi-chevron-down"></i></Link>
              <ul className='list-unstyled ms-4 fw-bold collapse' id="showTwo" data-bs-parent="#sidebar">
                <span id="parent2">
                  <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='' data-bs-toggle="collapse" data-bs-target="#showThree" aria-expanded="false" aria-controls="showThree">Authentication &nbsp;  <i className="bi bi-chevron-down"></i></Link>
                    <ul className='list-unstyled ms-4 fw-bold collapse' id="showThree" data-bs-parent="#parent2">
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Login'>Login</Link></li>
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Register'>Register</Link></li>
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/ForgetPassword'>Forget Password</Link></li>
                    </ul>
                  </li>
                  <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='' data-bs-toggle="collapse" data-bs-target="#showFour" aria-expanded="false" aria-controls="showFour">Error &nbsp;   <i className="bi bi-chevron-down"></i></Link>
                    <ul className='list-unstyled ms-4 fw-bold collapse' id="showFour" data-bs-parent="#parent2">
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Error401'>Error1</Link></li>
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Error402'>Error2</Link></li>
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Error403'>Error3</Link></li>
                      <li> <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Error500'>Error4</Link></li>
                    </ul>
                  </li>
                </span>
              </ul>
            </li>
            <li className='mt-4'>ADDONS</li>
            <li> <i className="bi bi-graph-up  me-2"></i>  <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Charts'>  Charts  </Link>  </li>
            <li> <i className="bi bi-table  me-2"></i>  <Link className='text-decoration-none text-white-50 fw-lighter ' to='/Tables'>   Tables </Link> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideNav
