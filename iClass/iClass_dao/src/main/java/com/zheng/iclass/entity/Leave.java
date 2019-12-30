package com.zheng.iclass.entity;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Leave {
    private Integer id;
    private String cause;
    private String createSid;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private Date createTime;
    private String nextDealTid;
    private String item;
    private String status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    public String getCreateSid() {
        return createSid;
    }

    public void setCreateSid(String createSid) {
        this.createSid = createSid;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getNextDealTid() {
        return nextDealTid;
    }

    public void setNextDealTid(String nextDealTid) {
        this.nextDealTid = nextDealTid;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
