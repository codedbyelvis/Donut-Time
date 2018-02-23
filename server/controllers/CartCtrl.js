module.exports = {
    getCart: function(req,res){  
            const db = req.app.get('db')
            db.cart.get_user_cart([req.session.user.user_id]).then(resp => {
                res.status(200).send(resp);
            })
    },
    deleteCart: function(req,res){  
        const db = req.app.get('db')
        db.cart.delete_cart([req.session.cart_id]).then(resp => {
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
        //check if user has said donut
        db.cart.find({
            user_id:req.session.user.id,
            donut_id: req.body.donut_id
        }).then(resp =>{
            let record = resp[0]
            (console.log(record))
            if(record){
                //update amount
                db.query(`update donuts set amount = $1 where cart_id = $2 returning *`, [record.amount + req.body.donut_amount,
                    req.session.user.user_id]).then((resp)=>{
                        console.log(resp)
                        res.status(200).send(resp);
                    })
            } else {
                db.cart.create_cart([req.session.user.user_id, req.body.donut_id, req.body.donut_amount]).then(resp => {
                    console.log(resp)                    
                    res.status(200).send(resp);
                })
            }
        }).catch(console.log)
        //if they have donut, update amount
        //else proceed as usual
    }
}