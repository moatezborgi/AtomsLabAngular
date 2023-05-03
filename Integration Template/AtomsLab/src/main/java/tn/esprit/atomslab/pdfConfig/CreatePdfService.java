package tn.esprit.atomslab.pdfConfig;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Training;
import tn.esprit.atomslab.Repositories.TrainingRepositories.TrainingRepository;


import java.io.FileNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CreatePdfService {

    private final TrainingRepository trainingRepository;
    public void createPdf() {
        String filePdf = "C:/Users/karim/OneDrive/Bureau/pdfFile/Training";

        List<Training> trainingList = trainingRepository.findAll();

        try {
            PdfWriter writer = new PdfWriter(filePdf);
            PdfDocument pdfDoc = new PdfDocument(writer);
           Document document = new Document(pdfDoc);
            Paragraph p1 = new Paragraph("Training List");
            float[] columnWidth = {200f, 200f, 200f, 200f,200f  };
            Table table = new Table(columnWidth);
            table.addCell(new Cell().add("Id_Training"));
            table.addCell(new Cell().add("DescTraining"));
            table.addCell(new Cell().add("DateDeb"));
            table.addCell(new Cell().add("DateFin"));
            table.addCell(new Cell().add("Subject"));

            for (Training TrainingData : trainingList) {
                table.addCell(new Cell().add(String.valueOf((TrainingData.getId_training()))));
                table.addCell(new Cell().add(String.valueOf(TrainingData.getDescTraining())));
                table.addCell(new Cell().add(String.valueOf(TrainingData.getStartDate())));
                table.addCell(new Cell().add(String.valueOf(TrainingData.getEndDate())));
                table.addCell(new Cell().add(String.valueOf(TrainingData.getSubject())));
            }

            document.add(p1);
            document.add(table);
            document.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
