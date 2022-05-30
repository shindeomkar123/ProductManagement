import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useHttp from "../Hooks/use-http";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
    editable: false,
    resizable: true,
  },
  {
    field: "username",
    headerName: "Username",
    width: 250,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 250,
    editable: false,
  },
  {
    field: "city",
    headerName: "City",
    width: 250,
  },
  {
    field: "zipcode",
    headerName: "Zipcode",
    width: 250,
  },
];

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const transFormUserList = (data) => {
    const usersData = data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        zipcode: user.address.zipcode,
      };
    });
    setUsers(usersData);
  };

  const {
    sendRequest: getUsers,
    isLoading,
    error,
  } = useHttp(
    {
      url: "https://jsonplaceholder.typicode.com/users",
      headers: { "Content-Type": "application/json" },
    },
    transFormUserList
  );

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <Box style={{ height: 600, width: "100%" }}>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <DataGrid
          pagination
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onSelectionModelChange={(itm) => {
              navigate('/home/userManager/userDetails',{state:itm[0]});
            }}
          components={{
            Pagination: CustomPagination,
          }}
        />
      )}
    </Box>
  );
};

export default ListUser;
