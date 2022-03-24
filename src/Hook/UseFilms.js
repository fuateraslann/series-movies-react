/* eslint-disable no-undef */
import {useEffect, useState} from 'react';
import axios from 'axios';
export default function useFilms(genre) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchFilms() {
    try {
      const response = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");
      setData(response.data.entries
        .filter(element => element.releaseYear >= 2010)
        .filter(element => (element.programType == genre))
        .sort((a,b) => {
          if(a.title > b.title) {
            return 1;
          }
          if (b.title > a.title) {
              return -1;
          }
          return 0;
        })
        .slice(0,21)
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchFilms();
  }, []);
  return {
    data,
    loading,
    error,
    setData,
  };
}