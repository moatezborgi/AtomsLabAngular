package tn.esprit.atomslab.Repositories.TrainingRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.atomslab.Entities.TrainingEntities.Training;

import java.util.Date;
import java.util.List;

public interface TrainingRepository extends JpaRepository<Training,Integer> {
    @Query
            ("SELECT tr From Training tr Where tr.startDate BETWEEN :date1 AND :date2 ORDER BY tr.startDate ASC")
    List<Training> ListTrainingOfweekAgo(@Param("date1") Date date1, @Param("date2") Date date2);

}
