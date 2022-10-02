package com.mybootapp.leave.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private Long leaveBalance;
	public Employee(Long id, String name, Long leaveBalance) {
		super();
		this.id = id;
		this.name = name;
		this.leaveBalance = leaveBalance;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getLeaveBalance() {
		return leaveBalance;
	}
	public void setLeaveBalance(Long leaveBalance) {
		this.leaveBalance = leaveBalance;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", leaveBalance=" + leaveBalance + "]";
	}
	

}
