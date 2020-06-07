import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
        //Criar coluna da tabela -> table.tipo_de_dado('nome_da_coluna', tamanho_do_campo).vazio_ou_não();
    });
}

export async function down(knex: Knex) {
    //VOLTAR ATRÁS(DELETAR A TABELA)
    return knex.schema.dropTable('items');
}