
import express from 'express';
import path from 'path';

interface Options{
    PORT: number;
    PUBLIC_PATH?: string;
}

export class Server{

    private app = express();
    private readonly port:number;
    private readonly public_path:string;

    constructor (options:Options){
        this.port=options.PORT;
        this.public_path=options.PUBLIC_PATH||'public';
    }

    async start (){

        //*middlewares


        //*public folder

        this.app.use(express.static(this.public_path));

        this.app.get('*',(req,res)=>{
            const indexPath = path.join(__dirname+`../../../${this.public_path}/index.html`);
            res.sendFile(indexPath);
        })

        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}