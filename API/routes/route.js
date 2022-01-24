const router=require('express').Router();
const user=require("../userSchema");


//ADD
router.post("/",async(req,res)=>{
    try{
        const newUser=new user({
            username :req.body.name
        })
        const user= await newUser.save();
        res.status(200).json(user);
    }catch{
        res.status(500).json(err);
    }
})

//update
router.put("/update/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.name === req.body.name) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports=router;