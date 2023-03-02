import "./write.css"
import WriteImg from "../../blogimg1.jpg"

const Write = () => {
  return (
    <div className="write">
        <img src={WriteImg} alt="WriteImage" className="writeImg" />

        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className=" writeIcon fa-solid fa-plus"></i>
                </label>

                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" id="Title"  className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea name=""  type="text" id="" cols="30" rows="10" placeholder="Tell your Story..." className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write