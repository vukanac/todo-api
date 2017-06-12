INSTALL
=======

## CREATE CONFIG

    $ composer run post-root-package-install
    $ composer run post-create-project-cmd


## DB

    CREATE SCHEMA `todo-api` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;


## Configure

Update configs in `.env`.


## Migrate and seed DB

    $ php artisan migrate --seed

One of users are:

| email | admin@admin.dev |
| ----- | --------------- |
| pass  | secret          |


