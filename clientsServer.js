class Client {
    constructor (name, email){
        this.name = name;
        this.email = email;
        this.id = Math.random();
    }
    static client = [];
};

module.exports = Client;    