import express from 'express';
import { celebrate, Joi } from 'celebrate'; // celebrate -> Integração entre o Joi e o express
// Joi -> Biblioteca de validação
// npm install @types/hapi__joi -D -> Para ter o intellisense do Joi

import multer from 'multer';
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index(Se for uma listagem), show(Se for apresentar um único registro), create, update, delete
const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post(
    '/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
);

export default routes;