package tn.esprit.atomslab.Services.TrainingServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Question;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuestionRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuizRepository;

import java.util.List;
@AllArgsConstructor
@Service
public class QuestionServiceImp implements IQuestionService {

QuestionRepository questionRepository;
QuizRepository quizRepository;
    @Override
    public List<Question> retrieveAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public Question retrieveQuestion(Integer idquestion) {
        return questionRepository.findById(idquestion).orElse(null);
    }

    @Override
    public void removeQuestion(Integer idquestion) {
        questionRepository.deleteById(idquestion);

    }

    @Override
    public Question AddAndAssignQuestionToQuiz(Question question, Integer idQuiz) {
        Quiz quiz=quizRepository.findById(idQuiz).orElse(null);
        Question question1=null;
        if (quiz != null)
        {
            question1=this.addQuestion(question);
            quiz.getQuestionList().add(question1);
            question1.setQuiz(quiz);
            quizRepository.save(quiz);
        }
return question1;
    }
}
