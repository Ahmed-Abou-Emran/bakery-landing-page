import { useState, useEffect } from "react";

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, postData) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json", // Adjust as needed
        // },
        body: JSON.stringify({
          name: "Mostafa Essam",
          email: "12345@gmail.com",
          phone: "1234578910",
        }),
      });
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Bad Request: Please check your data.");
        } else if (response.status === 401) {
          throw new Error("Unauthorized");
        } else {
          throw new Error("Network response was not ok");
        }
      }

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
}

export default usePost;
