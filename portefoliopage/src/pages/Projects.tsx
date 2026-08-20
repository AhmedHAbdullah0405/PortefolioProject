function projects(){

    function navigateToGithub() {
        window.open("https://github.com/AhmedHAbdullah0405/JavaMySQLProject", '_blank')
    }

    function navigateToPentestReport() {
        window.open("https://www.linkedin.com/in/ahmed-abdullah-a2b4b0278/details/projects/", '_blank')
    }


    return(
        <>
            <h2>Prosjekter/Selvstudie</h2>
                <div id="projects">
                    <h3>Pentest mot eksamens VM 30.03/26 - 30.05/26</h3>
                    <p>    
                        Utførte penetrasjonstest mot eksamen
                        VM “Eksamen_2023” for å demonstrere
                        ferdigheter gjennom bruk av verktøy som
                        OWASP ZAP, Nmap og Kali Linux, inkludert
                        manuelt testing, for å utnytte sårbarheter i VM-en.
                        Utnyttelsen av sårbarhetene er dokumentert
                        gjennom skjermbilder og tekst, der de er klassifisert
                        fra “Kritisk” til “Informasjonell”
                    </p>
                    <button onClick={navigateToPentestReport}>Link til pentest rapporten i linkedin</button>
                    
            
                    <h3>GameStop Java prosjekt 16.03/26 - 27.03/26</h3> 
                    <p>   
                        Bygget et terminal-basert Java prosjekt som
                        tar inspirasjon fra GameStop. Prosjektet inneholder
                        en meny, der brukeren kan utføre CRUD operasjoner
                        på tabellene “videogames”, “customer” og “orders”.
                        Disse handlingen er utført på databasen “gamestop”
                        i MySQL, der dataen i hvert tabell endres i real-time,
                        basert på bruker input. OOP konseptene “Inheritance” og
                        “Encapsulation” er også implementert for bedre kodeoversikt
                        og sikkerhet

                    </p>
                    <button onClick={navigateToGithub}>Link til source code for prosjektet i Github</button>

                </div>
        
        </>
    )
}

export default projects