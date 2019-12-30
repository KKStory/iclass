package com.zheng.iclass.dao;

import com.zheng.iclass.entity.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("studentDao")
public interface StudentDao {
    Student select(String sid);
    List<Student> selectByClass(String sclass);
}
