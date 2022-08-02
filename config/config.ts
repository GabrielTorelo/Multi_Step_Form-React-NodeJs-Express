import dotenv from 'dotenv'
import assert from 'assert'

dotenv.config();
const {
    PORT,
    HOST,
    HOST_URL
} = process.env

assert(PORT, 'PORT IS REQUIRED!')
assert(HOST, 'HOST IS REQUIRED!')

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL
}
