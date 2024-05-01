import { Link, useLocation } from "react-router-dom"


const Breadcrumb = () => {
    const {pathname} = useLocation();
   const pathnames = pathname.split('/').filter((x)=>x);
   console.log(pathnames);
   let breadcrumb='';

  return (
    <>
    <div className="container-fluid mb-4">
        {pathnames.length > 0 && <Link className="text-decoration-none" to="/">Dashboard</Link>}
        {pathnames.map((name, index)=>{
          breadcrumb+=`/${name}`;
          const isLast = index === pathnames.length-1
          return( isLast ? <span> / {name} </span> : <span>/ <Link to={breadcrumb}>{name}</Link> </span>
          )
        })}
    </div>
    </>
  )
}

export default Breadcrumb
