import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"
import { AdvancedImage } from "@cloudinary/react"
import "./CSS/Home.css"

const Home = ({ user }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "drd89nnxf" } })

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image("po6x7brhh4qjcospqmxt")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)) // Transform the image: auto-crop to square aspect_ratio

  return (
    <div className="MainC">
      {user ? <h1>hello {user.name}</h1> : null}
      <div className="LogoDiv">
        <img src="./Images/Logo.png" alt="Logo" className="MainLogo" />
      </div>
      <div className="NameDD">
        <h1>Drive & Drift</h1>
        <p>Discription</p>
      </div>
    </div>
  )
}

export default Home
