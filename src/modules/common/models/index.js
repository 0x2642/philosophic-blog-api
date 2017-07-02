'use strict'
import Sequelize from 'sequelize';
import config from '../../../config/config';
import {
	log
} from '../core/log';
import {
	join
} from 'path';

let dbConfig = config.mysql;

export let sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	host: dbConfig.host,
	dialect: "mysql",
	pool: {
		max: dbConfig.poolSize,
		min: 0,
		idle: 10000
	},
	logging: true,
	define: {
		underscored: true,
		hooks: { //http://docs.sequelizejs.com/en/latest/docs/hooks/
			beforeBulkCreate: function(rows) {
				rows.forEach(function(row) {
					if (typeof row.status == 'undefined' || row.status == null) {
						row.status = 1;
					}
					if (typeof row.isDeleted == 'undefined' || row.isDeleted == null) {
						row.isDeleted = 0;
					}
				});
			},
			beforeValidate: function(row) {
				if (typeof row.status == 'undefined' || row.status == null) {
					row.status = 1;
				}
				if (typeof row.isDeleted == 'undefined' || row.isDeleted == null) {
					row.isDeleted = 0;
				}
			}
		}
	}
});

sequelize.authenticate().catch(function(errors) {
	log.info({
		type: "Mysql",
		err: errors
	});
});

// Export 
export let Article = sequelize.import(join(__dirname, './article'));
//export let Admin = sequelize.import(join(__dirname, './admin'));