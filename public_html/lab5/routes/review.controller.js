var Empl = require('../models/Empl')
var debug = require('debug')('demo:review')

function sendJSONresponse(res, status, content){
    res.status(status)
    res.json(content)
}

module.exports.reviewsReadAll = function(req,res){
    debug('Getting all reviews')

    Empl.find().exec().then(function(results){
        sendJSONresponse(res,200,results)
    }).catch(function(err){
        sendJSONresponse(res,404,err)
    })
}
module.exports.reviewsReadOne = function(req,res){
    if(req.params && req.params.reviewid){
        debug('Getting single reviews with id =', req.params.reviewid)

        Empl.findById(req.params.reviewid).exec().then(function(results){
        sendJSONresponse(res,200,results)
    }).catch(function(err){
        sendJSONresponse(res,404,{
            "message":"reviewed not found"
        })
    })
    }else{
        sendJSONresponse(res,404,{
            "message":"reviewid not found"

        })
    }
    
}
//post routes /api/v1/reviews

module.exports.reviewsCreate = function(req,res){
    debug("Creating a review", req.body)
    Empl.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        department:req.body.department,
        startDate:req.body.startDate,
        jobTitle:req.body.jobTitle,
        salary:req.body.salary,
    }).then(function(dateSaved){
        debug(dateSaved)
        sendJSONresponse(res,201,dateSaved)
    }).catch(function(err){
        debug(err)
        sendJSONresponse(res,400,err)
    })
}

module.exports.reviewsUpdateOne = function(req,res){
    if(!req.params.reviewid){
        sendJSONresponse(res,404, {
            "message":"Not found reviewid required"
        })
        return
    }
    Empl.findById(req.params.reviewid).exec()
    .then(function(reviewData){
        reviewData.firstName = req.body.firstName;
        reviewData.lastName = req.body.lastName;
        reviewData.department = req.body.department;
        reviewData.startDate = req.body.startDate;
        reviewData.jobTitle = req.body.jobTitle;
        reviewData.salary = req.body.salary;
        return reviewData.save()
    })
    .then(function(data){
        sendJSONresponse(res,200,data)
    }).catch(function(err){
        sendJSONresponse(res,400,err)
    })
}

module.exports.reviewsDeleteOne = function(req, res){
    if(!req.params.reviewid){
        sendJSONresponse(res,404, {
            "message":"Not found reviewid required"
        })
        return
    }

    Empl.findByIdAndRemove(req.params.reviewid).exec()
    .then(function(data){
        debug("Review id " + req.params.reviewid + " deleted")
        debug(data)
        sendJSONresponse(res,204,null)
    }).catch(function(err){
        sendJSONresponse(res,404,err)
    })
   
}
module.exports.emplsort = (res, req) =>{
    Article.find({}).sort(`${req}`).exec(function(err, docs) { 
        sendJSONresponse(res,200,results)
     });
    if(req.reviewid == firstName){
        
    }
}
module.exports.emplSearchfor = (res, req) =>{
    var search
    if (req.reviewid.firstName.startsWith('"')||req.reviewid.firstName.startsWith("'") ) {
        
    }
    if(req.params.reviewid.firstName){
        search = {firstName:req.reviewid.firstName}
    }else if (req.params.reviewid.lastName){
        search = {lastName:req.reviewid.lastName}
    }else if (req.params.reviewid.department){
        search = {department:req.reviewid.department}
    }else if (req.params.reviewid.startDate){
        search = {startDate:req.reviewid.startDate}
    }else if (req.params.reviewid.jobTitle){
        search = {jobTitle:req.reviewid.jobTitle}
    }else if (req.params.reviewid.salary){
        search = {salary:req.reviewid.salary}
    }

        sendJSONresponse(res,200,search)
    
}
