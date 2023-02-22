// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';

// function ProtectedRoutes({ children, redirectTo }) {
//     const auth = getAuth();
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     useEffect(() => {
//         const notLoggedIn = onAuthStateChanged(auth, (user) => {
//             setIsLoggedIn(!!user);
//         })

//         return notLoggedIn;
//     }, [auth]);

//     return isLoggedIn ? children : <Navigate to={redirectTo} />;
// }

// export default ProtectedRoutes;
