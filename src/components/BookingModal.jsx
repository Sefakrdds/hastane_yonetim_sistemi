import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import Button from './Button';

const BookingModal = ({ doctor, onClose, onConfirm }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [step, setStep] = useState(1); // 1: Select, 2: Success

    if (!doctor) return null;

    const handleConfirm = () => {
        // Simulate API call
        setTimeout(() => {
            setStep(2);
            if (onConfirm) onConfirm({ doctor, date: selectedDate, slot: selectedSlot });
        }, 1000);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden" style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: '500px', overflow: 'hidden' }}>

                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center" style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="font-semibold text-lg">Randevu Oluştur</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6" style={{ padding: '1.5rem' }}>
                    {step === 1 ? (
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
                                <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full object-cover" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <p className="font-medium text-gray-900">{doctor.name}</p>
                                    <p className="text-sm text-primary">{doctor.specialty}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Tarih Seçin</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        type="date"
                                        className="w-full pl-10 p-2 border border-gray-300 rounded-md"
                                        style={{ width: '100%', paddingLeft: '2.5rem', padding: '0.5rem 0.5rem 0.5rem 2.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Saat Seçin</label>
                                <div className="grid grid-cols-3 gap-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                                    {doctor.availableSlots.map(slot => (
                                        <button
                                            key={slot}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`py-2 px-3 text-sm rounded-md border transition-all ${selectedSlot === slot ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
                                            style={{
                                                padding: '0.5rem 0.75rem',
                                                borderRadius: 'var(--radius)',
                                                border: selectedSlot === slot ? '1px solid var(--primary)' : '1px solid var(--border)',
                                                backgroundColor: selectedSlot === slot ? 'var(--primary)' : 'white',
                                                color: selectedSlot === slot ? 'white' : 'var(--text-main)',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end gap-3">
                                <Button variant="outline" onClick={onClose}>İptal</Button>
                                <Button
                                    disabled={!selectedDate || !selectedSlot}
                                    onClick={handleConfirm}
                                    style={{ opacity: (!selectedDate || !selectedSlot) ? 0.5 : 1, cursor: (!selectedDate || !selectedSlot) ? 'not-allowed' : 'pointer' }}
                                >
                                    Onayla
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-center py-8 gap-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center" style={{ width: '64px', height: '64px', backgroundColor: '#dcfce7', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircle size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Randevu Oluşturuldu!</h3>
                                <p className="text-gray-500 mt-2">
                                    Sayın <strong>{doctor.name}</strong> ile <br />
                                    <strong>{selectedDate}</strong> tarihinde saat <strong>{selectedSlot}</strong> için randevunuz onaylandı.
                                </p>
                            </div>
                            <Button className="mt-4" onClick={onClose}>Tamam</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
