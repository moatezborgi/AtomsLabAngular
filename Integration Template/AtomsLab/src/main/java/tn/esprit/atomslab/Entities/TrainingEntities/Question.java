package tn.esprit.atomslab.Entities.TrainingEntities;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
 import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_question;

    @NotNull
    @Column(nullable = false)
    private String question;

    private float nbpoint;
    @ManyToOne
    private Quiz quiz;

    @OneToMany(mappedBy = "question")
    @JsonIgnore
    private List<Response> responseList;


}
