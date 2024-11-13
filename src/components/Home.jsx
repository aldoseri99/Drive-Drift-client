import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"
import { AdvancedImage } from "@cloudinary/react"
import "./CSS/Home.css"
import { Link } from "react-router-dom"

const Home = ({ user }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "drd89nnxf" } })

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image("po6x7brhh4qjcospqmxt")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)) // Transform the image: auto-crop to square aspect_ratio

  return (
    <>
      <div className="MainC">
        <div className="LogoDiv">
          <img src="./Images/Logo.png" alt="Logo" className="MainLogo" />
        </div>
        <div className="NameDD">
          <div>
            <h1>Drive & Drift</h1>
            <p>
              At DriftNDrive, we turn ordinary br journeys into extraordinary{" "}
              <br />
              adventures. From luxury sports cars and SUVs to aircraft and
              boats, <br />
              our premium fleet covers every terrain. With expert staff and 24/7{" "}
              <br />
              support, we're your trusted partner in experiencing the vehicle of{" "}
              <br />
              your dreams. Your adventure starts here.
            </p>
          </div>
          {user ? (
            <Link className="LetStartButton" to={"/viewcategories"}>
              Let's Start 🡢
            </Link>
          ) : (
            <Link className="LetStartButton" to={"/register"}>
              Let's Start 🡢
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
