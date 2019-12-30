package com.zheng.iclass.dao;

import com.zheng.iclass.entity.DealRecord;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dealRecordDao")
    public interface DealRecordDao {
        void insert(DealRecord dealRecord);
        List<DealRecord> selectByStudent(String tid);
    }

