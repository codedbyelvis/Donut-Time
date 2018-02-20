module.exports = {
    getAllPurchased: function(req,res){  
        const db = req.app.get('db')
        db.donuts.read_all_purchased([req.body.user_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    getPurchased: function(req,res){  
            const db = req.app.get('db')
            db.donuts.read_purchased([req.body.user_id]).then(resp => {
                res.status(200).send(resp);
            })
    },
    deletePurchased: function(req,res){  
        const db = req.app.get('db')
        db.donuts.delete_purchased([req.body.purchased_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    updatePurchased: function(req,res){  
        const db = req.app.get('db')
        db.donuts.update_purchased(req.body.user_id, req.body.donut_amount, req.body.purchased_id).then(resp => {
            res.status(200).send(resp);
        })
    },
    createPurchased: function(req,res){  
        const db = req.app.get('db')
        db.donuts.create_purchased([req.body.user_id, req.body.orders_id, req.body.donut_id, req.body.donut_amount]).then(resp => {
            res.status(200).send(resp);
        })
    }
}