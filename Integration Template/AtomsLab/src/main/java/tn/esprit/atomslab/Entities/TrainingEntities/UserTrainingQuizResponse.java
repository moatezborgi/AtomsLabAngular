package tn.esprit.atomslab.Entities.TrainingEntities;


import lombok.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;
import tn.esprit.atomslab.Entities.TrainingEntities.Response;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserTrainingQuizResponse implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private int idUserTrainingQuizResponse;


    @ManyToOne
     private Quiz quiz;


    @ManyToOne
     private Response response;


    @ManyToOne
    private UserTraining userTraining;



}
