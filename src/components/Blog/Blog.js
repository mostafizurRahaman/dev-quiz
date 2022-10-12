import React from "react";
import './Blog.css'; 
const Blog = () => {
   return (
      <div className="container blog-container">
         <details>
            <summary>What is the purpose of react router?? </summary>
            <div className="blog-details">
               <ul>
                  <li>
                     react router is a standard library of react for routing.
                  </li>
                  <li>
                     It enables the navigation among views of various components
                     in a React Application, allows changing the browser URL,
                     and keeps the UI in sync with the URL.{" "}
                  </li>
                  <li>
                     We also load data by using useloader look and show on ui.{" "}
                  </li>
               </ul>
            </div>
         </details>
         <details>
            <summary>How does context api works?? </summary>
            <div className="blog-details"> 
               <ul>
                  <li>
                     The React Context API is a way for a React app to
                     effectively produce global variables that can be passed
                     around. This is the alternative to "prop drilling" or
                     moving props from grandparent to child to parent, and so
                     on.
                  </li>

                  <li>
                     React.createContext() is all you need. It returns a
                     consumer and a provider. Provider is a component that as
                     it's names suggests provides the state to its children.{" "}
                  </li>
               </ul>
            </div>
         </details>
         <details>
            <summary>How works useRef() hook ? </summary>
            <div className='blog-details'>
            <ul>
                <li>
                  useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                  </li>
                  <li>It can be used to store a mutable value that does not cause a re-render when updated.
                  </li>
                  <li>
                     It can be used access dom element directly.      </li>
               </ul>
            </div>
         </details>
      </div>
   );
};

export default Blog;
