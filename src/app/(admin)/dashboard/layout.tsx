
import { Layout } from 'antd';

import AdminFooter from "@/components/layout/AdminFooter";
import AdminHeader from "@/components/layout/AdminHeader";
import AdminSider from "@/components/layout/AdminSider";
import AdminContent from "@/components/layout/AdminContent";



const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout>
      <AdminSider />
      <Layout>
        <AdminHeader />
        <AdminContent>
          {children}
        </AdminContent>
      
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
