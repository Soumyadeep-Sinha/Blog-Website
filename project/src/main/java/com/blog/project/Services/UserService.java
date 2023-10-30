package com.blog.project.Services;

import com.blog.project.Entity.User;
import com.blog.project.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){
        User found = userRepository.findByUsername(user.getUsername());
        if(found == null){
            return userRepository.save(user);
        }else{
            return null;
        }
    }

    public User validateUser(User user){
        User found = userRepository.findByUsername(user.getUsername());
        if(found != null){
            if(Objects.equals(found.getPassword(), user.getPassword())){
                return found;
            }else {
                return null;
            }
        }else{
            return null;
        }
    }

    public User updateUser(User user){
        User found = userRepository.findByUsername(user.getUsername());
        if(found != null){
            if(!Objects.equals(user.getPassword(), "")){
                found.setPassword(user.getPassword());
            }else{
                found.setPassword(found.getPassword());
            }


            if(!Objects.equals(user.getName(), "")){
                found.setName(user.getName());
            }else{
                found.setName(found.getName());
            }

            return userRepository.save(found);
        }else{
            return null;
        }
    }

    public Long getSize(){
        return userRepository.count();
    }
}
