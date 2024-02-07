const {create} =require("./userservice");

module.exports ={
    createUser:(req,res)=>{
        const body =req.body;
        const salt = getSaltSync(10)
        body.password =hashSync(body.password,salt);
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success :0,
                    message:"database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    }
}