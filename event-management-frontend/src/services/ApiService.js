import {baseURL} from '../Config/Config.json'

export const doRegister = async (payload) => {
    try {
      const res = await fetch(`${baseURL}/auth/register`, {
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

  export const doLogin = async (payload) => {
    try {
      const res = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        throw new Error(`Sign-in failed with status ${res.status}`);
      }
  
      const resData = await res.json();
      const accessToken = resData["accessToken"];
      
      console.log("Access Token:", accessToken);
      return accessToken;
  
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  };

  export const fetchAllEvents = async () => {

    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("Token is missing. User is not authenticated.");
      return null;
    }
  
    
    try {
      const res = await fetch(`${baseURL}/events`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!res.ok) {
        console.warn(`Failed to fetch events. Status: ${res.status}`);
        return null;
      }
  
      return await res.json();
    } catch (error) {
      console.error("Error fetching events:", error);
      return null;
    }
  };


export const createEvent = async (payload) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication required");
  }
  
  try {
    const res = await fetch(`${baseURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });
    
    if (!res.ok) {
      throw new Error(`Failed to create event. Status: ${res.status}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const updateEvent = async (id, payload) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication required");
  }
  
  try {
    const res = await fetch(`${baseURL}/events/${parseInt(id)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });
    
    if (!res.ok) {
      throw new Error(`Failed to update event. Status: ${res.status}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication required");
  }
  
  try {
    const res = await fetch(`${baseURL}/events/${parseInt(id)}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to delete event. Status: ${res.status}`);
    }
    
    return true;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};
