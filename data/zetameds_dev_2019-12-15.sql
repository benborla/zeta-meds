# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.28)
# Database: zetameds_dev
# Generation Time: 2019-12-14 18:27:02 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table brille24_tierprice
# ------------------------------------------------------------

DROP TABLE IF EXISTS `brille24_tierprice`;

CREATE TABLE `brille24_tierprice` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `price` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `product_variant_id` int(11) DEFAULT NULL,
  `customer_group_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `brille24_tierprice` WRITE;
/*!40000 ALTER TABLE `brille24_tierprice` DISABLE KEYS */;

INSERT INTO `brille24_tierprice` (`id`, `price`, `qty`, `channel_id`, `product_variant_id`, `customer_group_id`)
VALUES
	(2,242,31,1,2,NULL),
	(3,290,29,1,3,NULL),
	(4,393,9,1,4,NULL),
	(5,226,13,1,4,NULL),
	(6,245,13,1,5,NULL),
	(7,235,17,1,5,NULL),
	(8,230,21,1,5,NULL),
	(9,215,25,1,5,NULL),
	(10,210,37,1,5,NULL),
	(11,205,41,1,5,NULL),
	(13,245,31,1,9,NULL),
	(14,280,8,1,12,NULL),
	(15,275,16,1,12,NULL),
	(16,270,24,1,12,NULL),
	(17,265,28,1,12,NULL),
	(18,260,32,1,12,NULL),
	(19,255,40,1,12,NULL),
	(20,250,88,1,12,NULL),
	(21,270,16,1,13,NULL),
	(22,265,24,1,13,NULL),
	(23,260,32,1,13,NULL),
	(24,255,40,1,13,NULL),
	(25,250,44,1,13,NULL),
	(26,245,60,1,13,NULL),
	(27,240,88,1,13,NULL),
	(28,293,24,1,14,NULL),
	(29,287,28,1,14,NULL),
	(30,285,32,1,14,NULL),
	(31,278,40,1,14,NULL),
	(32,274,48,1,14,NULL),
	(33,270,60,1,14,NULL),
	(34,265,88,1,14,NULL),
	(35,285,11,1,16,NULL),
	(36,280,21,1,16,NULL),
	(37,275,31,1,16,NULL),
	(38,265,61,1,16,NULL),
	(39,265,11,1,17,NULL),
	(40,260,21,1,17,NULL),
	(41,255,31,1,17,NULL),
	(42,250,41,1,17,NULL);

/*!40000 ALTER TABLE `brille24_tierprice` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table migration_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `migration_versions`;

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `migration_versions` WRITE;
/*!40000 ALTER TABLE `migration_versions` DISABLE KEYS */;

INSERT INTO `migration_versions` (`version`, `executed_at`)
VALUES
	('20170912085504','2019-11-25 17:08:04'),
	('20170913125128','2019-11-25 17:08:04'),
	('20171003103916','2019-11-25 17:08:04'),
	('20180102140039','2019-11-25 17:08:04'),
	('20180626120743','2019-11-25 17:08:04'),
	('20180711070226','2019-11-25 17:08:04'),
	('20180711084815','2019-11-25 17:08:04'),
	('20180801083047','2019-11-25 17:08:04'),
	('20180826064735','2019-11-25 17:08:04'),
	('20190103134228','2019-11-25 17:08:04'),
	('20190109095211','2019-11-25 17:08:04'),
	('20190109160409','2019-11-25 17:08:04'),
	('20190508083953','2019-11-25 17:08:04'),
	('20190604071441','2019-11-25 17:08:04'),
	('20190607001446','2019-11-25 17:08:04'),
	('20190607002945','2019-11-25 17:08:04'),
	('20190621035710','2019-11-25 17:08:04'),
	('20191016060837','2019-11-25 17:08:05'),
	('20191121013154','2019-11-25 17:08:05'),
	('20191125161719','2019-11-25 17:08:05');

/*!40000 ALTER TABLE `migration_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_address`;

CREATE TABLE `sylius_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `country_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `province_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_B97FF0589395C3F3` (`customer_id`),
  CONSTRAINT `FK_B97FF0589395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `sylius_customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_address` WRITE;
/*!40000 ALTER TABLE `sylius_address` DISABLE KEYS */;

INSERT INTO `sylius_address` (`id`, `customer_id`, `first_name`, `last_name`, `phone_number`, `street`, `company`, `city`, `postcode`, `created_at`, `updated_at`, `country_code`, `province_code`, `province_name`)
VALUES
	(1,NULL,'Ben','Borla',NULL,'3850 SE 58th Ave','Zeta','Ocala','34480','2019-12-14 05:30:46','2019-12-14 05:30:46','US','US-FL',NULL),
	(2,NULL,'Ben','Borla',NULL,'3850 SE 58th Ave','Zeta','Ocala','34480','2019-12-14 05:30:46','2019-12-14 05:30:46','US','US-FL',NULL);

/*!40000 ALTER TABLE `sylius_address` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_address_log_entries
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_address_log_entries`;

CREATE TABLE `sylius_address_log_entries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `logged_at` datetime NOT NULL,
  `object_id` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `object_class` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `version` int(11) NOT NULL,
  `data` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_address_log_entries` WRITE;
/*!40000 ALTER TABLE `sylius_address_log_entries` DISABLE KEYS */;

INSERT INTO `sylius_address_log_entries` (`id`, `action`, `logged_at`, `object_id`, `object_class`, `version`, `data`, `username`)
VALUES
	(1,'create','2019-12-14 05:30:46','1','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Ben\";s:8:\"lastName\";s:5:\"Borla\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"3850 SE 58th Ave\";s:7:\"company\";s:4:\"Zeta\";s:4:\"city\";s:5:\"Ocala\";s:8:\"postcode\";s:5:\"34480\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";s:5:\"US-FL\";s:12:\"provinceName\";N;}','benborla@icloud.com'),
	(2,'create','2019-12-14 05:30:46','2','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Ben\";s:8:\"lastName\";s:5:\"Borla\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"3850 SE 58th Ave\";s:7:\"company\";s:4:\"Zeta\";s:4:\"city\";s:5:\"Ocala\";s:8:\"postcode\";s:5:\"34480\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";s:5:\"US-FL\";s:12:\"provinceName\";N;}','benborla@icloud.com');

/*!40000 ALTER TABLE `sylius_address_log_entries` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_adjustment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_adjustment`;

CREATE TABLE `sylius_adjustment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `order_item_id` int(11) DEFAULT NULL,
  `order_item_unit_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `is_neutral` tinyint(1) NOT NULL,
  `is_locked` tinyint(1) NOT NULL,
  `origin_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_ACA6E0F28D9F6D38` (`order_id`),
  KEY `IDX_ACA6E0F2E415FB15` (`order_item_id`),
  KEY `IDX_ACA6E0F2F720C233` (`order_item_unit_id`),
  CONSTRAINT `FK_ACA6E0F28D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ACA6E0F2E415FB15` FOREIGN KEY (`order_item_id`) REFERENCES `sylius_order_item` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ACA6E0F2F720C233` FOREIGN KEY (`order_item_unit_id`) REFERENCES `sylius_order_item_unit` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_adjustment` WRITE;
/*!40000 ALTER TABLE `sylius_adjustment` DISABLE KEYS */;

