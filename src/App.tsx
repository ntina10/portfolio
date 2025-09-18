import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
  Click Me
</button> */}
      <main>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
