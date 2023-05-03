package tn.esprit.atomslab.Repositories.UserManagementRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.atomslab.Entities.UserManagement.Token;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token,Integer> {
    @Query( "select t from Token t inner join User u on t.user.id_user = u.id_user where u.id_user = :id  and (t.expired = false or t.revoked = false)")
    List<Token> findAllValidTokenByUser(Integer id);

    Optional<Token> findByToken(String token);
}
