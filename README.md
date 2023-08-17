# C1 Fiteness App

## Frontend

An admin dashboard panel for managing all entities and records related to the app.

## Backend

Built on Nest.Js, with typeorm and authentication

## Gettomg Started

### Backend

Navigate to api directory

```
cd ./api
```

Install dependencies

```
yarn
```

Copy env file

```
cp ./.env.example ./.env
```

Update configuration in `.env` file

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=nest_antdpro_crud_boilerplate
AUTH_JWT_SECRET=asdfasfasdfdasff
CORS_ORIGINS=http://localhost:3001
```

Setup database. This will drop all tables and the run migrations and seeders.

```
yarn db:setup
```

Start dev server

```
yarn start:dev
```

### Frontend

Navigate to admin directory

```
cd ./admin
```

Install dependencies

```
yarn
```

Copy env file

```
cp ./.env.example ./.env
```

Update configuration in `.env` file. React maps key if for maps input.

```
PORT=3001
REACT_APP_API_BASE_URL=http://localhost:3000
REACT_APP_MAPS_KEY=
```

Start server

```
yarn start
```

### Try

- Navigate to localhost:3001.
- Login with username: `admin@admin.com` & password: `password`.
