require('./config/db')().then(() => {
    console.log('Connected to db successfully');
    require('./config/express');
}).catch(console.error);
