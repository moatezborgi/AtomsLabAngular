package tn.esprit.atomslab.Entities.UserManagement;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_role;

    @NotNull
    @Column(nullable = false,length = 20)
    private String desc_role;


    @OneToMany(mappedBy = "role")
    @JsonIgnore
    private List<User> user;
}
