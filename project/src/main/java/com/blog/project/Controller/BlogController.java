package com.blog.project.Controller;

import com.blog.project.Entity.BlogPost;
import com.blog.project.Services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/blog")
public class BlogController {
    @Autowired
    public BlogService blogService;
    @CrossOrigin
    @PostMapping("/create")
    public BlogPost createBlog(@RequestBody BlogPost blogPost){
        return blogService.createBlog(blogPost);
    }
    @CrossOrigin
    @GetMapping("/getAllBlogs")
    public Iterable<BlogPost> getAllBlogs(){
        return blogService.getAllBlogs();
    }
    @CrossOrigin
    @GetMapping("/getblog/{id}")
    public BlogPost getBlogById(@PathVariable Long id){
        return blogService.getBlogById(id);
    }
    @CrossOrigin
    @GetMapping("/getBlogsByUserId/{id}")
    public Iterable<BlogPost> getBlogsByUserId(@PathVariable Long id){
        return blogService.getBlogsByUserId(id);
    }
    @CrossOrigin
    @GetMapping("/deleteBlog/{id}")
    public void deleteBlog(@PathVariable Long id){
        blogService.deletePost(id);
    }

}
