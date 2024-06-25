# sqlc library

## Dependencies

**[sqlc](https://github.com/sqlc-dev/sqlc)**

**[migrate](https://github.com/golang-migrate/migrate)**

## SQLC Generate

```bash
sqlc generate
```

## Create New Migration

```bash
migrate create -ext sql -seq -dir migration init
```

## Migrate Up and Down

**up**

```bash
migrate -path migration -database "postgresql://myuser:mysecret@localhost:5432/todolist?sslmode=disable" -verbose up
```

**down**

```bash
migrate -path migration -database "postgresql://myuser:mysecret@localhost:5432/todolist?sslmode=disable" -verbose down
```
