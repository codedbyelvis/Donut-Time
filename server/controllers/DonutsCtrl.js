module.exports = {
    getAllDonuts: function(req,res){  
            const db = req.app.get('db')
            db.donuts.read_all_donuts().then(resp => {
                res.status(200).send(resp);
            })
    },
    getDonuts: function(req,res){  
        const db = req.app.get('db')
        db.donuts.read_donuts([req.params.id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    deleteDonuts: function(req,res){  
        const db = req.app.get('db')
        db.donuts.delete_donuts([req.body.donut_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    updateDonuts: function(req,res){  
        const db = req.app.get('db')
        db.donuts.update_donuts([req.body.donut_name, req.body.donut_desc, req.body.donut_img, req.body.donut_price, req.body.donut_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    createDonuts: function(req,res){  
        console.log(req.body);
        const db = req.app.get('db')
        db.donuts.create_donuts([req.body.donut_name, req.body.donut_desc, req.body.donut_img, req.body.donut_price]).then(resp => {
            res.status(200).send(resp);
        }).catch(err => res.status(500).send(err))
    }

}