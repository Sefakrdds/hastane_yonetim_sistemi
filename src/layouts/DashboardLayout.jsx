import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ role }) => {
    const location = useLocation();

    // Simple logic to determine page title based on path
    const getTitle = () => {
        const path = location.pathname.split('/').pop();
        if (!path || path === role) return 'Panel';
        if (path === 'appointments') return 'Randevularım';
        if (path === 'doctors') return 'Doktor Bul';
        if (path === 'schedule') return 'Takvim';
        if (path === 'patients') return 'Hastalar';
        if (path === 'reports') return 'Raporlar';
        return 'Panel';
    };

    return (
        <div className="flex min-h-screen bg-gray-50" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-body)' }}>
            <Sidebar role={role} />

            <div className="flex-1 flex flex-col ml-64" style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '250px' }}>
                <Header title={getTitle()} user={{ name: 'Mehmet Yılmaz', role }} />

                <main className="flex-1 p-8 overflow-y-auto" style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
