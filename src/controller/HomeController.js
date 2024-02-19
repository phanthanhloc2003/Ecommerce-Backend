class HomeController {
   async render(req , res , next){
       res.send("xin chào")
    }
        
}


module.exports = new HomeController()