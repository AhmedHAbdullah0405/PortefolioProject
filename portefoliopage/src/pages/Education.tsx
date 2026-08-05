import { downloadPDF } from "../hooks/downloadPDF"

function education(){
    const downloadEducationPDF = downloadPDF();

    return(
        <>
            <h2>Utdanning</h2>
            <h3>Bachelor i Cybersikkerhet			Høyskolen Kristiania	08.22 - 06.25</h3>

            <button onClick={() => 
                downloadEducationPDF("Vitnemål Bachelor Cybersikkerhet HK.pdf", "Vitnemål Bachelor Cybersikkerhet HK.pdf")}>
                
                Download my cybersecurity diploma
            </button>

            <h3>Studiespesialisering				Fyrstikkalleen Skole		08.19 - 06.22</h3>
            
            <h3>Ungdomsskole				Apaløkka Skole		08.16 - 06.19</h3>
        </>
    )

    
}

export default education