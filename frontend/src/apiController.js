const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const fetchData = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const getData = async () => {
  try {
    const data = await fetchData("api/users/");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();
