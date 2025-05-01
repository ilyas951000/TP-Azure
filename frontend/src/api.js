import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'https://<votre-backend>.azurewebsites.net';

export const getItems = async () => {
  const res = await axios.get(`${API_BASE}/api/items`);
  return res.data;
};