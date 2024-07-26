import { useState } from "react";

export default useApi = (apifunct) =>{
    const [data, setData]= useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);
        const result = await apifunct();
        setLoading(false);
      
        if (result === null) {
          setError(true);
        } 
        else {
          setData(result);
          setError(false);
        }
      };
 return {data, error, loading, request};     

}