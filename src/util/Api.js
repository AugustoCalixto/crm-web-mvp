import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8080`,//YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  }
});
