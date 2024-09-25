export const checkvalidate=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPassValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
    if(!isEmailValid)
        return "Email is Not Valid";
    if(!isPassValid)
        return "Password is Not Valid";
    return null
}