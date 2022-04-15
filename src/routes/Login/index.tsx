import { useState } from "react";
import "./style.css";

import { useLoginHook } from "../../store/hooks/userAuth";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { userLoginRequestHandler, loginSpinner } = useLoginHook();

  return (
    <div className="container">
      <div className="center-container">
        <h1>CARS</h1>
        <div className="name-input-container">
          <CustomInput
            value={userName}
            className="name-input"
            handleOnChange={(val) => setUserName(val)}
            placeholder="First Name"
          />
        </div>
        <div className="name-input-container">
          <CustomInput
            value={password}
            type="password"
            className="name-input"
            placeholder="Password"
            handleOnChange={(val) => setPassword(val)}
          />
        </div>

        <CustomButton
          title={loginSpinner ? "Logging in" : "Submit"}
          onClick={() => userLoginRequestHandler({ userName, password })}
          disabled={userName.length === 0 || password.length === 0}
        />
      </div>
    </div>
  );
};

export default Login;
