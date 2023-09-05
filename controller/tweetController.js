const tweetModel = require ('../model/tweetModel')


const getHomepage =(req,res)=>{
    tweetModel.find()
    .sort({created_at: "-1" })
    .then( data =>{
        res.render("index",{
            tweets:data
        })
    })
    .catch(err =>{
        console.log(err);
    })
}




const getAddNewPage= (req ,res) =>{
    res.render('addTweet')

}

const submittweet= (req,res)=>{
 
        let newTweet = new tweetModel(req.body)
            newTweet.save()
                    .then(()=>{
                        res.redirect("/tweet")
                    })
                    .catch(err=>{
                        console.log(err);
                    })
    
}


const getFullTweet= (req, res)=>{
    tweetModel.findById(req.params.id)
    .then( data =>{
        res.render("fullTweet",{
            tweet:data
        })
    })
    .catch(err =>{
        console.log(err);
    })
}



const deletTweet= (req, res)=>{
    tweetModel.findByIdAndDelete(req.params.id)
    .then (()=>{
        res.redirect("/tweet")
    })
    .catch(err =>{
        console.log(err);
    })
}



const editTweet =(req ,res)=>{
    let tweetId= req.params.id;
    tweetModel.findById(tweetId)
        .then(tweetInfo =>{
            res.render("editTweet",{
                info:tweetInfo
            })
        })
        .catch(err=>{
            console.log(err)
        })
}



const submiteditTweet = (req ,res)=>{


    tweetModel.findByIdAndUpdate(req.params.id , req.body)
        .then (()=>{    
            tweetModel.findById(req.params.id)
            .then( data =>{
                res.render("fullTweet",{
                    tweet:data
                })
            })
            .catch(err =>{
                console.log(err);
            })
        })
        .catch(err =>{
            console.log(err);
        })
}

module.exports={
    getHomepage,
    getAddNewPage,
    submittweet,
    getFullTweet,
    deletTweet,
    editTweet,
    submiteditTweet,
}