// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const Login = ({ onLogin }) => {
// // // //   const [username, setUsername] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [message, setMessage] = useState('');

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
// // // //       setMessage(response.data);
// // // //       if (response.status === 200) {
// // // //         onLogin();
// // // //       }
// // // //     } catch (error) {
// // // //       setMessage(error.response ? error.response.data : 'Error logging in');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <form onSubmit={handleLogin}>
// // // //         <input
// // // //           type='text'
// // // //           value={username}
// // // //           onChange={(e) => setUsername(e.target.value)}
// // // //           placeholder='Username'
// // // //           required
// // // //         />
// // // //         <input
// // // //           type='password'
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           placeholder='Password'
// // // //           required
// // // //         />
// // // //         <button type='submit'>Login</button>
// // // //       </form>
// // // //       <p>{message}</p>
// // // //       <p>If not registered, please register.</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import navigate from 'react-router-dom'
// // // const Login = ({ onLogin }) => {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [message, setMessage] = useState('');
// // // const navigate=usenavigate()
// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
// // //       setMessage(response.data);
// // //       if (response.status === 200) {
// // //         onLogin();
// // //       }
// // //     } catch (error) {
// // //       setMessage(error.response ? error.response.data : 'Error logging in');
// // //     }
// // //   };
// // //   const handlenavi=()=>{
// // //     navigate(/register)
    

// // //   }

// // //   return (
// // //     <div>
// // //       <form onSubmit={handleLogin}>
// // //         <input
// // //           type='text'
// // //           value={username}
// // //           onChange={(e) => setUsername(e.target.value)}
// // //           placeholder='Username'
// // //           required
// // //         />
// // //         <input
// // //           type='password'
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           placeholder='Password'
// // //           required
// // //         />
// // //         <button type='submit'>Login</button>
// // //       </form>
// // //       <p>{message}</p>
// // //       <p>If not registered, please register.</p>
// // //       <button onClick={handlenavi}>register</button>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const Login = ({ onLogin }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [message, setMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
// //       setMessage(response.data);
// //       if (response.status === 200) {
// //         onLogin();
// //         navigate('/');
// //       }
// //     } catch (error) {
// //       setMessage(error.response ? error.response.data : 'Error logging in');
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type='text'
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           placeholder='Username'
// //           required
// //         />
// //         <input
// //           type='password'
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder='Password'
// //           required
// //         />
// //         <button type='submit'>Login</button>
// //       </form>
// //       <p>{message}</p>
// //       <p>If not registered, please register.</p>
// //       <button onClick={() => navigate('/register')}>Register</button>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
//       setMessage(response.data);
//       if (response.status === 200) {
//         onLogin();
//         navigate('/');
//       }
//     } catch (error) {
//       setMessage(error.response ? error.response.data : 'Error logging in');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type='text'
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder='Username'
//           required
//         />
//         <input
//           type='password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder='Password'
//           required
//         />
//         <button type='submit'>Login</button>
//       </form>
//       <p>{message}</p>
//       <p>
//         If not registered, please register.
//         <button onClick={() => navigate('/register')}>Register</button>
//       </p>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      setMessage(response.data);
      if (response.status === 200) {
        onLogin();
        navigate('/');
      }
    } catch (error) {
      setMessage(error.response ? error.response.data : 'Error logging in');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              {message && <p className="mt-3 text-center">{message}</p>}
              <p className="mt-3 text-center">
                If not registered, please register.
                <button
                  onClick={() => navigate('/register')}
                  className="btn btn-link"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login