package com.zheng.iclass.biz;


import com.zheng.iclass.entity.Student;

import java.util.List;

public interface StudentBiz {
    Student get(String sid);
    List<Student> getByClass(String sclass);
}
