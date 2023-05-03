package tn.esprit.atomslab.RestControllers.TrainigControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.atomslab.Entities.TrainingEntities.Course;
import tn.esprit.atomslab.Services.TrainingServices.ICourseService;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("Course")
public class CourseController {

    @Autowired
    ICourseService iCourseService;


   // @PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
    @GetMapping("/allcourses")
    public List<Course> retrieveAllCOurses() {
        return iCourseService.retrieveAllCourses();}


    //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")

    @PostMapping("/addcourse")
    public Course addCourse(@RequestBody Course course) {
        return iCourseService.addCourse(course);
    }


    //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
    @PutMapping("/updatecourse")
    public Course updatecourse(@RequestBody Course course) {
        return iCourseService.updateCourse(course);
    }


    //@PreAuthorize("hasAnyRole('APPRENTISSANT','FORMATEUR','ADMIN')")
    @GetMapping("/getcourse")
    public Course retrievecourse(@PathVariable("id") Integer idcourse) {
        return iCourseService.retrieveCourse(idcourse);
    }


    //@PreAuthorize("hasAnyRole('FORMATEUR','ADMIN')")
    @DeleteMapping("/removecourse/{idcourse}")
    public void removeCourse(@PathVariable Integer idcourse) {

        iCourseService.removeCourse(idcourse);
    }


    }

