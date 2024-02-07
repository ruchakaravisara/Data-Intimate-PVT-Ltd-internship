const pool =require('../../config/db')

module.exports ={
    create:(data,callBack)=>{
        pool.query(
            `INSERT INTO registration (firstname, lastname, gender, email, password, number)
            VALUES (?,?,?,?,?,?)`,[
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number
            ],(error,results,fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        );
    }
}