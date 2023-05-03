package tn.esprit.atomslab.Services.TrainingServices;


import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;

import java.util.List;

public interface IUserTrainingService {

    public List<UserTraining> retrieveAllUserTrainings();
    public UserTraining addUserTraining(String username, int codformation);
    public UserTraining updateUserTraining ( UserTraining UserTraining);
    public UserTraining retrieveUserTraining (Integer idUserTraining);
    public void removeUserTraining(Integer idUserTraining);
    public Double getAverageScore() ;
    public UserTraining CalculScoreUserTraining(String username,int codQuiz,int codusertraining) ;
}
