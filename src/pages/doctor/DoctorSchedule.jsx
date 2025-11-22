import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import Button from '../../components/Button';

const DoctorSchedule = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock schedule data
    const schedule = {
        '2025-11-24': [
            { time: '09:00', patient: 'Ali Veli', type: 'Muayene', status: 'confirmed' },
            { time: '10:00', patient: 'Ayşe Yılmaz', type: 'Kontrol', status: 'confirmed' },
        ],
        '2025-11-25': [
            { time: '14:00', patient: 'Mehmet Öz', type: 'Muayene', status: 'pending' },
        ]
    };

    const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

    const getDayDate = (offset) => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + offset);
        return date.toISOString().split('T')[0];
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}>
                        <ChevronLeft size={20} />
                    </Button>
                    <h2 className="text-lg font-semibold">24 - 30 Kasım 2025</h2>
                    <Button variant="outline" size="icon" onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}>
                        <ChevronRight size={20} />
                    </Button>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Bugün</Button>
                    <Button>Müsaitlik Ayarla</Button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-4 overflow-x-auto pb-4">
                {days.map((day, index) => (
                    <div key={day} className="min-w-[150px] flex flex-col gap-3">
                        <div className="text-center p-3 bg-gray-100 rounded-lg font-medium text-gray-700">
                            {day} <br />
                            <span className="text-sm text-gray-500">{getDayDate(index).split('-').slice(1).join('/')}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            {timeSlots.map(time => {
                                const dateKey = getDayDate(index); // In real app, match correct date
                                // Mock logic to show some appointments
                                const apt = index < 3 && schedule['2025-11-24']?.find(a => a.time === time);

                                return (
                                    <div
                                        key={time}
                                        className={`p-3 rounded-md border text-sm transition-all ${apt ? 'bg-blue-50 border-blue-200 cursor-pointer hover:bg-blue-100' : 'bg-white border-gray-100 text-gray-400'}`}
                                        style={{
                                            backgroundColor: apt ? 'var(--primary-light)' : 'white',
                                            borderColor: apt ? 'var(--primary)' : 'var(--border)',
                                            color: apt ? 'var(--text-main)' : 'var(--text-muted)',
                                            minHeight: '80px'
                                        }}
                                    >
                                        <div className="font-medium mb-1">{time}</div>
                                        {apt ? (
                                            <div className="flex flex-col gap-1">
                                                <div className="font-semibold text-primary flex items-center gap-1">
                                                    <User size={12} /> {apt.patient}
                                                </div>
                                                <div className="text-xs text-gray-500">{apt.type}</div>
                                            </div>
                                        ) : (
                                            <div className="text-xs text-center mt-2">-</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorSchedule;
