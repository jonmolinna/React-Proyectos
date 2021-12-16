export const validateComment = (comment) => {
    const errors = {};
    
    if(comment.trim() === ''){
        errors.name = 'Ingrese un Comentario';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
};