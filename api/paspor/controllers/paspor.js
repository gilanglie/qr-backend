'use strict';
// const mysql = require('mysql2');
const mysql = require('mysql2/promise');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findspri: async ctx => {
        const connection = await mysql.createConnection({
            host: '8.tcp.ngrok.io',
            port: '19243',
            user: 'belawanspriView',
            password: 'spriV!3wknbel4wan!',
            database: 'spri_local'
        });
        const [rows, fields] = await connection.execute( "SELECT * FROM `datapaspor` WHERE nomor_permohonan = ? ", ['1749000000000011']);
        var res = Object.assign({}, rows[0]);
        console.log(res)
        ctx.send(res);
    },
    findintal: async ctx => {
        const connection = await mysql.createConnection({
            host: '4.tcp.ngrok.io',
            port: '18883',
            user: 'belawanwnaView',
            password: 'wnaV!3wknb3law4n!',
            database: 'db_it_kanim'
        });
        const [rows, fields] = await connection.execute( "SELECT * FROM `data_wna` WHERE no_permohonan = ? ", ['31020113190008']);
        var res = Object.assign({}, rows[0]);
        console.log(res)
        ctx.send(res);
    },

};
