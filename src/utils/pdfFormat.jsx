export default class PDFJs {
    
      init = (source, element) => {
        const textNode = document.createElement('p');
        textNode.innerHTML = `Our PDF source will be: ${source}`;
    
        element.appendChild(textNode);
      }
    
    /*
     init = (source, element) => {
        const iframe = document.createElement('iframe');
    
        iframe.src = `/static/media/ksemenza_resume.9f994dcf.pdf`;
        iframe.width = '100%';
        iframe.height = '100%';
    
        element.appendChild(iframe);
      }
    
    */
    }