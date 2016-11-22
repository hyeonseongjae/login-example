module.exports = {
    app: {
        port: 8080
    },
    db: {
        mongodb: 'mongodb://localhost/slogup',
        redis: 'redis://localhost:6379',
        mysql: 'mysql://slogup:123123@localhost:3306/core-new',
        logging: true,
        force: false
    },
};