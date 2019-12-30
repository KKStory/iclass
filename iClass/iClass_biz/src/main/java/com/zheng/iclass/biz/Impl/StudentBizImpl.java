package com.zheng.iclass.biz.Impl;

import com.zheng.iclass.biz.StudentBiz;
import com.zheng.iclass.dao.StudentDao;
import com.zheng.iclass.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("studentBiz")
public class StudentBizImpl implements StudentBiz {
    @Autowired
    private StudentDao studentDao;
    @Override
    public Student get(String sid) {
        return studentDao.select(sid);
    }

    @Override
    public List<Student> getByClass(String sclass) {
        return studentDao.selectByClass(sclass);
    }
}
