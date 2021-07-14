import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import userFetchMiddleWare from "../Redux/User/userFetchMiddelware"
function User(props) {
    const {loading,error,users}=props;

    useEffect( () => {
        props.fetchUser();
    }, [])

    return (
        <div>
            {loading?<h2>Loading...</h2>:error?<h2>{error}</h2>:<>
                {console.log(users)}
                <h2>User List</h2>
                {users.map((user)=>{
                    return(
                        <li style={{listStyle:"none"}} key={user.id}>
                            {user.name}
                        </li>
                    )
                })}
            </>}
        </div>
    )
}

function mapStatetoProps(store){
    // console.log(store.User)
    return store.User;
}

function mapDispatchtoProps(dispatch){
    return{
        fetchUser:()=>{
            return dispatch(userFetchMiddleWare);
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(User);
