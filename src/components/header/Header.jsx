import "./header.css"
import blogimg1 from "../../blogimg1.jpg"

const Header = () => {
  return (
    <>
    
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">
                React & Node
            </span>
            <span className="headerTitleLg">Blog</span>
        </div>

        <img src={blogimg1} alt="" className="headerImg" />
    </div>
    
    </>
  )
}

export default Header