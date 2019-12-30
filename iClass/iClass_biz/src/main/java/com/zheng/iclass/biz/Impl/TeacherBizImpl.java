package com.zheng.iclass.biz.Impl;

import com.zheng.iclass.biz.TeacherBiz;
import com.zheng.iclass.dao.TeacherDao;
import com.zheng.iclass.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("employeeBiz")
public class TeacherBizImpl implements TeacherBiz {
    @Autowired
    private TeacherDao teacherDao;


    public Teacher get(String tid) {
        return teacherDao.select(tid);
    }
}
