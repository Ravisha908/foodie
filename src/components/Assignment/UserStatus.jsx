function UserStatus({ isLoggedIn }) {
  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Logged Out"}</h2>
    </div>
  );
}

export default UserStatus;
