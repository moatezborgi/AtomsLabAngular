package tn.esprit.atomslab.RestControllers.TrainigControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;
import tn.esprit.atomslab.Services.TrainingServices.IQuizService;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("Quiz")
public class QuizController {
  @Autowired
    IQuizService iQuizService;


  //@PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
  @GetMapping("/all")
    public List<Quiz> retrieveAllQuizs() {
        return iQuizService.retrieveAllQuiz();
    }


  //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
  @PostMapping("/addquiz")
    public Quiz addQuiz(@RequestBody Quiz quiz) {
        return iQuizService.addQuiz(quiz);
    }


  //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
  @PutMapping("/updatequiz")
    public Quiz updateQuiz(@RequestBody Quiz quiz) {
        return iQuizService.updateQuiz(quiz);
    }


  //@PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
  @GetMapping("/getquiz/{idQuiz}")
    public Quiz retrieveQuiz(@PathVariable Integer idQuiz) {
        return iQuizService.retrieveQuiz(idQuiz);
    }

  //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
  @DeleteMapping("/removequiz/{idQuiz}")
    public void removeQuiz(@PathVariable Integer idQuiz) {
        iQuizService.removeQuiz(idQuiz);
    }

  //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
  @PostMapping("/AddandAssignQuiztoTr/{idTraining}")
    public Quiz AddAndAssignQuizToTraining(@RequestBody Quiz quiz,@PathVariable Integer idTraining)
    { return iQuizService.AddAndAssignQuizToTraining(quiz,idTraining);
    }







}
