package tn.esprit.atomslab.Entities.TrainingEntities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Course;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;

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
public class Training implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_training;
    @Column(nullable = false)
    @NotNull
    private String descTraining;

    //@Column(nullable = false)
    @NotNull
    private LocalDateTime startDate;
    //@Column(nullable = false)
    @NotNull
    private LocalDateTime endDate;
    @Column(nullable = false)
    @NotNull
    private String subject;

    private int tentative;

    private  float minscore;

    @OneToMany(mappedBy = "training")
    @JsonIgnore
    private List<Quiz> quizList;

    @OneToMany(mappedBy = "training")
    @JsonIgnore
    private List<Course> courseList;

    @OneToMany(mappedBy = "training")
    @JsonIgnore
    private List<UserTraining> userTrainingList;

}
