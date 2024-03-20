import Contents from "@/components/ui/contents";
import SideBar from "@/components/ui/sidebar";
import { Layout } from "antd";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout hasSider>
            <SideBar>
                <Contents>{children}</Contents>
            </SideBar>
        </Layout>
    );
};

export default DashboardLayout;