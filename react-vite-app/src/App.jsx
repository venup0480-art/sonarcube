import UserList from "./components/UserList";

function App() {
  const users = [
    { id: 1, name: "Venu" },
    { id: 2, name: "Raj" },
  ];

  return (
    <div>
      <h1>React Vite App</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
