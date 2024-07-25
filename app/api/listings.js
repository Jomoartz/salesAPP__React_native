import client from "./client";


const endpoint = "/listings"


const listingsApi = async () => {
    try {
      const response = await client.get(endpoint);
      if (!response.ok) {
          console.log(response.problem);
      }
      const Data = response.data;

      return Data;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
 
export default listingsApi;