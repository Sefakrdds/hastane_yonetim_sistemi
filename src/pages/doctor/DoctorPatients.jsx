import React from 'react';
import { Search, MoreHorizontal, Phone, Mail } from 'lucide-react';

const patients = [
    { id: 1, name: 'Ali Veli', age: 34, gender: 'Erkek', lastVisit: '2025-11-10', condition: 'Hipertansiyon' },
    { id: 2, name: 'Ayşe Yılmaz', age: 28, gender: 'Kadın', lastVisit: '2025-11-15', condition: 'Grip' },
    { id: 3, name: 'Mehmet Öz', age: 45, gender: 'Erkek', lastVisit: '2025-11-20', condition: 'Diyabet' },
    { id: 4, name: 'Zeynep Kaya', age: 52, gender: 'Kadın', lastVisit: '2025-10-30', condition: 'Migren' },
];

const DoctorPatients = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200">
                <h1 className="text-xl font-bold">Hastalarım</h1>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Hasta ara..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                        style={{ paddingLeft: '2.5rem', padding: '0.5rem 0.5rem 0.5rem 2.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                        <tr>
                            <th className="p-4 font-medium">Hasta Adı</th>
                            <th className="p-4 font-medium">Yaş / Cinsiyet</th>
                            <th className="p-4 font-medium">Son Ziyaret</th>
                            <th className="p-4 font-medium">Durum</th>
                            <th className="p-4 font-medium">İletişim</th>
                            <th className="p-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {patients.map(patient => (
                            <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-gray-900">{patient.name}</td>
                                <td className="p-4 text-gray-600">{patient.age} / {patient.gender}</td>
                                <td className="p-4 text-gray-600">{patient.lastVisit}</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)' }}>
                                        {patient.condition}
                                    </span>
                                </td>
                                <td className="p-4 flex gap-2 text-gray-400">
                                    <button className="hover:text-primary"><Phone size={18} /></button>
                                    <button className="hover:text-primary"><Mail size={18} /></button>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorPatients;
