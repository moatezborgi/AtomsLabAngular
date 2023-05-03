package tn.esprit.atomslab.Services.TrainingServices;

import tn.esprit.atomslab.Entities.TrainingEntities.Question;

import java.util.List;

public interface IQuestionService {
    public List<Question> retrieveAllQuestions();
    public Question addQuestion(Question question);
    public Question updateQuestion (Question question);
    public Question retrieveQuestion (Integer idquestion);
    public void removeQuestion(Integer idquestion);
    public Question AddAndAssignQuestionToQuiz(Question question,Integer idQuiz);
}
