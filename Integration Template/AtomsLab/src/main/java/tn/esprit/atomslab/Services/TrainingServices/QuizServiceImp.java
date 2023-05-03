package tn.esprit.atomslab.Services.TrainingServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;
import tn.esprit.atomslab.Entities.TrainingEntities.Training;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuizRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.TrainingRepository;

import java.util.List;
@AllArgsConstructor
@Service
public class QuizServiceImp implements IQuizService {

    QuizRepository quizRepository;
    TrainingRepository trainingRepository;


    @Override
    public List<Quiz> retrieveAllQuiz() {
        return quizRepository.findAll();
    }

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public Quiz retrieveQuiz(Integer idQuiz) {
        return quizRepository.findById(idQuiz).orElse(null);
    }

    @Override
    public void removeQuiz(Integer idQuiz) {
        quizRepository.deleteById(idQuiz);
    }

    @Override
    public Quiz AddAndAssignQuizToTraining(Quiz quiz,Integer idTraining){
        Training training = trainingRepository.findById(idTraining).orElse(null);
      Quiz quiz1=null;
        if (training != null) {
          quiz1 = this.addQuiz(quiz);
            training.getQuizList().add(quiz1);
            quiz1.setTraining(training);
            trainingRepository.save(training);

        }
        return quiz1;
    }
}