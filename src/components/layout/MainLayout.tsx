import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarLayout />
      <Header>
        <Button onClick={handleLogout}>Logout</Button>
      </Header>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
