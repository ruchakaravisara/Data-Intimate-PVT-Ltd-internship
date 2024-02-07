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
    },
    getUsers: callBack => {
        pool.query(
          `select id,firstName,lastName,gender,email,number from registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        pool.query(
          `select id,firstName,lastName,gender,email,number from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      
}