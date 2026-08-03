function workExperience() {

    const pdfContainer = "portefoliopage\public\letters\Ahmed Abdullah_StudentAssistent_Sluttattest.pdf"

    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = pdfContainer;

        link.setAttribute("download", pdfContainer)

        document.body.appendChild(link)

        link.click();

        document.body.removeChild(link);
    }



    return (
        <>
            <h2>Tidligere erfaringer</h2>
            <h3>Postbud</h3> Posten Røa Distribusjon &ensp; 29.09/25 - d.d <br />
            Distribusjon av pakker
            for posten Røa

            <br />
            <h3>Studentassistent</h3> Høyskolen Kristiania &ensp; 20.01/25 - 30.06/25 <br />
            Veileder for studenter i
            emnet PG2202 - Unity Utvikling
            <button className="download" onClick={downloadPDF}>Click here to download this jobs referal</button>

            <br />
            <h3>Distributør</h3> Helthjem &ensp; 19.06/23 - 25.09/23 <br />
            Distribusjon av aviser
            og andre produkter
            i Tveita området

            <br />
            <h3>Telefonselger</h3> Decision AS &ensp; 20.01/22 - 13.01/23 <br />
            Salg av strøm for
            Agva Kraft via telefonen





        </>
    )

}

export default workExperience