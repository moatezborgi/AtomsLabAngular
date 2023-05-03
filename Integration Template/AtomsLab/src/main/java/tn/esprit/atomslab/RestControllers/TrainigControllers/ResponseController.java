package tn.esprit.atomslab.RestControllers.TrainigControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Response;
import tn.esprit.atomslab.Services.TrainingServices.IResponseService;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("Response")
//@PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
public class ResponseController {
    @Autowired
    IResponseService iResponseService;


    @GetMapping("/all")
    public List<Response> retrieveAllResponses() {
        return iResponseService.retrieveAllResponses();
    }

    @PostMapping("/addresponse")
    public Response addResponse(@RequestBody Response response) {
        return iResponseService.addResponse(response);
    }

    @PutMapping("/updateresponse")
    public Response updateResponse(@RequestBody Response response) {
        return iResponseService.updateResponse(response);
    }

    @GetMapping("/getresponse/{id}")
    public Response retrieveResponse(@PathParam("id") Integer idResponse) {
        return iResponseService.retrieveResponse(idResponse);
    }

    @DeleteMapping("/removeresponse/{idResponse}")
    public void removeResponse(@PathVariable Integer idResponse) {
        iResponseService.removeResponse(idResponse);
    }
    @PostMapping("/AddandAssignResToQue/{idQuestion}")
    public Response AddAndAssignResponseToQuestion(@RequestBody Response response,@PathVariable Integer idQuestion) throws Exception {
        return iResponseService.AddAndAssignResponseToQuestion(response,idQuestion);
    }








}
