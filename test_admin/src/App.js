import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
// import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./dashboard";
import Users from "./users";
import { PostList, PostEdit, PostCreate } from "./post";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider";
const App = (props) => {
  // const dataProvider = jsonServerProvider(
  //   "https://jsonplaceholder.typicode.com"
  // );
  return (
    <Admin
      authProvider={authProvider}
      dashboard={() => <Dashboard name="Deepak Negi" />}
      dataProvider={dataProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" show={Users} icon={UserIcon} />
    </Admin>
  );
};

export default App;
