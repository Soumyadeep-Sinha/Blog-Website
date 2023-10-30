package com.blog.project.Repository;

import com.blog.project.Entity.BlogPost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends CrudRepository<BlogPost, Long> {
    Iterable<BlogPost> findByUserId(Long userid);
}
