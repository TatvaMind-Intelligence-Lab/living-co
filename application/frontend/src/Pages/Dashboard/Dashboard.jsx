import useAuth from "../../hooks/useAuth";
import { logout } from "../../services/auth.service";
import { useEffect } from "react";
import { getMe } from "../../services/company.service";

export default function Dashboard() {
  const { user, session, loading } = useAuth();

  useEffect(() => {
    async function test() {
      try {
        const data = await getMe();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }

    test();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log("===== AUTH DEBUG =====");

  console.log("USER");
  console.log(user);

  console.log("SESSION");
  console.log(session);

  console.log("ACCESS TOKEN");
  console.log(session?.access_token);

  console.log("USER ID");
  console.log(user?.id);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <hr className="my-6" />

      <h2>
        <strong>Email:</strong> {user?.email}
      </h2>

      <h2>
        <strong>User ID:</strong> {user?.id}
      </h2>

      <h2 className="mt-4">
        <strong>Access Token:</strong>
      </h2>

      <textarea
        className="w-full h-48 border p-3 mt-2"
        readOnly
        value={session?.access_token || ""}
      />

      <button
        onClick={logout}
        className="mt-6 bg-red-500 text-white px-6 py-3 rounded"
      >
        Logout
      </button>
    </div>
  );
}
