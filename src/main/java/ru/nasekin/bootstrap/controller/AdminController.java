package ru.nasekin.bootstrap.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.nasekin.bootstrap.model.User;
import ru.nasekin.bootstrap.service.RoleService;
import ru.nasekin.bootstrap.service.UserService;

import java.util.*;


@RestController
@RequestMapping("/api")
public class AdminController {

    private UserService userService;
    private RoleService roleService;

    @Autowired
    private void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    private void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/users")
    public List<User> findAll() {
        List<User> users = userService.findAll();
        return users;
    }

    @GetMapping("/users/{id}")
    public User one(@PathVariable(name = "id") Long id) {
        return userService.findById(id);
    }


    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }


    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        return userService.saveUser(user);
    }


    @DeleteMapping("users/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return "User with ID = " + id + " was deleted";
    }
}
