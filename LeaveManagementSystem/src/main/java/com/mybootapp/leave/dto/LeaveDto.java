package com.mybootapp.leave.dto;

public class LeaveDto {

	private String startDate;
	private String endDate;
	private Long days;
	private String leaveType;
	private String leaveReason;

	private Long eid;

	public LeaveDto(String startDate, String endDate, Long days, String leaveType, String leaveReason, Long eid) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.days = days;
		this.leaveType = leaveType;
		this.leaveReason = leaveReason;
		this.eid = eid;
	}

	public LeaveDto() {
		super();
		// TODO Auto-generated constructor stub
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

	public Long getEid() {
		return eid;
	}

	public void setEid(Long eid) {
		this.eid = eid;
	}

	@Override
	public String toString() {
		return "LeaveDto [startDate=" + startDate + ", endDate=" + endDate + ", days=" + days + ", leaveType="
				+ leaveType + ", leaveReason=" + leaveReason + ", eid=" + eid + "]";
	}

}
