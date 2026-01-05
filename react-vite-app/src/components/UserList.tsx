type User = {
  id: number;
  name: string;
};

type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  if (!users.length) {
    return <p>No users found</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
