export default async function userFetchMiddelWare(dispatch){
    try {
        let resp=await fetch("https://jsonplaceholder.typicode.com/users");
        let users=await resp.json();
        console.log(users);
        dispatch({
            type:"success_users",
            payload:users
        })
    } catch (error) {
        dispatch({
            type:"error_users",
            payload:error.message
        })
    }
}
