import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { LogOut, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Card from "./ui/Card";

const statuses = ["Pending", "Confirmed", "In Progress", "Fulfilled", "Cancelled"];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("canex_admin_token");
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const logout = useCallback(() => {
    localStorage.removeItem("canex_admin_token");
    navigate("/admin");
  }, [navigate]);

  const loadOrders = useCallback(async () => {
    if (!token) {
      navigate("/admin");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const params = filter ? { status: filter } : {};
      const { data } = await axios.get(`${baseUrl}/order/fetchOrder`, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(data.orders);
    } catch (requestError) {
      if (requestError.response?.status === 401) {
        logout();
      } else {
        setError("Unable to load bookings.");
      }
    } finally {
      setLoading(false);
    }
  }, [baseUrl, filter, logout, navigate, token]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const updateStatus = async (orderId, status) => {
    try {
      await axios.patch(
        `${baseUrl}/order/orderUpdatemail/${orderId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await loadOrders();
    } catch (requestError) {
      setError(
        requestError.response?.data?.error ||
          "Unable to update this booking. Please sign in again if your session expired."
      );
    }
  };

  return (
    <main className="min-h-screen page-gradient px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-brand-700">CaneX Cleaning</p>
            <h1 className="text-3xl font-bold text-slate-900">Booking dashboard</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={loadOrders} disabled={loading}>
              <RefreshCw className="w-4 h-4" /> Refresh
            </Button>
            <Button variant="secondary" onClick={logout}>
              <LogOut className="w-4 h-4" /> Sign out
            </Button>
          </div>
        </header>

        <Card hover={false} padding="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Bookings</h2>
              <p className="text-sm text-slate-500">{orders.length} booking(s) shown</p>
            </div>
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm"
              aria-label="Filter bookings by status"
            >
              <option value="">All statuses</option>
              {statuses.map((status) => <option key={status}>{status}</option>)}
            </select>
          </div>
          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
          {loading ? (
            <p className="text-slate-500 py-8 text-center">Loading bookings...</p>
          ) : orders.length === 0 ? (
            <p className="text-slate-500 py-8 text-center">No bookings found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 text-slate-500">
                  <tr>
                    <th className="py-3 pr-4">Customer</th>
                    <th className="py-3 pr-4">Service</th>
                    <th className="py-3 pr-4">Date</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="border-b border-slate-100 last:border-0">
                      <td className="py-4 pr-4">
                        <p className="font-medium text-slate-900">{order.fullName}</p>
                        <p className="text-slate-500">{order.email}</p>
                        <p className="text-slate-500">{order.phone}</p>
                      </td>
                      <td className="py-4 pr-4 text-slate-700">{order.serviceType}</td>
                      <td className="py-4 pr-4 text-slate-700 whitespace-nowrap">
                        {new Date(order.dateTime).toLocaleString()}
                      </td>
                      <td className="py-4">
                        <select
                          value={order.status}
                          onChange={(event) => updateStatus(order.orderId, event.target.value)}
                          className="px-2 py-1.5 border border-slate-200 rounded-lg bg-white"
                          aria-label={`Status for order ${order.orderId}`}
                        >
                          {statuses.map((status) => <option key={status}>{status}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </main>
  );
};

export default AdminDashboard;
