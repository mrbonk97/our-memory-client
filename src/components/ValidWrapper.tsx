import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
const ValidWrapper = () => {
  const [searchParams] = useSearchParams();
  const [validUrl, setValidUrl] = useState(false);

  useEffect(() => {
    const validateUrl = async () => {
      const code = searchParams.get('code');
      const result = await axios.get('/api/auth/validate-code?code=' + code);
      setValidUrl(result.data.result);
    };

    validateUrl();
  }, []);

  return validUrl ? <Outlet /> : <main>요청이 만료되었거나 유효하지 않습니다.</main>;
};

export default ValidWrapper;
