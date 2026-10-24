import { API_BASE_URL } from "../config/env";
async function apiClient(endpoint, options = {}) {
        try{
        const response=await fetch(`${API_BASE_URL}${endpoint}`, options);

        if(!response.ok){
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        if(response.status===204){
            return null;
        }
        const data=await response.json();
        return data;
        }catch(err){
            throw new Error(`Error; ${err.message}`);
        }
}
export default apiClient;