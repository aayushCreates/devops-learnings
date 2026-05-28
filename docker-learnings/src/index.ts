import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
	res.status(200).json({
		success: true,
		message: "Server is listening"
	});
});


app.listen(5050, ()=> {
	console.log("Server is running on PORT:5050 🚀🚀🚀");
})