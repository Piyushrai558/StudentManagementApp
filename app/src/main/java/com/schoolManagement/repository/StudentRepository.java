package com.schoolManagement.repository;

import com.schoolManagement.app.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends MongoRepository<Student,Integer> {

    void deleteById(String id);

    Optional<Student> findById(String id);
}
