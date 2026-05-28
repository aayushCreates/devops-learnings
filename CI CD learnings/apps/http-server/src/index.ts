import express, { Request, Response, NextFunction } from 'express';
import { prisma } from '@repo/db';

const app = express();


app.post('/register', async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const { name, email, password } = req.body as {
            name: string,
            email: string,
            password: string
        }
        if(!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Enter the required user information"
            });
        }

        const newUser = await prisma.user.create({
            data: {
                name, email, password
            }
        });

        return res.status(200).json({
            success: true,
            message: "First User info got successfully",
            data: newUser
        });

    }catch(err) {
        console.log("Error in getting first user information: ");
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });;
    }
})

app.get('/', async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const user = await prisma.findFirst();
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "First User info got successfully",
            data: user
        });

    }catch(err) {
        console.log("Error in getting first user information: ");
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });;
    }
});

app.listen(5050, ()=> {
    console.log("Http server is running on 5050🚀🚀🚀");
});