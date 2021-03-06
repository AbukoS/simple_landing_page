import React from "react";
import Layout from "./components/Layout";
import { BaseRouter } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
