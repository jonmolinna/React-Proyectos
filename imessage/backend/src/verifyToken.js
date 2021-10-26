import jwt from 'jsonwebtoken';

function verifyToken(req, res, next){
    const token = req.headers['authorization'];

    if(!token) return res.status(401).json({
        auth: false,
        message: 'No tienes autorizacion'
    });

    const bearer = token.split(" ");
    const bearerToken = bearer[1];
    const decoded = jwt.verify(bearerToken, "SECRET_KEY");
    req.usuarioToken = decoded;
    next();
};

export default verifyToken;