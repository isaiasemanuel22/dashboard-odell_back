module.exports = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Odell',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true, // Habilita los logs
    autoLoadEntities: true,
    migrations: [__dirname + '/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/migrations', // Directorio para crear las migraciones
    },
  };