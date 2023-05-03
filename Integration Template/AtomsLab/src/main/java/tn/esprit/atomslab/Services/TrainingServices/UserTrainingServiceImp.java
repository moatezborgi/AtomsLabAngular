package tn.esprit.atomslab.Services.TrainingServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Training;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;
import tn.esprit.atomslab.Entities.UserManagement.User;
import tn.esprit.atomslab.Repositories.TrainingRepositories.QuizRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.TrainingRepository;
import tn.esprit.atomslab.Repositories.TrainingRepositories.UserTrainingRepository;
import tn.esprit.atomslab.Repositories.UserManagementRepositories.UserRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class UserTrainingServiceImp  implements IUserTrainingService{
  UserTrainingRepository userTrainingRepository;
  private final TrainingRepository trainingRepository;
  private final UserRepository userRepository;
  private final QuizRepository quizRepository;
    @Override
    public List<UserTraining> retrieveAllUserTrainings() {
        return userTrainingRepository.findAll();
    }

    @Override
    public UserTraining addUserTraining(String username,int codformation) {
        User user=userRepository.findByUsername(username);
        Training training=trainingRepository.findById(codformation).orElse(null);
        UserTraining userTraining=new UserTraining();
        UserTraining psaveusertraining =null;
        if(user!=null && training !=null)
        {
            userTraining.setUser(user);
            userTraining.setTraining(training);
            user.getUserTrainingList().add(userTraining);
            psaveusertraining= userTrainingRepository.save(userTraining);
            training.getUserTrainingList().add(psaveusertraining);
            userRepository.save(user);
            trainingRepository.save(training);

        }
        return psaveusertraining;
    }

    @Override
    public UserTraining updateUserTraining(UserTraining userTraining) {
        return userTrainingRepository.save(userTraining);
    }

    @Override
    public UserTraining retrieveUserTraining(Integer idUserTraining) {
        return userTrainingRepository.findById(idUserTraining).orElse(null
        );
    }

    @Override
    public void removeUserTraining(Integer idUserTraining) {
    userTrainingRepository.deleteById(idUserTraining);
    }

    @Override
    public Double getAverageScore() {
        return userTrainingRepository.getAverageScore();
    }




    @Override
    public UserTraining CalculScoreUserTraining(String username,int codQuiz,int codusertraining) {

        int coduser = userRepository.findByUsername(username).getId_user();
        UserTraining userTraining=userTrainingRepository.findById(codusertraining).orElse(null);
        float score= userTrainingRepository.calculscroreuserformation(coduser,codusertraining ,codQuiz);
        userTraining.setScore((double) score);
        return userTrainingRepository.save(userTraining);

    }



}
