import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  // The useAuth0 hook provides a logout function that logs the user out of the application.
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <button
          className="btn btn-primary logoutBtn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
        <br />
      </>
    );
  }
};

export default LogoutButton;