package tn.esprit.atomslab.RestControllers.TrainigControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;
import tn.esprit.atomslab.Services.TrainingServices.IUserTrainingService;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("UserTraining")
//@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
public class UserTrainingController {
    @Autowired
    IUserTrainingService iUserTrainingService;

    @GetMapping("/all")
    public List<UserTraining> retrieveAllUserTrainings() {
        return iUserTrainingService.retrieveAllUserTrainings();
    }

    @PostMapping("/addUserT/{username}/{codformation}")
    public UserTraining addUserTraining(@PathVariable String username,@PathVariable int codformation) {
        return iUserTrainingService.addUserTraining(username,codformation);
    }

    @PutMapping("/updateut")
    public UserTraining updateUserTraining(@RequestBody UserTraining userTraining) {
        return iUserTrainingService.updateUserTraining(userTraining);
    }

    @GetMapping("/getut/{idusertraining}")
    public UserTraining retrieveUserTraining(@PathVariable Integer idusertraining) {
        return iUserTrainingService.retrieveUserTraining(idusertraining);
    }

    @DeleteMapping("/removeUt/{idusertraining}")
    public void removeUserTraining(@PathVariable Integer idusertraining) {
        iUserTrainingService.removeUserTraining(idusertraining);
    }

    @GetMapping("/Moy")
    public Double getAverageScore() {
        return iUserTrainingService.getAverageScore();

    }
    @GetMapping("/CalculScoreUserTraining/{username}/{codQuiz}/{codusertraining}")
    public UserTraining CalculScoreUserTraining(@PathVariable String username,@PathVariable int codQuiz,@PathVariable("codusertraining") int codusertraining){
       return iUserTrainingService.CalculScoreUserTraining(username,codQuiz,codusertraining);
    }

}
