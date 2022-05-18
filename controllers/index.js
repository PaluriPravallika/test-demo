const AppError = require("../utils/appError");
const conn = require("../services/db");
exports.getAllsample=(req,res,next)=>{
    conn.query("SELECT * FROM sample1",function(err,data,fields){
        if(err)return next(new AppError(err))
        res.status(200).json({
            status:"success",
            length:data?.length,
             data:data  
            });
    });
};
   exports.updateTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "UPDATE sample1 SET name='sam' WHERE id=?",
      [req.body.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "data updated!",
        });
      }
    );
    
   };