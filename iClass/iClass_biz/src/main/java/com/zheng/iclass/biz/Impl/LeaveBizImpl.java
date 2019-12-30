package com.zheng.iclass.biz.Impl;

import com.zheng.iclass.biz.LeaveBiz;
import com.zheng.iclass.dao.LeaveDao;
import com.zheng.iclass.entity.Leave;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("leaveBiz")
public class LeaveBizImpl implements LeaveBiz {
    @Autowired
    private LeaveDao leaveDao;
    public void add(Leave leave) {
        leaveDao.insert(leave);
    }

    public void edit(Leave leave) {
        leaveDao.update(leave);
    }

    public void remove(Integer id) {
        leaveDao.delete(id);
    }

    public Leave get(Integer id) {
        return leaveDao.select(id);
    }

    public List<Leave> getAll() {
        return leaveDao.selectAll();
    }
}
