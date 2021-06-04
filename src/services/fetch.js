import { useState, useEffect } from "react";

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const requestServer = async () => {
    let url = "http://localhost:3000/books";
    const response = await fetch(url);
    const jsonData = await response.json();
    setBooks(jsonData);
    setIsFetching(false);
  };

  useEffect(() => requestServer(), []);

  return [books, isFetching];
};
export default useFetchBooks;
