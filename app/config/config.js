module.exports =  {
    env: process.env.NODE_ENV || 'development',
    service: {
        port: process.env.PORT || 9000 //caso não seja passado uma porta, executo na 9000
    },
    database: {
        uri: `mongodb://database:27017/oceanar`
    }
};