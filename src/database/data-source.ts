import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: "sqlite",
    database: "src/database/database.sqlite",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ["src/database/migrations/*.ts"],
    synchronize: false,
    migrationsRun: true,
    logging: false,
}

export const AppDataSource: DataSource = new DataSource(config);