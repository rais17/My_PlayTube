import { useEffect, useState } from "react";

const useYouTube = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    url && get_data_from_youTube();
  }, [url]);

  const get_data_from_youTube = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading };
};

export default useYouTube;
