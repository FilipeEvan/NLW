import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*'); // SELECT * FROM itens
        // await -> Aguarda a query terminar pra assim mostrar os resultados
    
         //Serialização de Dados -> Tranform-se os dados para um novo formato o qual é mais acessível a que está acessando
        const serializedItems = items.map(item =>{
            return{
                id: item.id,
                title: item.title,
                //image_url: `http://localhost:3333/uploads/${item.image}`, //Web
                image_url: `http://192.168.0.23:3333/uploads/${item.image}`, //Mobile
            };
        });
       
        return response.json(serializedItems);
    }
}

export default ItemsController;