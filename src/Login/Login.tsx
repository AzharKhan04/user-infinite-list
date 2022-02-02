import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AuthService from "../Services/auth.service";
import { useNavigate } from "react-router-dom";
import LoginService from "./Login.service";

const Login : React.FunctionComponent<any> = () => {

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authService : AuthService = new AuthService();

  if(authService.isAuthenticated()) {
    navigate("/home");
  }

  const performLogin = async() => {

    let loginService : LoginService = new LoginService();
    try {
      let user = await loginService.login(username,password)
      if(user) {
        navigate('/home');
      }

    } catch(err) {

    }
    

  };

  return (
    <React.Fragment>
      <Card style={{ margin: "20px" }} sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <h1 style={{ textAlign: "center" }}>{"Login"}</h1>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={username}
                    onChange={(evt) => {
                      setUsername(evt.target.value);
                    }}
                    label="Username"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={password}
                    onChange={(evt) => {
                      setPassword(evt.target.value);
                    }}
                    type="text"
                    label="Password"
                    variant="standard"
                  />
                </Grid>

                <Grid style={{ paddingTop: "12px" }} item xs={12}>
                  <span style={{ fontSize: "10px" }}>
                    {"Hint: Username is foo and password is bar"}
                  </span>
                </Grid>

                <Grid style={{ paddingTop: "12px" }} item xs={12}>
                  <Button
                    fullWidth
                    onClick={performLogin}
                    disabled={!username || !password}
                    variant="contained"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default React.memo(Login);