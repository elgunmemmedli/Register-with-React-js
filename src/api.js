import axios from "axios";


export const registerUser = async (yeniUser)=>{
 let {data}  = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDf3K1lQLKaWzl455c0sPPdFZjRqweumr4', 
    {email : yeniUser.email, password : yeniUser.password, returnSecureToken : true}
    );
    return data;
}


export const RandomImage = async()=>{
    let data = await axios.get('https://source.unsplash.com/random/900×700/?coat');
    return data.request.responseURL;
}


export const AddproductsDb = async (yeniMehsul)=>{
    let data = await axios.post( 'https:/reactproyekt-default-rtdb.firebaseio.com/products.json', 
    yeniMehsul
    );
    return data;
}


