import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';

export const UserPage = () => {
  const [{ data, loading, error }] = useAxios({
    url: 'https://dummyapi.io/data/api/user?limit=10',
    headers: { 'app-id': '600ed9d384ffb577bd7ef7d9' },
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setUsers(data.data);
    }
  }, [data, loading, error]);
  const columns = [{ field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
  ];

  return (
    <Container>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          loading={loading}
          disableColumnMenu
        />
      </div>
    </Container>
  );
};
