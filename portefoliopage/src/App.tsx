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
      

      <div className="layoutRow">
        <Summary />
        <br />
        <ContactInfo />
      </div>
      
      <br />
      <Education />
      <br />
      <WorkExperience />
      <br />
      <Projects />
      <br />
      <DataCapabilities />
    </>
  )
}

export default App
