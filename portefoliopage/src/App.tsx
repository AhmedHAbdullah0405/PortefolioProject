import './App.css'
import Summary from './pages/Summary'
import DataCapabilities from './pages/DataCapabilities'
import Education from './pages/Education'
import Projects from './pages/Projects'
import WorkExperience from './pages/WorkExperience'
import ContactInfo from './pages/ContactInfo'

function App() {

  return (

    <>
      <h1 id="pageTitle">Ahmed Hazhar Abdullah</h1>

      <Summary />
      <br />
      <ContactInfo />
      <br />
      <Education />
      <br /> <br />
      <WorkExperience />
      <br />
      <Projects />
      <br />
      <DataCapabilities />
    </>
   
  )
}

export default App
