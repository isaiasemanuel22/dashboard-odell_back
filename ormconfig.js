module.exports = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'odell',
    entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
    autoLoadEntities: true,
    migrations: [__dirname + '/src/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/migrations',
    },
};
