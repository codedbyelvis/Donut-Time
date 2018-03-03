module.exports = {
    getCart: function(req,res){  
            const db = req.app.get('db')
            db.cart.get_user_cart([req.user.user_id]).then(resp => {
                res.status(200).send(resp);
            })
    },
    deleteCart: function(req,res){  
        const db = req.app.get('db')
        console.log('delete',req.user)
        db.cart.delete_cart([req.user.user_id]).then(resp => {
            console.log('bunny',resp)
            res.status(200).send(resp);
        })
    },
    updateCart: function(req,res){  
        const db = req.app.get('db')
        db.cart.update_cart(req.body.user.user_id, req.body.donut_id, req.body.donut_amount).then(resp => {
            res.status(200).send(resp);
        })
    },
    createCart: function(req,res){  
        const db = req.app.get('db')
        console.log('another',req.session)
        //check if user has said donut
        db.cart.find({
            user_id:req.user.user_id,
            donut_id: req.body.donut_id
        }).then(resp =>{
            let record = resp[0]
            // (console.log(resp))
            if(record){
                console.log("record")
                //update amount
                db.cart.update_cart([req.user.user_id, 
                    req.body.donut_id, record.amount + req.body.donut_amount]).then((resp)=>{
                        console.log(resp)
                        res.status(200).send(resp);
                    })
            } else {
                console.log("no record")
                db.cart.create_cart([req.user.user_id, req.body.donut_id, req.body.donut_amount]).then(resp => {
                    console.log(resp)                    
                    res.status(200).send(resp);
                })
            }
        }).catch(console.log)
        //if they have donut, update amount
        //else proceed as usual
    }
}