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
      updateUser: (data, callBack) => {
        pool.query(
          `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
          [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteUser: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
}