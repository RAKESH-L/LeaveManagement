package com.mybootapp.leave.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Status {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String startDate;
	private String endDate;
	private Long days;
	private String leaveType;
	private String leaveReason;
	private String status;
	private Long employeeId;

	public Status(Long id, String name, String startDate, String endDate, Long days, String leaveType,
			String leaveReason, String status, Long employeeId) {
		super();
		this.id = id;
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.days = days;
		this.leaveType = leaveType;
		this.leaveReason = leaveReason;
		this.status = status;
		this.employeeId = employeeId;
	}

	public Status() {
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

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Long getDays() {
		return days;
	}

	public void setDays(Long days) {
		this.days = days;
	}

	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	public String getLeaveReason() {
		return leaveReason;
	}

	public void setLeaveReason(String leaveReason) {
		this.leaveReason = leaveReason;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "Status [id=" + id + ", name=" + name + ", startDate=" + startDate + ", endDate=" + endDate + ", days="
				+ days + ", leaveType=" + leaveType + ", leaveReason=" + leaveReason + ", status=" + status
				+ ", employeeId=" + employeeId + "]";
	}

}
