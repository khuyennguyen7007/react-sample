import { useState, useEffect } from 'react';
import { getHttpInstance } from '../../../utils/http';

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    getHttpInstance().get('https://dummyapi.io/data/api/user?limit=10', { headers: { 'app-id': '600ed9d384ffb577bd7ef7d9' }})
    .then(response => setUsers(response.data.data))
    return () => abortController.abort();
  }, []);

  return users;
}
