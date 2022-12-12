import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Cari from "./pages/Cari";
import Sewa from "./pages/Sewa";
import Profile from "./pages/Profile";
import Transaksi from "./pages/Transaksi";
import DashboardLayout from "./components/auth/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="transaksi">
          <Route index element={<Transaksi />} />
        </Route>
        <Route path="profile">
          <Route index element={<Profile />} />
        </Route>
      </Route>

      <Route path="/cari" element={<Cari />} />
      <Route path="/sewa" element={<Sewa />} />
    </Routes>
  );
}

export default App;
