import {configDotenv}from 'dotenv'

configDotenv({})

export const ENV={
    PORT:process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL,
    SECRET_KEY:process.env.SECRET_KEY,
    JWT_EXPIRE:process.env.JWT_EXPIRE

}