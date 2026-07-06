import useAuth from "../../hooks/useAuth";
import { logout } from "../../services/auth.service";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user?.email}</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}