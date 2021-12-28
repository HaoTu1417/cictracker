import { Layout } from "antd";

import SideBar from "./component/sideBar";
import Header from "./component/header";
import Filter from "./component/filter";
import Tags from "./component/tags";

import "font-awesome/css/font-awesome.css";
import "./css/app.css";
import "antd/dist/antd.css";
const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="maxVh">
      <SideBar />
      <Layout>
        <Header />
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
