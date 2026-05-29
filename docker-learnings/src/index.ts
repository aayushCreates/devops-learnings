import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
	res.status(200).json({
		success: true,
		message: "Server is listening"
	});
});


app.listen(5050, ()=> {
	console.log("Server is running on PORT:5050 🚀🚀🚀");
});

	// console.log("Environment Variable: ", process.env.DATABASE_URL);
	// We can add the environment variable using <<< docker run -p localPORT:dockerPORT -e DATABASE_URL="" dockerIMAGE >>>
