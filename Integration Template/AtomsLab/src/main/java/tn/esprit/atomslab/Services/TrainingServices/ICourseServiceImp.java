package tn.esprit.atomslab.Services.TrainingServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.atomslab.Entities.TrainingEntities.Course;
import tn.esprit.atomslab.Repositories.TrainingRepositories.CourseRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ICourseServiceImp implements ICourseService{
  private final   CourseRepository courseRepository;
    @Override
    public List<Course> retrieveAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course retrieveCourse(Integer idcourse) {
        return courseRepository.findById(idcourse).orElse(null);
    }

    @Override
    public void removeCourse(Integer idcourse) {
    courseRepository.deleteById(idcourse);
    }
}
