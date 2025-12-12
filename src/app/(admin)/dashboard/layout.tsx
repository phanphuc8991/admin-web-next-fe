import AdminContent from "@/components/layout/AdminContent";
import AdminFooter from "@/components/layout/AdminFooter";
import AdminHeader from "@/components/layout/AdminHeader";
import AdminSideBar from "@/components/layout/AdminSider";
import { AdminContextProvider } from "@/library/AdminContext";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AdminContextProvider>
      <div style={{ display: "flex" }}>
        <div className="left-side" style={{ minWidth: 80 }}>
          <AdminSideBar />
        </div>
        <div className="right-side" style={{ flex: 1 }}>
          <AdminHeader />
          <AdminContent>{children}</AdminContent>
          <AdminFooter />
        </div>
      </div>
    </AdminContextProvider>
  );
};

export default AdminLayout;
