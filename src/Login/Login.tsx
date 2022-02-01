import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import isAuthenticated from "../Services/auth.service";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  if (isAuthenticated()) {
    window.location.href = "/home";
  }

  const login = () => {
    if (!username || !password) {
      return;
    }

    if (username === "foo" && password === "bar") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: "_token__",
        })
      );
      window.location.href = "/home";
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
                    onClick={login}
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

export default Login;