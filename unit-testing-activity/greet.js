const greet = (Name) => {
    //if Name is null
    if(Name === null) return "Hello, there!";
    
    //if Name is string
    if(typeof(Name) === 'string') {

    //if Name is upperCase
        if(Name == Name.toUpperCase()) return `HELLO ${Name}!`;

        //single regular name
        return `Hello, ${Name}`;
    }

    //if it's an array
    if(typeof(Name) == 'object' ) {
        let greet = 'Hello';
        for (let i = 0; i < Name.length; i++) {
            greet += ', ' + Name[i];  
        }
        return greet;
    }
};

module.exports = greet;

