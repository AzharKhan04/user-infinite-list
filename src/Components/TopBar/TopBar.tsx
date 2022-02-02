import React from "react";
import AuthService from "../../Services/auth.service";
import { ExitToAppOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";


const TopBar: React.FunctionComponent<any> = () => {

    const navigate = useNavigate()

    const performLogout = () => {

        let authService : AuthService = new AuthService();
        authService.logout();
        navigate('/login')
    }

    return (
        <div className="ui-navigator">
        <div className="row">
          <div
            style={{ paddingTop: "18px", paddingLeft: "40px" }}
            className="col-6 text-left"
          >
            <h5 style={{ fontSize: "20px", color: "royalblue" }}>
              <strong>{"Users"}</strong>
            </h5>
          </div>
          <div
            onClick={performLogout}
            style={{
              paddingTop: "18px",
              paddingLeft: "40px",
              cursor: "pointer",
            }}
            className="col-6 text-right"
          >
            <h5
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "royalblue",
              }}
            >
              <ExitToAppOutlined />
              {" Logout"}
            </h5>
          </div>
        </div>
      </div>
    )

}

export default React.memo(TopBar);