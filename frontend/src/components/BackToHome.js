import { useNavigate } from "react-router-dom";
import './BackToHome.css';

const BackToHome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <button type="button" className="back-to-home-button" onClick={handleNavigate}>
      Back to Home
    </button>
  );
};

export default BackToHome;
