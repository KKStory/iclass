package com.zheng.iclass.biz;

import com.zheng.iclass.entity.Student;
import com.zheng.iclass.entity.Teacher;

import java.util.HashMap;

public interface GlobalBiz {
    Student loginS(String sid, String password);
    Teacher loginT(String tid,String password);

}
