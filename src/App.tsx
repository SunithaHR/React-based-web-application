import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
