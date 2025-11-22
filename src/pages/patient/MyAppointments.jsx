import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../../components/Button';

const appointments = [
    {
        id: 1,
        doctor: 'Dr. Ahmet Yılmaz',
        specialty: 'Kardiyoloji',
        date: '2025-11-25',
        time: '10:00',
        status: 'upcoming', // upcoming, completed, cancelled
        location: 'Merkez Hastanesi, Kat 3'
    },
    {
        id: 2,
        doctor: 'Dr. Ayşe Kaya',
        specialty: 'Dahiliye',
        date: '2025-11-20',
        time: '14:30',
        status: 'completed',
        location: 'Merkez Hastanesi, Kat 2'
    }
];

const MyAppointments = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Randevularım</h1>
                <Button variant="outline" size="sm">Geçmiş Randevular</Button>
            </div>

            <div className="grid gap-4">
                {appointments.map(apt => (
                    <div key={apt.id} className="card flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                        <div className="flex gap-4 items-start">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${apt.status === 'upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`} style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: apt.status === 'upcoming' ? 'var(--primary-light)' : '#f3f4f6', color: apt.status === 'upcoming' ? 'var(--primary)' : '#4b5563' }}>
                                <Calendar size={24} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">{apt.doctor}</h3>
                                <p className="text-sm text-gray-500">{apt.specialty}</p>

                                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <span>{apt.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>{apt.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>{apt.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                            {apt.status === 'upcoming' ? (
                                <>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                                        Yaklaşan
                                    </span>
                                    <Button variant="outline" className="text-red-500 hover:bg-red-50 border-red-200" style={{ color: 'var(--danger)', borderColor: '#fecaca' }}>
                                        İptal Et
                                    </Button>
                                </>
                            ) : (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium" style={{ backgroundColor: '#f3f4f6', color: '#4b5563', padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                                    Tamamlandı
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;
