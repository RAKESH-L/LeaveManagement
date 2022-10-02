package com.mybootapp.leave.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mybootapp.leave.dto.LeaveDto;
import com.mybootapp.leave.model.Employee;

import com.mybootapp.leave.model.Status;
import com.mybootapp.leave.repository.EmployeeRepository;
import com.mybootapp.leave.repository.EmployeeStatusRepository;


@RestController
@CrossOrigin(origins = {"http://localhost:2540"})
public class LeaveController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@Autowired
	private EmployeeStatusRepository employeeStatusRepository;
	
	
	@PostMapping("insert/employee")
	public Employee insertEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("employee/all")
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}
	
	@GetMapping("employee/one/{id}")
	public Employee getEmployeeById(@PathVariable("id") Long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
		
		if(!optional.isPresent())
			throw new RuntimeException("Inavalid Employee id");
		
		Employee e = optional.get();
		
		return e;
	}
	
	
	@PostMapping("insert/employeeStatus")
	public Status insertEmployeeStatus11(@RequestBody Status status) {
		return employeeStatusRepository.save(status);
	}
	@GetMapping("get/all/status")
	public List<Status> getAllEmployeeStatus() {
		return employeeStatusRepository.findAll();
	}
	@PostMapping("update/employee/status/{sid}")
	public Status updateEmployeeStatus(@PathVariable("sid") Long sid,
									@RequestBody Status newStatus) {
		Optional<Status> optional = employeeStatusRepository.findById(sid);
		
		if(!optional.isPresent())
			throw new RuntimeException("ID is Invalid");
		
		Status oldStatus = optional.get();
		
		oldStatus.setStatus(newStatus.getStatus());
		
		return employeeStatusRepository.save(oldStatus);
	}
	
}
