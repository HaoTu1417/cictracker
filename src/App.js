import { Layout } from "antd";

import SideBar from "./component/sideBar";
import Header from "./component/header";

import "font-awesome/css/font-awesome.css";
import "./css/app.css";
import "antd/dist/antd.css";

import InvestTable from "./component/investTable";

const { Footer, Sider, Content } = Layout;

//TODO: read excel button
//TODO: excel data mapping module
//TODO: display data to table
//TODO: save data to local storage
function App() {
  return (
    <Layout className="maxVh">
      <SideBar />
      <Layout>
        <Header />
        <Content>
          Content <InvestTable />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
