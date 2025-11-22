import React from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import Button from '../../components/Button';
import { doctors } from '../../utils/mockData';

const AdminDoctors = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Doktor Yönetimi</h1>
                <Button>
                    <Plus size={20} /> Yeni Doktor Ekle
                </Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Doktor ara..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                            style={{ paddingLeft: '2.5rem', padding: '0.5rem 0.5rem 0.5rem 2.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}
                        />
                    </div>
                </div>

                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                        <tr>
                            <th className="p-4 font-medium">Doktor</th>
                            <th className="p-4 font-medium">Branş</th>
                            <th className="p-4 font-medium">Deneyim</th>
                            <th className="p-4 font-medium">Puan</th>
                            <th className="p-4 font-medium text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {doctors.map(doc => (
                            <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 flex items-center gap-3">
                                    <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                                    <span className="font-medium text-gray-900">{doc.name}</span>
                                </td>
                                <td className="p-4 text-gray-600">{doc.specialty}</td>
                                <td className="p-4 text-gray-600">{doc.experience}</td>
                                <td className="p-4 text-gray-600">
                                    <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md text-sm font-bold">
                                        {doc.rating}
                                    </span>
                                </td>
                                <td className="p-4 text-right flex justify-end gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"><Edit size={18} /></button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-md"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDoctors;
