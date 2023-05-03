package tn.esprit.atomslab.Entities.TrainingEntities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
public class Quiz implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Quiz;

    @NotNull
    @Column(nullable = false)
    private LocalDateTime start_date;

    @NotNull
    @Column(nullable = false)
    private LocalDateTime end_date;


    @NotNull
    @Column(nullable = false)
    private int duration;

    private int level;


    @ManyToOne
    private Training training;

    @OneToMany(mappedBy = "quiz")
    @JsonIgnore
   private List<Question> questionList;

    private int score;

   @Column(columnDefinition = "2")
    private int tentatives=2;


    @OneToMany(mappedBy = "quiz")
    @JsonIgnore
    private List<UserTrainingQuizResponse> userTrainingQuizResponses;
}
