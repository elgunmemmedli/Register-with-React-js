import axios from "axios";


export const registerUser = async (yeniUser)=>{
 let {data}  = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDf3K1lQLKaWzl455c0sPPdFZjRqweumr4', 
    {email : yeniUser.email, password : yeniUser.password, returnSecureToken : true}
    );
    return data;
}


