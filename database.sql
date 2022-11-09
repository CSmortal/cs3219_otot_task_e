CREATE DATABASE otot_task_e;

CREATE TABLE todos (
    userId BIGINT,
    id BIGINT,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (userId, id)
);