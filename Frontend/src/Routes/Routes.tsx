// import { Route, Routes  } from "react-router"
// import Feed from "../Page/Feed"
// import Login from "../Page/Login"
// import SignUp from "../Page/SignUp"
// import Error from "../Page/Error"

// const RoutesComponent = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Feed />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />

//       {/* fallback route */}
//       <Route path="*" element={<Error />} />
//     </Routes>
//   )
// }

// export default RoutesComponent
import { Route, Routes } from "react-router";

import Feed from "../Page/Feed";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import Error from "../Page/Error";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";



const RoutesComponent = () => {
  return (
    <Routes>
      {/* 🔓 PUBLIC (only for NOT logged-in users) */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* 🔐 PROTECTED (only for logged-in users) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Feed />} />
      </Route>

      {/* ❌ FALLBACK */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesComponent;