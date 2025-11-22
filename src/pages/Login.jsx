import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('patient'); // patient, doctor, admin
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login logic
        console.log('Logging in as:', role, email);

        if (role === 'patient') navigate('/patient');
        if (role === 'doctor') navigate('/doctor');
        if (role === 'admin') navigate('/admin');
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'var(--primary-light)' }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
                <div className="flex flex-col items-center gap-4 mb-8">
                    <div style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <User size={32} />
                    </div>
                    <h1 className="text-2xl">Hoşgeldiniz</h1>
                    <p className="text-muted text-center">Lütfen giriş yapmak için rolünüzü seçin</p>
                </div>

                <div className="flex gap-2 mb-6 p-1" style={{ backgroundColor: 'var(--bg-body)', borderRadius: 'var(--radius)' }}>
                    {['patient', 'doctor', 'admin'].map((r) => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`flex-1 py-2 text-sm font-medium rounded-sm transition-all ${role === r ? 'bg-white shadow-sm text-primary' : 'text-muted'}`}
                            style={{
                                backgroundColor: role === r ? 'white' : 'transparent',
                                color: role === r ? 'var(--primary)' : 'var(--text-muted)',
                                boxShadow: role === r ? 'var(--shadow-sm)' : 'none'
                            }}
                        >
                            {r === 'patient' ? 'Hasta' : r === 'doctor' ? 'Doktor' : 'Yönetici'}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <Input
                        type="email"
                        placeholder="ornek@email.com"
                        label="E-Posta"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="••••••••"
                        label="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" className="mt-2">
                        Giriş Yap <ArrowRight size={18} />
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted">
                    Hesabınız yok mu? <a href="#" className="text-primary font-medium">Kayıt Ol</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
