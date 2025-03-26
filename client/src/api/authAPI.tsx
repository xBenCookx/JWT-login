import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  async function loginUser(userInfo) {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });
  
      if (!response.ok) {
        throw new Error('Failed to retrieve user information. Check network tab!');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      return Promise.reject('Unable to fetch user information');
    }
  }
  
}



export { login };
