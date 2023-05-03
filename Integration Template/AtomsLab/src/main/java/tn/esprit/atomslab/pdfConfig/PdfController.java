package tn.esprit.atomslab.pdfConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PdfController {


    private CreatePdfService createPdfService;


    @Autowired
    public PdfController(CreatePdfService createPdfService) {
        this.createPdfService = createPdfService;
    }

    @GetMapping("/pdfFile")
    public String getPdf(){
        return "getPdfFile";
    }

    @GetMapping("/createPdf")
    public String pdfFile(){
        createPdfService.createPdf();
        return "redirect:/pdfFile";
    }
}
