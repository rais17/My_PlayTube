import { useEffect, useState } from 'react'


const useInfiniteScroll = (url) => {

    const [page, setPage] = useState('');
    const [nextPage, setNextPage] = useState(page);
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    console.log("allData inside infinite scroll for searchpage", allData);


    useEffect(() => {
      if (initialLoad || page !== "") {
        getData();
        setInitialLoad(false);
      }
    }, [page, initialLoad]);

    const getData = async () => {
        try {
            const data = await fetch(url + `&pageToken=${page}`);
            const result = await data.json();
            console.log("result", result);
            setIsLoading(false);

            setAllData((prevState => ([
                 ...prevState, ...result.items
            ])));
            setNextPage(result.nextPageToken);
        }
        catch (error) {
            console.error(error.message);
        }
    }



    const handleInfiniteScroll = () => {
        if (document.documentElement.scrollTop + window.innerHeight + 1 > document.documentElement.scrollHeight) {
            setIsLoading(true);
            if (nextPage) {
                setPage(nextPage);
            }
        }
    }
    
    useEffect(() => {
      window.addEventListener("scroll", handleInfiniteScroll);
      return () => {
        window.removeEventListener("scroll", handleInfiniteScroll);
      };
    }, []);

    return { allData, isLoading };
    
}

export default useInfiniteScroll