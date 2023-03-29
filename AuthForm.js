import { useState, useRef, Fragment, useContext } from "react";

import classes from "./AuthForm.module.css";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import HeaderBar from "../Layout/HeaderBar";
import Footer from "../Layout/Footer";
import AuthContext from "../../Store/AuthContext";


const AuthForm = () => {
  const emailItnputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailItnputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let link;
    if (isLogin) {
      link =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvPELIwxHs3wToSpMlTVeSt03pHvohb7c";
    } else {
      link =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvPELIwxHs3wToSpMlTVeSt03pHvohb7c";
    }
    fetch(link, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const logoutHandler = () => {setIsLogin(false);
    authCtx.logout();
  };

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">
            <NavLink
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/store"
            >
              Store
            </NavLink>

            <NavLink
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/contactus"
            >
              Contact Us
            </NavLink>
            {authCtx.isLoggedIn && (<NavLink
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/product"
            >
              Product
            </NavLink>
            )}
            {!authCtx.isLoggedIn && (
              <NavLink
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/login"
            >
              Log in
            </NavLink>
            )}
            
            {authCtx.isLoggedIn && (
              <NavLink onClick={logoutHandler}
              className="m-3"
              style={{ color: "white", textDecorationColor: "whitesmoke" }}
              to="/login"
            >
              Log Out
            </NavLink>
            )}

          </Nav>
        </Container>
      </Navbar>

      <HeaderBar />

      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailItnputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </Fragment>
  );
  
};

export default AuthForm;
