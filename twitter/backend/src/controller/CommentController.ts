import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Comments } from "../entity/Comment";

export class CommentController {
    static addComment = async (req: Request, res: Response) => {
        const { id } = res.locals.jwtPayload;
        const { postId } : any = req.query;
        let { body } = req.body;

        // Validacion 
        if (!body) {
            return res.status(400).json({ message: 'Ingrese un comentario'})
        }
            
        if (body.length > 150 ) {
            return res.status(400).json({ message: 'Ingrese un comentario no mayor a 150 caracteres' });
        }
            
        const comment = new Comments();
        comment.body = body;
        comment.user = id;
        comment.post = postId;

        const commentRepository = getRepository(Comments)
        
        try {
            await commentRepository.save(comment);
        } catch (err) {
            return res.status(201).json({ message : "Algo salio mal" });
        }
        return res.status(201).json({ message : "Se agrego un comentario" });
    };

    static getCommentByIdPost = async (req: Request, res: Response) => {
        const commentRepository = getRepository(Comments);
        const { postId } : any = req.query;

        try {
            let posts = [];

            let comments = await commentRepository.find({
                relations: ['user', 'post'],
                order: {
                    createdAt: "DESC"
                },
                where: {
                    post: postId
                }
            });

            for (let i=0; i<comments.length; i++){
                let post = {
                    id: comments[i].id,
                    comment: comments[i].body,
                    createdAt: comments[i].createdAt,
                    username: comments[i].user.username,
                    name: comments[i].user.name,
                }

                posts.push(post);
            }

            return res.status(201).json({ count: posts.length, posts });
        } catch (err) {
            return res.status(201).json({ message : "Algo salio mal" });
        }
    }
};

