package tn.esprit.atomslab.Services.TrainingServices;

import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;

import java.util.List;

public interface IQuizService {

    public List<Quiz> retrieveAllQuiz ();
    public Quiz addQuiz (Quiz quiz);
    public Quiz  updateQuiz  (Quiz  quiz );
    public Quiz  retrieveQuiz  (Integer idQuiz );
    public void removeQuiz (Integer idQuiz );
    public Quiz AddAndAssignQuizToTraining(Quiz quiz,Integer idTraining);
}
