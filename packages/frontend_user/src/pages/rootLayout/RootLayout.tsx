import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default RootLayout;
