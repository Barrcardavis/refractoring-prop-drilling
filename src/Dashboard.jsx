import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Sidebar />
    </div>
  );
}

