import React, {useState} from 'react'
import PDFViewer from '../utils/PdfViewer'
import ResumePDF from '../assests/ksemenza_resume.pdf'
import PdfFormat from '../utils/pdfFormat'

const Resume = () => {


    const [pdf, setPDF] = useState(false)

    const handleClick = () => {
        setPDF(!pdf)
    }

    return (
        <div className='resume-cta'>
    
            <button className="pdf_btn" onClick={handleClick}>{!pdf? 'PDF' : 'Back'}</button>
{pdf? <PDFViewer backend={PdfFormat}src={ResumePDF}/> : 

<div>

</div>}

     </div>
    )
}

export default Resume