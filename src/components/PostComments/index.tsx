import React, { useState } from 'react';
import styles from './PostComments.module.css';

const PostComments = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [commentText, setCommentText] = useState<string>('');

    const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    return (
        <div data-testid="post-comments">
            <ul className="post-comments">
                {comments.map((comment, index) => (
                    <li key={index} className={styles['post-comment']} data-testid={`comment-${index}`}>
                        {comment}
                    </li>
                ))}
            </ul>
            <form className={styles['post-comments-form']} onSubmit={handleCommentSubmit}>
                <textarea
                    className={styles['post-comments-form-textarea']}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                    data-testid="comment-textarea"
                />
                <button
                    className={styles['post-comments-form-button']}
                    type="submit"
                    data-testid="comment-button"
                >
                    Comentar
                </button>
            </form>
        </div>
    );
};

export default PostComments;