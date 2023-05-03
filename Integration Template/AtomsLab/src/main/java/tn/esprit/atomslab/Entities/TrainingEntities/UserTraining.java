package tn.esprit.atomslab.Entities.TrainingEntities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tn.esprit.atomslab.Entities.UserManagement.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
 import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserTraining implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private int id_user_training;
    @ManyToOne
     private User user;
    @ManyToOne
    private Training training;

    private LocalDateTime dateforamtion;

    @NotNull
    private Double score;

    @OneToMany(mappedBy = "userTraining")
    @JsonIgnore
    private List<UserTrainingQuizResponse>userTrainingQuizResponseList;
}
