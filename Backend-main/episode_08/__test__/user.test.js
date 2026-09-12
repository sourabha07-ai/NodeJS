import mongoose from "mongoose";
import request from 'supertest'
import app from "../index.js";
import { ENV } from "../src/config/ENV.js";
import { User } from "../src/models/user.model.js";


beforeAll(async()=>{
    await mongoose.connect(ENV.MONGODB_URL,{dbName:'testing'})
})

afterAll(async()=>{
    await User.deleteMany({})
    await mongoose.connection.close()
})

describe('User API',()=>{
    const testUser={name:'testUser',email:'test@gmail.com',password:'password123'}

    test(' POST /api/register- should register a new user',async()=>{
        const res = await request(app)
        .post('/api/register')
        .send(testUser)
        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty('name',testUser.name)
    })


    test('POST /api/register - should duplicate',async()=>{
        const res = await request(app)
        .post('/api/register')
        .send(testUser)
        expect(res.status).toBe(404);
        expect(res.body.success).toBe(false)
        
    } )
    test('POST /api/register - should missing fields',async()=>{
        const res = await request(app)
        .post('/api/register')
        .send({name:"Test User"})
        expect(res.status).toBe(401);
        expect(res.body.success).toBe(false)
        
    } )
})