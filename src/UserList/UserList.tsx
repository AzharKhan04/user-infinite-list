import React, { useEffect, useState, useRef, useCallback } from "react";
import getUsers from "../Services/users.service";
import InfiniteLoader from "react-infinite-loader";
import TopBar from "../Components/TopBar";
import UserItem from "../Components/UserItem";
import UsersUtils from "../Utils/users.utils";

const UserList: React.FC<any> = () => {

  let [users, setUsers] = useState([]);
  let [start, setStart] = useState(0);
  let [loading, setLoading] = useState(false);
  let [finished, setFinished] = useState(false);

  const usersUtils:UsersUtils = new UsersUtils();

  const getData = () => {
    
    setLoading(true);
    getUsers(start).then((res:any) => {

      res = res.map((d:any) => {
        d.backgroundColor = getRandomBgColr();
        d.profilePicName = getProfilePicName(d.name)
        return d;
      });

      setLoading(false);
      let newUsers:never[] = users.concat(res)
      setUsers(newUsers);

      if (res.length === 0) {
        setLoading(false);
        setFinished(true);
      }
    });
  };

  const fetchMore = () => {

    if (finished) {
      setLoading(false);
      return;
    }
    setStart(start + 10);
  };

  useEffect(() => {

    getData();

  }, [start]);

  const getProfilePicName = (name:string) => {

    return usersUtils.getProfilePicName(name);
    
  };

  const getRandomBgColr = () => {

    return usersUtils.getRandomColor();

  };

  

  return (
    <React.Fragment>
      <TopBar/>
      <div className="app margin-top">
        {
        users.map((user:any, index:number) => {
          return (
            <React.Fragment>
              <UserItem data = {user}  key = {index} />
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
