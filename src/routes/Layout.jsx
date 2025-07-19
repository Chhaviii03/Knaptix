import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const colors = {
  white: "#FFFFFF",
  lightGray: "#F5F5F5",
  black: "#000000",
  green: "#00B000",
};

function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: colors.lightGray }}>
      <header className="shadow-md" style={{ backgroundColor: colors.white }}>
        <Navbar colors={colors} />
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="py-8 text-center text-sm" style={{ backgroundColor: colors.black, color: colors.white }}>
        <p>&copy; {new Date().getFullYear()} Knaptix. All rights reserved.</p>
      </footer>
    </div>
  );
}

export { Layout };
