package com.zheng.iclass.dao;

import com.zheng.iclass.entity.Teacher;
import org.springframework.stereotype.Repository;

@Repository("teacherDao")
public interface TeacherDao {
    Teacher select(String tid);
}
