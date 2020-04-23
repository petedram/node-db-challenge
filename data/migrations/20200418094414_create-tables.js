
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description', 1024);
            tbl.boolean('completed').defaultTo('false').notNullable();
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description', 1024);
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
                .notNullable();
            tbl.integer('resource_id')
                // .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
                .notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 1024).notNullable();
            tbl.string('notes', 2048);
            tbl.boolean('completed').defaultTo('false').notNullable();
            tbl.integer('project_id')
                .references('id')
                .inTable('projects')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
                .notNullable();
        })
  )
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
