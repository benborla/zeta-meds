<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191125161719 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');
        $this->addSql("
            CREATE TABLE `brille24_tierprice` (
            `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
            `price` int(11) DEFAULT NULL,
            `qty` int(11) DEFAULT NULL,
            `channel_id` int(11) DEFAULT NULL,
            `product_variant_id` int(11) DEFAULT NULL,
            `customer_group_id` int(11) DEFAULT NULL,
            PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ");


    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql("DROP TABLE `brille24_tierprice`");

    }
}
