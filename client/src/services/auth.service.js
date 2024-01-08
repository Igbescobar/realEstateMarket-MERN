import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api/auth",
    });
  }

  signUp(userData) {
    return this.api.post("/signup", userData);
  }
}

const authService = new AuthService();

export default authService;
