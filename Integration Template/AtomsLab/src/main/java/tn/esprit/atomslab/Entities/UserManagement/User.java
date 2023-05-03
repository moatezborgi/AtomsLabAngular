package tn.esprit.atomslab.Entities.UserManagement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTrainingQuizResponse;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private int id_user;

    @Column(unique = true,nullable = false)
    @NotNull
    @Size(min = 5, max = 50)
    private String username;

    @NotNull
    @Column(nullable = false)
    @Size(min = 8, max = 100)
    private String password;

    @NotNull
    @Column(name = "date_birth",nullable = false)
    private Date dateBirth;

    @NotNull
    @Size(min = 8, max = 8)
    @Column(nullable = false,length = 8)
    private String cin;
    @NotNull
    @Size(min = 8, max = 8)
    @Column(nullable = false,length = 8)
    private String phoneNumber;

    @NotNull
    @Column(nullable = false)
    private String mail;

    @NotNull
    @Column(name = "account_status",nullable = false)
    private boolean accountStatus;

    @NotNull
    @Size(max = 50)
    @Column(nullable = false)
    private String fname;

    @NotNull
    @Size(max = 50)
    @Column(nullable = false)
    private String lname;

    @NotNull
    @Column(name = "date_creation")
    private Date dateCreation;

    @NotNull
    @Column(name = "hiring_date",nullable = false)
    private LocalDate hiringDate;

    @NotNull
    @Size(max = 50)
    @Column(name = "job_post",nullable = false)
    private String jobPost;

    @NotNull
    @Column(name = "status_online")
    private boolean status_online;

    @NotNull
    @Column(name = "date_time_last_connexion",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date dateTimeLastConnexion;

    @NotNull
    @Column(name = "isFirstConnection")
    private boolean isFirstConnection;

    @NotNull
    @Column(name = "isFirstPasswordChanged")
    private boolean isFirstPasswordChanged;

    @NotNull
    @Column(name = "isFirstConnectionAndPasswordChanged")
    private boolean isFirstConnectionAndPasswordChanged;



    @ManyToOne
    private Role role;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<ResetPasswordToken> resetPasswordTokens;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<UserTraining> userTrainingList;



    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Token> tokens;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_"+role.getDesc_role()));
    }

    @Override
    public boolean isAccountNonExpired() {return true;}

    @Override
    public boolean isAccountNonLocked() {
        return accountStatus;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }



}
