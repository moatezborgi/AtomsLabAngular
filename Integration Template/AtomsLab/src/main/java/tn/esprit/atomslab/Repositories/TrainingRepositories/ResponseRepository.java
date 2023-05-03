package tn.esprit.atomslab.Repositories.TrainingRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.atomslab.Entities.TrainingEntities.Response;

public interface ResponseRepository extends JpaRepository<Response,Integer> {
}