INSERT INTO `sylius_adjustment` (`id`, `order_id`, `order_item_id`, `order_item_unit_id`, `type`, `label`, `amount`, `is_neutral`, `is_locked`, `origin_code`, `created_at`, `updated_at`)
VALUES
	(2,1,NULL,NULL,'shipping','USPS (Free Shipping)',0,0,0,NULL,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(10,2,NULL,NULL,'shipping','USPS (Free Shipping)',0,0,0,NULL,'2019-11-28 00:23:33','2019-11-28 00:23:33');

/*!40000 ALTER TABLE `sylius_adjustment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_admin_api_access_token
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_admin_api_access_token`;

CREATE TABLE `sylius_admin_api_access_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_2AA4915D5F37A13B` (`token`),
  KEY `IDX_2AA4915D19EB6921` (`client_id`),
  KEY `IDX_2AA4915DA76ED395` (`user_id`),
  CONSTRAINT `FK_2AA4915D19EB6921` FOREIGN KEY (`client_id`) REFERENCES `sylius_admin_api_client` (`id`),
  CONSTRAINT `FK_2AA4915DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_admin_api_access_token` WRITE;
/*!40000 ALTER TABLE `sylius_admin_api_access_token` DISABLE KEYS */;

INSERT INTO `sylius_admin_api_access_token` (`id`, `client_id`, `user_id`, `token`, `expires_at`, `scope`)
VALUES
	(1,1,2,'ZetaMedsApi',NULL,NULL);

/*!40000 ALTER TABLE `sylius_admin_api_access_token` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_admin_api_auth_code
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_admin_api_auth_code`;

CREATE TABLE `sylius_admin_api_auth_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `redirect_uri` longtext COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_E366D8485F37A13B` (`token`),
  KEY `IDX_E366D84819EB6921` (`client_id`),
  KEY `IDX_E366D848A76ED395` (`user_id`),
  CONSTRAINT `FK_E366D84819EB6921` FOREIGN KEY (`client_id`) REFERENCES `sylius_admin_api_client` (`id`),
  CONSTRAINT `FK_E366D848A76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_admin_api_client
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_admin_api_client`;

CREATE TABLE `sylius_admin_api_client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `random_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `redirect_uris` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `secret` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `allowed_grant_types` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_admin_api_client` WRITE;
/*!40000 ALTER TABLE `sylius_admin_api_client` DISABLE KEYS */;

INSERT INTO `sylius_admin_api_client` (`id`, `random_id`, `redirect_uris`, `secret`, `allowed_grant_types`)
VALUES
	(1,'zeta_meds_client','a:0:{}','secret_api_client','a:1:{i:0;s:8:\"password\";}');

/*!40000 ALTER TABLE `sylius_admin_api_client` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_admin_api_refresh_token
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_admin_api_refresh_token`;

CREATE TABLE `sylius_admin_api_refresh_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_9160E3FA5F37A13B` (`token`),
  KEY `IDX_9160E3FA19EB6921` (`client_id`),
  KEY `IDX_9160E3FAA76ED395` (`user_id`),
  CONSTRAINT `FK_9160E3FA19EB6921` FOREIGN KEY (`client_id`) REFERENCES `sylius_admin_api_client` (`id`),
  CONSTRAINT `FK_9160E3FAA76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_admin_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_admin_user`;

CREATE TABLE `sylius_admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `email_verification_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `verified_at` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `credentials_expire_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale_code` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `encoder_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_admin_user` WRITE;
/*!40000 ALTER TABLE `sylius_admin_user` DISABLE KEYS */;

INSERT INTO `sylius_admin_user` (`id`, `username`, `username_canonical`, `enabled`, `salt`, `password`, `last_login`, `password_reset_token`, `password_requested_at`, `email_verification_token`, `verified_at`, `locked`, `expires_at`, `credentials_expire_at`, `roles`, `email`, `email_canonical`, `created_at`, `updated_at`, `first_name`, `last_name`, `locale_code`, `encoder_name`)
VALUES
	(2,'api','api',1,'2skhbx8sa92cwos0go88g4sss04844o','$argon2i$v=19$m=65536,t=4,p=1$TkFUNWFIRFJCanRFcmRSNw$4+YqCws6+97eBYfYlnHIpIwHGLvhYdTJtGl8b8YZJN4',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:2:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";i:1;s:15:\"ROLE_API_ACCESS\";}','api@example.com','api@example.com','2019-11-26 01:08:14','2019-11-26 01:08:14','Luke','Brushwood','en_US','argon2i'),
	(3,'benborla@icloud.com','benborla@icloud.com',1,'g64bf2ojow84scksggk8o8k4wsk4osg','$argon2i$v=19$m=65536,t=4,p=1$S0NicXNBOS9YVm1ZQm1nUQ$LFs97S2aAh7DRoi+6dsJ8830Hojfrm06xtPSEnESWGA','2019-11-27 08:33:35',NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";}','benborla@icloud.com','benborla@icloud.com','2019-11-26 01:08:23','2019-11-27 08:33:35',NULL,NULL,'en_US','argon2i');

/*!40000 ALTER TABLE `sylius_admin_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_avatar_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_avatar_image`;

CREATE TABLE `sylius_avatar_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_1068A3A97E3C61F9` (`owner_id`),
  CONSTRAINT `FK_1068A3A97E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `sylius_admin_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_channel
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_channel`;

CREATE TABLE `sylius_channel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `default_locale_id` int(11) NOT NULL,
  `base_currency_id` int(11) NOT NULL,
  `default_tax_zone_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `enabled` tinyint(1) NOT NULL,
  `hostname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `theme_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tax_calculation_strategy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skipping_shipping_step_allowed` tinyint(1) NOT NULL,
  `skipping_payment_step_allowed` tinyint(1) NOT NULL,
  `account_verification_required` tinyint(1) NOT NULL,
  `shop_billing_data_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_16C8119E77153098` (`code`),
  UNIQUE KEY `UNIQ_16C8119EB5282EDF` (`shop_billing_data_id`),
  KEY `IDX_16C8119E743BF776` (`default_locale_id`),
  KEY `IDX_16C8119E3101778E` (`base_currency_id`),
  KEY `IDX_16C8119EA978C17` (`default_tax_zone_id`),
  KEY `IDX_16C8119EE551C011` (`hostname`),
  CONSTRAINT `FK_16C8119E3101778E` FOREIGN KEY (`base_currency_id`) REFERENCES `sylius_currency` (`id`),
  CONSTRAINT `FK_16C8119E743BF776` FOREIGN KEY (`default_locale_id`) REFERENCES `sylius_locale` (`id`),
  CONSTRAINT `FK_16C8119EA978C17` FOREIGN KEY (`default_tax_zone_id`) REFERENCES `sylius_zone` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_16C8119EB5282EDF` FOREIGN KEY (`shop_billing_data_id`) REFERENCES `sylius_shop_billing_data` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_channel` WRITE;
/*!40000 ALTER TABLE `sylius_channel` DISABLE KEYS */;

INSERT INTO `sylius_channel` (`id`, `default_locale_id`, `base_currency_id`, `default_tax_zone_id`, `code`, `name`, `color`, `description`, `enabled`, `hostname`, `created_at`, `updated_at`, `theme_name`, `tax_calculation_strategy`, `contact_email`, `skipping_shipping_step_allowed`, `skipping_payment_step_allowed`, `account_verification_required`, `shop_billing_data_id`)
VALUES
	(1,1,1,1,'ZETA_MEDS','Zeta Meds','#ff0000','Zeta is an American company and a licensed pharmacy dedicated to providing its customers with a service unmatched by our competitors. We are dedicated to being consistently reliable while having only the highest quality FDA-approved products available. With the friendliest customer service, lowest rates, and superb product line, Zeta is here to be the last place you ever have to look for the remedies you need.',1,'localhost','2019-11-26 01:08:10','2019-11-27 04:17:54','benborla/zetameds-theme','order_items_based','benborla@icloud.com',0,0,1,1);

/*!40000 ALTER TABLE `sylius_channel` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_channel_currencies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_channel_currencies`;

CREATE TABLE `sylius_channel_currencies` (
  `channel_id` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL,
  PRIMARY KEY (`channel_id`,`currency_id`),
  KEY `IDX_AE491F9372F5A1AA` (`channel_id`),
  KEY `IDX_AE491F9338248176` (`currency_id`),
  CONSTRAINT `FK_AE491F9338248176` FOREIGN KEY (`currency_id`) REFERENCES `sylius_currency` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_AE491F9372F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_channel_currencies` WRITE;
/*!40000 ALTER TABLE `sylius_channel_currencies` DISABLE KEYS */;

INSERT INTO `sylius_channel_currencies` (`channel_id`, `currency_id`)
VALUES
	(1,1);

/*!40000 ALTER TABLE `sylius_channel_currencies` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_channel_locales
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_channel_locales`;

CREATE TABLE `sylius_channel_locales` (
  `channel_id` int(11) NOT NULL,
  `locale_id` int(11) NOT NULL,
  PRIMARY KEY (`channel_id`,`locale_id`),
  KEY `IDX_786B7A8472F5A1AA` (`channel_id`),
  KEY `IDX_786B7A84E559DFD1` (`locale_id`),
  CONSTRAINT `FK_786B7A8472F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_786B7A84E559DFD1` FOREIGN KEY (`locale_id`) REFERENCES `sylius_locale` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_channel_locales` WRITE;
/*!40000 ALTER TABLE `sylius_channel_locales` DISABLE KEYS */;

INSERT INTO `sylius_channel_locales` (`channel_id`, `locale_id`)
VALUES
	(1,1);

/*!40000 ALTER TABLE `sylius_channel_locales` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_channel_pricing
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_channel_pricing`;

CREATE TABLE `sylius_channel_pricing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_variant_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `original_price` int(11) DEFAULT NULL,
  `channel_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_variant_channel_idx` (`product_variant_id`,`channel_code`),
  KEY `IDX_7801820CA80EF684` (`product_variant_id`),
  CONSTRAINT `FK_7801820CA80EF684` FOREIGN KEY (`product_variant_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_channel_pricing` WRITE;
/*!40000 ALTER TABLE `sylius_channel_pricing` DISABLE KEYS */;

INSERT INTO `sylius_channel_pricing` (`id`, `product_variant_id`, `price`, `original_price`, `channel_code`)
VALUES
	(2,2,320,320,'ZETA_MEDS'),
	(3,3,311,311,'ZETA_MEDS'),
	(4,4,395,395,'ZETA_MEDS'),
	(5,5,379,379,'ZETA_MEDS'),
	(7,7,185,185,'ZETA_MEDS'),
	(9,9,250,250,'ZETA_MEDS'),
	(10,10,295,295,'ZETA_MEDS'),
	(12,12,495,495,'ZETA_MEDS'),
	(13,13,350,350,'ZETA_MEDS'),
	(14,14,360,360,'ZETA_MEDS'),
	(16,16,301,301,'ZETA_MEDS'),
	(17,17,307,307,'ZETA_MEDS'),
	(18,18,15000,15000,'ZETA_MEDS');

/*!40000 ALTER TABLE `sylius_channel_pricing` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_country
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_country`;

CREATE TABLE `sylius_country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_E74256BF77153098` (`code`),
  KEY `IDX_E74256BF77153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_country` WRITE;
/*!40000 ALTER TABLE `sylius_country` DISABLE KEYS */;

INSERT INTO `sylius_country` (`id`, `code`, `enabled`)
VALUES
	(1,'US',1);

/*!40000 ALTER TABLE `sylius_country` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_currency
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_currency`;

CREATE TABLE `sylius_currency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_96EDD3D077153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_currency` WRITE;
/*!40000 ALTER TABLE `sylius_currency` DISABLE KEYS */;

INSERT INTO `sylius_currency` (`id`, `code`, `created_at`, `updated_at`)
VALUES
	(1,'USD','2019-11-26 01:08:10','2019-11-26 01:08:10');

/*!40000 ALTER TABLE `sylius_currency` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_customer
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_customer`;

CREATE TABLE `sylius_customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_group_id` int(11) DEFAULT NULL,
  `default_address_id` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `gender` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'u',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subscribed_to_newsletter` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7E82D5E6E7927C74` (`email`),
  UNIQUE KEY `UNIQ_7E82D5E6A0D96FBF` (`email_canonical`),
  UNIQUE KEY `UNIQ_7E82D5E6BD94FB16` (`default_address_id`),
  KEY `IDX_7E82D5E6D2919A68` (`customer_group_id`),
  CONSTRAINT `FK_7E82D5E6BD94FB16` FOREIGN KEY (`default_address_id`) REFERENCES `sylius_address` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_7E82D5E6D2919A68` FOREIGN KEY (`customer_group_id`) REFERENCES `sylius_customer_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_customer` WRITE;
/*!40000 ALTER TABLE `sylius_customer` DISABLE KEYS */;

INSERT INTO `sylius_customer` (`id`, `customer_group_id`, `default_address_id`, `email`, `email_canonical`, `first_name`, `last_name`, `birthday`, `gender`, `created_at`, `updated_at`, `phone_number`, `subscribed_to_newsletter`)
VALUES
	(1,NULL,NULL,'benborla@icloud.com','benborla@icloud.com','Ben','Borla','1993-03-29 00:00:00','u','2019-12-14 05:27:59','2019-12-14 05:27:59',NULL,0);

/*!40000 ALTER TABLE `sylius_customer` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_customer_group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_customer_group`;

CREATE TABLE `sylius_customer_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7FCF9B0577153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_exchange_rate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_exchange_rate`;

CREATE TABLE `sylius_exchange_rate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `source_currency` int(11) NOT NULL,
  `target_currency` int(11) NOT NULL,
  `ratio` decimal(10,5) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_5F52B852A76BEEDB3FD5856` (`source_currency`,`target_currency`),
  KEY `IDX_5F52B852A76BEED` (`source_currency`),
  KEY `IDX_5F52B85B3FD5856` (`target_currency`),
  CONSTRAINT `FK_5F52B852A76BEED` FOREIGN KEY (`source_currency`) REFERENCES `sylius_currency` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_5F52B85B3FD5856` FOREIGN KEY (`target_currency`) REFERENCES `sylius_currency` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_gateway_config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_gateway_config`;

CREATE TABLE `sylius_gateway_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gateway_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `factory_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `config` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:json_array)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_gateway_config` WRITE;
/*!40000 ALTER TABLE `sylius_gateway_config` DISABLE KEYS */;

INSERT INTO `sylius_gateway_config` (`id`, `gateway_name`, `factory_name`, `config`)
VALUES
	(1,'Offline','offline','[]'),
	(2,'Offline','offline','[]'),
	(3,'authorize_net_sandbox','authorize_net_aim','{\"login_id\":\"5tV4X2b9\",\"transaction_key\":\"34a5hgw4zDf9QU28\",\"auto_capture\":1,\"use_authorize\":null}');

/*!40000 ALTER TABLE `sylius_gateway_config` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_invoicing_plugin_billing_data
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_invoicing_plugin_billing_data`;

CREATE TABLE `sylius_invoicing_plugin_billing_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `province_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_invoicing_plugin_invoice
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_invoicing_plugin_invoice`;

CREATE TABLE `sylius_invoicing_plugin_invoice` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `billing_data_id` int(11) DEFAULT NULL,
  `order_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `issued_at` datetime NOT NULL,
  `currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `total` int(11) NOT NULL,
  `number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `channel_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `channel_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `shop_billing_data_company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shop_billing_data_tax_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shop_billing_data_street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shop_billing_data_city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shop_billing_data_postcode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shop_billing_data_country_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shop_billing_data_representative` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_3AA279BF5CDB2AEB` (`billing_data_id`),
  KEY `IDX_3AA279BF551F0F81` (`order_number`),
  CONSTRAINT `FK_3AA279BF5CDB2AEB` FOREIGN KEY (`billing_data_id`) REFERENCES `sylius_invoicing_plugin_billing_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_invoicing_plugin_line_item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_invoicing_plugin_line_item`;

CREATE TABLE `sylius_invoicing_plugin_line_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `tax_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `variant_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `variant_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_C91408292989F1FD` (`invoice_id`),
  CONSTRAINT `FK_C91408292989F1FD` FOREIGN KEY (`invoice_id`) REFERENCES `sylius_invoicing_plugin_invoice` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_invoicing_plugin_sequence
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_invoicing_plugin_sequence`;

CREATE TABLE `sylius_invoicing_plugin_sequence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idx` int(11) NOT NULL,
  `version` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table sylius_invoicing_plugin_tax_item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_invoicing_plugin_tax_item`;

CREATE TABLE `sylius_invoicing_plugin_tax_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_2951C61C2989F1FD` (`invoice_id`),
  CONSTRAINT `FK_2951C61C2989F1FD` FOREIGN KEY (`invoice_id`) REFERENCES `sylius_invoicing_plugin_invoice` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_locale
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_locale`;

CREATE TABLE `sylius_locale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7BA1286477153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_locale` WRITE;
/*!40000 ALTER TABLE `sylius_locale` DISABLE KEYS */;

INSERT INTO `sylius_locale` (`id`, `code`, `created_at`, `updated_at`)
VALUES
	(1,'en_US','2019-11-26 01:08:10','2019-11-26 01:08:10');

/*!40000 ALTER TABLE `sylius_locale` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_order`;

CREATE TABLE `sylius_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shipping_address_id` int(11) DEFAULT NULL,
  `billing_address_id` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `promotion_coupon_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `notes` longtext COLLATE utf8_unicode_ci,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `checkout_completed_at` datetime DEFAULT NULL,
  `items_total` int(11) NOT NULL,
  `adjustments_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `locale_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `checkout_state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payment_state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `shipping_state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token_value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customer_ip` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_6196A1F996901F54` (`number`),
  UNIQUE KEY `UNIQ_6196A1F94D4CFF2B` (`shipping_address_id`),
  UNIQUE KEY `UNIQ_6196A1F979D0C0E4` (`billing_address_id`),
  KEY `IDX_6196A1F972F5A1AA` (`channel_id`),
  KEY `IDX_6196A1F917B24436` (`promotion_coupon_id`),
  KEY `IDX_6196A1F99395C3F3` (`customer_id`),
  KEY `IDX_6196A1F9A393D2FB43625D9F` (`state`,`updated_at`),
  CONSTRAINT `FK_6196A1F917B24436` FOREIGN KEY (`promotion_coupon_id`) REFERENCES `sylius_promotion_coupon` (`id`),
  CONSTRAINT `FK_6196A1F94D4CFF2B` FOREIGN KEY (`shipping_address_id`) REFERENCES `sylius_address` (`id`),
  CONSTRAINT `FK_6196A1F972F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`),
  CONSTRAINT `FK_6196A1F979D0C0E4` FOREIGN KEY (`billing_address_id`) REFERENCES `sylius_address` (`id`),
  CONSTRAINT `FK_6196A1F99395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `sylius_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_order` WRITE;
/*!40000 ALTER TABLE `sylius_order` DISABLE KEYS */;

INSERT INTO `sylius_order` (`id`, `shipping_address_id`, `billing_address_id`, `channel_id`, `promotion_coupon_id`, `customer_id`, `number`, `notes`, `state`, `checkout_completed_at`, `items_total`, `adjustments_total`, `total`, `created_at`, `updated_at`, `currency_code`, `locale_code`, `checkout_state`, `payment_state`, `shipping_state`, `token_value`, `customer_ip`)
VALUES
	(1,NULL,NULL,1,NULL,NULL,NULL,NULL,'cart',NULL,13310,0,13310,'2019-11-27 10:26:26','2019-11-27 10:26:39','USD','en_US','cart','cart','cart',NULL,NULL),
	(2,NULL,NULL,1,NULL,NULL,NULL,NULL,'cart',NULL,320,0,320,'2019-11-27 22:09:25','2019-11-28 00:23:33','USD','en_US','cart','cart','cart',NULL,NULL),
	(3,1,2,1,NULL,1,NULL,NULL,'cart',NULL,0,0,0,'2019-12-14 05:28:45','2019-12-14 15:16:40','USD','en_US','payment_selected','cart','cart',NULL,NULL);

/*!40000 ALTER TABLE `sylius_order` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_order_item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_order_item`;

CREATE TABLE `sylius_order_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `units_total` int(11) NOT NULL,
  `adjustments_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `is_immutable` tinyint(1) NOT NULL,
  `product_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `variant_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_77B587ED8D9F6D38` (`order_id`),
  KEY `IDX_77B587ED3B69A9AF` (`variant_id`),
  CONSTRAINT `FK_77B587ED3B69A9AF` FOREIGN KEY (`variant_id`) REFERENCES `sylius_product_variant` (`id`),
  CONSTRAINT `FK_77B587ED8D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_order_item` WRITE;
/*!40000 ALTER TABLE `sylius_order_item` DISABLE KEYS */;

INSERT INTO `sylius_order_item` (`id`, `order_id`, `variant_id`, `quantity`, `unit_price`, `units_total`, `adjustments_total`, `total`, `is_immutable`, `product_name`, `variant_name`)
VALUES
	(1,1,2,55,242,13310,0,13310,0,NULL,NULL),
	(4,2,2,1,320,320,0,320,0,NULL,NULL);

/*!40000 ALTER TABLE `sylius_order_item` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_order_item_unit
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_order_item_unit`;

CREATE TABLE `sylius_order_item_unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_item_id` int(11) NOT NULL,
  `shipment_id` int(11) DEFAULT NULL,
  `adjustments_total` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_82BF226EE415FB15` (`order_item_id`),
  KEY `IDX_82BF226E7BE036FC` (`shipment_id`),
  CONSTRAINT `FK_82BF226E7BE036FC` FOREIGN KEY (`shipment_id`) REFERENCES `sylius_shipment` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_82BF226EE415FB15` FOREIGN KEY (`order_item_id`) REFERENCES `sylius_order_item` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_order_item_unit` WRITE;
/*!40000 ALTER TABLE `sylius_order_item_unit` DISABLE KEYS */;

INSERT INTO `sylius_order_item_unit` (`id`, `order_item_id`, `shipment_id`, `adjustments_total`, `created_at`, `updated_at`)
VALUES
	(1,1,1,0,'2019-11-27 10:26:26','2019-11-27 10:26:26'),
	(2,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(3,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(4,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(5,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(6,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(7,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(8,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(9,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(10,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(11,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(12,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(13,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(14,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(15,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(16,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(17,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(18,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(19,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(20,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(21,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(22,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(23,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(24,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(25,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(26,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(27,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(28,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(29,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(30,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(31,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(32,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(33,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(34,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(35,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(36,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(37,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(38,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(39,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(40,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(41,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(42,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(43,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(44,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(45,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(46,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(47,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(48,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(49,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(50,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(51,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(52,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(53,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(54,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(55,1,1,0,'2019-11-27 10:26:39','2019-11-27 10:26:39'),
	(157,4,3,0,'2019-11-28 00:23:33','2019-11-28 00:23:33');

/*!40000 ALTER TABLE `sylius_order_item_unit` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_order_sequence
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_order_sequence`;

CREATE TABLE `sylius_order_sequence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idx` int(11) NOT NULL,
  `version` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_order_sequence` WRITE;
/*!40000 ALTER TABLE `sylius_order_sequence` DISABLE KEYS */;

INSERT INTO `sylius_order_sequence` (`id`, `idx`, `version`)
VALUES
	(1,20,2);

/*!40000 ALTER TABLE `sylius_order_sequence` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_payment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_payment`;

CREATE TABLE `sylius_payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method_id` int(11) DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `details` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:json_array)',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_D9191BD419883967` (`method_id`),
  KEY `IDX_D9191BD48D9F6D38` (`order_id`),
  CONSTRAINT `FK_D9191BD419883967` FOREIGN KEY (`method_id`) REFERENCES `sylius_payment_method` (`id`),
  CONSTRAINT `FK_D9191BD48D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_payment` WRITE;
/*!40000 ALTER TABLE `sylius_payment` DISABLE KEYS */;

INSERT INTO `sylius_payment` (`id`, `method_id`, `order_id`, `currency_code`, `amount`, `state`, `details`, `created_at`, `updated_at`)
VALUES
	(1,1,1,'USD',13310,'cart','[]','2019-11-27 10:26:26','2019-11-27 10:26:39'),
	(3,1,2,'USD',320,'cart','[]','2019-11-28 00:23:33','2019-11-28 00:23:33');

/*!40000 ALTER TABLE `sylius_payment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_payment_method
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_payment_method`;

CREATE TABLE `sylius_payment_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gateway_config_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `environment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_enabled` tinyint(1) NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_A75B0B0D77153098` (`code`),
  KEY `IDX_A75B0B0DF23D6140` (`gateway_config_id`),
  CONSTRAINT `FK_A75B0B0DF23D6140` FOREIGN KEY (`gateway_config_id`) REFERENCES `sylius_gateway_config` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_payment_method` WRITE;
/*!40000 ALTER TABLE `sylius_payment_method` DISABLE KEYS */;

INSERT INTO `sylius_payment_method` (`id`, `gateway_config_id`, `code`, `environment`, `is_enabled`, `position`, `created_at`, `updated_at`)
VALUES
	(1,1,'cash_on_delivery',NULL,0,1,'2019-11-26 01:08:10','2019-12-14 04:52:13'),
	(2,2,'bank_transfer',NULL,0,2,'2019-11-26 01:08:10','2019-12-14 04:52:28'),
	(3,3,'AUTHORIZE_NET_SANDBOX',NULL,1,0,'2019-12-14 04:53:47','2019-12-14 04:53:47');

/*!40000 ALTER TABLE `sylius_payment_method` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_payment_method_channels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_payment_method_channels`;

CREATE TABLE `sylius_payment_method_channels` (
  `payment_method_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL,
  PRIMARY KEY (`payment_method_id`,`channel_id`),
  KEY `IDX_543AC0CC5AA1164F` (`payment_method_id`),
  KEY `IDX_543AC0CC72F5A1AA` (`channel_id`),
  CONSTRAINT `FK_543AC0CC5AA1164F` FOREIGN KEY (`payment_method_id`) REFERENCES `sylius_payment_method` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_543AC0CC72F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_payment_method_channels` WRITE;
/*!40000 ALTER TABLE `sylius_payment_method_channels` DISABLE KEYS */;

INSERT INTO `sylius_payment_method_channels` (`payment_method_id`, `channel_id`)
VALUES
	(3,1);

/*!40000 ALTER TABLE `sylius_payment_method_channels` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_payment_method_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_payment_method_translation`;

CREATE TABLE `sylius_payment_method_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `instructions` longtext COLLATE utf8_unicode_ci,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_payment_method_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_966BE3A12C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_966BE3A12C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_payment_method` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_payment_method_translation` WRITE;
/*!40000 ALTER TABLE `sylius_payment_method_translation` DISABLE KEYS */;

INSERT INTO `sylius_payment_method_translation` (`id`, `translatable_id`, `name`, `description`, `instructions`, `locale`)
VALUES
	(1,1,'Cash on delivery','Ipsam ratione aut modi voluptatem quibusdam facilis occaecati sit.',NULL,'en_US'),
	(2,2,'Bank transfer','Voluptatem quod odio et consequatur.',NULL,'en_US'),
	(3,3,'Authorize.net (Sandbox Mode)','For testing guide, please see link: https://developer.authorize.net/hello_world/testing_guide/',NULL,'en_US');

/*!40000 ALTER TABLE `sylius_payment_method_translation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_payment_security_token
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_payment_security_token`;

CREATE TABLE `sylius_payment_security_token` (
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `details` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:object)',
  `after_url` longtext COLLATE utf8_unicode_ci,
  `target_url` longtext COLLATE utf8_unicode_ci NOT NULL,
  `gateway_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`hash`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product`;

CREATE TABLE `sylius_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `main_taxon_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  `variant_selection_method` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `average_rating` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_677B9B7477153098` (`code`),
  KEY `IDX_677B9B74731E505` (`main_taxon_id`),
  CONSTRAINT `FK_677B9B74731E505` FOREIGN KEY (`main_taxon_id`) REFERENCES `sylius_taxon` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product` WRITE;
/*!40000 ALTER TABLE `sylius_product` DISABLE KEYS */;

INSERT INTO `sylius_product` (`id`, `main_taxon_id`, `code`, `created_at`, `updated_at`, `enabled`, `variant_selection_method`, `average_rating`)
VALUES
	(1,1,'CIALIS','2019-11-27 09:53:05','2019-11-27 09:53:05',1,'choice',0),
	(2,1,'PROPECIA','2019-11-27 22:07:50','2019-11-27 22:07:50',1,'choice',0),
	(3,1,'VALTREX','2019-11-27 22:19:17','2019-11-27 22:19:18',1,'choice',0),
	(4,1,'VIAGRA','2019-11-27 22:28:38','2019-11-27 22:28:38',1,'choice',0),
	(5,1,'LEVITRA','2019-11-28 00:12:01','2019-11-28 00:12:02',1,'choice',0),
	(6,1,'RETIN_A','2019-11-28 00:16:41','2019-11-28 00:16:41',1,'choice',0);

/*!40000 ALTER TABLE `sylius_product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_association
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_association`;

CREATE TABLE `sylius_product_association` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `association_type_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_association_idx` (`product_id`,`association_type_id`),
  KEY `IDX_48E9CDABB1E1C39` (`association_type_id`),
  KEY `IDX_48E9CDAB4584665A` (`product_id`),
  CONSTRAINT `FK_48E9CDAB4584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_48E9CDABB1E1C39` FOREIGN KEY (`association_type_id`) REFERENCES `sylius_product_association_type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_association` WRITE;
/*!40000 ALTER TABLE `sylius_product_association` DISABLE KEYS */;

INSERT INTO `sylius_product_association` (`id`, `association_type_id`, `product_id`, `created_at`, `updated_at`)
VALUES
	(1,2,2,'2019-11-27 22:07:50','2019-12-14 18:11:26'),
	(2,2,5,'2019-11-28 00:12:02','2019-12-14 18:09:59');

/*!40000 ALTER TABLE `sylius_product_association` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_association_product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_association_product`;

CREATE TABLE `sylius_product_association_product` (
  `association_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`association_id`,`product_id`),
  KEY `IDX_A427B983EFB9C8A5` (`association_id`),
  KEY `IDX_A427B9834584665A` (`product_id`),
  CONSTRAINT `FK_A427B9834584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_A427B983EFB9C8A5` FOREIGN KEY (`association_id`) REFERENCES `sylius_product_association` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_association_product` WRITE;
/*!40000 ALTER TABLE `sylius_product_association_product` DISABLE KEYS */;

INSERT INTO `sylius_product_association_product` (`association_id`, `product_id`)
VALUES
	(1,1),
	(2,4);

/*!40000 ALTER TABLE `sylius_product_association_product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_association_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_association_type`;

CREATE TABLE `sylius_product_association_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_CCB8914C77153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_association_type` WRITE;
/*!40000 ALTER TABLE `sylius_product_association_type` DISABLE KEYS */;

INSERT INTO `sylius_product_association_type` (`id`, `code`, `created_at`, `updated_at`)
VALUES
	(2,'SIMILAR_PRODUCTS','2019-11-27 09:09:08','2019-11-27 09:09:08');

/*!40000 ALTER TABLE `sylius_product_association_type` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_association_type_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_association_type_translation`;

CREATE TABLE `sylius_product_association_type_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_product_association_type_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_4F618E52C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_4F618E52C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_association_type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_association_type_translation` WRITE;
/*!40000 ALTER TABLE `sylius_product_association_type_translation` DISABLE KEYS */;

INSERT INTO `sylius_product_association_type_translation` (`id`, `translatable_id`, `name`, `locale`)
VALUES
	(3,2,'Similar Products','en_US');

/*!40000 ALTER TABLE `sylius_product_association_type_translation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_attribute
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_attribute`;

CREATE TABLE `sylius_product_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `storage_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_BFAF484A77153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_attribute_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_attribute_translation`;

CREATE TABLE `sylius_product_attribute_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_product_attribute_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_93850EBA2C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_93850EBA2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_attribute` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_attribute_value
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_attribute_value`;

CREATE TABLE `sylius_product_attribute_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `locale_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text_value` longtext COLLATE utf8_unicode_ci,
  `boolean_value` tinyint(1) DEFAULT NULL,
  `integer_value` int(11) DEFAULT NULL,
  `float_value` double DEFAULT NULL,
  `datetime_value` datetime DEFAULT NULL,
  `date_value` date DEFAULT NULL,
  `json_value` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:json_array)',
  PRIMARY KEY (`id`),
  KEY `IDX_8A053E544584665A` (`product_id`),
  KEY `IDX_8A053E54B6E62EFA` (`attribute_id`),
  CONSTRAINT `FK_8A053E544584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_8A053E54B6E62EFA` FOREIGN KEY (`attribute_id`) REFERENCES `sylius_product_attribute` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_channels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_channels`;

CREATE TABLE `sylius_product_channels` (
  `product_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`channel_id`),
  KEY `IDX_F9EF269B4584665A` (`product_id`),
  KEY `IDX_F9EF269B72F5A1AA` (`channel_id`),
  CONSTRAINT `FK_F9EF269B4584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_F9EF269B72F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_channels` WRITE;
/*!40000 ALTER TABLE `sylius_product_channels` DISABLE KEYS */;

INSERT INTO `sylius_product_channels` (`product_id`, `channel_id`)
VALUES
	(1,1),
	(2,1),
	(3,1),
	(4,1),
	(5,1),
	(6,1);

/*!40000 ALTER TABLE `sylius_product_channels` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_image`;

CREATE TABLE `sylius_product_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_88C64B2D7E3C61F9` (`owner_id`),
  CONSTRAINT `FK_88C64B2D7E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_image` WRITE;
/*!40000 ALTER TABLE `sylius_product_image` DISABLE KEYS */;

INSERT INTO `sylius_product_image` (`id`, `owner_id`, `type`, `path`)
VALUES
	(1,1,NULL,'ac/45/b7c79057e3df1ca0903a47d11457.jpeg'),
	(2,2,NULL,'1d/39/b65d0d33f4d5c69e735d253f04ca.jpeg'),
	(4,4,NULL,'14/21/df9494548f1b8d6f128616b0aabe.jpeg'),
	(6,6,NULL,'7b/1a/de40f913269351985f50266351cc.jpeg'),
	(7,3,NULL,'c5/5d/87c78c2bcbc864c19f30903e83d8.jpeg'),
	(8,5,NULL,'6a/82/0b64c6d48dce366313f19969991b.jpeg');

/*!40000 ALTER TABLE `sylius_product_image` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_image_product_variants
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_image_product_variants`;

CREATE TABLE `sylius_product_image_product_variants` (
  `image_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL,
  PRIMARY KEY (`image_id`,`variant_id`),
  KEY `IDX_8FFDAE8D3DA5256D` (`image_id`),
  KEY `IDX_8FFDAE8D3B69A9AF` (`variant_id`),
  CONSTRAINT `FK_8FFDAE8D3B69A9AF` FOREIGN KEY (`variant_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_8FFDAE8D3DA5256D` FOREIGN KEY (`image_id`) REFERENCES `sylius_product_image` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_option
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_option`;

CREATE TABLE `sylius_product_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_E4C0EBEF77153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_option_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_option_translation`;

CREATE TABLE `sylius_product_option_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_product_option_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_CBA491AD2C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_CBA491AD2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_option` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_option_value
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_option_value`;

CREATE TABLE `sylius_product_option_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `option_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_F7FF7D4B77153098` (`code`),
  KEY `IDX_F7FF7D4BA7C41D6F` (`option_id`),
  CONSTRAINT `FK_F7FF7D4BA7C41D6F` FOREIGN KEY (`option_id`) REFERENCES `sylius_product_option` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_option_value_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_option_value_translation`;

CREATE TABLE `sylius_product_option_value_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_product_option_value_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_8D4382DC2C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_8D4382DC2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_option_value` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_options
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_options`;

CREATE TABLE `sylius_product_options` (
  `product_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`option_id`),
  KEY `IDX_2B5FF0094584665A` (`product_id`),
  KEY `IDX_2B5FF009A7C41D6F` (`option_id`),
  CONSTRAINT `FK_2B5FF0094584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_2B5FF009A7C41D6F` FOREIGN KEY (`option_id`) REFERENCES `sylius_product_option` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_review
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_review`;

CREATE TABLE `sylius_product_review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `comment` longtext COLLATE utf8_unicode_ci,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_C7056A994584665A` (`product_id`),
  KEY `IDX_C7056A99F675F31B` (`author_id`),
  CONSTRAINT `FK_C7056A994584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_C7056A99F675F31B` FOREIGN KEY (`author_id`) REFERENCES `sylius_customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_taxon
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_taxon`;

CREATE TABLE `sylius_product_taxon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `taxon_id` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_taxon_idx` (`product_id`,`taxon_id`),
  KEY `IDX_169C6CD94584665A` (`product_id`),
  KEY `IDX_169C6CD9DE13F470` (`taxon_id`),
  CONSTRAINT `FK_169C6CD94584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_169C6CD9DE13F470` FOREIGN KEY (`taxon_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_taxon` WRITE;
/*!40000 ALTER TABLE `sylius_product_taxon` DISABLE KEYS */;

INSERT INTO `sylius_product_taxon` (`id`, `product_id`, `taxon_id`, `position`)
VALUES
	(1,1,1,0),
	(2,2,1,1),
	(3,3,1,2),
	(4,4,1,3),
	(5,5,1,4),
	(6,6,1,5);

/*!40000 ALTER TABLE `sylius_product_taxon` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_translation`;

CREATE TABLE `sylius_product_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `meta_keywords` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8_unicode_ci,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_105A9084180C698989D9B62` (`locale`,`slug`),
  UNIQUE KEY `sylius_product_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_105A9082C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_105A9082C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_translation` WRITE;
/*!40000 ALTER TABLE `sylius_product_translation` DISABLE KEYS */;

INSERT INTO `sylius_product_translation` (`id`, `translatable_id`, `name`, `slug`, `description`, `meta_keywords`, `meta_description`, `short_description`, `locale`)
VALUES
	(1,1,'Cialis','cialis','Get back the endurance you deserve.\r\nWith Cialis, you can fight the erectile dysfunction. Fill out the form below and get started with Zeta Meds.\r\n\r\nTadalafil, brand name Cialis, is FDA approved to treat erectile dysfunction (ED) and impotence in men, as well as the symptoms of having an enlarged prostate. This medicine can be taken with or without food. Tadalafil does not prevent pregnancy or the spread of sexually transmitted diseases such as HIV.','cialis,zeta,zetameds,medicines','Tadalafil, brand name Cialis, is FDA approved to treat erectile dysfunction (ED) and impotence in men, as well as the symptoms of having an enlarged prostate.','Tadalafil, brand name Cialis, is FDA approved to treat erectile dysfunction (ED) and impotence in men, as well as the symptoms of having an enlarged prostate. This medicine can be taken with or without food. Tadalafil does not prevent pregnancy or the spread of sexually transmitted diseases such as HIV.','en_US'),
	(2,2,'Propecia','propecia','Stop hair loss in its tracks and speed up hair regrowth.\r\nPropecia helps to decrease the natural body hormone which leads to faster hair regrowth and less hair from falling out. Interested? Fill out the form below and we will call you for further details and process your order.','propecia,medicine,zetameds,zeta','Finasteride, brand name Propecia, is used to treat hair loss and baldness in men.','Finasteride, brand name Propecia, is used to treat hair loss and baldness in men. It works by preventing the conversion of testosterone to DHT in the body. Propecia is for use of men only and should not be taken by women or children.','en_US'),
	(3,3,'Valtrex','valtrex','Prevent outbreaks before they even occur.\r\nWith Valtrex, you can control genital herpes and run your life with confidence. Fill out the form below to get started and improve your experience in life with Zeta Meds.\r\n\r\nValacyclovir, brand name Valtrex, is an antiviral drug. It is used to treat infections caused by the herpes virus, such as cold sores, genital herpes, and shingles (herpes zoster) in adults. It can also be used to treat children for chicken pox.','valtrex,medicine,zeta,zetameds','Valacyclovir, brand name Valtrex, is an antiviral drug.','Valacyclovir, brand name Valtrex, is an antiviral drug. It is used to treat infections caused by the herpes virus, such as cold sores, genital herpes, and shingles (herpes zoster) in adults. It can also be used to treat children for chicken pox.','en_US'),
	(4,4,'Viagra','viagra','Defeat impotence once and for all.\r\nImprove your love life with Viagra, a medication that helps to combat erectile dysfunction. Viagra does not cure erectile dysfunction but it’ll make you feel like you’re young as a buck. Fill out the form below to begin a better you.\r\n\r\nSildenafil, brand name Viagra has been approved by the FDA to treat erectile dysfunction (ED). Sildenafil treats erectile dysfunction by increasing blood flow to the penis during sexual stimulation. This increased blood flow can cause an erection. Sildenafil treats PAH by relaxing the blood vessels in the lungs to allow blood to flow easily.','viagra,medicine,zetameds,zeta','Sildenafil, brand name Viagra has been approved by the FDA to treat erectile dysfunction (ED)','Sildenafil, brand name Viagra has been approved by the FDA to treat erectile dysfunction (ED). Sildenafil treats erectile dysfunction by increasing blood flow to the penis during sexual stimulation. This increased blood flow can cause an erection. Sildenafil treats PAH by relaxing the blood vessels in the lungs to allow blood to flow easily.','en_US'),
	(5,5,'Levitra','levitra','Strengthen your endurance, improve your lifestyle.\r\nErectile dysfunction can be annoying but with Levitra, you wouldn’t have to worry about it ever again. Levitra helps to keep the blood flowing, making you last longer and perform even better. Fill out the form below to get started with your Levitra.\r\n\r\nVardenafil, brand name Levitra, is used to treat erectile dysfunction (ED) and impotence in men. Levitra is part of a class of drugs called PDE inhibitors, and works by increasing the blood flow to the penis during sexual stimulation, which can cause an erection. This medication is usually taken around 60 minutes before intercourse.','levitra,zetameds,medicines,zeta','Vardenafil, brand name Levitra, is used to treat erectile dysfunction (ED) and impotence in men','Vardenafil, brand name Levitra, is used to treat erectile dysfunction (ED) and impotence in men. Levitra is part of a class of drugs called PDE inhibitors, and works by increasing the blood flow to the penis during sexual stimulation, which can cause an erection. This medication is usually taken around 60 minutes before intercourse.','en_US'),
	(6,6,'Retin A','retin-a','Smooth and youthful skin is achievable with us.\r\nSkin aging may be inevitable but you can slow down the process and maintain a youthful look. Rejuvenate your skin and gain a healthy glow with Retin A. Fill out the form below to get started.','retina,zetameds,medicines,zeta','Retin A contains Tretinoin which is used to treat acne.','Retin A contains Tretinoin which is used to treat acne. It affects the growth of skin cells and help to decrease the severity of acne. Acne will quickly heal if developed.','en_US');

/*!40000 ALTER TABLE `sylius_product_translation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_variant
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_variant`;

CREATE TABLE `sylius_product_variant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `tax_category_id` int(11) DEFAULT NULL,
  `shipping_category_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `position` int(11) NOT NULL,
  `version` int(11) NOT NULL DEFAULT '1',
  `on_hold` int(11) NOT NULL,
  `on_hand` int(11) NOT NULL,
  `tracked` tinyint(1) NOT NULL,
  `width` double DEFAULT NULL,
  `height` double DEFAULT NULL,
  `depth` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `shipping_required` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_A29B52377153098` (`code`),
  KEY `IDX_A29B5234584665A` (`product_id`),
  KEY `IDX_A29B5239DF894ED` (`tax_category_id`),
  KEY `IDX_A29B5239E2D1A41` (`shipping_category_id`),
  CONSTRAINT `FK_A29B5234584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_A29B5239DF894ED` FOREIGN KEY (`tax_category_id`) REFERENCES `sylius_tax_category` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_A29B5239E2D1A41` FOREIGN KEY (`shipping_category_id`) REFERENCES `sylius_shipping_category` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_variant` WRITE;
/*!40000 ALTER TABLE `sylius_product_variant` DISABLE KEYS */;

INSERT INTO `sylius_product_variant` (`id`, `product_id`, `tax_category_id`, `shipping_category_id`, `code`, `created_at`, `updated_at`, `position`, `version`, `on_hold`, `on_hand`, `tracked`, `width`, `height`, `depth`, `weight`, `shipping_required`)
VALUES
	(2,1,4,NULL,'CIALIS_TADALAFIL_2_5MG','2019-11-27 09:57:53','2019-12-14 15:46:46',0,7,0,100,1,NULL,NULL,NULL,NULL,1),
	(3,1,4,NULL,'CIALIS_TADALAFIL_5_MG','2019-11-27 10:04:19','2019-12-14 14:52:00',1,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(4,1,4,NULL,'CIALIS_TADALAFIL_10_MG','2019-11-27 10:06:41','2019-12-14 14:52:09',2,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(5,1,4,NULL,'CIALIS_TADALAFIL_20_MG','2019-11-27 10:08:02','2019-12-14 14:52:19',3,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(7,2,4,NULL,'PROPECIA_FINASTERIDE_1MG','2019-11-27 22:08:51','2019-12-14 18:11:26',0,3,0,100,0,NULL,NULL,NULL,NULL,1),
	(9,3,4,NULL,'VALTREX_VALACYCLOVIR_500_MG','2019-11-27 22:20:43','2019-12-14 14:58:35',0,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(10,3,4,NULL,'VALTREX_VALACYCLOVIR_100_MG','2019-11-27 22:23:52','2019-12-14 14:58:46',1,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(12,4,4,NULL,'VIAGRA_SILDENAFIL_25_MG','2019-11-27 22:31:17','2019-12-14 14:59:46',0,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(13,4,4,NULL,'VIAGRA_SILDENAFIL_50_MG','2019-11-27 22:33:22','2019-12-14 14:59:51',1,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(14,4,4,NULL,'VIAGRA_SILDENAFIL_100_MG','2019-11-27 22:35:28','2019-12-14 14:59:58',2,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(16,5,4,NULL,'LEVITRA_VARDENAFIL_10_MG','2019-11-28 00:13:14','2019-12-14 14:55:02',0,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(17,5,4,NULL,'LEVITRA_VARDENAFIL_20_MG','2019-11-28 00:14:22','2019-12-14 14:55:27',1,2,0,100,1,NULL,NULL,NULL,NULL,1),
	(18,6,4,NULL,'RETIN_A','2019-11-28 00:16:41','2019-12-14 14:57:11',0,2,0,100,1,NULL,NULL,NULL,NULL,1);

/*!40000 ALTER TABLE `sylius_product_variant` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_product_variant_option_value
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_variant_option_value`;

CREATE TABLE `sylius_product_variant_option_value` (
  `variant_id` int(11) NOT NULL,
  `option_value_id` int(11) NOT NULL,
  PRIMARY KEY (`variant_id`,`option_value_id`),
  KEY `IDX_76CDAFA13B69A9AF` (`variant_id`),
  KEY `IDX_76CDAFA1D957CA06` (`option_value_id`),
  CONSTRAINT `FK_76CDAFA13B69A9AF` FOREIGN KEY (`variant_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_76CDAFA1D957CA06` FOREIGN KEY (`option_value_id`) REFERENCES `sylius_product_option_value` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_product_variant_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_product_variant_translation`;

CREATE TABLE `sylius_product_variant_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_product_variant_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_8DC18EDC2C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_8DC18EDC2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_product_variant_translation` WRITE;
/*!40000 ALTER TABLE `sylius_product_variant_translation` DISABLE KEYS */;

INSERT INTO `sylius_product_variant_translation` (`id`, `translatable_id`, `name`, `locale`)
VALUES
	(2,2,'2.5mg','en_US'),
	(3,3,'5mg','en_US'),
	(4,4,'10mg','en_US'),
	(5,5,'20mg','en_US'),
	(7,7,'1mg','en_US'),
	(9,9,'500mg','en_US'),
	(10,10,'1000mg','en_US'),
	(12,12,'25mg','en_US'),
	(13,13,'50mg','en_US'),
	(14,14,'100mg','en_US'),
	(16,16,'10mg','en_US'),
	(17,17,'20mg','en_US'),
	(18,18,'Retin A','en_US');

/*!40000 ALTER TABLE `sylius_product_variant_translation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_promotion
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_promotion`;

CREATE TABLE `sylius_promotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `priority` int(11) NOT NULL,
  `exclusive` tinyint(1) NOT NULL,
  `usage_limit` int(11) DEFAULT NULL,
  `used` int(11) NOT NULL,
  `coupon_based` tinyint(1) NOT NULL,
  `starts_at` datetime DEFAULT NULL,
  `ends_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_F157396377153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_promotion` WRITE;
/*!40000 ALTER TABLE `sylius_promotion` DISABLE KEYS */;

INSERT INTO `sylius_promotion` (`id`, `code`, `name`, `description`, `priority`, `exclusive`, `usage_limit`, `used`, `coupon_based`, `starts_at`, `ends_at`, `created_at`, `updated_at`)
VALUES
	(2,'new_year','New Year','Labore fugiat incidunt quibusdam et omnis corporis expedita.',1,0,10,10,0,'2019-11-19 01:08:14','2019-12-03 01:08:14','2019-11-26 01:08:14','2019-11-26 01:08:16');

/*!40000 ALTER TABLE `sylius_promotion` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_promotion_action
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_promotion_action`;

CREATE TABLE `sylius_promotion_action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promotion_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  PRIMARY KEY (`id`),
  KEY `IDX_933D0915139DF194` (`promotion_id`),
  CONSTRAINT `FK_933D0915139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_promotion_action` WRITE;
/*!40000 ALTER TABLE `sylius_promotion_action` DISABLE KEYS */;

INSERT INTO `sylius_promotion_action` (`id`, `promotion_id`, `type`, `configuration`)
VALUES
	(2,2,'order_fixed_discount','a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:1000;}}');

/*!40000 ALTER TABLE `sylius_promotion_action` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_promotion_channels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_promotion_channels`;

CREATE TABLE `sylius_promotion_channels` (
  `promotion_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL,
  PRIMARY KEY (`promotion_id`,`channel_id`),
  KEY `IDX_1A044F64139DF194` (`promotion_id`),
  KEY `IDX_1A044F6472F5A1AA` (`channel_id`),
  CONSTRAINT `FK_1A044F64139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_1A044F6472F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_promotion_channels` WRITE;
/*!40000 ALTER TABLE `sylius_promotion_channels` DISABLE KEYS */;

INSERT INTO `sylius_promotion_channels` (`promotion_id`, `channel_id`)
VALUES
	(2,1);

/*!40000 ALTER TABLE `sylius_promotion_channels` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_promotion_coupon
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_promotion_coupon`;

CREATE TABLE `sylius_promotion_coupon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promotion_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usage_limit` int(11) DEFAULT NULL,
  `used` int(11) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `per_customer_usage_limit` int(11) DEFAULT NULL,
  `reusable_from_cancelled_orders` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_B04EBA8577153098` (`code`),
  KEY `IDX_B04EBA85139DF194` (`promotion_id`),
  CONSTRAINT `FK_B04EBA85139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_promotion_order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_promotion_order`;

CREATE TABLE `sylius_promotion_order` (
  `order_id` int(11) NOT NULL,
  `promotion_id` int(11) NOT NULL,
  PRIMARY KEY (`order_id`,`promotion_id`),
  KEY `IDX_BF9CF6FB8D9F6D38` (`order_id`),
  KEY `IDX_BF9CF6FB139DF194` (`promotion_id`),
  CONSTRAINT `FK_BF9CF6FB139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`),
  CONSTRAINT `FK_BF9CF6FB8D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_promotion_rule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_promotion_rule`;

CREATE TABLE `sylius_promotion_rule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promotion_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  PRIMARY KEY (`id`),
  KEY `IDX_2C188EA8139DF194` (`promotion_id`),
  CONSTRAINT `FK_2C188EA8139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_promotion_rule` WRITE;
/*!40000 ALTER TABLE `sylius_promotion_rule` DISABLE KEYS */;

INSERT INTO `sylius_promotion_rule` (`id`, `promotion_id`, `type`, `configuration`)
VALUES
	(2,2,'item_total','a:1:{s:9:\"ZETA_MEDS\";a:1:{s:6:\"amount\";i:10000;}}');

/*!40000 ALTER TABLE `sylius_promotion_rule` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_province
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_province`;

CREATE TABLE `sylius_province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `abbreviation` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_B5618FE477153098` (`code`),
  UNIQUE KEY `UNIQ_B5618FE4F92F3E705E237E06` (`country_id`,`name`),
  KEY `IDX_B5618FE4F92F3E70` (`country_id`),
  CONSTRAINT `FK_B5618FE4F92F3E70` FOREIGN KEY (`country_id`) REFERENCES `sylius_country` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_province` WRITE;
/*!40000 ALTER TABLE `sylius_province` DISABLE KEYS */;

INSERT INTO `sylius_province` (`id`, `country_id`, `code`, `name`, `abbreviation`)
VALUES
	(2,1,'US-AL','Alabama','AL'),
	(3,1,'US-AK','Alaska','AK'),
	(4,1,'US-AZ','Arizona','AZ'),
	(5,1,'US-AR','Arkansas','AR'),
	(6,1,'US-CA','California','CA'),
	(7,1,'US-CO','Colorado','CO'),
	(8,1,'US-CT','Connecticut','CT'),
	(9,1,'US-DE','Delaware','DE'),
	(10,1,'US-FL','Florida','FL'),
	(11,1,'US-GA','Georgia','GA'),
	(12,1,'US-HI','Hawaii','HI'),
	(13,1,'US-ID','Idaho','ID'),
	(14,1,'US-IL','Illinois','IL'),
	(15,1,'US-IN','Indiana','IN'),
	(16,1,'US-IA','Iowa','IA'),
	(17,1,'US-KS','Kansas','KS'),
	(18,1,'US-KY','Kentucky','KY'),
	(19,1,'US-LA','Louisiana','LA'),
	(20,1,'US-ME','Maine','ME'),
	(21,1,'US-MD','Maryland','MD'),
	(22,1,'US-MA','Massachusetts','MA'),
	(23,1,'US-MI','Michigan','MI'),
	(24,1,'US-MN','Minnesota','MN'),
	(25,1,'US-MS','Mississippi','MS'),
	(26,1,'US-MO','Missouri','MO'),
	(27,1,'US-MT','Montana','MT'),
	(28,1,'US-NE','Nebraska','NE'),
	(29,1,'US-NV','Nevada','NV'),
	(30,1,'US-NH','New Hampshire','NH'),
	(31,1,'US-NJ','New Jersey','NJ'),
	(32,1,'US-NM','New Mexico','NM'),
	(33,1,'US-NY','New York','NY'),
	(34,1,'US-NC','North Carolina','NC'),
	(35,1,'US-ND','North Dakota','ND'),
	(36,1,'US-OH','Ohio','OH'),
	(37,1,'US-OK','Oklahoma','OK'),
	(38,1,'US-OR','Oregon','OR'),
	(39,1,'US-PA','Pennsylvania','PA'),
	(40,1,'US-RI','Rhode Island','RI'),
	(41,1,'US-SC','South Carolina','SC'),
	(42,1,'US-SD','South Dakota','SD'),
	(43,1,'US-TN','Tennessee','TN'),
	(44,1,'US-TX','Texas','TX'),
	(45,1,'US-UT','Utah','UT'),
	(46,1,'US-VT','Vermont','VT'),
	(47,1,'US-VA','Virginia','VA'),
	(48,1,'US-WA','Washington','WA'),
	(49,1,'US-WV','West Virginia','WV'),
	(50,1,'US-WI','Wisconsin','WI'),
	(51,1,'US-WY','Wyoming','WY');

/*!40000 ALTER TABLE `sylius_province` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_shipment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shipment`;

CREATE TABLE `sylius_shipment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tracking` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_FD707B3319883967` (`method_id`),
  KEY `IDX_FD707B338D9F6D38` (`order_id`),
  CONSTRAINT `FK_FD707B3319883967` FOREIGN KEY (`method_id`) REFERENCES `sylius_shipping_method` (`id`),
  CONSTRAINT `FK_FD707B338D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_shipment` WRITE;
/*!40000 ALTER TABLE `sylius_shipment` DISABLE KEYS */;

INSERT INTO `sylius_shipment` (`id`, `method_id`, `order_id`, `state`, `tracking`, `created_at`, `updated_at`)
VALUES
	(1,4,1,'cart',NULL,'2019-11-27 10:26:26','2019-11-27 10:26:26'),
	(3,4,2,'cart',NULL,'2019-11-28 00:23:33','2019-11-28 00:23:33');

/*!40000 ALTER TABLE `sylius_shipment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_shipping_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shipping_category`;

CREATE TABLE `sylius_shipping_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_B1D6465277153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_shipping_method
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shipping_method`;

CREATE TABLE `sylius_shipping_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `zone_id` int(11) NOT NULL,
  `tax_category_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `category_requirement` int(11) NOT NULL,
  `calculator` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_enabled` tinyint(1) NOT NULL,
  `position` int(11) NOT NULL,
  `archived_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_5FB0EE1177153098` (`code`),
  KEY `IDX_5FB0EE1112469DE2` (`category_id`),
  KEY `IDX_5FB0EE119F2C3FAB` (`zone_id`),
  KEY `IDX_5FB0EE119DF894ED` (`tax_category_id`),
  CONSTRAINT `FK_5FB0EE1112469DE2` FOREIGN KEY (`category_id`) REFERENCES `sylius_shipping_category` (`id`),
  CONSTRAINT `FK_5FB0EE119DF894ED` FOREIGN KEY (`tax_category_id`) REFERENCES `sylius_tax_category` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_5FB0EE119F2C3FAB` FOREIGN KEY (`zone_id`) REFERENCES `sylius_zone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_shipping_method` WRITE;
/*!40000 ALTER TABLE `sylius_shipping_method` DISABLE KEYS */;

INSERT INTO `sylius_shipping_method` (`id`, `category_id`, `zone_id`, `tax_category_id`, `code`, `configuration`, `category_requirement`, `calculator`, `is_enabled`, `position`, `archived_at`, `created_at`, `updated_at`)
VALUES
	(4,NULL,1,NULL,'USPS_FREE_SHIPPING','a:1:{s:9:\"ZETA_MEDS\";a:1:{s:6:\"amount\";i:0;}}',1,'flat_rate',1,1,NULL,'2019-11-27 10:11:51','2019-11-27 10:12:42'),
	(5,NULL,1,NULL,'USPS_PRIORITY','a:1:{s:9:\"ZETA_MEDS\";a:1:{s:6:\"amount\";i:1000;}}',1,'flat_rate',1,0,NULL,'2019-11-27 10:15:16','2019-11-27 10:15:16');

/*!40000 ALTER TABLE `sylius_shipping_method` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_shipping_method_channels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shipping_method_channels`;

CREATE TABLE `sylius_shipping_method_channels` (
  `shipping_method_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL,
  PRIMARY KEY (`shipping_method_id`,`channel_id`),
  KEY `IDX_2D9833355F7D6850` (`shipping_method_id`),
  KEY `IDX_2D98333572F5A1AA` (`channel_id`),
  CONSTRAINT `FK_2D9833355F7D6850` FOREIGN KEY (`shipping_method_id`) REFERENCES `sylius_shipping_method` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_2D98333572F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_shipping_method_channels` WRITE;
/*!40000 ALTER TABLE `sylius_shipping_method_channels` DISABLE KEYS */;

INSERT INTO `sylius_shipping_method_channels` (`shipping_method_id`, `channel_id`)
VALUES
	(4,1),
	(5,1);

/*!40000 ALTER TABLE `sylius_shipping_method_channels` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_shipping_method_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shipping_method_translation`;

CREATE TABLE `sylius_shipping_method_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sylius_shipping_method_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_2B37DB3D2C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_2B37DB3D2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_shipping_method` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_shipping_method_translation` WRITE;
/*!40000 ALTER TABLE `sylius_shipping_method_translation` DISABLE KEYS */;

INSERT INTO `sylius_shipping_method_translation` (`id`, `translatable_id`, `name`, `description`, `locale`)
VALUES
	(4,4,'USPS (Free Shipping)',NULL,'en_US'),
	(5,5,'USPS Priority',NULL,'en_US');

/*!40000 ALTER TABLE `sylius_shipping_method_translation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_shop_billing_data
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shop_billing_data`;

CREATE TABLE `sylius_shop_billing_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tax_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postcode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_shop_billing_data` WRITE;
/*!40000 ALTER TABLE `sylius_shop_billing_data` DISABLE KEYS */;

INSERT INTO `sylius_shop_billing_data` (`id`, `company`, `tax_id`, `country_code`, `street`, `city`, `postcode`)
VALUES
	(1,'Zeta','0001112222','US','3850 SE 58th Ave','Ocala','34480');

/*!40000 ALTER TABLE `sylius_shop_billing_data` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_shop_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_shop_user`;

CREATE TABLE `sylius_shop_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `email_verification_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `verified_at` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `credentials_expire_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `encoder_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7C2B74809395C3F3` (`customer_id`),
  CONSTRAINT `FK_7C2B74809395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `sylius_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_shop_user` WRITE;
/*!40000 ALTER TABLE `sylius_shop_user` DISABLE KEYS */;

INSERT INTO `sylius_shop_user` (`id`, `customer_id`, `username`, `username_canonical`, `enabled`, `salt`, `password`, `last_login`, `password_reset_token`, `password_requested_at`, `email_verification_token`, `verified_at`, `locked`, `expires_at`, `credentials_expire_at`, `roles`, `email`, `email_canonical`, `created_at`, `updated_at`, `encoder_name`)
VALUES
	(1,1,'benborla@icloud.com','benborla@icloud.com',1,'2qksqgue53ggo4wsccosgc4g0occ0g8','$argon2i$v=19$m=65536,t=4,p=1$RC9rZ2NpSW5MLzNpc0tBYg$7oEucKHCoqo7G7Njt9FE4qJ4GPdqrq+qkB3vzgEoatU','2019-12-14 05:28:45',NULL,NULL,NULL,'2019-12-14 05:28:32',0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-12-14 05:27:59','2019-12-14 05:28:45','argon2i');

/*!40000 ALTER TABLE `sylius_shop_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_tax_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_tax_category`;

CREATE TABLE `sylius_tax_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_221EB0BE77153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_tax_category` WRITE;
/*!40000 ALTER TABLE `sylius_tax_category` DISABLE KEYS */;

INSERT INTO `sylius_tax_category` (`id`, `code`, `name`, `description`, `created_at`, `updated_at`)
VALUES
	(4,'FLORIDA_STATE_TAX','Florida State Tax','Florida has a 7% tax on the total amount of the purchase.','2019-12-14 05:35:55','2019-12-14 05:35:55');

/*!40000 ALTER TABLE `sylius_tax_category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_tax_rate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_tax_rate`;

CREATE TABLE `sylius_tax_rate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount` decimal(10,5) NOT NULL,
  `included_in_price` tinyint(1) NOT NULL,
  `calculator` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_3CD86B2E77153098` (`code`),
  KEY `IDX_3CD86B2E12469DE2` (`category_id`),
  KEY `IDX_3CD86B2E9F2C3FAB` (`zone_id`),
  CONSTRAINT `FK_3CD86B2E12469DE2` FOREIGN KEY (`category_id`) REFERENCES `sylius_tax_category` (`id`),
  CONSTRAINT `FK_3CD86B2E9F2C3FAB` FOREIGN KEY (`zone_id`) REFERENCES `sylius_zone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_tax_rate` WRITE;
/*!40000 ALTER TABLE `sylius_tax_rate` DISABLE KEYS */;

INSERT INTO `sylius_tax_rate` (`id`, `category_id`, `zone_id`, `code`, `name`, `amount`, `included_in_price`, `calculator`, `created_at`, `updated_at`)
VALUES
	(3,4,4,'FL_STATE_TAX_RATE','Florida State Tax',0.07000,1,'default','2019-12-14 05:57:17','2019-12-14 14:43:03');

/*!40000 ALTER TABLE `sylius_tax_rate` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_taxon
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_taxon`;

CREATE TABLE `sylius_taxon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tree_root` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tree_left` int(11) NOT NULL,
  `tree_right` int(11) NOT NULL,
  `tree_level` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_CFD811CA77153098` (`code`),
  KEY `IDX_CFD811CAA977936C` (`tree_root`),
  KEY `IDX_CFD811CA727ACA70` (`parent_id`),
  CONSTRAINT `FK_CFD811CA727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_CFD811CAA977936C` FOREIGN KEY (`tree_root`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_taxon` WRITE;
/*!40000 ALTER TABLE `sylius_taxon` DISABLE KEYS */;

INSERT INTO `sylius_taxon` (`id`, `tree_root`, `parent_id`, `code`, `tree_left`, `tree_right`, `tree_level`, `position`, `created_at`, `updated_at`)
VALUES
	(1,1,NULL,'MEDICINES',1,2,0,0,'2019-11-27 09:48:05','2019-11-27 09:48:05');

/*!40000 ALTER TABLE `sylius_taxon` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_taxon_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_taxon_image`;

CREATE TABLE `sylius_taxon_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_DBE52B287E3C61F9` (`owner_id`),
  CONSTRAINT `FK_DBE52B287E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_taxon_image` WRITE;
/*!40000 ALTER TABLE `sylius_taxon_image` DISABLE KEYS */;

INSERT INTO `sylius_taxon_image` (`id`, `owner_id`, `type`, `path`)
VALUES
	(1,1,NULL,'3f/e1/283ec7f9f26f432db1cdb7e5159b.jpeg');

/*!40000 ALTER TABLE `sylius_taxon_image` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_taxon_translation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_taxon_translation`;

CREATE TABLE `sylius_taxon_translation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug_uidx` (`locale`,`slug`),
  UNIQUE KEY `sylius_taxon_translation_uniq_trans` (`translatable_id`,`locale`),
  KEY `IDX_1487DFCF2C2AC5D3` (`translatable_id`),
  CONSTRAINT `FK_1487DFCF2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_taxon_translation` WRITE;
/*!40000 ALTER TABLE `sylius_taxon_translation` DISABLE KEYS */;

INSERT INTO `sylius_taxon_translation` (`id`, `translatable_id`, `name`, `slug`, `description`, `locale`)
VALUES
	(1,1,'Medicines','medicines','Zeta Medicines','en_US');

/*!40000 ALTER TABLE `sylius_taxon_translation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_user_oauth
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_user_oauth`;

CREATE TABLE `sylius_user_oauth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `identifier` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `access_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `refresh_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_provider` (`user_id`,`provider`),
  KEY `IDX_C3471B78A76ED395` (`user_id`),
  CONSTRAINT `FK_C3471B78A76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_shop_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



# Dump of table sylius_zone
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_zone`;

CREATE TABLE `sylius_zone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7BE2258E77153098` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_zone` WRITE;
/*!40000 ALTER TABLE `sylius_zone` DISABLE KEYS */;

INSERT INTO `sylius_zone` (`id`, `code`, `name`, `type`, `scope`)
VALUES
	(1,'US','United States of America','country','all'),
	(4,'US-FL-ZONE','Florida','province','all');

/*!40000 ALTER TABLE `sylius_zone` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_zone_member
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_zone_member`;

CREATE TABLE `sylius_zone_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `belongs_to` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_E8B5ABF34B0E929B77153098` (`belongs_to`,`code`),
  KEY `IDX_E8B5ABF34B0E929B` (`belongs_to`),
  CONSTRAINT `FK_E8B5ABF34B0E929B` FOREIGN KEY (`belongs_to`) REFERENCES `sylius_zone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sylius_zone_member` WRITE;
/*!40000 ALTER TABLE `sylius_zone_member` DISABLE KEYS */;

INSERT INTO `sylius_zone_member` (`id`, `belongs_to`, `code`)
VALUES
	(1,1,'US'),
	(4,4,'US-FL');

/*!40000 ALTER TABLE `sylius_zone_member` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
