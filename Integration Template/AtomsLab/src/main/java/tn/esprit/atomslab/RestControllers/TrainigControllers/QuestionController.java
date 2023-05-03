package tn.esprit.atomslab.RestControllers.TrainigControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Question;
import tn.esprit.atomslab.Services.TrainingServices.IQuestionService;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("Question")
public class QuestionController {
@Autowired
    IQuestionService iQuestionService;



   // @PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
    @GetMapping("/all")
    public List<Question> retrieveAllQuestions() {
        return iQuestionService.retrieveAllQuestions();
    }

    //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
    @PostMapping("/addquestion")
    public Question addQuestion(@RequestBody Question  question) {
        return iQuestionService.addQuestion(question);
    }


  //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")

    @PutMapping("/updatequestion")
    public Question updateQuestion(@RequestBody Question question) {
        return iQuestionService.updateQuestion(question);
    }


    //@PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
    @GetMapping("/getquestion/{idquestion}")
    public Question retrieveQuestion(@PathVariable Integer idquestion) {
        return iQuestionService.retrieveQuestion(idquestion);
    }


//    @PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
    @DeleteMapping("/removequestion/{idquestion}")
    public void removeQuestion(@PathVariable Integer idquestion) {

        iQuestionService.removeQuestion(idquestion);
    }
  //  @PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
    @PostMapping("/AddandAssignQuestionToQuiz/{idQuiz}")
    public Question AddAndAssignQuestionToQuiz(@RequestBody Question question,@PathVariable Integer idQuiz) {

        {
            return iQuestionService.AddAndAssignQuestionToQuiz(question,idQuiz);
        }


    }


}
