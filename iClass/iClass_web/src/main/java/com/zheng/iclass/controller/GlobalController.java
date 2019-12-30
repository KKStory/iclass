package com.zheng.iclass.controller;

import com.zheng.iclass.biz.GlobalBiz;

import com.zheng.iclass.biz.StudentBiz;
import com.zheng.iclass.biz.TeacherBiz;
import com.zheng.iclass.dto.Result;
import com.zheng.iclass.entity.Student;
import com.zheng.iclass.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.JsonbHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;

@Controller("globalController")
@RequestMapping("/login")
public class GlobalController {
    @Autowired
    private GlobalBiz globalBiz;
    @Autowired
    private TeacherBiz teacherBiz;
    @Autowired
    private StudentBiz studentBiz;
    @RequestMapping("/student")
    @ResponseBody
    public Student login(HttpSession session,@RequestParam String sid,@RequestParam String password){
        /*response.setContentType("text/html;charset=utf-8");
        response.setHeader("Access-Control-Allow-Orgin","*");
        response.setHeader("Access-Control-Allow-Methods","GET,POST");*/
        Student student=globalBiz.loginS(sid,password);
        return student;
    }
    @RequestMapping("/teacher")
    @ResponseBody
    public Teacher tologin(@RequestParam String tid,@RequestParam String password){
        Teacher teacher=teacherBiz.get(tid);
        return teacher;
    }

}





