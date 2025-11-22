import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import Button from './Button';

const DoctorCard = ({ doctor, onBook }) => {
    return (
        <div className="card flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-lg object-cover"
                    style={{ width: '96px', height: '96px', borderRadius: 'var(--radius)', objectFit: 'cover' }}
                />
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                            <p className="text-primary font-medium">{doctor.specialty}</p>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded">
                            <Star size={16} fill="currentColor" />
                            <span className="text-sm font-bold">{doctor.rating}</span>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-col gap-1 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{doctor.experience} Deneyim</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>İstanbul, Merkez Hastanesi</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm">
                    <span className="text-green-600 font-medium">Müsait: </span>
                    <span className="text-gray-600">{doctor.availableSlots.length} Randevu</span>
                </div>
                <Button onClick={() => onBook(doctor)} size="sm">
                    Randevu Al
                </Button>
            </div>
        </div>
    );
};

export default DoctorCard;
