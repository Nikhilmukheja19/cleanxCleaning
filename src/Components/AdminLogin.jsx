import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LockKeyhole } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Card from "./ui/Card";

const AdminLogin = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, form);
      localStorage.setItem("canex_admin_token", data.token);
      navigate("/admin/orders");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen page-gradient flex items-center justify-center px-4">
      <Card hover={false} padding="p-6 md:p-10" className="w-full max-w-md">
        <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-5">
          <LockKeyhole className="text-brand-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Admin sign in</h1>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          Manage bookings and keep customers updated.
        </p>
        <form onSubmit={submit} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default AdminLogin;
