var password = {
    //create functions
    getRandomPassword(length)
    {
        console.log("I will generate random password");
    },
    getHashedPassword(PlainTextPassword)
    {
        console.log("I will generate Hashed Password");
    },
    comparePassword(PlainTextPassword,HashedPassword)
    {
        console.log("I will match PlainTextPassword and HashedPassword");
    }
};
//exports all function of password object all together
module.exports = password;