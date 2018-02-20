module.exports = {
    getCart: function(req,res){  
            const db = req.app.get('db')
            db.donuts.read_cart([req.body.user_id]).then(resp => {
                res.status(200).send(resp);
            })
    },
    deleteCart: function(req,res){  
        const db = req.app.get('db')
        db.donuts.delete_cart([req.body.cart_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    updateCart: function(req,res){  
        const db = req.app.get('db')
        db.donuts.update_cart(req.body.user_id, req.body.donut_id, req.body.donut_amount).then(resp => {
            res.status(200).send(resp);
        })
    },
    createCart: function(req,res){  
        const db = req.app.get('db')
        db.donuts.create_cart([req.body.user_id, req.body.donut_id, req.body.donut_amount]).then(resp => {
            res.status(200).send(resp);
        })
    }
}