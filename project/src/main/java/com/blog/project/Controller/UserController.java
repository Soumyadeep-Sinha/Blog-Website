package com.blog.project.Controller;

import com.blog.project.Entity.User;
import com.blog.project.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;
    @CrossOrigin
    @PostMapping("/signUp")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @CrossOrigin
    @PostMapping("/login")
    public User validate(@RequestBody User user){
        return userService.validateUser(user);
    }
    @CrossOrigin
    @PostMapping("/updateUser")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }
    @CrossOrigin
    @GetMapping("/getSize")
    public Long getSize(){
        return userService.getSize();
    }
}
