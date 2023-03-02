import "./post.css"
import postimg from "../../blogimg4.jpg"

const Post = () => {
  return (
    <div className="post">
       <img src={postimg}  width="100%" alt=""  className="postImg"/>
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>


        <span className="postTitle"> Lorem ipsum, dolor sit </span>
    <hr />
    <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Post Description sit amet consectetur adipisicing elit. Aspernatur debitis amet cumque at suscipit nemo, numquam animi voluptatum optio maxime laudantium impedit quas culpa exercitationem officiis sed. Molestias facere, ut dolorum, modi temporibus nulla aliquid quisquam laudantium quae laborum illum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis amet cumque at suscipit nemo, numquam animi voluptatum optio maxime laudantium impedit quas culpa exercitationem officiis sed. Molestias facere, ut dolorum, modi temporibus nulla aliquid quisquam laudantium quae laborum illum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis amet cumque at suscipit nemo, numquam animi voluptatum optio maxime laudantium impedit quas culpa exercitationem officiis sed. Molestias facere, ut dolorum, modi temporibus nulla aliquid quisquam laudantium quae laborum illum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis amet cumque at suscipit nemo, numquam animi voluptatum optio maxime laudantium impedit quas culpa exercitationem officiis sed. Molestias facere, ut dolorum, modi temporibus nulla aliquid quisquam laudantium quae laborum illum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis amet cumque at suscipit nemo, numquam animi voluptatum optio maxime laudantium impedit quas culpa exercitationem officiis sed. Molestias facere, ut dolorum, modi temporibus nulla aliquid quisquam laudantium quae laborum illum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis amet cumque at suscipit nemo, numquam animi voluptatum optio maxime laudantium impedit quas culpa exercitationem officiis sed. Molestias facere, ut dolorum, modi temporibus nulla aliquid quisquam laudantium quae laborum illum.
    </p>
    </div>
  )
}

export default Post