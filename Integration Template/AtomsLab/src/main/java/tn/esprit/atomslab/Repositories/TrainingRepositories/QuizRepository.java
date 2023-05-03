package tn.esprit.atomslab.Repositories.TrainingRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.atomslab.Entities.TrainingEntities.Quiz;

public interface QuizRepository extends JpaRepository<Quiz,Integer> {
}
