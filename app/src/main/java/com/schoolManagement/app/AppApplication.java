package com.schoolManagement.app;

import com.schoolManagement.repository.StudentRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages={
		"com.schoolManagement.app", "com.schoolManagement.repository"})
@EnableMongoRepositories(basePackageClasses = StudentRepository.class)
//@ComponentScan(basePackageClasses = Controller.class)
public class AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

}
