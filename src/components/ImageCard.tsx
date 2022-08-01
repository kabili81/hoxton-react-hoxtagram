import { CommentsList } from "../components/commentsList";
import { LikeSection } from "../components/likesSection";

export function ImageCard() {
  return ( 
    <article className="image-card">
      <h2 className="title">Title of image goes here</h2>
      <img src="../assets/image-placeholder.jpg" className="image" />
      <LikeSection />

      <CommentsList />
    </article> 
  );
}
