import { useEffect } from 'react';

import { apiService } from '../services/ApiService';

import useAccessToken from './useAccessToken';

export default function useCheckAccessToken() {
  const { accessToken, setAccessToken } = useAccessToken();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        await apiService.fetchCurrentUser();
      } catch (error) {
        setAccessToken('');
      }
    };

    fetchCurrentUser();
  }, [accessToken, setAccessToken]);
  return true;
}
