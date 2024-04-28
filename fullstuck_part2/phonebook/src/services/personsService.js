import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const update = (id, number) => {
  const request = axios.put(`${baseUrl}/${id}`, number);
  return request.then((response) => response.data);
};

const deleteNumber = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  request.catch((error) => {
    console.log("fail");
  });
  return request.then((response) => response.data);
};

export default { getAll, create, update, deleteNumber };
