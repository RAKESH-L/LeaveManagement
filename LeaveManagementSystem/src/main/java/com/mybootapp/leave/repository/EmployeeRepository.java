package com.mybootapp.leave.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mybootapp.leave.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	@Query("select e from Employee e where e.id=?1")
	Employee fetchEmployeeRecord(Long eid);

	
//	Employee findById(Long Id);
//	Vendor findByName(String name);

}
