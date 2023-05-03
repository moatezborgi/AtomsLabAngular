package tn.esprit.atomslab.RestControllers.TrainigControllers;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTrainingQuizResponse;
import tn.esprit.atomslab.Services.TrainingServices.IUserTrainingQuizResponseService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("usertrainingquizresponse")
@AllArgsConstructor

public class UserTrainingQuizResponseController {
    private final IUserTrainingQuizResponseService iUserTrainingQuizResponseService;

  // @PreAuthorize("hasAnyRole('ADMIN','FORMATEUR')")
    @PostMapping("/addUserTrainingQuizResponse/{coduserTraining}/{codres}/{codquiz}")
    public UserTrainingQuizResponse addUserTrainingQuizResponse(@PathVariable int coduserTraining,@PathVariable int codres, @PathVariable int codquiz) {
        return iUserTrainingQuizResponseService.addUserTrainingQuizResponse(coduserTraining,codres,codquiz);
    }


    }
