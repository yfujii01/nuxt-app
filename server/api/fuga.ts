import type { IncomingMessage, ServerResponse } from 'http'

export default async (_req: IncomingMessage, _res: ServerResponse, _next: any) => {
    console.log(_req.method);
    if (_req.method == 'GET') {
        _res.statusCode = 448
        _res.end('fuga GET RETURN!!!')
    }
    if (_req.method == 'POST') {
        _res.statusCode = 201
        _res.end('fuga POST RETURN!!!')
    }
    console.log('/api/fuga')
}
