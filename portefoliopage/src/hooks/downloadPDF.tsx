import { useCallback } from "react";

export const downloadPDF = () => {
    const downloadFile = useCallback((filePath: string, fileName: string): void => {
        const link = document.createElement("a");
        link.href = filePath;

        link.setAttribute("download", fileName)

        document.body.appendChild(link)

        link.click();

        document.body.removeChild(link);
    }, []);

    return downloadFile

}
    
    
    
    
    
    
    
    
    
    
    
    
    
