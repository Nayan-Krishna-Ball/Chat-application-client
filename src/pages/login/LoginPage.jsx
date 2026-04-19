//
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();

    let response = null;

    try {
      dispatch(showLoader());
      response = await loginUser(user);
      dispatch(hideLoader());
      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success(response.message);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoader());
      console.log(error);
      toast.error(response.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Login Here</h1>
        </div>
        <div className="form">
          <form onSubmit={onFormSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={onChangeInput}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={onChangeInput}
            />
            <button>Login</button>
          </form>
        </div>
        <div className="card_terms">
          <span>
            Don't have an account yet?
            <Link to="/signup">Signup Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
