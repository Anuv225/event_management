import {baseURL} from '../Config/Config.json'

export const doSignUp = async (payload: any) => {
    try {
  
      const res = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        throw new Error(`Sign-up failed with status ${res.status}`);
      }
  
      return  res;
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw error;
    }
  };