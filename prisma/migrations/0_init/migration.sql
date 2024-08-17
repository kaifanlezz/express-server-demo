yarn run v1.22.22
$ C:\Users\kaifanle\code\js\uniapp\demo-server\express-simple\node_modules\.bin\prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script
-- CreateTable
CREATE TABLE `article_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(63) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `introduction` VARCHAR(255) NULL,
    `cover_img` VARCHAR(255) NULL,
    `created_time` DATETIME(0) NULL,
    `content` TEXT NULL,
    `categories_id` INTEGER NULL,

    INDEX `categories_id`(`categories_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article_list` ADD CONSTRAINT `categories_id` FOREIGN KEY (`categories_id`) REFERENCES `article_categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

Done in 0.50s.
