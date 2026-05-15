import { Box } from "lucide-react";
import Button from "./ui/Button";

const Navbar = () => {
  const isSignedIn = false;
  const username = "faizan";
  const handleAuth = async () => {};
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomora</span>
          </div>

          <ul className="links">
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {username ? `Hi, ${username}` : "Signed in"}
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
