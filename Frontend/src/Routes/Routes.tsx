import { Route, Routes  } from "react-router"
import Feed from "../Page/Feed"
import Login from "../Page/Login"
import SignUp from "../Page/SignUp"
import Error from "../Page/Error"

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* fallback route */}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default RoutesComponent
