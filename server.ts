import experss from 'express';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';



const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const startingRout = '/chat'

app.prepare().then(() => {
    const server = experss();

    server.get(startingRout, (req: any, res: any) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl)
    })

    server.get('*', (req: any, res: any) => {
        return handle(req, res)
    })

    createServer(server).listen(port, () => {

        console.log(`> Ready on ${hostname}/${port}${startingRout}`)
    })
})