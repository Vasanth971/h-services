import { BrowserRouter,Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Landing from "./components/Landing"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>

        <Route path="/signin" exact element={<Signin />}/>
        <Route path="/signup" exact element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
