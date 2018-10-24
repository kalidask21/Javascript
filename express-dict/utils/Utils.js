const constructUserAdd = ({name,email,password}) =>{
      	return {
      		name : name,
      		email : email,
      		password : password
      	}
} 
const constructUserSearch = ({name,email}) =>{
    return {
    	name : name,
      	email : email
    }
}  
 
const constructResponse = ({ code, message,  data },res) =>{
    res.status(code).send(JSON.stringify(
    	{
    		message:message,
    		data:data
		}));
}   
module.exports = {
      constructUserAdd,
      constructResponse,
      constructUserSearch
}