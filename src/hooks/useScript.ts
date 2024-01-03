import { useEffect } from 'react';

const useScript = (url: string, id: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.id = id;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [id, url]);
};

export default useScript;
