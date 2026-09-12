export const logger=async(req ,res, next)=>{
    try {
        const start = Date.now()

        // response finish honey se pehle log karo
        res.on('finish',()=>{
            const duration = Date.now()-start
            console.log(`${new Date().toISOString() }| `+
        `${req.method} ${req.originalUrl} `+
        `${res.statusCode} `+
        `${duration}ms`
    
    )

        })
        next()
    } catch (error) {
        console.log(error)
        next()
    }
}