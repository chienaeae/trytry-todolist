-- name: CreateTodo :one
INSERT INTO todos (
    text,
    owner_id
) VALUES (
    $1, $2
) RETURNING *;


-- name: GetTodos :many
SELECT * FROM todos
WHERE owner_id = $1
ORDER BY created_at;
