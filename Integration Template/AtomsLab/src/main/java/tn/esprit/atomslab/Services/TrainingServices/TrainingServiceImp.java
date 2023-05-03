package tn.esprit.atomslab.Services.TrainingServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Training;
import tn.esprit.atomslab.Repositories.TrainingRepositories.TrainingRepository;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class TrainingServiceImp implements ITrainingService {
    @Autowired
    TrainingRepository trainingRepository;

    @Override
    public List<Training> retrieveAllTrainings() {
        return trainingRepository.findAll();
    }

    @Override
    public Training addTraining(Training training) {
        return trainingRepository.save(training);
    }

    @Override
    public Training updateTraining(Training training) {
        return trainingRepository.save(training);
    }

    @Override
    public Training retrieveTraining(Integer idTraining) {
        return trainingRepository.findById(idTraining).orElse(null);
    }

    @Override
    public void removeTraining(Integer idTraining) {
        trainingRepository.deleteById(idTraining);

    }

    @Override
    public Map<String, Integer> NombreDesTrainingParSemaine() {
        Map<String, Integer> mapTrainingWeek = new HashMap<>();
        Date date = new Date(System.currentTimeMillis());
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DATE, -7);
        Date date1 = cal.getTime();
        SimpleDateFormat formater = new SimpleDateFormat("YYYY/MM/DD");
        System.out.println(formater.format(date) + "**********" + formater.format(date1));

        List<Training> trainingList = (List<Training>) trainingRepository.ListTrainingOfweekAgo(date1, date);

        for (Training training : trainingList) {
            System.out.println(training.getStartDate());

            if (mapTrainingWeek.containsKey(formater.format(training.getStartDate())) == false) {
                mapTrainingWeek.put(formater.format(training.getStartDate()), 0);
            }

            if (mapTrainingWeek.containsKey(formater.format(training.getStartDate()))) {
                mapTrainingWeek.put(formater.format(training.getStartDate()), +1);
            }
        }
        return mapTrainingWeek;

    }
    //OnlineTrainingMeetLink
    @Override
    public String generateMeetingLink() {

        return "https://meet.google.com/new" ;
        // return "{"meetUrl":"" + meetUrl + ""}";
    }

    @Override
    public void openMeetingLink() {
        try {
            String meetLink = generateMeetingLink();
            String os = System.getProperty("os.name").toLowerCase();
            Runtime rt = Runtime.getRuntime();

            if (os.contains("win")) {
                rt.exec("rundll32 url.dll,FileProtocolHandler " + meetLink);
            } else if (os.contains("mac")) {
                rt.exec("open " + meetLink);
            } else if (os.contains("nix") || os.contains("nux")) {
                rt.exec("xdg-open " + meetLink);
            }
        } catch (Exception e) {
            // Handle the exception here, e.g. log it or show an error message to the user
            e.printStackTrace();
        }
    }
}