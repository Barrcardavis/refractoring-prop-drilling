import { UserProvider} from "./UserContext";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

