import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';

import DashboardLayout from './layouts/DashboardLayout';

import DoctorSearch from './pages/patient/DoctorSearch';

import MyAppointments from './pages/patient/MyAppointments';

import DoctorSchedule from './pages/doctor/DoctorSchedule';
import DoctorPatients from './pages/doctor/DoctorPatients';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminDoctors from './pages/admin/AdminDoctors';

const PatientDashboard = () => <div className="card"><h1>Hoşgeldiniz, Randevu almak için menüyü kullanın.</h1></div>;
const DoctorDashboard = () => <div className="card"><h1>Hoşgeldiniz, Bugün 3 randevunuz var.</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Patient Routes */}
        <Route path="/patient" element={<DashboardLayout role="patient" />}>
          <Route index element={<PatientDashboard />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="doctors" element={<DoctorSearch />} />
        </Route>

        {/* Doctor Routes */}
        <Route path="/doctor" element={<DashboardLayout role="doctor" />}>
          <Route index element={<DoctorSchedule />} />
          <Route path="schedule" element={<DoctorSchedule />} />
          <Route path="patients" element={<DoctorPatients />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="patients" element={<DoctorPatients />} /> {/* Reusing */}
          <Route path="reports" element={<div className="card">Raporlar (Yakında)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
