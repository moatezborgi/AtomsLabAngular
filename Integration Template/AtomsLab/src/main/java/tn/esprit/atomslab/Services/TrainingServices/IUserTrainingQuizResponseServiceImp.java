package tn.esprit.atomslab.Services.TrainingServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;
import tn.esprit.atomslab.Entities.TrainingEntities.Response;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTrainingQuizResponse;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuizRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.ResponseRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.UserTrainingQuizResponseRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.UserTrainingRepository;

@AllArgsConstructor
@Service
public class IUserTrainingQuizResponseServiceImp implements IUserTrainingQuizResponseService{

    private  final QuizRepository quizRepository;
    private final ResponseRepository responseRepository;
    private final UserTrainingRepository userTrainingRepository;

    private final UserTrainingQuizResponseRepository userTrainingQuizResponseRepository;
    @Override
    public UserTrainingQuizResponse addUserTrainingQuizResponse(int coduserTraining, int codres, int codquiz) {

        Quiz quiz=quizRepository.findById(codquiz).orElse(null);
        Response response=responseRepository.findById(codres).orElse(null);
        UserTraining userTraining=userTrainingRepository.findById(coduserTraining).orElse(null);
        UserTrainingQuizResponse userTrainingQuizResponse=new UserTrainingQuizResponse();
        UserTrainingQuizResponse psaveUserTrainingQuizResponse=null;
        if(quiz!=null && response!=null && userTraining!=null)
        {
            userTrainingQuizResponse.setUserTraining(userTraining);
            userTrainingQuizResponse.setResponse(response);
            userTrainingQuizResponse.setQuiz(quiz);
            psaveUserTrainingQuizResponse=userTrainingQuizResponseRepository.save(userTrainingQuizResponse);
            quiz.getUserTrainingQuizResponses().add(psaveUserTrainingQuizResponse);
            response.getUserTrainingQuizResponses().add(psaveUserTrainingQuizResponse);
            userTraining.getUserTrainingQuizResponseList().add(psaveUserTrainingQuizResponse);
            quizRepository.save(quiz);
            responseRepository.save(response);
            userTrainingRepository.save(userTraining);
        }
        return psaveUserTrainingQuizResponse ;
    }
}
