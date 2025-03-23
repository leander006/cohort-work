
import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());


const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async(req:any, res:any) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;
   const request = await prismaClient.req.create({
        data:{
                a:parsedResponse.data.a ,
                b:parsedResponse.data.b,
                result: answer
        }
    })

    res.json({
        answer,
        id:request.id
    })
});

app.post("/mul", async(req:any, res:any) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a * parsedResponse.data.b;

    await prismaClient.req.create({
        data:{
                a:parsedResponse.data.a ,
                b:parsedResponse.data.b,
                result: answer
        }
    })


    res.json({
        answer
    })
});