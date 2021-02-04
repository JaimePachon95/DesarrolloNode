const express = require('express');
const bodyParser = require('body-parser');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');


router.get('/',function(req, res){
    controller.getUsers().then((data) => {
        response.success(req, res, data, 201)
    }).catch(e => {
        console.log(e);
        response.error(req,res,'Información invalida', 500);
    })
});

router.post('/',function(req, res){
    const {document_number, name , last_name} = req.body;
    const newUser = {
        document_number,
        name,
        last_name
    };
    console.log(newUser);
    controller.addUser(newUser).then(() => {
        response.success(req, res, newUser, 201)
    }).catch(e => {
        console.log(e);
        response.error(req,res,'Información invalida', 500);
    })
}); 

router.patch('/:id',function(req, res){
    const {document_number, name , last_name} = req.body;
    const newUser = {
        document_number,
        name,
        last_name
    };
    controller.updateUser(req.params.id,newUser).then(() => {
        response.success(req, res, `Usuario ${req.params.id} actualizado`, 201)
    }).catch(e => {
        console.log(e);
        response.error(req,res,'Información invalida', 500);
    })
});

router.delete('/:id',function(req, res){
    controller.deleteUser(req.params.id).then(() => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 201)
    }).catch(e => {
        console.log(e);
        response.error(req,res,'Información invalida', 500);
    })
});

module.exports = router;