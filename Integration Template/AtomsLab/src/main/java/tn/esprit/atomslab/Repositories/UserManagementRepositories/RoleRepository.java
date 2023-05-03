package tn.esprit.atomslab.Repositories.UserManagementRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.atomslab.Entities.UserManagement.Role;

public interface RoleRepository extends JpaRepository<Role,Integer> {
    @Query("SELECT p FROM Role p WHERE p.desc_role = ?1")
    Role findByDesc_role(String s);
}
