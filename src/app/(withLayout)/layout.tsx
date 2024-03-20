import SideBar from "@/components/ui/sidebar";
import { Layout } from "antd";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <SideBar>
                {children}
            </SideBar>
        </Layout>
    );
};

export default DashboardLayout;