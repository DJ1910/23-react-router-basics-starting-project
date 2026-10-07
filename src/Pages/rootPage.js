import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation";

export default function RootPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
