package tn.esprit.atomslab.Repositories.UserManagementRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.atomslab.Entities.UserManagement.ResetPasswordToken;
import tn.esprit.atomslab.Entities.UserManagement.User;

public interface ResetPasswordTokenRepository extends JpaRepository<ResetPasswordToken, Integer> {
    ResetPasswordToken findByToken(String token);
    //@Query("DELETE FROM ResetPasswordToken e WHERE e.user= :user")
    void deleteByToken(String user);
}
