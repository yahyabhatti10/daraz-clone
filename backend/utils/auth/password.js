const bcrypt = require('bcrypt')

const SECRET_KEY = process.env.HASH_PASSWORD_SECRET
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS,10)

async function hashPassword(password)
{
    try
    {
        const combinedPassword = password + SECRET_KEY
        const hashedPassword = await bcrypt.hash(combinedPassword, SALT_ROUNDS)
        return hashedPassword
    }
    catch(err)
    {
        console.log("error at hash password", err.message);
        throw err;
    }
}


async function comparePassword(plainPassword, hashedPassword)
{
    const combinedPassword = plainPassword + SECRET_KEY;
    return await bcrypt.compare(combinedPassword, hashedPassword)
}

module.exports = {comparePassword, hashPassword}