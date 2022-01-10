import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../api/users";
import { User } from "../../api/users/types";

export default function Users() {
  const [users, setUsers] = useState<Omit<User, "description">[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchUsers();
      setUsers(response.users);
    };
    fetch();
  }, [setUsers]);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Authority</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.email}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
