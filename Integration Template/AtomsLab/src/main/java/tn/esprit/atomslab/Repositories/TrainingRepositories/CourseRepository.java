package tn.esprit.atomslab.Repositories.TrainingRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.atomslab.Entities.TrainingEntities.Course;

public interface CourseRepository extends JpaRepository <Course,Integer> {
}
