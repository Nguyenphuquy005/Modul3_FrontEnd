package com.example.demo.repository;

import com.example.demo.model.Admin;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    List<Admin> findAllByUserAndPassWord(String u, String p);
}
