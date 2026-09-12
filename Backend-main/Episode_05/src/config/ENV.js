import {configDotenv}from 'dotenv'

configDotenv({})

export const ENV={
    PORT:process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL
}