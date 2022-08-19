import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";
import { Swap } from "../pages/Swap";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list/:type' element={<List />} />
          <Route path='/swap' element={<Swap />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
