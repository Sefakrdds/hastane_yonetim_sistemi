import React from 'react';
import { Users, Calendar, Activity, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className="card flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white`} style={{ backgroundColor: color, width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Icon size={24} />
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={12} /> {trend}
            </p>
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-gray-900">Sistem Özeti</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Toplam Randevu"
                    value="1,245"
                    icon={Calendar}
                    color="var(--primary)"
                    trend="+12% geçen hafta"
                />
                <StatCard
                    title="Aktif Doktorlar"
                    value="48"
                    icon={Activity}
                    color="var(--secondary)"
                    trend="+2 yeni doktor"
                />
                <StatCard
                    title="Kayıtlı Hastalar"
                    value="8,530"
                    icon={Users}
                    color="var(--warning)"
                    trend="+150 bu ay"
                />
                <StatCard
                    title="Bugünkü Randevular"
                    value="156"
                    icon={Calendar}
                    color="var(--danger)"
                    trend="Yoğun gün"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card">
                    <h3 className="font-semibold text-lg mb-4">Son Aktiviteler</h3>
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="flex items-center gap-3 text-sm border-b border-gray-50 pb-2 last:border-0">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <p className="text-gray-600">
                                    <span className="font-medium text-gray-900">Ahmet Yılmaz</span> yeni bir randevu oluşturdu.
                                </p>
                                <span className="ml-auto text-gray-400 text-xs">2 dk önce</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h3 className="font-semibold text-lg mb-4">Branş Dağılımı</h3>
                    <div className="flex flex-col gap-3">
                        {[
                            { name: 'Dahiliye', count: 450, percent: '40%' },
                            { name: 'Kardiyoloji', count: 320, percent: '28%' },
                            { name: 'Çocuk Sağlığı', count: 210, percent: '18%' },
                            { name: 'Göz', count: 150, percent: '14%' },
                        ].map(dept => (
                            <div key={dept.name}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium">{dept.name}</span>
                                    <span className="text-gray-500">{dept.count} Randevu</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full"
                                        style={{ width: dept.percent, backgroundColor: 'var(--primary)' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
