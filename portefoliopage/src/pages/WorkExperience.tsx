import {downloadPDF} from '../hooks/downloadPDF';
import referenceOne from "../letters/Ahmed Abdullah_StudentAssistent_Sluttattest.pdf";
import referenceTwo from "../letters/Sluttattest Ahmed, Helthjem.pdf";
import referenceThree from "../letters/Sluttattest Ahmed Hazhar Abdullah.docx";

interface PdfFile {
    name: string;
    path: string;
}

const files: PdfFile[] = [
    {name: referenceOne, path: "/letters/Ahmed Abdullah_StudentAssistent_Sluttattest.pdf"},
    {name: referenceTwo, path: "/letters/Sluttattest Ahmed, Helthjem.pdf"},
    {name: referenceThree, path: "/letters/Sluttattest Ahmed Hazhar Abdullah.docx"},
    
]

function workExperience() {
    const download = downloadPDF();

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
            <br />
            <button onClick={() => download(files[0].name, files[0].path)}>Download Studentassistent sluttattest</button>
            
            <br />
            <h3>Distributør</h3> Helthjem &ensp; 19.06/23 - 25.09/23 <br />
            Distribusjon av aviser
            og andre produkter
            i Tveita området
            <br />
            <button onClick={() => download(files[1].name, files[1].path)}>Download Distributør sluttattest</button>

            <br />
            <h3>Telefonselger</h3> Decision AS &ensp; 20.01/22 - 13.01/23 <br />
            Salg av strøm for
            Agva Kraft via telefonen
            <br />
            <button onClick={() => download(files[2].name, files[2].path)}>Download {files[2].name}</button>

        </>
    )

}

export default workExperience