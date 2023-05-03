package tn.esprit.atomslab.Entities.TrainingEntities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Response implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Response;

    @NotNull
    @Column(nullable = false)
    private String response;

    private Boolean iscorrect;

    @ManyToOne
    private Question question;

    @OneToMany(mappedBy = "response")
    @JsonIgnore
    private List<UserTrainingQuizResponse> userTrainingQuizResponses;
}
