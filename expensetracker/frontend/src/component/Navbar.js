// // // // import React from 'react';
// // // // import Register from './Regsister';

// // // // const Navbar = ({ isAuthenticated, onLogout }) => {
// // // //   return (
// // // //     <div>
// // // //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
// // // //         <div className="container-fluid">
// // // //           <a className="navbar-brand" href="#">Expense Tracker</a>
// // // //           {isAuthenticated ? (
// // // //             <button onClick={onLogout}>Logout</button>
// // // //           ) : (
// // // //             <p>Please login to continue
                
// // // //             </p>
// // // //           )}
// // // //         </div>
// // // //       </nav>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;
// // // import React from 'react';

// // // const Navbar = ({ isAuthenticated, onLogout, toggleRegister,isRegistering  }) => {
// // //   return (
// // //     <div>
// // //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
// // //         <div className="container-fluid">
// // //           <a className="navbar-brand" href="#">Expense Tracker</a>
// // //           {isAuthenticated ? (
// // //             <button onClick={onLogout}>Logout</button>
// // //           ) : (
// // //             <div>
// // //               <button onClick={toggleRegister}>
// // //                 {isRegistering ? 'Go to Login' : 'Register'}
// // //               </button>
// // //               <p>Please login to continue</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;

// // import React from 'react';

// // const Navbar = ({ isAuthenticated, onLogout, toggleRegister, isRegistering }) => {
// //   return (
// //     <div>
// //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //         <div className="container-fluid">
// //           <a className="navbar-brand" href="#">Expense Tracker</a>
// //           {isAuthenticated ? (
// //             <button onClick={onLogout}>Logout</button>
// //           ) : (
// //             <div>
// //               <button onClick={toggleRegister}>
// //                 {isRegistering ? 'Go to Login' : 'Register'}
// //               </button>
// //               <p>Please login to continue</p>
// //             </div>
// //           )}
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;
// import React from 'react';

// const Navbar = ({ isAuthenticated, onLogout, toggleRegister, isRegistering }) => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Expense Tracker</a>
//           {isAuthenticated ? (
//             <button onClick={onLogout}>Logout</button>
//           ) : (
//             <div>
//               <button onClick={toggleRegister}>
//                 {isRegistering ? 'Go to Login' : 'Register'}
//               </button>
//               <p>Please login to continue</p>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Expense Tracker</a>
          {isAuthenticated ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              {/* <Link to="/register">Register</Link> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
