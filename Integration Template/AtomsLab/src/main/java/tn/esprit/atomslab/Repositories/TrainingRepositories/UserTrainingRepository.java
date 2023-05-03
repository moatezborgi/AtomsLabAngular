package tn.esprit.atomslab.Repositories.TrainingRepositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.atomslab.Entities.TrainingEntities.UserTraining;

public interface UserTrainingRepository extends JpaRepository <UserTraining,Integer> {

    @Query("select avg (score) FROM UserTraining ")
    Double getAverageScore();


    @Query(value = "select sum(question.nbpoint) from question,user_training_quiz_response,response,user_training\n" +
            "WHERE\n" +
            "question.id_question=response.question_id_question\n" +
            "AND\n" +
            "user_training_quiz_response.response_id_response=response.id_response\n" +
            "and user_training.user_id_user=:id_user\n" +
            "and user_training.id_user_training=:idusertraning\n" +
            "and user_training_quiz_response.quiz_id_quiz=:idquiz\n" +
            "AND\n" +
            "response.iscorrect=1; ",nativeQuery = true)
    float  calculscroreuserformation(@Param("id_user") int id_user,@Param("idusertraning") int idusertraning,@Param("idquiz") int idquiz);

  /*  @Query(value="select count(UserTraining .score) as nb from UserTraining ,Training \n"
            + " WHERE \n"+" UserTraining.training_id_training=1\n" +

            "and UserTraining.training_id_training=training.id_training\n"+
            "and UserTraining.score >= Training .minscore\n"
    );*/


}
