package com.mybootapp.leave.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mybootapp.leave.model.Status;

public interface EmployeeStatusRepository extends JpaRepository<Status, Long>{

}
