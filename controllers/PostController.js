const modelo = require('../modules/post');
//const moongose = require('mongoose');
const PostController = {}

PostController.create = function(req,res){
    let data = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion:req.body.descripcion
    }
    if(data.materia && data.uv && data.descripcion && data.materia !='' && data.uv !='' && data.descripcion!=''){

        let nuevaPublicacion = new modelo(data);
        nuevaPublicacion.save(function(err,guardado){
            if(err){
                status = 500;
                res.JSON({code:500,err});
            }else{
                
                res.JSON({ok:true, msg:'gg wp se logro guarrdar', guardado});
            }
        })
    }

};
PostController.delete = function(req,res){
    modelo.findByIdAndRemove(req.params.id, function(err,eliminado){
        if(err){
            status = 500;
            res.JSON({code:500,err});
        }else{
            res.JSON({ok:true, msg:'gg wp se logro eliminar', eliminado});
        }
    });
};

PostController.update = function(req,res){
    let update = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion:req.body.descripcion
    }
    modelo.findByIdAndUpdate(req.params.id, update,function(err,old){
        if(err){
            status = 500;
            res.JSON({code:500,err});
        }else{
            code = 200;
            res.JSON({ok:true,code, old, update});
        }
    });

};

PostController.get = function(req,res){
    modelo.findOne({
        _id:req.params.id, function(err,publicacion){
            if(err){
                code = 500;
                res.JSON({code:500,err});
            }else{
                code = 200;
                res.JSON({ok:true,code, publicacion});
            }
        }
    });
};

PostController.getAll = function(req,res){
    
    modelo.find({}, function(err,publicacion){
        
        if(err){
            status = 500;
            res.JSON({code:500,err});
        }else{
            res.JSON({ok:true, publicacion})
        }
    });

};


module.exports = PostController;