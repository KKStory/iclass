package com.zheng.iclass.dao;

import com.zheng.iclass.entity.Leave;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository("leaveDao")
public interface LeaveDao {
    void insert(Leave leave);
    void delete(int id);
    void update(Leave leave);
    Leave select(int id);
    List<Leave> selectAll();
}
