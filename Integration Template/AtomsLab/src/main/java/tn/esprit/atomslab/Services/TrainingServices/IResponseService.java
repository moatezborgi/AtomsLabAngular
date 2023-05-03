package tn.esprit.atomslab.Services.TrainingServices;

import tn.esprit.atomslab.Entities.TrainingEntities.Response;

import java.util.List;

public interface IResponseService {

    public List<Response> retrieveAllResponses ();
    public Response addResponse (Response response);
    public Response  updateResponse  (Response response );
    public Response  retrieveResponse  (Integer idResponse);
    public void removeResponse (Integer idResponse);
   public Response AddAndAssignResponseToQuestion (Response response , Integer idQuestion) throws Exception;
}
