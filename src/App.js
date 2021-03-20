import React from "react";
import "./App.css";

import 'antd/dist/antd.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <NavBar />
      </Header>
      <Content>
        <h2>Our Team </h2> 
       
      </Content>
      <Footer>
        <PageFooter />  
      </Footer>      
    </Layout>
  );
}

export default App;



