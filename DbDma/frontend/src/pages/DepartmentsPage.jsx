import { useEffect, useState } from "react";
import api from "../api/api";
import DepartmentForm from "../components/DepartmentForm";
import DataTable from "../components/DataTable";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    const res = await api.get("/departments");
    setDepartments(res.data);
  };

  const handleDelete = async (dep) => {
    await api.delete(`/departments/${dep.departmentId}`);
    fetchDepartments();
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div>
      <h2>Khoa</h2>
      <DepartmentForm onSuccess={fetchDepartments} />
      <DataTable data={departments} onDelete={handleDelete} onView={alert} />
    </div>
  );
}
