import "./App.css"
const App = () => {
  return (
    <div className="Main">
      <video autoPlay muted loop className="myVideo">
        <source src="./Videos/Background.mp4" type="video/mp4" />
      </video>
      <div className="Name">
        <h1>Drive & Drift</h1>
      </div>
    </div>
  )
}
export default App
