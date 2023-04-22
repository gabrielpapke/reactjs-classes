import { useState } from "react";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);
	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => state + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/gabrielpapke.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Gabriel Papke</strong>
							<time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário" onClick={handleDeleteComment}>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
