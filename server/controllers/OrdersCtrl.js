module.exports = {
    getAllOrders: function(req,res){  
        const db = req.app.get('db')
        db.orders.read_orders().then(resp => {
            res.status(200).send(resp);
        })
    },
    getOrders: function(req,res){  
            const db = req.app.get('db')
            db.orders.read_orders([req.body.user_id]).then(resp => {
                res.status(200).send(resp);
            })
    },
    deleteOrders: function(req,res){  
        const db = req.app.get('db')
        db.orders.delete_orders([req.body.orders_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    // updateOrders: function(req,res){  
    //     const db = req.app.get('db')
    //     db.orders.update_orders(req.body.user_id, req.body.donut_id, req.body.donut_amount).then(resp => {
    //         res.status(200).send(resp);
    //     })
    // },
    createOrders: function(req,res){  
        const db = req.app.get('db')
        db.orders.create_orders([req.body.user_id, req.body.order_time]).then(resp => {
            res.status(200).send(resp);
        })
    }
}