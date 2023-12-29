import Footer from "@/Components/Dashboard/main/Footer/Footer";
import Navbar from "@/Components/Dashboard/main/Navbar/Navbar";
import Sidebar from "@/Components/Dashboard/main/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-[1] bg-[var(--bgSoft)]  min-[100vh] p-[1.2rem]">
        <Sidebar />
      </div>
      <div className="flex-[4] p-[1.2rem]">
        <Navbar />

        {children}
        <Footer />
      </div>
    </div>
  );
};
export default layout;
