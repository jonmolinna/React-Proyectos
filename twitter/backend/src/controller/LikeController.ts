import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Likes } from "../entity/Like";

export class LikeController {
    static addLike = async (req: Request, res: Response) => {
        try {
            const { postId }: any = req.query;
            const { id } = res.locals.jwtPayload;
            
            const like = new Likes();
            like.user = id;
            like.post = postId;

            const likeRepoitory = getRepository(Likes);

            let postLike = await likeRepoitory.find({
                relations: ['user', 'post'],
                where: [
                    { user: id, post: postId }, // AND
                ],
            })

            if (postLike.length > 0) {
                // No like
                await likeRepoitory.delete({
                    id: postLike[0].id
                })
            } else {
                // Like
                await likeRepoitory.save(like)
            }

            return res.status(201).json({ message : "True" });

        } catch (error) {
            // console.log('>>>>', error)
            return res.status(201).json({ message : "Algo salio mal" });
        }
    };

    static getLikesByIdPost = async (req: Request, res: Response) => {
        const likeRepoitory = getRepository(Likes);
        const { postId } : any = req.query;

        try {
            const liked = [];
            let likes = await likeRepoitory.find({
                relations: ['user', 'post'],
                where: {
                    post: postId
                }
            });

            for (let i=0; i<likes.length; i++){
                let like = {
                    id: likes[i].id,
                    username: likes[i].user.username,
                }
                liked.push(like)
            }
            
            return res.status(201).json({ count: likes.length, message : liked});
        } catch (err) {
            return res.status(201).json({ message : "Algo salio mal" });
        }
    }
}