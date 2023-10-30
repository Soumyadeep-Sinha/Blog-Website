package com.blog.project.Services;

import com.blog.project.Entity.BlogPost;
import com.blog.project.Repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    public BlogPost createBlog(BlogPost blogPost){
        return blogRepository.save(blogPost);
    }

    public BlogPost getBlogById(Long id){
        return blogRepository.findById(id).orElse(null);
    }

    public Iterable<BlogPost> getAllBlogs(){
        return blogRepository.findAll();
    }

    public Iterable<BlogPost> getBlogsByUserId(Long userId){
        return blogRepository.findByUserId(userId);
    }

    public void deletePost(Long id){
        blogRepository.deleteById(id);
    }
}
