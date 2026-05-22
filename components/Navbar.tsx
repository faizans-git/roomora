import { Box } from "lucide-react";
import Button from "./ui/Button";
import { useOutletContext } from "react-router";

const Navbar = () => {
  const { isSignedIn, userName, signIn, signOut } =
    useOutletContext<AuthContext>();

  const handleAuth = async () => {
    if (isSignedIn) {
      try {
        await signOut();
      } catch (e) {
        console.error(`Signout Fail`);
      }
      return;
    }

    try {
      await signIn();
    } catch (error) {
      console.error(`Puter sign In failed: ${error}`);
    }
  };
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomora</span>
          </div>

          <ul className="links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {userName ? `Hi, ${userName}` : "Signed in"}
              </span>
              <Button className="sm" onClick={handleAuth}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleAuth} className="login" variant="ghost">
                Log In
              </Button>
              <a href="#upload" className="cta">
                Get Started
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
