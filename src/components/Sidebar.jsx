import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, FileText, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ role }) => {
    const links = {
        patient: [
            { to: '/patient', icon: <LayoutDashboard size={20} />, label: 'Panel' },
            { to: '/patient/appointments', icon: <Calendar size={20} />, label: 'Randevularım' },
            { to: '/patient/doctors', icon: <Users size={20} />, label: 'Doktor Bul' },
        ],
        doctor: [
            { to: '/doctor', icon: <LayoutDashboard size={20} />, label: 'Panel' },
            { to: '/doctor/schedule', icon: <Calendar size={20} />, label: 'Takvim' },
            { to: '/doctor/patients', icon: <Users size={20} />, label: 'Hastalarım' },
        ],
        admin: [
            { to: '/admin', icon: <LayoutDashboard size={20} />, label: 'Panel' },
            { to: '/admin/doctors', icon: <Users size={20} />, label: 'Doktorlar' },
            { to: '/admin/patients', icon: <Users size={20} />, label: 'Hastalar' },
            { to: '/admin/reports', icon: <FileText size={20} />, label: 'Raporlar' },
        ]
    };

    const currentLinks = links[role] || [];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-10" style={{ width: '250px', borderRight: '1px solid var(--border)' }}>
            <div className="p-6 flex items-center gap-3 border-b border-gray-100" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--primary)', borderRadius: 'var(--radius)', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    H
                </div>
                <span className="font-bold text-lg text-primary" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>HastaneYS</span>
            </div>

            <nav className="flex-1 p-4 flex flex-col gap-1">
                {currentLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.to.split('/').length === 2} // Only exact match for root paths
                        className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-md transition-colors
              ${isActive ? 'bg-primary-light text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}
            `}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius)',
                            textDecoration: 'none',
                            backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            fontWeight: isActive ? '500' : 'normal'
                        })}
                    >
                        {link.icon}
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-100" style={{ borderTop: '1px solid var(--border)' }}>
                <NavLink to="/login" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-md" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: 'var(--danger)', textDecoration: 'none' }}>
                    <LogOut size={20} />
                    Çıkış Yap
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
