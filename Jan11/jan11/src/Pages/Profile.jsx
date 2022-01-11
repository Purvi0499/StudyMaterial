import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useRouteMatch } from "react-router-dom";
import EditProfile from "./EditProfile";
import ViewProfile from "./ViewProfile";
import { Link } from "react-router-dom";
export default function Profile() {
  //   const history = useNavigate();
  //   useEffect(() => {
  //     if (!login) {
  //       history.push("/");
  //     }
  //   }, [login, history]);
  const { path, url } = useRouteMatch();
  return (
    <Fragment>
      <div>Profile Page</div>
      <ul>
        <li>
          <Link to="/viewprofile">View</Link>
        </li>
        <li>
          <Link to="/editprofile">Edit</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/viewprofile" element={<ViewProfile />}></Route>
        <Route path="/editprofile" element={<EditProfile />}></Route>
      </Routes>
    </Fragment>
  );
}
