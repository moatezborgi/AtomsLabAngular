package tn.esprit.atomslab.Services.TrainingServices;

import tn.esprit.atomslab.Entities.TrainingEntities.Course;

import java.util.List;

public interface ICourseService {



    public List <Course> retrieveAllCourses();
    public Course addCourse(Course course);
    public Course updateCourse ( Course course);
    public Course retrieveCourse (Integer idcourse);
    public void removeCourse(Integer idcourse);



}
