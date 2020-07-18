import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, SimpleList, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "./MyUrlField";
const UsersList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  let UserListView = (
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      {/* <MyUrlField source="website" /> */}
      <TextField source="phone" />
      <TextField source="country" />
    </Datagrid>
  );
  if (isSmall) {
    UserListView = (
      <SimpleList
        primaryText={(record) => record.name}
        secondaryText={(record) => record.phone}
        // tertiaryText={(record) => record.website}
      />
    );
  }

  return <List {...props}>{UserListView}</List>;
};
export default UsersList;
