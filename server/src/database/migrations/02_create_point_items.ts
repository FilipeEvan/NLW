import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
        //Criar coluna da tabela -> table.tipo_de_dado('nome_da_coluna', tamanho_do_campo).vazio_ou_não();
    });
}

export async function down(knex: Knex) {
    //VOLTAR ATRÁS(DELETAR A TABELA)
    return knex.schema.dropTable('point_items');
}