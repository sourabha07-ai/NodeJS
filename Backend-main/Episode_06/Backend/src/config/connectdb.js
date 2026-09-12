import mongoose from 'mongoose'
import dns from 'dns'
import { ENV } from './ENV.js'

// Node ke default resolver ko Google DNS pe force karo
dns.setServers(['8.8.8.8', '1.1.1.1'])

export const ConnectDb = async () => {
    try {
        await mongoose.connect(ENV.MONGODB_URL)
        console.log(`your database connected`)
    } catch (error) {
        console.error(`error from mongodb ${error}`)
    }
}