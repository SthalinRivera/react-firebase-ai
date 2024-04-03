
import {useAuth  } from "../../context/AuthContext";
import { NavBar } from "../../components/NavBar";
export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
    <NavBar />
      <div className="w-full max-w-xs m-auto text-black">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <img src={user.photoURL} alt="Logo" />
          <p className="text-xl mb-4">welcome {user.displayName }</p>
          <p className="text-xl mb-4"> { user.email}</p>
          <button
            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
            onClick={handleLogout}
          >
            logout
          </button>
        </div>
      </div>
    </>
  );
}
