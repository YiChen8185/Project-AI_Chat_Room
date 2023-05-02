import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = props => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault(); // 防止表单提交默认刷新页面
  
      // 调用 registerUser 函数，并传递输入值
      loginUser(email, password);
    };
  
    const loginUser = async (email, password) => {
      console.log(email, password);
      try {
        const resp = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const responce = await resp.json();
        console.log(responce);
        props.onUserID(responce.user_id);
        props.onLogin();
        navigate("/HomePage");
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <>
        <form onSubmit={handleLogin}>
          <h3 align="center">Login In</h3>
          <div>
            <label>Email: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              id=""
            />
          </div>
  
          <div>
            <label>Password: </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              id=""
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  };
  
  export default LoginPage;
  