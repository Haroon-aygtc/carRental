import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/website/HomePage";
import ServicesPage from "./pages/website/ServicesPage";
import TestimonialsPage from "./pages/website/TestimonialsPage";
import BlogPage from "./pages/website/BlogPage";
import VehicleGalleryPage from "./pages/website/VehicleGalleryPage";
import ServiceLocationsPage from "./pages/website/ServiceLocationsPage";
import BookingPage from "./pages/website/BookingPage";
import LoginPage from "./pages/passenger/LoginPage";
import DashboardPage from "./pages/passenger/DashboardPage";
import routes from "tempo-routes";
import Dashboard from "./pages/admin/dashboard";
import UserManagement from "./pages/admin/user-management";
import DriverManagement from "./pages/admin/driver-management";
import FleetManagement from "./pages/admin/fleet-management";
import BookingManagement from "./pages/admin/booking-management";
import FinancialTools from "./pages/admin/financial-tools";
import Reports from "./pages/admin/reports";
import GenerateReports from "./pages/admin/reports/GenerateReports";
import ExportAsPDF from "./pages/admin/reports/ExportAsPDF";
import ExportAsExcel from "./pages/admin/reports/ExportAsExcel";
import Settings from "./pages/admin/settings";
import AdminLayout from "./components/admin/AdminLayout";

// User Management
import ViewUsers from "./pages/admin/user-management/ViewUsers";
import AddEditDeleteUsers from "./pages/admin/user-management/AddEditDeleteUsers";
import AssignRolesPermissions from "./pages/admin/user-management/AssignRolesPermissions";

// Driver Management
import ViewDrivers from "./pages/admin/driver-management/ViewDrivers";
import AddEditDeleteDrivers from "./pages/admin/driver-management/AddEditDeleteDrivers";
import AssignVehicles from "./pages/admin/driver-management/AssignVehicles";
import TrackPerformance from "./pages/admin/driver-management/TrackPerformance";

// Fleet Management
import ViewVehicles from "./pages/admin/fleet-management/ViewVehicles";
import AddEditDeleteVehicles from "./pages/admin/fleet-management/AddEditDeleteVehicles";
import MaintenanceScheduling from "./pages/admin/fleet-management/MaintenanceScheduling";

// Booking Management
import ViewAllBookings from "./pages/admin/booking-management/ViewAllBookings";
import ManageBookingStatus from "./pages/admin/booking-management/ManageBookingStatus";
import AssignDrivers from "./pages/admin/booking-management/AssignDrivers";

// Financial Tools
import PayrollManagement from "./pages/admin/financial-tools/PayrollManagement";
import ExpenseTracking from "./pages/admin/financial-tools/ExpenseTracking";
import RevenueMonitoring from "./pages/admin/financial-tools/RevenueMonitoring";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/vehicles" element={<VehicleGalleryPage />} />
          <Route path="/locations" element={<ServiceLocationsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
          <Route path="/passenger/login" element={<LoginPage />} />
          <Route path="/passenger/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />

            {/* User Management Routes */}
            <Route path="user-management" element={<UserManagement />} />
            <Route path="user-management/view" element={<ViewUsers />} />
            <Route
              path="user-management/add-edit"
              element={<AddEditDeleteUsers />}
            />
            <Route
              path="user-management/roles"
              element={<AssignRolesPermissions />}
            />

            {/* Driver Management Routes */}
            <Route path="driver-management" element={<DriverManagement />} />
            <Route path="driver-management/view" element={<ViewDrivers />} />
            <Route
              path="driver-management/add-edit"
              element={<AddEditDeleteDrivers />}
            />
            <Route
              path="driver-management/assign-vehicles"
              element={<AssignVehicles />}
            />
            <Route
              path="driver-management/performance"
              element={<TrackPerformance />}
            />

            {/* Fleet Management Routes */}
            <Route path="fleet-management" element={<FleetManagement />} />
            <Route path="fleet-management/view" element={<ViewVehicles />} />
            <Route
              path="fleet-management/add-edit"
              element={<AddEditDeleteVehicles />}
            />
            <Route
              path="fleet-management/maintenance"
              element={<MaintenanceScheduling />}
            />

            {/* Booking Management Routes */}
            <Route path="booking-management" element={<BookingManagement />} />
            <Route
              path="booking-management/view"
              element={<ViewAllBookings />}
            />
            <Route
              path="booking-management/status"
              element={<ManageBookingStatus />}
            />
            <Route
              path="booking-management/assign-drivers"
              element={<AssignDrivers />}
            />

            {/* Financial Tools Routes */}
            <Route path="financial-tools" element={<FinancialTools />} />
            <Route
              path="financial-tools/payroll"
              element={<PayrollManagement />}
            />
            <Route
              path="financial-tools/expenses"
              element={<ExpenseTracking />}
            />
            <Route
              path="financial-tools/revenue"
              element={<RevenueMonitoring />}
            />

            <Route path="reports" element={<Reports />}>
              <Route path="generate" element={<GenerateReports />} />
              <Route path="pdf" element={<ExportAsPDF />} />
              <Route path="excel" element={<ExportAsExcel />} />
              <Route index element={<Navigate to="generate" replace />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* Tempobook routes for development */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
