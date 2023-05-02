import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


// 用来测试显示team的页面
const TeamCreatePage = (props) => {
    const navigate = useNavigate();
    const user_id = props.userID;

  
    const getTeam = async () => {
      try {
        const resp = await fetch("http://localhost:5000/get-teams", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user_id,
          }),
        });
        const responce = await resp.json();
        console.log("teamCreate" + responce.teams);
        console.log("teamCreate", JSON.stringify(responce.teams, null, 2));
        navigate("/HomePage");
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      console.log("TeamCreatePage userID: " + props.userID);
      getTeam();
    }, []);
  
    return (
      <>
      </>
    );
  };
  
  export default TeamCreatePage;
  