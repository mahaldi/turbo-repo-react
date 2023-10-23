import React from "react";
import { Link } from "ui";
import "./App.css";

function Test() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Docs
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <div>
          <Link className="App-link" href="https://turbo.build/repo">
            Turborepo Docs
          </Link>
          <span> | </span>
          <Link className="App-link" href="https://reactjs.org">
            React Docs
          </Link>
        </div>
      </header>
    </div>
  )
}
// function App(): JSX.Element {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="header">
//           Docs asd
//           <div className="Turborepo">Turborepo Example</div>
//         </h1>
//         <div>
//           <Link className="App-link" href="https://turbo.build/repo">
//             Turborepo Docs
//           </Link>
//           <span> | </span>
//           <Link className="App-link" href="https://reactjs.org">
//             React Docs
//           </Link>
//         </div>
//       </header>
//     </div>
//   );
// }

export default Test;
