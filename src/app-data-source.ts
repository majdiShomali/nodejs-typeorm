import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: ["dist/models/*.js"],
    logging: true,
    synchronize: true,
})

// {
//     "entities": ["dist/entities/*.js"], // Update the path to your entities
//     "migrations": ["dist/migrations/*.js"], // Update the path to your migrations
//     "subscribers": ["dist/subscribers/*.js"] // Update the path to your subscribers
//   }


