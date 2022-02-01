import React, { useEffect, useState, useRef, useCallback } from "react";
import getUsers from "../Services/users.service";
import InfiniteLoader from "react-infinite-loader";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function UserList() {
  let [users, setUsers] = useState([]);
  let [start, setStart] = useState(0);
  let [loading, setLoading] = useState(false);
  let [finished, setFinished] = useState(false);

  const getData = () => {
    if (loading) {
      return;
    }

    setLoading(true);

    getUsers(start).then((res) => {
      res = res.map((d) => {
        d.backgroundColor = getRandomBgColr();
        return d;
      });
      setLoading(false);
      setUsers([...users, ...res]);
      if (res.length === 0) {
        setFinished(true);
      }
    });
  };

  const fetchMore = () => {
    if (finished) {
      return;
    }
    setStart(start + 9);
  };

  useEffect(() => {
    getData();
  }, [start]);

  const getProfilePicName = (name) => {
    if (!name) {
      return "";
    } else if (typeof name !== "string") {
      return;
    } else {
      let fName = name.split(" ")[0];
      let lName = name.split(" ")[1];

      let firstChar = "";
      let lastChar = "";
      if (fName) {
        firstChar = fName.charAt(0);
      }
      if (lName) {
        lastChar = lName.charAt(0);
      }
      return `${firstChar.toUpperCase()} ${lastChar.toUpperCase()}`;
    }
  };

  const getRandomBgColr = () => {
    let colors = [
      "blueviolet",
      "royalblue",
      "chocolate",
      "cornflowerblue",
      "yellowgreen",
      "tomato",
      "teal",
      "seagreen",
      "slateblue",
    ];

    let rn = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    if (rn < 0 || rn > 8 || typeof rn !== "number") {
      rn = 0;
    }
    return colors[rn];
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <React.Fragment>
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
            onClick={logout}
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
              <ExitToAppIcon />
              {"Logout"}
            </h5>
          </div>
        </div>
      </div>

      <div className="app margin-top">
        {users.map((m, indx) => {
          return (
            <React.Fragment>
              <div key={indx} className="no-border card">
                <div className="card-body no-padding">
                  <div className="row">
                    <div className="col-2" style={{ marginTop: "12px" }}>
                      {m.image_url && (
                        <img
                          style={{ objectFit: "cover", borderRadius: "50%" }}
                          height="50"
                          width="50"
                          src={m.image_url}
                        />
                      )}
                      {!m.image_url && (
                        <div
                          style={{ backgroundColor: m.backgroundColor }}
                          className="defaultProfileSmall"
                        >
                          {getProfilePicName(m.name)}
                        </div>
                      )}
                    </div>
                    <div className="col-7 text-truncate">
                      <div
                        style={{
                          fontSize: "18px",
                          paddingTop: "20px",
                          color: "royalblue",
                        }}
                      >
                        {
                          <h5
                            style={{
                              fontSize: "16px",
                            }}
                          >
                            {m.name}
                          </h5>
                        }
                      </div>
                      <div
                        style={{
                          marginTop: "-10px",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        {<p>{m.email}</p>}
                      </div>
                      <div
                        style={{
                          marginTop: "-10px",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        {<p>{m.address}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {indx < users.length - 1 && (
                <hr style={{ marginTop: "0px", marginBottom: "0px" }} />
              )}
            </React.Fragment>
          );
        })}

        {loading ? <div className="loading-users"></div> : null}

        <InfiniteLoader onVisited={() => fetchMore()} />
      </div>
    </React.Fragment>
  );
}
export default UserList;
