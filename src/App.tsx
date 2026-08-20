import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Compass } from "lucide-react";
import Login from "./pages/Login";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-slate-900 dark:text-slate-50">VIARA Project</span>
          </div>
          <nav className="flex gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Login
            </Link>
            <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="border-t bg-slate-100 dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} VIARA. Powered by InsForge.
      </footer>
    </div>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-white dark:bg-slate-900 rounded-3xl border shadow-sm animate-fade-in"
    >
      <div className="p-4 bg-indigo-50 dark:bg-indigo-950/50 rounded-2xl mb-6">
        <Compass className="h-12 w-12 text-indigo-600 dark:text-indigo-400 animate-pulse" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
        VIARA Frontend Skeleton
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
        A clean, production-ready frontend boilerplate built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui, ready to integrate with InsForge.
      </p>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-3xl border shadow-sm"
    >
      <h2 className="text-3xl font-bold text-slate-950 dark:text-slate-50">About VIARA</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        This is a decoupled frontend structure. It communicates with the backend, database, and authentication services exclusively via the InsForge SDK/API layer.
      </p>
    </motion.div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home-old",
    element: <RootLayout />,
    children: [
      {
        path: "/home-old",
        element: <Home />,
      },
      {
        path: "/home-old/about",
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
