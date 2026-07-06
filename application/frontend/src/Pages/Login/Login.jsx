import { signInWithGoogle } from "../../services/auth.service";

export default function Login() {
  async function handleLogin() {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">

      <h1 className="text-5xl font-bold">
        The Living Company
      </h1>

      <p>
        Your AI Co-Founder
      </p>

      <button
        onClick={handleLogin}
        className="bg-black text-white px-8 py-3 rounded-xl"
      >
        Continue with Google
      </button>

    </div>
  );
}