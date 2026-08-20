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
                    <img src="./Yara_logo.svg" alt="yaraIcon" width={150} />
                    <img src="./Wireshark_icon.svg" alt="wiresharkIcon" width={150}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" alt="splunkIcon" width={175}/>
                    <img src="./zap.ico" alt="owaspZapIcon" width={150} />            
                    <img src="./volatility3.png" alt="volatiltyIcon" width={350}/>
                    
                </div>
            </div>

            <br />
            
            <div id="frontend">
                <h3 id="frontendTitle">Frontendverktøy:</h3>
                <div className="frontend_img">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascriptIcon" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typeScriptIcon" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="reactIcon" width={150}/>
                </div>
            </div>
         
            <br />

            <div id="gamedev">
                <h3 id="gameDevTitle">Spillutvikling verktøy:</h3>
                <div className="gamedev_img">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="unityIcon" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#Icon" width={150} />
                </div>
            </div>
            
            <br />
            
            <div id="IoT">
                <h3 id="IoTTitle">IoT verktøy:</h3>
                <div className="IoT_img">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" alt="ArduinoIcon" width={150} />
                </div>
            </div>

            <br />
            
            <div id="UI">
                <h3 id="UITitle">UI verktøy:</h3>
                <div className="UI_img">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html5Icon" width={150} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="css3Icon" width={150} />
                    <img src="./shadcnlogo.png" alt="shadcnIcon" width={125} />
                    <img src="./tableaulogo.png" alt="tableauIcon" width={250} />
                    
                </div>
            </div>

            <br />
            
            <div id="AI">
                <h3>KI:</h3>
                <div>ChatGPT og Claude for effektivisering av kode og debugging</div>

            </div>
           
        </>
    )

}

export default dataCapabilities