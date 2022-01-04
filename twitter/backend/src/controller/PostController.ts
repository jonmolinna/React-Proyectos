import { Request, Response } from "express";
import { createQueryBuilder, getRepository } from "typeorm";
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

        if (comment.length >= 200 ) {
            return res.status(400).json({ message: 'Ingrese un tweet no mayor a 200 caracteres' });
        }

        let result;
        if(image){
            result = await cloudinary.v2.uploader.upload(image)
        }

        const post = new Post();
        post.comment = comment.trim();
        post.imagen = result? result.secure_url : null;
        post.user = id;

        const userRepository = getRepository(Post);
        try {
            await userRepository.save(post);
        } catch (err) {
            // console.log('err', err)
            return res.status(400).json({ message: 'Algo salio mal' });
        }

        return res.status(201).json({ message : "Tweet creado" });
    };

    static getPosts = async (req: Request, res: Response) => {
        const userRepository = getRepository(Post);
        try {
            let posts;
            let newPosts = [];

            posts = await userRepository.find({ 
                relations: ['user'],
                order: {
                    createdAt: "DESC",
                }
            });

            for (let i=0; i < posts.length; i++){
                let post = {
                    id: posts[i].id,
                    uuid: posts[i].uuid,
                    imagen: posts[i].imagen,
                    comment: posts[i].comment,
                    createdAt: posts[i].createdAt,
                    username: posts[i].user.username,
                    name: posts[i].user.name,
                }
                newPosts.push(post)
            }
    
            res.status(200).json({ posts: newPosts }) 
        } catch (error) {
            return res.status(400).json({ message: 'Algo salio mal' })
        }
    };
};