import { Request, Response } from "express";
import { Likes } from "../entity/Like";

export class LikeController {
    static addLike = async (req: Request, res: Response) => {
        try {
            const { postId }: any = req.query;
            const { id } = res.locals.jwtPayload;

            const like = new Likes();
            like.user = id;
            like.post = postId;

            console.log(typeof postId);
            console.log(typeof id);

            
        } catch (error) {
            
        }


        return res.status(201).json({ message : "Like" });
    }
}