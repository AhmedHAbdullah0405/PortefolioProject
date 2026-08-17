function dataCapabilities(){

    return(
        <>
            <h2>Datakunnskap</h2>
            
            <div id="backend">
                <h3 id="backendTitle">Backendverktøy:</h3>
                <div className="backend_img">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="mysqlWorkbenchIcon" width={150}/> 
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="javaIcon" width={150}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="pythonIcon" width={150}/>
                </div>    
            </div>
            
            <br />
           
            <div id="security">
                <h3 id="securityTitle">Sikkerhetsverktøy:</h3>
                <div className="security_img">
                    <img src="./Vmware_workstation_16_icon.svg" alt="vmwareWorkstation16Icon" width={150} />
                    <img src="./zap.ico" alt="owaspZapIcon" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" alt="splunkIcon" width={150}/>
                    <img src="./Wireshark_icon.svg" alt="wiresharkIcon" width={150} />
                    <img src="./volatility3.png" alt="volatiltyIcon" />
                    <img src="./Yara_logo.svg" alt="yaraIcon" width={150} />
                </div>
            </div>

            <br />
            
            <div id="frontend">
                <h3 id="frontEndTitle">Frontendverktøy:</h3>
                <div className="frontend_img">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={150}/>
                </div>
            </div>
         
            <h3>Spillutvikling verktøy:</h3>
            <div>C#, Unity</div>
            
            <h3>IoT verktøy:</h3>
            <div>Arduino IDE</div>
            
            <h3>UI verktøy:</h3>
            <div>Shadcn UI, Tableau, HTML og CSS</div>
            
            <h3>KI:</h3>
            <div>ChatGPT og Claude for effektivisering av kode og debugging</div>
        </>
    )

}

export default dataCapabilities