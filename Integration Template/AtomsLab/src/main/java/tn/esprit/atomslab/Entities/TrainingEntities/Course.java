package tn.esprit.atomslab.Entities.TrainingEntities;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Course implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcourse;

    private String descriptioncourse;
    private String name;
    private String fileUrl;
    @ManyToOne
    private Training training;


}
