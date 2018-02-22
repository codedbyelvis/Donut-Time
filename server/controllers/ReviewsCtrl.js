module.exports = {
    getAllReviews: function(req,res){  
        const db = req.app.get('db')
        db.reviews.read_all_reviews().then(resp => {
            res.status(200).send(resp);
        })
    },
    getReviews: function(req,res){  
            const db = req.app.get('db')
            db.reviews.read_reviews([req.body.reviews_id]).then(resp => {
                res.status(200).send(resp);
            })
    },
    deleteReviews: function(req,res){  
        const db = req.app.get('db')
        db.reviews.delete_reviews([req.body.reviews_id]).then(resp => {
            res.status(200).send(resp);
        })
    },
    updateReviews: function(req,res){  
        const db = req.app.get('db')
        db.reviews.update_reviews([req.body.user_id, req.body.user_review, req.body.user_stars, req.body.is_approved]).then(resp => {
            res.status(200).send(resp);
        })
    },
    createReviews: function(req,res){  
        const db = req.app.get('db')
        db.reviews.create_reviews([req.body.user_id, req.body.user_review, req.body.user_stars, req.body.is_approved]).then(resp => {
            res.status(200).send(resp);
        })
    }
}