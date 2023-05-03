package tn.esprit.atomslab.Services.TrainingServices;


import tn.esprit.atomslab.Entities.TrainingEntities.Training;

import java.util.List;
import java.util.Map;

public interface ITrainingService {
    public List<Training> retrieveAllTrainings ();
    public Training addTraining (Training training);
    public Training  updateTraining  (Training training);
    public Training  retrieveTraining  (Integer idTraining);
    public void removeTraining (Integer idTraining);
    public Map<String, Integer> NombreDesTrainingParSemaine();
   // Training IsFavorite (int id);
   public String generateMeetingLink();
    public void openMeetingLink();
}
