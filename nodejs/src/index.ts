import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT;
const dirname = process.cwd();

const static_root = 'html';

const prefix = '⭐[server]: ';

app.get('/', (req: Request, res: Response) => {
	let options = {
		root: path.join(dirname, static_root)
	};
	console.log(prefix, `Request ${req.path} from ${req.socket.remoteAddress}:${req.socket.remotePort} `);
	let filename = 'index.html';
	if (req.path == "/") res.sendFile(filename, options, err => err?
		console.log(prefix, err):
		console.log(prefix, `Redirect ${req.path} to ${filename}`)
	);
})

app.use('/', express.static(static_root));

app.listen(port, () => {
	console.log(prefix + `Server is running at localhost:${port}`);
})

