import React from "react";

type User = {
  id: any;          // ❌ using any
  name: string;
};

type UserListProps = {
  users: any;       // ❌ any instead of typed array
};

const UserListComponent = (props: UserListProps) => {
  // ❌ No null check
  if (props.users.length == 0) {   // ❌ == instead of ===
    console.log("No users");       // ❌ console.log
    return <p>No users found</p>;
  }

  return (
    <ul>
      {props.users.map((user: any, index: number) => (
        <li key={index}>           
          {user.name.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default UserListComponent;
