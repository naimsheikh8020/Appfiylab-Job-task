import { useAuthInit } from "./hooks/useAuthInit";
import RoutesComponent from "./Routes/Routes";

function App() {
  useAuthInit(); // 🔥 THIS IS REQUIRED

  return <RoutesComponent />;
}

export default App;