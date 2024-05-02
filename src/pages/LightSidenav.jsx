import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import Footer from '../components/Footer'
import '../index.css'
const LightSidenav = () => {
  return (
    <>
    <div className="conainer-fluid lightNav d-flex flex-column justify-content-between ">


    
    <LayoutForLayouts head={"Side Navigation "} content={"React.js is a powerful JavaScript library used for building user interfaces. Its component-based architecture allows developers to create reusable and modular UI elements, making it easier to manage complex applications. React utilizes a virtual DOM (Document Object Model) for efficient rendering, updating only the necessary parts of the UI when data changes. This approach improves performance and ensures a seamless user experience, especially in large-scale applications. React's declarative nature simplifies UI development by abstracting away the manipulation of the DOM directly, allowing developers to focus on writing simple and maintainable code. Additionally, React's ecosystem includes tools like React Router for managing navigation, Redux for state management, and various UI libraries like Material-UI and Ant Design, providing comprehensive solutions for building modern web applications. Overall, React.js continues to be a popular choice among developers for its efficiency, flexibility, and vibrant community support."}/>
    <Footer/>
    </div>
    </>
  )
}

export default LightSidenav
