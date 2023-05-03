package tn.esprit.atomslab.Services.TrainingServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Question;
import tn.esprit.atomslab.Entities.TrainingEntities.Response;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuestionRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuizRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.ResponseRepository;


import java.util.List;
@Service
public class ResponseServiceImp implements IResponseService {
@Autowired
    ResponseRepository responseRepository;
@Autowired
    QuestionRepository questionRepository;
@Autowired
QuizRepository quizRepository;

    @Override
    public List<Response> retrieveAllResponses() {
        return responseRepository.findAll();
    }

    @Override
    public Response addResponse(Response response) {
        return responseRepository.save(response);
    }

    @Override
    public Response updateResponse(Response response) {
        return responseRepository.save(response);

    }

    @Override
    public Response retrieveResponse(Integer idResponse) {
        return responseRepository.findById(idResponse).orElse(null);
    }

    @Override
    public void removeResponse(Integer idResponse) {
    responseRepository.deleteById(idResponse);
    }

    @Override
    public Response AddAndAssignResponseToQuestion(Response response, Integer idQuestion) throws Exception {
        Question question=questionRepository.findById(idQuestion).orElse(null);
        Response response1=null;
        if (question != null  ) {
            if( question.getQuiz().getTentatives()>0){
            response1 = this.addResponse(response);
            question.getResponseList().add(response1);
            response1.setQuestion(question);
            question.getQuiz().setTentatives(question.getQuiz().getTentatives()-1);
            quizRepository.save(question.getQuiz());
            questionRepository.save(question);
            }
            else {throw new Exception("pas encore des tentatives");}
        }
        return response1;
    }


}

