package tn.esprit.atomslab.Repositories.UserManagementRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
  import tn.esprit.atomslab.Entities.UserManagement.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    User  findByMail(String mail);
    User findByCin(String cin);
}
