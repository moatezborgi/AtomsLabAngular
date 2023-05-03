package tn.esprit.atomslab.Entities.UserManagement;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMessage;

    @Column(nullable = false)
    @NotNull
    private String message;

    @Column(nullable = false)
    @NotNull
    private String outcomingId;


    @Column(nullable = false)
    @NotNull
    private String incomingId;

    @Column(nullable = false)
    @NotNull
    private Date dateSend;

    @ManyToOne
    User sender;
    @ManyToOne
    User receiver;
}
