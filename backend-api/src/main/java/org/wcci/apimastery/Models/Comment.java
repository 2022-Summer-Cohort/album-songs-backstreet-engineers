package org.wcci.apimastery.Models;

import javax.persistence.Embeddable;

@Embeddable
public class Comment {
    private String author;
    private String content;

    public Comment(String author, String content) {
        this.author = author;
        this.content = content;
    }

    public Comment() {
    }

    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }
}
