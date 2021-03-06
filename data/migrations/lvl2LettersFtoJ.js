
exports.up = function(knex) {
  return knex.schema.createTable('FtoJ', tbl =>{
  	tbl.increments();
  	
  	tbl
  	  .string('letter')
  	  .notNullable()
  	  .unique();

  	  tbl.string('image').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("FtoJ");
};