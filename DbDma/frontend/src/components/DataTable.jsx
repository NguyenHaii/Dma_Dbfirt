export default function DataTable({ data, onDelete, onView }) {
  return (
    <table border="1">
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.departmentId || row.lecturerId}>
            {Object.values(row).map((v, i) => (
              <td key={i}>{v?.departmentName || v}</td>
            ))}
            <td>
              <button onClick={() => onView(row)}>Chi tiết</button>
              <button onClick={() => onDelete(row)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
