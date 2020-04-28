export const LIST = 'LIST'; 

// Action creators 
export const updateList = (update) => ({
    type : LIST, 
    payload : update, 
}); 

export default LIST; 