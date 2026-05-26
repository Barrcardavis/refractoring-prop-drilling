import { useUser } from "./UserContext";

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Theme: {user.themePreference}</p>
    </div>
  );
}
