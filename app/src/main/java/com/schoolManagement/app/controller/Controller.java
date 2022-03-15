package com.schoolManagement.app.controller;

import com.schoolManagement.app.Student;
import com.schoolManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@ComponentScan
public class Controller {

    @Autowired
    private StudentRepository studentRepository;

    /*@GetMapping("/")
    public void getStudentByMail(@RequestBody Student age){
        studentRepository.findById(age);
    }*/
    @RequestMapping("/home")
    public String home(){
        return "HELLO WORLD";
    }

    @PostMapping("/create")
    public void createStudent(@RequestBody Student student){
        studentRepository.insert(student);
    }

    @PostMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id){
        studentRepository.deleteById(id);
    }

    @GetMapping("/list")
    public List<Student> students(){
        return studentRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable String id , @RequestBody Student student){
        Optional<Student> studentdata = studentRepository.findById(id);
        if(studentdata.isPresent()){
            Student student_ = studentdata.get();
            student_.setFirstName(student.getFirstName());
            student_.setLastName(student.getLastName());
            student_.setAge(student.getAge());
            student_.setTeacher(student.getTeacher());
            return new ResponseEntity<>(studentRepository.save(student_), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
