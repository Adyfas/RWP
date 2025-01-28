const response = (  statusCode, message ,data, lengthData , error ,res   ) =>{
    res.status(statusCode).json([{
        data,
        lengthData,
        message,
        error:{
            error
        }
        
    }]) 
}


module.exports = response