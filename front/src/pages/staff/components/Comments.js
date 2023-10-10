import {CommentSection} from "react-comments-section";
import 'react-comments-section/dist/index.css'
import '../style/comments.css';
import {useEffect, useState} from "react";
import submitComment from "../data/submitComment";
import {useTelegram} from "../../../hooks/useTelegram";

export default function Comments({person}) {
    const [comments, setComments] = useState([]);
    const {userId, fullName} = useTelegram();

    useEffect(() => {
        function transform(old) {
            return {
                comId: old.commentId,
                userId: old.personalId,
                avatarUrl: `https://ui-avatars.com/api/name=${old.fullName}&background=random`,
                text: old.text,
                replies: []
            }
        }

        if (person.comments) {
            let comment = person.comments
                .filter(parent => parent.parentId == null)
                .map(parent => {
                    return {
                        ...transform(parent),
                        replies: person.comments.filter(c => c.parentId === parent.commentId).map(e => transform(e))
                    }
                });
            setComments(comment);
        }
    }, [person])


    return (
        <div>
            <CommentSection
                currentUser={{
                    currentUserId: person.id,
                    currentUserProfile:
                        'https://www.linkedin.com/in/riya-negi-8879631a9/',
                    currentUserFullName: person.fullName,
                    currentUserImg: `https://ui-avatars.com/api/name=${person.fullName}&background=random`
                }}
                commentData={comments}
                logIn={{
                    loginLink: 'http://localhost:3001/',
                    signupLink: 'http://localhost:3001/'
                }}
                onSubmitAction={(data) =>
                    submitComment({
                        text: data.text,
                        userId: userId,
                        personalId: person.id,
                        fullName: fullName
                    })
                }
                currentData={(data) => {
                    console.log('curent data', data)
                }}
            />
        </div>
    );
}