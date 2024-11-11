import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"
import { AdvancedImage } from "@cloudinary/react"

const Home = ({ user }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "drd89nnxf" } })

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image("po6x7brhh4qjcospqmxt")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)) // Transform the image: auto-crop to square aspect_ratio

  return (
    <div>
      {user ? <h1>hello {user.name}</h1> : null}
      <AdvancedImage cldImg={img} />
    </div>
  )
}

export default Home
