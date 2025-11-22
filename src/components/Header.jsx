import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = ({ title, user }) => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10" style={{ height: '64px', backgroundColor: 'white', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', position: 'sticky', top: 0, zIndex: 5 }}>
            <h2 className="text-xl font-semibold text-gray-800" style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h2>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative" style={{ color: 'var(--text-muted)', padding: '0.5rem', borderRadius: '50%' }}>
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" style={{ position: 'absolute', top: '4px', right: '4px', width: '8px', height: '8px', backgroundColor: 'var(--danger)', borderRadius: '50%' }}></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border)' }}>
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-gray-900" style={{ fontSize: '0.875rem', fontWeight: '500' }}>{user?.name || 'Kullanıcı'}</p>
                        <p className="text-xs text-gray-500" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.role === 'patient' ? 'Hasta' : user?.role === 'doctor' ? 'Doktor' : 'Yönetici'}</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600" style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-body)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
