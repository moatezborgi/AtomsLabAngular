package tn.esprit.atomslab.RestControllers.TrainigControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Training;
import tn.esprit.atomslab.Services.TrainingServices.ITrainingService;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("Training")
//@PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
public class TrainingController {
    @Autowired
    ITrainingService iTrainingService;
    @GetMapping("/all")
    public List<Training> retrieveAllTrainings() {
        return iTrainingService.retrieveAllTrainings();
    }

    @PostMapping("/addTraining")
    public Training addTraining(@RequestBody Training training) {
        return iTrainingService.addTraining(training);
    }

    @PutMapping("/updateTraining")
    public Training updateTraining(@RequestBody Training training) {
        return iTrainingService.updateTraining(training);
    }

    @GetMapping("/getTraining/{idTraining}")
    public Training retrieveTraining(@PathVariable Integer idTraining) {
        return iTrainingService.retrieveTraining(idTraining);
    }

    @DeleteMapping("/removeTraining/{idTraining}")
    public void removeTraining(@PathVariable Integer idTraining) {
        iTrainingService.removeTraining(idTraining);
    }

    @GetMapping("/semaine")
    public Map<String,Integer> NombreDesTrParSemaine()
    {

        return iTrainingService.NombreDesTrainingParSemaine();
    }

    @GetMapping("/open-meeting")
    public void openMeetingLink() {
        iTrainingService.openMeetingLink();
    }



}
