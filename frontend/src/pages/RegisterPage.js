import { useState } from "react";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault(); // 防止表单提交默认刷新页面
  
      // 调用 registerUser 函数，并传递输入值
      registerUser(email, name, password1, password2);
    };
  
    const registerUser = async (email, name, password1, password2) => {
      console.log(email, name, password1, password2);
  
      try {
        const resp = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            password1,
            password2,
          }),
        });
        console.log(resp);
        window.location.href = "/";
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <>
        <form onSubmit={handleRegister}>
          <h3 align="center">Sign Up</h3>
          <div>
            <label>Email: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id=""
            />
          </div>
  
          <div>
            <label>Password: </label>
            <input
              type="text"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Enter password"
              id=""
            />
          </div>
          <div>
            <label>Password (Confirm): </label>
            <input
              type="text"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm password"
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
  
  export default RegisterPage;
  