import { useState } from "react";
import api from "../api/api";

export default function DepartmentForm({ onSuccess }) {
  const [form, setForm] = useState({ departmentName: "", dean: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/departments", form);
    onSuccess();
    setForm({ departmentName: "", dean: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="departmentName" value={form.departmentName} onChange={handleChange} placeholder="Tên khoa" required />
      <input name="dean" value={form.dean} onChange={handleChange} placeholder="Trưởng khoa" />
      <button type="submit">Thêm Khoa</button>
    </form>
  );
}
