import { useState } from 'react';
import { mockHealthRecords, mockUsers } from '@/data/mockData';
import DashboardLayout from '@/components/DashboardLayout';
import HealthRecordsTable from '@/components/HealthRecordsTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, UserPlus, FileText, Calendar, Upload, TrendingUp, Bell, Activity, Users, Clock, Video } from 'lucide-react';

const DoctorDashboard = () => {
  const [searchWorkerId, setSearchWorkerId] = useState('');
  
  // Mock doctor data
  const doctorName = 'Dr. Priya Kumar';
  const doctorId = 'DOC001';
  const specialty = 'General Physician';
  const hospital = 'Government General Hospital, Kochi';
  const availabilityStatus = 'Online';
  
  // Filter doctor's records
  const doctorRecords = mockHealthRecords.filter(record => record.doctor === doctorName);
  
  // Get all workers (patients)
  const allWorkers = mockUsers.filter(user => user.role === 'worker');
  const filteredWorkers = searchWorkerId 
    ? allWorkers.filter(worker => 
        worker.id.toLowerCase().includes(searchWorkerId.toLowerCase()) ||
        worker.name.toLowerCase().includes(searchWorkerId.toLowerCase())
      )
    : allWorkers;

  // Mock appointments
  const todayAppointments = [
    { id: 1, workerId: 'WRK001', workerName: 'Ramesh Kumar', time: '10:30 AM', type: 'Follow-up', status: 'Confirmed' },
    { id: 2, workerId: 'WRK002', workerName: 'Suresh Patel', time: '11:00 AM', type: 'General Checkup', status: 'Confirmed' },
    { id: 3, workerId: 'WRK003', workerName: 'Amit Singh', time: '02:00 PM', type: 'Consultation', status: 'Pending' },
    { id: 4, workerId: 'WRK004', workerName: 'Ravi Kumar', time: '03:30 PM', type: 'Teleconsultation', status: 'Confirmed' }
  ];

  // Mock health trends
  const healthTrends = [
    { issue: 'Respiratory Infections', count: 45, trend: 'up' },
    { issue: 'Hypertension', count: 32, trend: 'stable' },
    { issue: 'Diabetes', count: 28, trend: 'down' },
    { issue: 'Work Injuries', count: 18, trend: 'up' }
  ];

  // Community health alerts
  const communityAlerts = [
    { id: 1, title: 'Dengue Outbreak', location: 'Kochi Region', severity: 'high', date: '2024-02-08' },
    { id: 2, title: 'COVID-19 Booster Drive', location: 'All Districts', severity: 'medium', date: '2024-02-05' }
  ];

  return (
    <DashboardLayout userRole="Doctor" sidebarItems={[]}>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-black">{doctorName}</h2>
            <p className="text-gray-600 mt-1">{specialty} • {hospital}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className={availabilityStatus === 'Online' ? 'bg-black text-white' : 'bg-gray-300 text-black'}>
                {availabilityStatus}
              </Badge>
              <span className="text-sm text-gray-600">Doctor ID: {doctorId}</span>
            </div>
          </div>
          
          <div className="flex gap-2">

            <Button className="bg-black text-white hover:bg-gray-900">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Record
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{filteredWorkers.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Total Patients</p>
                </div>
                <Users className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{doctorRecords.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Records Created</p>
                </div>
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">{todayAppointments.length}</div>
                  <p className="text-xs text-gray-600 mt-1">Today's Appointments</p>
                </div>
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-black">
                    {todayAppointments.filter(a => a.status === 'Pending').length}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Pending Reviews</p>
                </div>
                <Clock className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="patients" className="w-full">
          <TabsList className="grid w-full grid-cols-5 border-2 border-black bg-white">
            <TabsTrigger value="patients" className="data-[state=active]:bg-black data-[state=active]:text-white">Patient Search</TabsTrigger>
            <TabsTrigger value="records" className="data-[state=active]:bg-black data-[state=active]:text-white">Recent Records</TabsTrigger>
            <TabsTrigger value="appointments" className="data-[state=active]:bg-black data-[state=active]:text-white">Appointments</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-black data-[state=active]:text-white">Analytics</TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-black data-[state=active]:text-white">Community Alerts</TabsTrigger>
          </TabsList>
          
          {/* Patient Search Tab */}
          <TabsContent value="patients" className="space-y-4">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Patient Management</CardTitle>
                <CardDescription>Search workers by ID, Name, Phone, or QR scan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by Worker ID, Name, or Phone..."
                      value={searchWorkerId}
                      onChange={(e) => setSearchWorkerId(e.target.value)}
                      className="pl-10 border-2 border-black focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <Button variant="outline" className="border-2 border-black hover:bg-gray-100">
                    <Search className="h-4 w-4 mr-2" />
                    Scan QR Code
                  </Button>
                </div>

                <div className="overflow-hidden border-2 border-black rounded-lg">
                  <table className="healthcare-table">
                    <thead>
                      <tr>
                        <th>Worker ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Last Visit</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredWorkers.map((worker) => (
                        <tr key={worker.id}>
                          <td className="font-mono text-sm text-gray-700">{worker.id}</td>
                          <td className="font-medium text-black">{worker.name}</td>
                          <td className="text-gray-700">{worker.contact || 'N/A'}</td>
                          <td className="text-gray-700">
                            {mockHealthRecords.find(r => r.workerId === worker.id)?.date || 'No visits'}
                          </td>
                          <td>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-black text-white hover:bg-gray-900">
                                <FileText className="h-3 w-3 mr-1" />
                                Add Record
                              </Button>
                              <Button size="sm" variant="outline" className="border-black hover:bg-gray-100">
                                View History
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Recent Records Tab */}
          <TabsContent value="records" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black">Recent Health Records</h3>
              <div className="flex gap-2">
                <Button variant="outline" className="border-2 border-black hover:bg-gray-100">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Prescription
                </Button>
                <Button className="bg-black text-white hover:bg-gray-900">
                  <FileText className="h-4 w-4 mr-2" />
                  New Record
                </Button>
              </div>
            </div>
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <HealthRecordsTable records={doctorRecords} showActions={true} />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black">Today's Schedule</h3>
              <Button className="bg-black text-white hover:bg-gray-900">
                <Calendar className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </div>
            
            <div className="grid gap-4">
              {todayAppointments.map((apt) => (
                <Card key={apt.id} className="border-2 border-black">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div>
                          <h4 className="font-bold text-black text-lg">{apt.workerName}</h4>
                          <p className="text-sm text-gray-600">Worker ID: {apt.workerId}</p>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            {apt.time}
                          </div>
                          <div className="text-gray-600">
                            {apt.type}
                          </div>
                        </div>
                        <Badge className={apt.status === 'Confirmed' ? 'bg-black text-white' : 'bg-gray-300 text-black'}>
                          {apt.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-2 border-black hover:bg-gray-100">
                          Reschedule
                        </Button>
                        {apt.type === 'Teleconsultation' ? (
                          <Button size="sm" className="gap-2 bg-black text-white hover:bg-gray-900">
                            <Video className="h-4 w-4" />
                            Join Call
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-black text-white hover:bg-gray-900">
                            Start Consultation
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <h3 className="text-xl font-bold text-black">Worker Health Trends & Insights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-black">Common Health Issues</CardTitle>
                  <CardDescription>Trending health problems among patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthTrends.map((trend, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-black">{trend.issue}</p>
                            <TrendingUp className={`h-4 w-4 ${
                              trend.trend === 'up' ? 'text-red-500' : 
                              trend.trend === 'down' ? 'text-green-500' : 'text-gray-400'
                            }`} />
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-black h-2 rounded-full" 
                              style={{ width: `${(trend.count / 50) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-black ml-4">{trend.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-black">Vaccination Coverage</CardTitle>
                  <CardDescription>Immunization status of registered workers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-black">COVID-19</span>
                        <span className="text-gray-600">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-black">Hepatitis B</span>
                        <span className="text-gray-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-black">Tetanus</span>
                        <span className="text-gray-600">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Predictive Alerts</CardTitle>
                <CardDescription>AI-based outbreak and health risk predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="border-2 border-yellow-500 bg-yellow-50">
                  <Bell className="h-4 w-4 text-yellow-600" />
                  <AlertDescription>
                    <p className="font-medium text-yellow-900">Potential Dengue Hotspot Detected</p>
                    <p className="text-sm text-yellow-700 mt-1">Increased fever cases in construction sites near Panampilly Nagar. Recommend preventive measures.</p>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Alerts Tab */}
          <TabsContent value="alerts" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black">Community Health Alerts</h3>
              <Button className="bg-black text-white hover:bg-gray-900">
                <Bell className="h-4 w-4 mr-2" />
                Send Announcement
              </Button>
            </div>

            <div className="space-y-3">
              {communityAlerts.map((alert) => (
                <Card key={alert.id} className="border-2 border-black">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-black text-lg">{alert.title}</h4>
                          <Badge className={
                            alert.severity === 'high' ? 'bg-red-600 text-white' :
                            alert.severity === 'medium' ? 'bg-yellow-600 text-white' :
                            'bg-gray-600 text-white'
                          }>
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{alert.location}</p>
                        <p className="text-sm text-gray-500">{alert.date}</p>
                      </div>
                      <Button variant="outline" className="border-2 border-black hover:bg-gray-100">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Public Health Department Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Receive and manage epidemic notifications and guidelines</p>
                <Button className="mt-4 bg-black text-white hover:bg-gray-900">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe to Notifications
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
