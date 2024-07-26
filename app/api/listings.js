import client from "./client";


const endpoint = "/listings"


const listingsApi = async () => {
      const response = await client.get(endpoint);
      if (!response.ok) {
          console.log(response.problem);
          return null;
      }
      return response.data;  
      
    };
  
 
export default listingsApi;