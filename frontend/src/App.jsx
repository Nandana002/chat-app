import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-[#04130E] via-[#051A2D] to-[#140A2A]">
      {/* GLOBAL BACKGROUND - GRADIENT DEFINED IN BODY CSS */}
      <div className="bg-noise absolute inset-0 opacity-[0.08]" />

      {/* FLOATING LIGHT BLOBS (Aurora Glow) */}
      <div className="absolute top-[-12%] left-[-12%] size-[520px] bg-emerald-400/16 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-[-12%] right-[-12%] size-[560px] bg-sky-400/14 rounded-full blur-[190px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] bg-fuchsia-500/10 rounded-full blur-[170px] animate-pulse duration-[7000ms]" />

      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
