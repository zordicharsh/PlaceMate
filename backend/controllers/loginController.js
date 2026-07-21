export const login = (req,res)=>{
      console.log(req.body);

    res.status(200).json({message: "User registered successfully",
        data:req.body,
        success:true
    });  
};