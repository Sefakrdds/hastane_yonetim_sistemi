import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { doctors, specialties } from '../../utils/mockData';
import DoctorCard from '../../components/DoctorCard';
import BookingModal from '../../components/BookingModal';

const DoctorSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('Tümü');
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const filteredDoctors = doctors.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty === 'Tümü' || doc.specialty === selectedSpecialty;
        return matchesSearch && matchesSpecialty;
    });

    const handleBook = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const closeBooking = () => {
        setSelectedDoctor(null);
    };

    return (
        <div className="flex flex-col gap-8">
            {selectedDoctor && (
                <BookingModal
                    doctor={selectedDoctor}
                    onClose={closeBooking}
                />
            )}

            <div className="flex flex-col md:flex-row gap-4 justify-between items-end bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex-1 w-full">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Doktor Bul</h1>
                    <p className="text-gray-500">Uzman doktorlarımızdan dilediğiniz zaman randevu alın.</p>
                </div>

                <div className="flex gap-4 w-full md:w-auto items-end">
                    <div className="flex-1 md:w-64">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Doktor veya branş ara..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', width: '100%', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}
                            />
                        </div>
                    </div>

                    <div className="w-48">
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            style={{ padding: '0.5rem', width: '100%', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: 'white' }}
                        >
                            {specialties.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} onBook={handleBook} />
                ))}
            </div>

            {filteredDoctors.length === 0 && (
                <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
                    <p>Aradığınız kriterlere uygun doktor bulunamadı.</p>
                </div>
            )}
        </div>
    );
};

export default DoctorSearch;
