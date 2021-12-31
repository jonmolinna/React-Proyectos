import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Posts";
import cloudinary from "../config/cloudinary";

export class PostController {
    static addPost = async (req:Request, res: Response) => {
        let image = req.file? req.file.path : '';
        let comment = req.body.comment;
        const { id } = res.locals.jwtPayload;

        // Validacion
        if (!(comment || image)) {
            return res.status(400).json({ message: 'Ingrese un tweet o imagen' });
        }

        if (comment.length > 240 ) {
            return res.status(400).json({ message: 'Ingrese un tweet no mayor a 240 caracteres' });
        }

        let result;
        if(image){
            result = await cloudinary.v2.uploader.upload(image)
        }

        const post = new Post();
        post.comment = comment.trim();
        post.imagen = result? result.secure_url: null;
        post.user = id;

        const userRepository = getRepository(Post);
        try {
            await userRepository.save(post);
        } catch (err) {
            return res.status(400).json({ message: 'Algo salio mal' })
        }

        return res.status(201).json({ message : "Tweet creado" });
    };
};