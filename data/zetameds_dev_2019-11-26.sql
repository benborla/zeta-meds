# ************************************************************
# Sequel Pro SQL dump
# Version 5438
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: zetameds_dev
# Generation Time: 2019-11-25 17:21:41 +0000
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
	(1,10,'Luis','Jakubowski',NULL,'54762 Gregoria Shores Apt. 050',NULL,'Titushaven','22519','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(2,NULL,'Luis','Jakubowski',NULL,'54762 Gregoria Shores Apt. 050',NULL,'Titushaven','22519','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(3,NULL,'Luis','Jakubowski',NULL,'54762 Gregoria Shores Apt. 050',NULL,'Titushaven','22519','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(4,2,'Geo','Funk',NULL,'725 Brock Inlet Suite 232',NULL,'Kevonbury','64204-1487','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(5,NULL,'Geo','Funk',NULL,'725 Brock Inlet Suite 232',NULL,'Kevonbury','64204-1487','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(6,NULL,'Geo','Funk',NULL,'725 Brock Inlet Suite 232',NULL,'Kevonbury','64204-1487','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(7,14,'Edd','Greenholt',NULL,'68226 Turcotte Alley Apt. 598',NULL,'Port Marjolaineberg','64507-7818','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(8,NULL,'Edd','Greenholt',NULL,'68226 Turcotte Alley Apt. 598',NULL,'Port Marjolaineberg','64507-7818','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(9,NULL,'Edd','Greenholt',NULL,'68226 Turcotte Alley Apt. 598',NULL,'Port Marjolaineberg','64507-7818','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(10,8,'Cary','Marquardt',NULL,'238 Judson Crest',NULL,'Fatimaburgh','74518','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(11,NULL,'Cary','Marquardt',NULL,'238 Judson Crest',NULL,'Fatimaburgh','74518','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(12,NULL,'Cary','Marquardt',NULL,'238 Judson Crest',NULL,'Fatimaburgh','74518','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(13,5,'Rod','Pagac',NULL,'15747 Dayna Neck',NULL,'Rivermouth','48018-9987','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(14,NULL,'Rod','Pagac',NULL,'15747 Dayna Neck',NULL,'Rivermouth','48018-9987','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(15,NULL,'Rod','Pagac',NULL,'15747 Dayna Neck',NULL,'Rivermouth','48018-9987','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(16,16,'Edwina','Wilkinson',NULL,'57155 Towne Radial',NULL,'Katarinamouth','13244','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(17,NULL,'Edwina','Wilkinson',NULL,'57155 Towne Radial',NULL,'Katarinamouth','13244','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(18,NULL,'Edwina','Wilkinson',NULL,'57155 Towne Radial',NULL,'Katarinamouth','13244','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(19,21,'Larue','Schultz',NULL,'8603 Judah Run Suite 644',NULL,'North Craig','26780-9237','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(20,NULL,'Larue','Schultz',NULL,'8603 Judah Run Suite 644',NULL,'North Craig','26780-9237','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(21,NULL,'Larue','Schultz',NULL,'8603 Judah Run Suite 644',NULL,'North Craig','26780-9237','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(22,2,'Ashton','Nader',NULL,'831 Kaleigh Green',NULL,'Kubside','82126','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(23,NULL,'Ashton','Nader',NULL,'831 Kaleigh Green',NULL,'Kubside','82126','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(24,NULL,'Ashton','Nader',NULL,'831 Kaleigh Green',NULL,'Kubside','82126','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(25,6,'Shaun','Dicki',NULL,'325 Monahan Corner Apt. 625',NULL,'South Bradyville','70808','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(26,NULL,'Shaun','Dicki',NULL,'325 Monahan Corner Apt. 625',NULL,'South Bradyville','70808','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(27,NULL,'Shaun','Dicki',NULL,'325 Monahan Corner Apt. 625',NULL,'South Bradyville','70808','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(28,11,'Reta','Auer',NULL,'4090 Tod Common Suite 621',NULL,'Port Germaineburgh','78771-9158','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(29,NULL,'Reta','Auer',NULL,'4090 Tod Common Suite 621',NULL,'Port Germaineburgh','78771-9158','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(30,NULL,'Reta','Auer',NULL,'4090 Tod Common Suite 621',NULL,'Port Germaineburgh','78771-9158','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(31,3,'Katarina','Davis',NULL,'69800 Duncan Stravenue Suite 648',NULL,'Port Ebony','37631-8474','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(32,NULL,'Katarina','Davis',NULL,'69800 Duncan Stravenue Suite 648',NULL,'Port Ebony','37631-8474','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(33,NULL,'Katarina','Davis',NULL,'69800 Duncan Stravenue Suite 648',NULL,'Port Ebony','37631-8474','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(34,5,'Irma','Weber',NULL,'8467 Lebsack Estate',NULL,'Port Sheaburgh','63453-9299','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(35,NULL,'Irma','Weber',NULL,'8467 Lebsack Estate',NULL,'Port Sheaburgh','63453-9299','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(36,NULL,'Irma','Weber',NULL,'8467 Lebsack Estate',NULL,'Port Sheaburgh','63453-9299','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(37,18,'Howell','Christiansen',NULL,'179 Little Keys Suite 896',NULL,'Lake Pricefurt','71341','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(38,NULL,'Howell','Christiansen',NULL,'179 Little Keys Suite 896',NULL,'Lake Pricefurt','71341','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(39,NULL,'Howell','Christiansen',NULL,'179 Little Keys Suite 896',NULL,'Lake Pricefurt','71341','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(40,1,'Elliot','Pfannerstill',NULL,'703 Hilda Plains',NULL,'East Celia','37818','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(41,NULL,'Elliot','Pfannerstill',NULL,'703 Hilda Plains',NULL,'East Celia','37818','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(42,NULL,'Elliot','Pfannerstill',NULL,'703 Hilda Plains',NULL,'East Celia','37818','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(43,4,'Grayson','Schinner',NULL,'856 Tracy Well Suite 484',NULL,'South Lizeth','87578-6346','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(44,NULL,'Grayson','Schinner',NULL,'856 Tracy Well Suite 484',NULL,'South Lizeth','87578-6346','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(45,NULL,'Grayson','Schinner',NULL,'856 Tracy Well Suite 484',NULL,'South Lizeth','87578-6346','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(46,12,'Marcia','Swaniawski',NULL,'730 Herman Pike',NULL,'Winnifredland','15823-4648','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(47,NULL,'Marcia','Swaniawski',NULL,'730 Herman Pike',NULL,'Winnifredland','15823-4648','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(48,NULL,'Marcia','Swaniawski',NULL,'730 Herman Pike',NULL,'Winnifredland','15823-4648','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(49,4,'Lupe','Ritchie',NULL,'3276 Demetris Plain Suite 205',NULL,'West Wendy','57385-4504','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(50,NULL,'Lupe','Ritchie',NULL,'3276 Demetris Plain Suite 205',NULL,'West Wendy','57385-4504','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(51,NULL,'Lupe','Ritchie',NULL,'3276 Demetris Plain Suite 205',NULL,'West Wendy','57385-4504','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(52,3,'Ludie','Stoltenberg',NULL,'78805 Torp Light',NULL,'Jeanieton','27541','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(53,NULL,'Ludie','Stoltenberg',NULL,'78805 Torp Light',NULL,'Jeanieton','27541','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(54,NULL,'Ludie','Stoltenberg',NULL,'78805 Torp Light',NULL,'Jeanieton','27541','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(55,11,'Sheridan','Bins',NULL,'726 Stiedemann Circle',NULL,'West Libbie','02036','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(56,NULL,'Sheridan','Bins',NULL,'726 Stiedemann Circle',NULL,'West Libbie','02036','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(57,NULL,'Sheridan','Bins',NULL,'726 Stiedemann Circle',NULL,'West Libbie','02036','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(58,18,'Brain','Parisian',NULL,'4772 Amelia Unions',NULL,'New Anabel','69751-6483','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(59,NULL,'Brain','Parisian',NULL,'4772 Amelia Unions',NULL,'New Anabel','69751-6483','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(60,NULL,'Brain','Parisian',NULL,'4772 Amelia Unions',NULL,'New Anabel','69751-6483','2019-11-26 01:08:15','2019-11-26 01:08:15','US',NULL,NULL),
	(61,14,'Abby','Upton',NULL,'3760 Ena Knoll',NULL,'Flavioshire','56722-4008','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(62,11,'Roy','Cummings','+17509509110','101 Schneider Stravenue',NULL,'Runolfssonton','23441-2350','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(63,9,'Alysha','Cole','585-305-9491','4993 D\'Amore Forge Apt. 944',NULL,'Ninatown','99629','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(64,4,'Jon','Willms',NULL,'6829 Adrienne Knoll Apt. 032','Ankunding-Parker','Fisherchester','27114','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(65,12,'Tevin','Leuschke',NULL,'9197 Irwin Lakes','Howell Group','Ritchieville','12565','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(66,5,'Hassie','Blick',NULL,'1816 Zemlak Shoals','Christiansen, Lind and Hartmann','West Melany','31791-4315','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(67,1,'Sean','Cummings',NULL,'9622 Raheem Grove Apt. 500',NULL,'Yazminburgh','56865-7900','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(68,10,'Columbus','Bernhard',NULL,'24971 Vilma Place','Johns, Moen and Paucek','New Jacquesville','32887-9626','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(69,1,'Georgiana','Gibson','(862) 729-9969 x3777','2476 Ernser Ferry Apt. 292','Kshlerin, Considine and Swaniawski','Lake Emil','71273-3268','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL),
	(70,11,'Daisha','Wehner','1-416-231-0062 x9877','7952 Kayli Club Suite 558',NULL,'Russelport','18711','2019-11-26 01:08:16','2019-11-26 01:08:16','US',NULL,NULL);

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
	(1,'create','2019-11-26 01:08:15','1','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Luis\";s:8:\"lastName\";s:10:\"Jakubowski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"54762 Gregoria Shores Apt. 050\";s:7:\"company\";N;s:4:\"city\";s:10:\"Titushaven\";s:8:\"postcode\";s:5:\"22519\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(2,'create','2019-11-26 01:08:15','2','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Luis\";s:8:\"lastName\";s:10:\"Jakubowski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"54762 Gregoria Shores Apt. 050\";s:7:\"company\";N;s:4:\"city\";s:10:\"Titushaven\";s:8:\"postcode\";s:5:\"22519\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(3,'create','2019-11-26 01:08:15','3','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Luis\";s:8:\"lastName\";s:10:\"Jakubowski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"54762 Gregoria Shores Apt. 050\";s:7:\"company\";N;s:4:\"city\";s:10:\"Titushaven\";s:8:\"postcode\";s:5:\"22519\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(4,'create','2019-11-26 01:08:16','4','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Geo\";s:8:\"lastName\";s:4:\"Funk\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"725 Brock Inlet Suite 232\";s:7:\"company\";N;s:4:\"city\";s:9:\"Kevonbury\";s:8:\"postcode\";s:10:\"64204-1487\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(5,'create','2019-11-26 01:08:16','5','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Geo\";s:8:\"lastName\";s:4:\"Funk\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"725 Brock Inlet Suite 232\";s:7:\"company\";N;s:4:\"city\";s:9:\"Kevonbury\";s:8:\"postcode\";s:10:\"64204-1487\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(6,'create','2019-11-26 01:08:16','6','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Geo\";s:8:\"lastName\";s:4:\"Funk\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"725 Brock Inlet Suite 232\";s:7:\"company\";N;s:4:\"city\";s:9:\"Kevonbury\";s:8:\"postcode\";s:10:\"64204-1487\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(7,'create','2019-11-26 01:08:16','7','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Edd\";s:8:\"lastName\";s:9:\"Greenholt\";s:11:\"phoneNumber\";N;s:6:\"street\";s:29:\"68226 Turcotte Alley Apt. 598\";s:7:\"company\";N;s:4:\"city\";s:19:\"Port Marjolaineberg\";s:8:\"postcode\";s:10:\"64507-7818\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(8,'create','2019-11-26 01:08:16','8','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Edd\";s:8:\"lastName\";s:9:\"Greenholt\";s:11:\"phoneNumber\";N;s:6:\"street\";s:29:\"68226 Turcotte Alley Apt. 598\";s:7:\"company\";N;s:4:\"city\";s:19:\"Port Marjolaineberg\";s:8:\"postcode\";s:10:\"64507-7818\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(9,'create','2019-11-26 01:08:16','9','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Edd\";s:8:\"lastName\";s:9:\"Greenholt\";s:11:\"phoneNumber\";N;s:6:\"street\";s:29:\"68226 Turcotte Alley Apt. 598\";s:7:\"company\";N;s:4:\"city\";s:19:\"Port Marjolaineberg\";s:8:\"postcode\";s:10:\"64507-7818\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(10,'create','2019-11-26 01:08:16','10','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Cary\";s:8:\"lastName\";s:9:\"Marquardt\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"238 Judson Crest\";s:7:\"company\";N;s:4:\"city\";s:11:\"Fatimaburgh\";s:8:\"postcode\";s:5:\"74518\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(11,'create','2019-11-26 01:08:16','11','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Cary\";s:8:\"lastName\";s:9:\"Marquardt\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"238 Judson Crest\";s:7:\"company\";N;s:4:\"city\";s:11:\"Fatimaburgh\";s:8:\"postcode\";s:5:\"74518\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(12,'create','2019-11-26 01:08:16','12','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Cary\";s:8:\"lastName\";s:9:\"Marquardt\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"238 Judson Crest\";s:7:\"company\";N;s:4:\"city\";s:11:\"Fatimaburgh\";s:8:\"postcode\";s:5:\"74518\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(13,'create','2019-11-26 01:08:16','13','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Rod\";s:8:\"lastName\";s:5:\"Pagac\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"15747 Dayna Neck\";s:7:\"company\";N;s:4:\"city\";s:10:\"Rivermouth\";s:8:\"postcode\";s:10:\"48018-9987\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(14,'create','2019-11-26 01:08:16','14','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Rod\";s:8:\"lastName\";s:5:\"Pagac\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"15747 Dayna Neck\";s:7:\"company\";N;s:4:\"city\";s:10:\"Rivermouth\";s:8:\"postcode\";s:10:\"48018-9987\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(15,'create','2019-11-26 01:08:16','15','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Rod\";s:8:\"lastName\";s:5:\"Pagac\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"15747 Dayna Neck\";s:7:\"company\";N;s:4:\"city\";s:10:\"Rivermouth\";s:8:\"postcode\";s:10:\"48018-9987\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(16,'create','2019-11-26 01:08:16','16','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Edwina\";s:8:\"lastName\";s:9:\"Wilkinson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"57155 Towne Radial\";s:7:\"company\";N;s:4:\"city\";s:13:\"Katarinamouth\";s:8:\"postcode\";s:5:\"13244\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(17,'create','2019-11-26 01:08:16','17','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Edwina\";s:8:\"lastName\";s:9:\"Wilkinson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"57155 Towne Radial\";s:7:\"company\";N;s:4:\"city\";s:13:\"Katarinamouth\";s:8:\"postcode\";s:5:\"13244\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(18,'create','2019-11-26 01:08:16','18','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Edwina\";s:8:\"lastName\";s:9:\"Wilkinson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"57155 Towne Radial\";s:7:\"company\";N;s:4:\"city\";s:13:\"Katarinamouth\";s:8:\"postcode\";s:5:\"13244\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(19,'create','2019-11-26 01:08:16','19','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Larue\";s:8:\"lastName\";s:7:\"Schultz\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"8603 Judah Run Suite 644\";s:7:\"company\";N;s:4:\"city\";s:11:\"North Craig\";s:8:\"postcode\";s:10:\"26780-9237\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(20,'create','2019-11-26 01:08:16','20','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Larue\";s:8:\"lastName\";s:7:\"Schultz\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"8603 Judah Run Suite 644\";s:7:\"company\";N;s:4:\"city\";s:11:\"North Craig\";s:8:\"postcode\";s:10:\"26780-9237\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(21,'create','2019-11-26 01:08:16','21','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Larue\";s:8:\"lastName\";s:7:\"Schultz\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"8603 Judah Run Suite 644\";s:7:\"company\";N;s:4:\"city\";s:11:\"North Craig\";s:8:\"postcode\";s:10:\"26780-9237\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(22,'create','2019-11-26 01:08:16','22','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Ashton\";s:8:\"lastName\";s:5:\"Nader\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"831 Kaleigh Green\";s:7:\"company\";N;s:4:\"city\";s:7:\"Kubside\";s:8:\"postcode\";s:5:\"82126\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(23,'create','2019-11-26 01:08:16','23','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Ashton\";s:8:\"lastName\";s:5:\"Nader\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"831 Kaleigh Green\";s:7:\"company\";N;s:4:\"city\";s:7:\"Kubside\";s:8:\"postcode\";s:5:\"82126\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(24,'create','2019-11-26 01:08:16','24','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Ashton\";s:8:\"lastName\";s:5:\"Nader\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"831 Kaleigh Green\";s:7:\"company\";N;s:4:\"city\";s:7:\"Kubside\";s:8:\"postcode\";s:5:\"82126\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(25,'create','2019-11-26 01:08:16','25','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Shaun\";s:8:\"lastName\";s:5:\"Dicki\";s:11:\"phoneNumber\";N;s:6:\"street\";s:27:\"325 Monahan Corner Apt. 625\";s:7:\"company\";N;s:4:\"city\";s:16:\"South Bradyville\";s:8:\"postcode\";s:5:\"70808\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(26,'create','2019-11-26 01:08:16','26','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Shaun\";s:8:\"lastName\";s:5:\"Dicki\";s:11:\"phoneNumber\";N;s:6:\"street\";s:27:\"325 Monahan Corner Apt. 625\";s:7:\"company\";N;s:4:\"city\";s:16:\"South Bradyville\";s:8:\"postcode\";s:5:\"70808\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(27,'create','2019-11-26 01:08:16','27','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Shaun\";s:8:\"lastName\";s:5:\"Dicki\";s:11:\"phoneNumber\";N;s:6:\"street\";s:27:\"325 Monahan Corner Apt. 625\";s:7:\"company\";N;s:4:\"city\";s:16:\"South Bradyville\";s:8:\"postcode\";s:5:\"70808\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(28,'create','2019-11-26 01:08:16','28','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Reta\";s:8:\"lastName\";s:4:\"Auer\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"4090 Tod Common Suite 621\";s:7:\"company\";N;s:4:\"city\";s:18:\"Port Germaineburgh\";s:8:\"postcode\";s:10:\"78771-9158\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(29,'create','2019-11-26 01:08:16','29','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Reta\";s:8:\"lastName\";s:4:\"Auer\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"4090 Tod Common Suite 621\";s:7:\"company\";N;s:4:\"city\";s:18:\"Port Germaineburgh\";s:8:\"postcode\";s:10:\"78771-9158\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(30,'create','2019-11-26 01:08:16','30','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Reta\";s:8:\"lastName\";s:4:\"Auer\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"4090 Tod Common Suite 621\";s:7:\"company\";N;s:4:\"city\";s:18:\"Port Germaineburgh\";s:8:\"postcode\";s:10:\"78771-9158\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(31,'create','2019-11-26 01:08:16','31','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Katarina\";s:8:\"lastName\";s:5:\"Davis\";s:11:\"phoneNumber\";N;s:6:\"street\";s:32:\"69800 Duncan Stravenue Suite 648\";s:7:\"company\";N;s:4:\"city\";s:10:\"Port Ebony\";s:8:\"postcode\";s:10:\"37631-8474\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(32,'create','2019-11-26 01:08:16','32','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Katarina\";s:8:\"lastName\";s:5:\"Davis\";s:11:\"phoneNumber\";N;s:6:\"street\";s:32:\"69800 Duncan Stravenue Suite 648\";s:7:\"company\";N;s:4:\"city\";s:10:\"Port Ebony\";s:8:\"postcode\";s:10:\"37631-8474\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(33,'create','2019-11-26 01:08:16','33','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Katarina\";s:8:\"lastName\";s:5:\"Davis\";s:11:\"phoneNumber\";N;s:6:\"street\";s:32:\"69800 Duncan Stravenue Suite 648\";s:7:\"company\";N;s:4:\"city\";s:10:\"Port Ebony\";s:8:\"postcode\";s:10:\"37631-8474\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(34,'create','2019-11-26 01:08:16','34','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Irma\";s:8:\"lastName\";s:5:\"Weber\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"8467 Lebsack Estate\";s:7:\"company\";N;s:4:\"city\";s:14:\"Port Sheaburgh\";s:8:\"postcode\";s:10:\"63453-9299\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(35,'create','2019-11-26 01:08:16','35','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Irma\";s:8:\"lastName\";s:5:\"Weber\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"8467 Lebsack Estate\";s:7:\"company\";N;s:4:\"city\";s:14:\"Port Sheaburgh\";s:8:\"postcode\";s:10:\"63453-9299\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(36,'create','2019-11-26 01:08:16','36','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Irma\";s:8:\"lastName\";s:5:\"Weber\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"8467 Lebsack Estate\";s:7:\"company\";N;s:4:\"city\";s:14:\"Port Sheaburgh\";s:8:\"postcode\";s:10:\"63453-9299\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(37,'create','2019-11-26 01:08:16','37','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Howell\";s:8:\"lastName\";s:12:\"Christiansen\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"179 Little Keys Suite 896\";s:7:\"company\";N;s:4:\"city\";s:14:\"Lake Pricefurt\";s:8:\"postcode\";s:5:\"71341\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(38,'create','2019-11-26 01:08:16','38','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Howell\";s:8:\"lastName\";s:12:\"Christiansen\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"179 Little Keys Suite 896\";s:7:\"company\";N;s:4:\"city\";s:14:\"Lake Pricefurt\";s:8:\"postcode\";s:5:\"71341\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(39,'create','2019-11-26 01:08:16','39','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Howell\";s:8:\"lastName\";s:12:\"Christiansen\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"179 Little Keys Suite 896\";s:7:\"company\";N;s:4:\"city\";s:14:\"Lake Pricefurt\";s:8:\"postcode\";s:5:\"71341\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(40,'create','2019-11-26 01:08:16','40','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Elliot\";s:8:\"lastName\";s:12:\"Pfannerstill\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"703 Hilda Plains\";s:7:\"company\";N;s:4:\"city\";s:10:\"East Celia\";s:8:\"postcode\";s:5:\"37818\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(41,'create','2019-11-26 01:08:16','41','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Elliot\";s:8:\"lastName\";s:12:\"Pfannerstill\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"703 Hilda Plains\";s:7:\"company\";N;s:4:\"city\";s:10:\"East Celia\";s:8:\"postcode\";s:5:\"37818\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(42,'create','2019-11-26 01:08:16','42','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Elliot\";s:8:\"lastName\";s:12:\"Pfannerstill\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"703 Hilda Plains\";s:7:\"company\";N;s:4:\"city\";s:10:\"East Celia\";s:8:\"postcode\";s:5:\"37818\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(43,'create','2019-11-26 01:08:16','43','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:7:\"Grayson\";s:8:\"lastName\";s:8:\"Schinner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"856 Tracy Well Suite 484\";s:7:\"company\";N;s:4:\"city\";s:12:\"South Lizeth\";s:8:\"postcode\";s:10:\"87578-6346\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(44,'create','2019-11-26 01:08:16','44','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:7:\"Grayson\";s:8:\"lastName\";s:8:\"Schinner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"856 Tracy Well Suite 484\";s:7:\"company\";N;s:4:\"city\";s:12:\"South Lizeth\";s:8:\"postcode\";s:10:\"87578-6346\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(45,'create','2019-11-26 01:08:16','45','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:7:\"Grayson\";s:8:\"lastName\";s:8:\"Schinner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"856 Tracy Well Suite 484\";s:7:\"company\";N;s:4:\"city\";s:12:\"South Lizeth\";s:8:\"postcode\";s:10:\"87578-6346\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(46,'create','2019-11-26 01:08:16','46','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Marcia\";s:8:\"lastName\";s:10:\"Swaniawski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:15:\"730 Herman Pike\";s:7:\"company\";N;s:4:\"city\";s:13:\"Winnifredland\";s:8:\"postcode\";s:10:\"15823-4648\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(47,'create','2019-11-26 01:08:16','47','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Marcia\";s:8:\"lastName\";s:10:\"Swaniawski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:15:\"730 Herman Pike\";s:7:\"company\";N;s:4:\"city\";s:13:\"Winnifredland\";s:8:\"postcode\";s:10:\"15823-4648\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(48,'create','2019-11-26 01:08:16','48','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Marcia\";s:8:\"lastName\";s:10:\"Swaniawski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:15:\"730 Herman Pike\";s:7:\"company\";N;s:4:\"city\";s:13:\"Winnifredland\";s:8:\"postcode\";s:10:\"15823-4648\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(49,'create','2019-11-26 01:08:16','49','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Lupe\";s:8:\"lastName\";s:7:\"Ritchie\";s:11:\"phoneNumber\";N;s:6:\"street\";s:29:\"3276 Demetris Plain Suite 205\";s:7:\"company\";N;s:4:\"city\";s:10:\"West Wendy\";s:8:\"postcode\";s:10:\"57385-4504\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(50,'create','2019-11-26 01:08:16','50','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Lupe\";s:8:\"lastName\";s:7:\"Ritchie\";s:11:\"phoneNumber\";N;s:6:\"street\";s:29:\"3276 Demetris Plain Suite 205\";s:7:\"company\";N;s:4:\"city\";s:10:\"West Wendy\";s:8:\"postcode\";s:10:\"57385-4504\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(51,'create','2019-11-26 01:08:16','51','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Lupe\";s:8:\"lastName\";s:7:\"Ritchie\";s:11:\"phoneNumber\";N;s:6:\"street\";s:29:\"3276 Demetris Plain Suite 205\";s:7:\"company\";N;s:4:\"city\";s:10:\"West Wendy\";s:8:\"postcode\";s:10:\"57385-4504\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(52,'create','2019-11-26 01:08:16','52','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Ludie\";s:8:\"lastName\";s:11:\"Stoltenberg\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"78805 Torp Light\";s:7:\"company\";N;s:4:\"city\";s:9:\"Jeanieton\";s:8:\"postcode\";s:5:\"27541\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(53,'create','2019-11-26 01:08:16','53','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Ludie\";s:8:\"lastName\";s:11:\"Stoltenberg\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"78805 Torp Light\";s:7:\"company\";N;s:4:\"city\";s:9:\"Jeanieton\";s:8:\"postcode\";s:5:\"27541\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(54,'create','2019-11-26 01:08:16','54','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Ludie\";s:8:\"lastName\";s:11:\"Stoltenberg\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"78805 Torp Light\";s:7:\"company\";N;s:4:\"city\";s:9:\"Jeanieton\";s:8:\"postcode\";s:5:\"27541\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(55,'create','2019-11-26 01:08:16','55','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Sheridan\";s:8:\"lastName\";s:4:\"Bins\";s:11:\"phoneNumber\";N;s:6:\"street\";s:21:\"726 Stiedemann Circle\";s:7:\"company\";N;s:4:\"city\";s:11:\"West Libbie\";s:8:\"postcode\";s:5:\"02036\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(56,'create','2019-11-26 01:08:16','56','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Sheridan\";s:8:\"lastName\";s:4:\"Bins\";s:11:\"phoneNumber\";N;s:6:\"street\";s:21:\"726 Stiedemann Circle\";s:7:\"company\";N;s:4:\"city\";s:11:\"West Libbie\";s:8:\"postcode\";s:5:\"02036\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(57,'create','2019-11-26 01:08:16','57','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Sheridan\";s:8:\"lastName\";s:4:\"Bins\";s:11:\"phoneNumber\";N;s:6:\"street\";s:21:\"726 Stiedemann Circle\";s:7:\"company\";N;s:4:\"city\";s:11:\"West Libbie\";s:8:\"postcode\";s:5:\"02036\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(58,'create','2019-11-26 01:08:16','58','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Brain\";s:8:\"lastName\";s:8:\"Parisian\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"4772 Amelia Unions\";s:7:\"company\";N;s:4:\"city\";s:10:\"New Anabel\";s:8:\"postcode\";s:10:\"69751-6483\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(59,'create','2019-11-26 01:08:16','59','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Brain\";s:8:\"lastName\";s:8:\"Parisian\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"4772 Amelia Unions\";s:7:\"company\";N;s:4:\"city\";s:10:\"New Anabel\";s:8:\"postcode\";s:10:\"69751-6483\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(60,'create','2019-11-26 01:08:16','60','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Brain\";s:8:\"lastName\";s:8:\"Parisian\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"4772 Amelia Unions\";s:7:\"company\";N;s:4:\"city\";s:10:\"New Anabel\";s:8:\"postcode\";s:10:\"69751-6483\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(61,'create','2019-11-26 01:08:16','61','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Abby\";s:8:\"lastName\";s:5:\"Upton\";s:11:\"phoneNumber\";N;s:6:\"street\";s:14:\"3760 Ena Knoll\";s:7:\"company\";N;s:4:\"city\";s:11:\"Flavioshire\";s:8:\"postcode\";s:10:\"56722-4008\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(62,'create','2019-11-26 01:08:16','62','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Roy\";s:8:\"lastName\";s:8:\"Cummings\";s:11:\"phoneNumber\";s:12:\"+17509509110\";s:6:\"street\";s:23:\"101 Schneider Stravenue\";s:7:\"company\";N;s:4:\"city\";s:13:\"Runolfssonton\";s:8:\"postcode\";s:10:\"23441-2350\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(63,'create','2019-11-26 01:08:16','63','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Alysha\";s:8:\"lastName\";s:4:\"Cole\";s:11:\"phoneNumber\";s:12:\"585-305-9491\";s:6:\"street\";s:27:\"4993 D\'Amore Forge Apt. 944\";s:7:\"company\";N;s:4:\"city\";s:8:\"Ninatown\";s:8:\"postcode\";s:5:\"99629\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(64,'create','2019-11-26 01:08:16','64','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:3:\"Jon\";s:8:\"lastName\";s:6:\"Willms\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"6829 Adrienne Knoll Apt. 032\";s:7:\"company\";s:16:\"Ankunding-Parker\";s:4:\"city\";s:13:\"Fisherchester\";s:8:\"postcode\";s:5:\"27114\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(65,'create','2019-11-26 01:08:16','65','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:5:\"Tevin\";s:8:\"lastName\";s:8:\"Leuschke\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"9197 Irwin Lakes\";s:7:\"company\";s:12:\"Howell Group\";s:4:\"city\";s:12:\"Ritchieville\";s:8:\"postcode\";s:5:\"12565\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(66,'create','2019-11-26 01:08:16','66','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Hassie\";s:8:\"lastName\";s:5:\"Blick\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"1816 Zemlak Shoals\";s:7:\"company\";s:31:\"Christiansen, Lind and Hartmann\";s:4:\"city\";s:11:\"West Melany\";s:8:\"postcode\";s:10:\"31791-4315\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(67,'create','2019-11-26 01:08:16','67','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:4:\"Sean\";s:8:\"lastName\";s:8:\"Cummings\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"9622 Raheem Grove Apt. 500\";s:7:\"company\";N;s:4:\"city\";s:11:\"Yazminburgh\";s:8:\"postcode\";s:10:\"56865-7900\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(68,'create','2019-11-26 01:08:16','68','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:8:\"Columbus\";s:8:\"lastName\";s:8:\"Bernhard\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"24971 Vilma Place\";s:7:\"company\";s:22:\"Johns, Moen and Paucek\";s:4:\"city\";s:16:\"New Jacquesville\";s:8:\"postcode\";s:10:\"32887-9626\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(69,'create','2019-11-26 01:08:16','69','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:9:\"Georgiana\";s:8:\"lastName\";s:6:\"Gibson\";s:11:\"phoneNumber\";s:20:\"(862) 729-9969 x3777\";s:6:\"street\";s:26:\"2476 Ernser Ferry Apt. 292\";s:7:\"company\";s:34:\"Kshlerin, Considine and Swaniawski\";s:4:\"city\";s:9:\"Lake Emil\";s:8:\"postcode\";s:10:\"71273-3268\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL),
	(70,'create','2019-11-26 01:08:16','70','App\\Entity\\Addressing\\Address',1,'a:10:{s:9:\"firstName\";s:6:\"Daisha\";s:8:\"lastName\";s:6:\"Wehner\";s:11:\"phoneNumber\";s:20:\"1-416-231-0062 x9877\";s:6:\"street\";s:25:\"7952 Kayli Club Suite 558\";s:7:\"company\";N;s:4:\"city\";s:10:\"Russelport\";s:8:\"postcode\";s:5:\"18711\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}',NULL);

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
	(1,NULL,NULL,1,'order_promotion','New Year',-115,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(2,NULL,NULL,1,'order_promotion','Christmas',-1873,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(3,NULL,NULL,1,'tax','Clothing Sales Tax 7% (7%)',176,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(4,NULL,NULL,2,'order_promotion','New Year',-132,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(5,NULL,NULL,2,'order_promotion','Christmas',-2132,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(6,NULL,NULL,2,'tax','Sales Tax 20% (20%)',512,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(7,NULL,NULL,3,'order_promotion','New Year',-132,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(8,NULL,NULL,3,'order_promotion','Christmas',-2132,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(9,NULL,NULL,3,'tax','Sales Tax 20% (20%)',511,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(10,NULL,NULL,4,'order_promotion','New Year',-132,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(11,NULL,NULL,4,'order_promotion','Christmas',-2132,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(12,NULL,NULL,4,'tax','Sales Tax 20% (20%)',511,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(13,NULL,NULL,5,'order_promotion','New Year',-132,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(14,NULL,NULL,5,'order_promotion','Christmas',-2131,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(15,NULL,NULL,5,'tax','Sales Tax 20% (20%)',511,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(16,NULL,NULL,6,'order_promotion','New Year',-131,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(17,NULL,NULL,6,'order_promotion','Christmas',-2131,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(18,NULL,NULL,6,'tax','Sales Tax 20% (20%)',511,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(19,NULL,NULL,7,'order_promotion','New Year',-76,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(20,NULL,NULL,7,'order_promotion','Christmas',-1218,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(21,NULL,NULL,7,'tax','Clothing Sales Tax 7% (7%)',115,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(22,NULL,NULL,8,'order_promotion','New Year',-75,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(23,NULL,NULL,8,'order_promotion','Christmas',-1218,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(24,NULL,NULL,8,'tax','Clothing Sales Tax 7% (7%)',115,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(25,NULL,NULL,9,'order_promotion','New Year',-75,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(26,NULL,NULL,9,'order_promotion','Christmas',-1217,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(27,NULL,NULL,9,'tax','Clothing Sales Tax 7% (7%)',114,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(28,1,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(29,NULL,NULL,10,'order_promotion','New Year',-110,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(30,NULL,NULL,10,'order_promotion','Christmas',-712,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(31,NULL,NULL,10,'tax','Clothing Sales Tax 7% (7%)',67,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(32,NULL,NULL,11,'order_promotion','New Year',-110,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(33,NULL,NULL,11,'order_promotion','Christmas',-711,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(34,NULL,NULL,11,'tax','Clothing Sales Tax 7% (7%)',67,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(35,NULL,NULL,12,'order_promotion','New Year',-22,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(36,NULL,NULL,12,'order_promotion','Christmas',-140,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(37,NULL,NULL,12,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(38,NULL,NULL,13,'order_promotion','New Year',-22,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(39,NULL,NULL,13,'order_promotion','Christmas',-139,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(40,NULL,NULL,13,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(41,NULL,NULL,14,'order_promotion','New Year',-21,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(42,NULL,NULL,14,'order_promotion','Christmas',-139,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(43,NULL,NULL,14,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(44,NULL,NULL,15,'order_promotion','New Year',-21,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(45,NULL,NULL,15,'order_promotion','Christmas',-139,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(46,NULL,NULL,15,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(47,NULL,NULL,16,'order_promotion','New Year',-347,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(48,NULL,NULL,16,'order_promotion','Christmas',-2249,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(49,NULL,NULL,16,'tax','Clothing Sales Tax 7% (7%)',212,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(50,NULL,NULL,17,'order_promotion','New Year',-347,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(51,NULL,NULL,17,'order_promotion','Christmas',-2248,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(52,NULL,NULL,17,'tax','Clothing Sales Tax 7% (7%)',211,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(53,2,NULL,NULL,'shipping','UPS',751,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(54,NULL,NULL,18,'order_promotion','New Year',-101,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(55,NULL,NULL,18,'order_promotion','Christmas',-3755,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(56,NULL,NULL,18,'tax','Clothing Sales Tax 7% (7%)',354,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(57,NULL,NULL,19,'order_promotion','New Year',-101,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(58,NULL,NULL,19,'order_promotion','Christmas',-3755,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(59,NULL,NULL,19,'tax','Clothing Sales Tax 7% (7%)',353,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(60,NULL,NULL,20,'order_promotion','New Year',-24,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(61,NULL,NULL,20,'order_promotion','Christmas',-860,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(62,NULL,NULL,20,'tax','Sales Tax 20% (20%)',207,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(63,NULL,NULL,21,'order_promotion','New Year',-23,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(64,NULL,NULL,21,'order_promotion','Christmas',-860,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(65,NULL,NULL,21,'tax','Sales Tax 20% (20%)',206,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(66,NULL,NULL,22,'order_promotion','New Year',-23,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(67,NULL,NULL,22,'order_promotion','Christmas',-859,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(68,NULL,NULL,22,'tax','Sales Tax 20% (20%)',206,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(69,NULL,NULL,23,'order_promotion','New Year',-59,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(70,NULL,NULL,23,'order_promotion','Christmas',-2162,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(71,NULL,NULL,23,'tax','Sales Tax 20% (20%)',519,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(72,NULL,NULL,24,'order_promotion','New Year',-59,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(73,NULL,NULL,24,'order_promotion','Christmas',-2162,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(74,NULL,NULL,24,'tax','Sales Tax 20% (20%)',518,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(75,NULL,NULL,25,'order_promotion','New Year',-58,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(76,NULL,NULL,25,'order_promotion','Christmas',-2161,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(77,NULL,NULL,25,'tax','Sales Tax 20% (20%)',518,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(78,NULL,NULL,26,'order_promotion','New Year',-57,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(79,NULL,NULL,26,'order_promotion','Christmas',-2096,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(80,NULL,NULL,26,'tax','Clothing Sales Tax 7% (7%)',198,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(81,NULL,NULL,27,'order_promotion','New Year',-57,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(82,NULL,NULL,27,'order_promotion','Christmas',-2096,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(83,NULL,NULL,27,'tax','Clothing Sales Tax 7% (7%)',197,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(84,NULL,NULL,28,'order_promotion','New Year',-57,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(85,NULL,NULL,28,'order_promotion','Christmas',-2095,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(86,NULL,NULL,28,'tax','Clothing Sales Tax 7% (7%)',197,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(87,NULL,NULL,29,'order_promotion','New Year',-56,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(88,NULL,NULL,29,'order_promotion','Christmas',-2095,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(89,NULL,NULL,29,'tax','Clothing Sales Tax 7% (7%)',197,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(90,NULL,NULL,30,'order_promotion','New Year',-82,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(91,NULL,NULL,30,'order_promotion','Christmas',-2999,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(92,NULL,NULL,30,'tax','Clothing Sales Tax 7% (7%)',283,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(93,NULL,NULL,31,'order_promotion','New Year',-81,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(94,NULL,NULL,31,'order_promotion','Christmas',-2998,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(95,NULL,NULL,31,'tax','Clothing Sales Tax 7% (7%)',282,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(96,NULL,NULL,32,'order_promotion','New Year',-81,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(97,NULL,NULL,32,'order_promotion','Christmas',-2998,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(98,NULL,NULL,32,'tax','Clothing Sales Tax 7% (7%)',282,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(99,NULL,NULL,33,'order_promotion','New Year',-81,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(100,NULL,NULL,33,'order_promotion','Christmas',-2998,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(101,NULL,NULL,33,'tax','Clothing Sales Tax 7% (7%)',282,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(102,3,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(103,NULL,NULL,34,'order_promotion','New Year',-190,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(104,NULL,NULL,34,'order_promotion','Christmas',-3791,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(105,NULL,NULL,34,'tax','Clothing Sales Tax 7% (7%)',357,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(106,NULL,NULL,35,'order_promotion','New Year',-190,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(107,NULL,NULL,35,'order_promotion','Christmas',-3791,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(108,NULL,NULL,35,'tax','Clothing Sales Tax 7% (7%)',357,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(109,NULL,NULL,36,'order_promotion','New Year',-53,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(110,NULL,NULL,36,'order_promotion','Christmas',-1045,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(111,NULL,NULL,36,'tax','Clothing Sales Tax 7% (7%)',99,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(112,NULL,NULL,37,'order_promotion','New Year',-53,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(113,NULL,NULL,37,'order_promotion','Christmas',-1045,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(114,NULL,NULL,37,'tax','Clothing Sales Tax 7% (7%)',99,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(115,NULL,NULL,38,'order_promotion','New Year',-52,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(116,NULL,NULL,38,'order_promotion','Christmas',-1045,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(117,NULL,NULL,38,'tax','Clothing Sales Tax 7% (7%)',98,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(118,NULL,NULL,39,'order_promotion','New Year',-52,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(119,NULL,NULL,39,'order_promotion','Christmas',-1045,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(120,NULL,NULL,39,'tax','Clothing Sales Tax 7% (7%)',98,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(121,NULL,NULL,40,'order_promotion','New Year',-52,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(122,NULL,NULL,40,'order_promotion','Christmas',-1045,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(123,NULL,NULL,40,'tax','Clothing Sales Tax 7% (7%)',98,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(124,NULL,NULL,41,'order_promotion','New Year',-179,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(125,NULL,NULL,41,'order_promotion','Christmas',-3573,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(126,NULL,NULL,41,'tax','Clothing Sales Tax 7% (7%)',337,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(127,NULL,NULL,42,'order_promotion','New Year',-179,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(128,NULL,NULL,42,'order_promotion','Christmas',-3573,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(129,NULL,NULL,42,'tax','Clothing Sales Tax 7% (7%)',336,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(130,4,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(131,NULL,NULL,43,'order_promotion','New Year',-36,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(132,NULL,NULL,43,'order_promotion','Christmas',-1424,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(133,NULL,NULL,43,'tax','Clothing Sales Tax 7% (7%)',134,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(134,NULL,NULL,44,'order_promotion','New Year',-36,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(135,NULL,NULL,44,'order_promotion','Christmas',-1423,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(136,NULL,NULL,44,'tax','Clothing Sales Tax 7% (7%)',134,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(137,NULL,NULL,45,'order_promotion','New Year',-103,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(138,NULL,NULL,45,'order_promotion','Christmas',-3966,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(139,NULL,NULL,45,'tax','Clothing Sales Tax 7% (7%)',374,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(140,NULL,NULL,46,'order_promotion','New Year',-102,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(141,NULL,NULL,46,'order_promotion','Christmas',-3966,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(142,NULL,NULL,46,'tax','Clothing Sales Tax 7% (7%)',373,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(143,NULL,NULL,47,'order_promotion','New Year',-102,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(144,NULL,NULL,47,'order_promotion','Christmas',-3966,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(145,NULL,NULL,47,'tax','Clothing Sales Tax 7% (7%)',373,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(146,NULL,NULL,48,'order_promotion','New Year',-102,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(147,NULL,NULL,48,'order_promotion','Christmas',-3965,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(148,NULL,NULL,48,'tax','Clothing Sales Tax 7% (7%)',373,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(149,NULL,NULL,49,'order_promotion','New Year',-81,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(150,NULL,NULL,49,'order_promotion','Christmas',-3123,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(151,NULL,NULL,49,'tax','Clothing Sales Tax 7% (7%)',294,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(152,NULL,NULL,50,'order_promotion','New Year',-81,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(153,NULL,NULL,50,'order_promotion','Christmas',-3123,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(154,NULL,NULL,50,'tax','Clothing Sales Tax 7% (7%)',294,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(155,NULL,NULL,51,'order_promotion','New Year',-80,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(156,NULL,NULL,51,'order_promotion','Christmas',-3123,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(157,NULL,NULL,51,'tax','Clothing Sales Tax 7% (7%)',294,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(158,NULL,NULL,52,'order_promotion','New Year',-80,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(159,NULL,NULL,52,'order_promotion','Christmas',-3122,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(160,NULL,NULL,52,'tax','Clothing Sales Tax 7% (7%)',294,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(161,NULL,NULL,53,'order_promotion','New Year',-24,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(162,NULL,NULL,53,'order_promotion','Christmas',-932,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(163,NULL,NULL,53,'tax','Clothing Sales Tax 7% (7%)',88,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(164,NULL,NULL,54,'order_promotion','New Year',-24,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(165,NULL,NULL,54,'order_promotion','Christmas',-932,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(166,NULL,NULL,54,'tax','Clothing Sales Tax 7% (7%)',88,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(167,NULL,NULL,55,'order_promotion','New Year',-24,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(168,NULL,NULL,55,'order_promotion','Christmas',-932,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(169,NULL,NULL,55,'tax','Clothing Sales Tax 7% (7%)',88,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(170,NULL,NULL,56,'order_promotion','New Year',-24,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(171,NULL,NULL,56,'order_promotion','Christmas',-931,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(172,NULL,NULL,56,'tax','Clothing Sales Tax 7% (7%)',87,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(173,NULL,NULL,57,'order_promotion','New Year',-24,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(174,NULL,NULL,57,'order_promotion','Christmas',-931,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(175,NULL,NULL,57,'tax','Clothing Sales Tax 7% (7%)',87,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(176,NULL,NULL,58,'order_promotion','New Year',-39,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(177,NULL,NULL,58,'order_promotion','Christmas',-1488,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(178,NULL,NULL,58,'tax','Clothing Sales Tax 7% (7%)',140,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(179,NULL,NULL,59,'order_promotion','New Year',-38,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(180,NULL,NULL,59,'order_promotion','Christmas',-1487,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(181,NULL,NULL,59,'tax','Clothing Sales Tax 7% (7%)',140,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(182,5,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(183,NULL,NULL,60,'order_promotion','New Year',-200,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(184,NULL,NULL,60,'order_promotion','Christmas',-788,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(185,NULL,NULL,60,'tax','Sales Tax 20% (20%)',189,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(186,NULL,NULL,61,'order_promotion','New Year',-200,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(187,NULL,NULL,61,'order_promotion','Christmas',-787,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(188,NULL,NULL,61,'tax','Sales Tax 20% (20%)',189,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(189,NULL,NULL,62,'order_promotion','New Year',-200,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(190,NULL,NULL,62,'order_promotion','Christmas',-787,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(191,NULL,NULL,62,'tax','Sales Tax 20% (20%)',189,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(192,NULL,NULL,63,'order_promotion','New Year',-200,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(193,NULL,NULL,63,'order_promotion','Christmas',-787,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(194,NULL,NULL,63,'tax','Sales Tax 20% (20%)',189,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(195,NULL,NULL,64,'order_promotion','New Year',-200,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(196,NULL,NULL,64,'order_promotion','Christmas',-787,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(197,NULL,NULL,64,'tax','Sales Tax 20% (20%)',188,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(198,6,NULL,NULL,'shipping','UPS',751,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(199,NULL,NULL,65,'order_promotion','New Year',-85,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(200,NULL,NULL,65,'order_promotion','Christmas',-687,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(201,NULL,NULL,65,'tax','Clothing Sales Tax 7% (7%)',65,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(202,NULL,NULL,66,'order_promotion','New Year',-84,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(203,NULL,NULL,66,'order_promotion','Christmas',-687,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(204,NULL,NULL,66,'tax','Clothing Sales Tax 7% (7%)',64,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(205,NULL,NULL,67,'order_promotion','New Year',-18,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(206,NULL,NULL,67,'order_promotion','Christmas',-141,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(207,NULL,NULL,67,'tax','Clothing Sales Tax 7% (7%)',14,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(208,NULL,NULL,68,'order_promotion','New Year',-17,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(209,NULL,NULL,68,'order_promotion','Christmas',-141,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(210,NULL,NULL,68,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(211,NULL,NULL,69,'order_promotion','New Year',-17,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(212,NULL,NULL,69,'order_promotion','Christmas',-141,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(213,NULL,NULL,69,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(214,NULL,NULL,70,'order_promotion','New Year',-17,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(215,NULL,NULL,70,'order_promotion','Christmas',-141,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(216,NULL,NULL,70,'tax','Clothing Sales Tax 7% (7%)',13,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(217,NULL,NULL,71,'order_promotion','New Year',-257,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(218,NULL,NULL,71,'order_promotion','Christmas',-2081,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(219,NULL,NULL,71,'tax','Sales Tax 20% (20%)',499,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(220,NULL,NULL,72,'order_promotion','New Year',-256,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(221,NULL,NULL,72,'order_promotion','Christmas',-2080,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(222,NULL,NULL,72,'tax','Sales Tax 20% (20%)',499,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(223,NULL,NULL,73,'order_promotion','New Year',-249,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(224,NULL,NULL,73,'order_promotion','Christmas',-2017,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(225,NULL,NULL,73,'tax','Clothing Sales Tax 7% (7%)',190,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(226,7,NULL,NULL,'shipping','UPS',751,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(227,NULL,NULL,74,'order_promotion','New Year',-500,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(228,NULL,NULL,74,'tax','Clothing Sales Tax 7% (7%)',609,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(229,NULL,NULL,75,'order_promotion','New Year',-500,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(230,NULL,NULL,75,'tax','Clothing Sales Tax 7% (7%)',608,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(231,8,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(232,NULL,NULL,76,'order_promotion','New Year',-171,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(233,NULL,NULL,76,'order_promotion','Christmas',-1526,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(234,NULL,NULL,76,'tax','Sales Tax 20% (20%)',366,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(235,NULL,NULL,77,'order_promotion','New Year',-171,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(236,NULL,NULL,77,'order_promotion','Christmas',-1526,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(237,NULL,NULL,77,'tax','Sales Tax 20% (20%)',366,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(238,NULL,NULL,78,'order_promotion','New Year',-171,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(239,NULL,NULL,78,'order_promotion','Christmas',-1525,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(240,NULL,NULL,78,'tax','Sales Tax 20% (20%)',366,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(241,NULL,NULL,79,'order_promotion','New Year',-170,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(242,NULL,NULL,79,'order_promotion','Christmas',-1525,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(243,NULL,NULL,79,'tax','Sales Tax 20% (20%)',366,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(244,NULL,NULL,80,'order_promotion','New Year',-170,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(245,NULL,NULL,80,'order_promotion','Christmas',-1525,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(246,NULL,NULL,80,'tax','Sales Tax 20% (20%)',365,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(247,NULL,NULL,81,'order_promotion','New Year',-49,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(248,NULL,NULL,81,'order_promotion','Christmas',-438,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(249,NULL,NULL,81,'tax','Clothing Sales Tax 7% (7%)',42,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(250,NULL,NULL,82,'order_promotion','New Year',-49,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(251,NULL,NULL,82,'order_promotion','Christmas',-437,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(252,NULL,NULL,82,'tax','Clothing Sales Tax 7% (7%)',41,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(253,NULL,NULL,83,'order_promotion','New Year',-49,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(254,NULL,NULL,83,'order_promotion','Christmas',-437,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(255,NULL,NULL,83,'tax','Clothing Sales Tax 7% (7%)',41,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(256,9,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(257,NULL,NULL,84,'order_promotion','New Year',-81,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(258,NULL,NULL,84,'order_promotion','Christmas',-1471,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(259,NULL,NULL,84,'tax','Clothing Sales Tax 7% (7%)',139,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(260,NULL,NULL,85,'order_promotion','New Year',-80,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(261,NULL,NULL,85,'order_promotion','Christmas',-1470,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(262,NULL,NULL,85,'tax','Clothing Sales Tax 7% (7%)',138,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(263,NULL,NULL,86,'order_promotion','New Year',-80,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(264,NULL,NULL,86,'order_promotion','Christmas',-1470,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(265,NULL,NULL,86,'tax','Clothing Sales Tax 7% (7%)',138,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(266,NULL,NULL,87,'order_promotion','New Year',-180,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(267,NULL,NULL,87,'order_promotion','Christmas',-3295,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(268,NULL,NULL,87,'tax','Clothing Sales Tax 7% (7%)',311,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(269,NULL,NULL,88,'order_promotion','New Year',-180,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(270,NULL,NULL,88,'order_promotion','Christmas',-3295,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(271,NULL,NULL,88,'tax','Clothing Sales Tax 7% (7%)',310,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(272,NULL,NULL,89,'order_promotion','New Year',-180,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(273,NULL,NULL,89,'order_promotion','Christmas',-3295,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(274,NULL,NULL,89,'tax','Clothing Sales Tax 7% (7%)',310,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(275,NULL,NULL,90,'order_promotion','New Year',-65,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(276,NULL,NULL,90,'order_promotion','Christmas',-1179,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(277,NULL,NULL,90,'tax','Clothing Sales Tax 7% (7%)',111,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(278,NULL,NULL,91,'order_promotion','New Year',-64,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(279,NULL,NULL,91,'order_promotion','Christmas',-1179,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(280,NULL,NULL,91,'tax','Clothing Sales Tax 7% (7%)',111,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(281,NULL,NULL,92,'order_promotion','New Year',-45,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(282,NULL,NULL,92,'order_promotion','Christmas',-828,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(283,NULL,NULL,92,'tax','Clothing Sales Tax 7% (7%)',78,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(284,NULL,NULL,93,'order_promotion','New Year',-45,0,0,'new_year','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(285,NULL,NULL,93,'order_promotion','Christmas',-828,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(286,NULL,NULL,93,'tax','Clothing Sales Tax 7% (7%)',78,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(287,10,NULL,NULL,'shipping','UPS',751,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(288,NULL,NULL,94,'order_promotion','Christmas',-2893,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(289,NULL,NULL,94,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(290,NULL,NULL,95,'order_promotion','Christmas',-2893,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(291,NULL,NULL,95,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(292,NULL,NULL,96,'order_promotion','Christmas',-2893,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(293,NULL,NULL,96,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(294,NULL,NULL,97,'order_promotion','Christmas',-2892,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(295,NULL,NULL,97,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(296,NULL,NULL,98,'order_promotion','Christmas',-2892,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(297,NULL,NULL,98,'tax','Sales Tax 20% (20%)',693,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(298,NULL,NULL,99,'order_promotion','Christmas',-4018,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(299,NULL,NULL,99,'tax','Clothing Sales Tax 7% (7%)',379,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(300,NULL,NULL,100,'order_promotion','Christmas',-4017,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(301,NULL,NULL,100,'tax','Clothing Sales Tax 7% (7%)',378,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(302,NULL,NULL,101,'order_promotion','Christmas',-4017,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(303,NULL,NULL,101,'tax','Clothing Sales Tax 7% (7%)',378,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(304,NULL,NULL,102,'order_promotion','Christmas',-4017,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(305,NULL,NULL,102,'tax','Clothing Sales Tax 7% (7%)',378,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(306,NULL,NULL,103,'order_promotion','Christmas',-1990,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(307,NULL,NULL,103,'tax','Clothing Sales Tax 7% (7%)',188,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(308,NULL,NULL,104,'order_promotion','Christmas',-1990,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(309,NULL,NULL,104,'tax','Clothing Sales Tax 7% (7%)',188,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(310,NULL,NULL,105,'order_promotion','Christmas',-1990,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(311,NULL,NULL,105,'tax','Clothing Sales Tax 7% (7%)',187,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(312,NULL,NULL,106,'order_promotion','Christmas',-1990,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(313,NULL,NULL,106,'tax','Clothing Sales Tax 7% (7%)',187,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(314,NULL,NULL,107,'order_promotion','Christmas',-1989,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(315,NULL,NULL,107,'tax','Clothing Sales Tax 7% (7%)',187,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(316,NULL,NULL,108,'order_promotion','Christmas',-2119,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(317,NULL,NULL,108,'tax','Clothing Sales Tax 7% (7%)',200,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(318,NULL,NULL,109,'order_promotion','Christmas',-2119,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(319,NULL,NULL,109,'tax','Clothing Sales Tax 7% (7%)',200,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(320,NULL,NULL,110,'order_promotion','Christmas',-2119,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(321,NULL,NULL,110,'tax','Clothing Sales Tax 7% (7%)',199,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(322,NULL,NULL,111,'order_promotion','Christmas',-2119,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(323,NULL,NULL,111,'tax','Clothing Sales Tax 7% (7%)',199,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(324,NULL,NULL,112,'order_promotion','Christmas',-2118,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(325,NULL,NULL,112,'tax','Clothing Sales Tax 7% (7%)',199,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(326,11,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(327,NULL,NULL,113,'order_promotion','Christmas',-1206,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(328,NULL,NULL,113,'tax','Clothing Sales Tax 7% (7%)',114,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(329,NULL,NULL,114,'order_promotion','Christmas',-1205,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(330,NULL,NULL,114,'tax','Clothing Sales Tax 7% (7%)',113,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(331,NULL,NULL,115,'order_promotion','Christmas',-1205,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(332,NULL,NULL,115,'tax','Clothing Sales Tax 7% (7%)',113,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(333,NULL,NULL,116,'order_promotion','Christmas',-3744,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(334,NULL,NULL,116,'tax','Clothing Sales Tax 7% (7%)',353,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(335,NULL,NULL,117,'order_promotion','Christmas',-3743,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(336,NULL,NULL,117,'tax','Clothing Sales Tax 7% (7%)',352,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(337,NULL,NULL,118,'order_promotion','Christmas',-3743,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(338,NULL,NULL,118,'tax','Clothing Sales Tax 7% (7%)',352,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(339,12,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(340,NULL,NULL,119,'order_promotion','Christmas',-2650,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(341,NULL,NULL,119,'tax','Clothing Sales Tax 7% (7%)',250,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(342,NULL,NULL,120,'order_promotion','Christmas',-2649,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(343,NULL,NULL,120,'tax','Clothing Sales Tax 7% (7%)',249,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(344,NULL,NULL,121,'order_promotion','Christmas',-739,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(345,NULL,NULL,121,'tax','Clothing Sales Tax 7% (7%)',70,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(346,13,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(347,NULL,NULL,122,'order_promotion','Christmas',-321,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(348,NULL,NULL,122,'tax','Clothing Sales Tax 7% (7%)',31,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(349,NULL,NULL,123,'order_promotion','Christmas',-320,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(350,NULL,NULL,123,'tax','Clothing Sales Tax 7% (7%)',30,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(351,NULL,NULL,124,'order_promotion','Christmas',-320,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(352,NULL,NULL,124,'tax','Clothing Sales Tax 7% (7%)',30,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(353,NULL,NULL,125,'order_promotion','Christmas',-320,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(354,NULL,NULL,125,'tax','Clothing Sales Tax 7% (7%)',30,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(355,NULL,NULL,126,'order_promotion','Christmas',-4008,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(356,NULL,NULL,126,'tax','Clothing Sales Tax 7% (7%)',377,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(357,14,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(358,NULL,NULL,127,'order_promotion','Christmas',-870,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(359,NULL,NULL,127,'tax','Sales Tax 20% (20%)',209,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(360,NULL,NULL,128,'order_promotion','Christmas',-869,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(361,NULL,NULL,128,'tax','Sales Tax 20% (20%)',209,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(362,NULL,NULL,129,'order_promotion','Christmas',-869,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(363,NULL,NULL,129,'tax','Sales Tax 20% (20%)',208,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(364,NULL,NULL,130,'order_promotion','Christmas',-869,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(365,NULL,NULL,130,'tax','Sales Tax 20% (20%)',208,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(366,NULL,NULL,131,'order_promotion','Christmas',-2893,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(367,NULL,NULL,131,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(368,NULL,NULL,132,'order_promotion','Christmas',-2893,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(369,NULL,NULL,132,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(370,NULL,NULL,133,'order_promotion','Christmas',-2892,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(371,NULL,NULL,133,'tax','Sales Tax 20% (20%)',694,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(372,NULL,NULL,134,'order_promotion','Christmas',-2892,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(373,NULL,NULL,134,'tax','Sales Tax 20% (20%)',693,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(374,15,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(375,NULL,NULL,135,'tax','Clothing Sales Tax 7% (7%)',24,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(376,16,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(377,NULL,NULL,136,'order_promotion','Christmas',-976,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(378,NULL,NULL,136,'tax','Clothing Sales Tax 7% (7%)',92,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(379,NULL,NULL,137,'order_promotion','Christmas',-976,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(380,NULL,NULL,137,'tax','Clothing Sales Tax 7% (7%)',92,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(381,NULL,NULL,138,'order_promotion','Christmas',-976,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(382,NULL,NULL,138,'tax','Clothing Sales Tax 7% (7%)',92,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(383,NULL,NULL,139,'order_promotion','Christmas',-975,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(384,NULL,NULL,139,'tax','Clothing Sales Tax 7% (7%)',91,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(385,NULL,NULL,140,'order_promotion','Christmas',-4000,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(386,NULL,NULL,140,'tax','Clothing Sales Tax 7% (7%)',377,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(387,NULL,NULL,141,'order_promotion','Christmas',-1067,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(388,NULL,NULL,141,'tax','Clothing Sales Tax 7% (7%)',101,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(389,NULL,NULL,142,'order_promotion','Christmas',-1066,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(390,NULL,NULL,142,'tax','Clothing Sales Tax 7% (7%)',100,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(391,17,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(392,NULL,NULL,143,'order_promotion','Christmas',-2240,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(393,NULL,NULL,143,'tax','Clothing Sales Tax 7% (7%)',211,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(394,NULL,NULL,144,'order_promotion','Christmas',-2240,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(395,NULL,NULL,144,'tax','Clothing Sales Tax 7% (7%)',211,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(396,NULL,NULL,145,'order_promotion','Christmas',-2240,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(397,NULL,NULL,145,'tax','Clothing Sales Tax 7% (7%)',211,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(398,NULL,NULL,146,'order_promotion','Christmas',-2240,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(399,NULL,NULL,146,'tax','Clothing Sales Tax 7% (7%)',211,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(400,NULL,NULL,147,'order_promotion','Christmas',-2239,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(401,NULL,NULL,147,'tax','Clothing Sales Tax 7% (7%)',210,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(402,NULL,NULL,148,'order_promotion','Christmas',-3401,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(403,NULL,NULL,148,'tax','Clothing Sales Tax 7% (7%)',320,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(404,NULL,NULL,149,'order_promotion','Christmas',-3401,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(405,NULL,NULL,149,'tax','Clothing Sales Tax 7% (7%)',320,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(406,NULL,NULL,150,'order_promotion','Christmas',-3400,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(407,NULL,NULL,150,'tax','Clothing Sales Tax 7% (7%)',320,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(408,18,NULL,NULL,'shipping','FedEx',317,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(409,NULL,NULL,151,'order_promotion','Christmas',-3870,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(410,NULL,NULL,151,'tax','Clothing Sales Tax 7% (7%)',365,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(411,NULL,NULL,152,'order_promotion','Christmas',-3870,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(412,NULL,NULL,152,'tax','Clothing Sales Tax 7% (7%)',365,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(413,NULL,NULL,153,'order_promotion','Christmas',-3870,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(414,NULL,NULL,153,'tax','Clothing Sales Tax 7% (7%)',364,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(415,NULL,NULL,154,'order_promotion','Christmas',-3870,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(416,NULL,NULL,154,'tax','Clothing Sales Tax 7% (7%)',364,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(417,NULL,NULL,155,'order_promotion','Christmas',-3870,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(418,NULL,NULL,155,'tax','Clothing Sales Tax 7% (7%)',364,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(419,NULL,NULL,156,'order_promotion','Christmas',-976,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(420,NULL,NULL,156,'tax','Clothing Sales Tax 7% (7%)',92,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(421,NULL,NULL,157,'order_promotion','Christmas',-976,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(422,NULL,NULL,157,'tax','Clothing Sales Tax 7% (7%)',92,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(423,19,NULL,NULL,'shipping','UPS',751,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(424,NULL,NULL,158,'order_promotion','Christmas',-1457,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(425,NULL,NULL,158,'tax','Clothing Sales Tax 7% (7%)',138,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(426,NULL,NULL,159,'order_promotion','Christmas',-1457,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(427,NULL,NULL,159,'tax','Clothing Sales Tax 7% (7%)',137,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(428,NULL,NULL,160,'order_promotion','Christmas',-1457,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(429,NULL,NULL,160,'tax','Clothing Sales Tax 7% (7%)',137,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(430,NULL,NULL,161,'order_promotion','Christmas',-1456,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(431,NULL,NULL,161,'tax','Clothing Sales Tax 7% (7%)',137,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(432,NULL,NULL,162,'order_promotion','Christmas',-3796,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(433,NULL,NULL,162,'tax','Clothing Sales Tax 7% (7%)',358,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(434,NULL,NULL,163,'order_promotion','Christmas',-3796,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(435,NULL,NULL,163,'tax','Clothing Sales Tax 7% (7%)',357,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(436,NULL,NULL,164,'order_promotion','Christmas',-3369,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(437,NULL,NULL,164,'tax','Clothing Sales Tax 7% (7%)',317,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(438,NULL,NULL,165,'order_promotion','Christmas',-4008,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(439,NULL,NULL,165,'tax','Clothing Sales Tax 7% (7%)',378,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(440,NULL,NULL,166,'order_promotion','Christmas',-4008,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(441,NULL,NULL,166,'tax','Clothing Sales Tax 7% (7%)',377,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(442,NULL,NULL,167,'order_promotion','Christmas',-4008,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(443,NULL,NULL,167,'tax','Clothing Sales Tax 7% (7%)',377,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(444,NULL,NULL,168,'order_promotion','Christmas',-4008,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(445,NULL,NULL,168,'tax','Clothing Sales Tax 7% (7%)',377,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(446,NULL,NULL,169,'order_promotion','Christmas',-4007,0,0,'christmas','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(447,NULL,NULL,169,'tax','Clothing Sales Tax 7% (7%)',377,1,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(448,20,NULL,NULL,'shipping','DHL Express',767,0,0,NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15');

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
	(1,1,2,'SampleToken',NULL,NULL);

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
	(1,'demo_client','a:0:{}','secret_demo_client','a:1:{i:0;s:8:\"password\";}');

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
	(1,'sylius','sylius',1,'l0wr6u2qr280cgkwcg8os0wwckk8kco','$argon2i$v=19$m=65536,t=4,p=1$dnVURWh3RVhkeE9tNmROSg$KLCJr381I7bF+6wNdD0Of/Z6kCyjPGvGXsJ15lUiNcs',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";}','sylius@example.com','sylius@example.com','2019-11-26 01:08:14','2019-11-26 01:08:14','John','Doe','en_US','argon2i'),
	(2,'api','api',1,'2skhbx8sa92cwos0go88g4sss04844o','$argon2i$v=19$m=65536,t=4,p=1$TkFUNWFIRFJCanRFcmRSNw$4+YqCws6+97eBYfYlnHIpIwHGLvhYdTJtGl8b8YZJN4',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:2:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";i:1;s:15:\"ROLE_API_ACCESS\";}','api@example.com','api@example.com','2019-11-26 01:08:14','2019-11-26 01:08:14','Luke','Brushwood','en_US','argon2i'),
	(3,'benborla@icloud.com','benborla@icloud.com',1,'g64bf2ojow84scksggk8o8k4wsk4osg','$argon2i$v=19$m=65536,t=4,p=1$S0NicXNBOS9YVm1ZQm1nUQ$LFs97S2aAh7DRoi+6dsJ8830Hojfrm06xtPSEnESWGA','2019-11-26 01:20:29',NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";}','benborla@icloud.com','benborla@icloud.com','2019-11-26 01:08:23','2019-11-26 01:20:29',NULL,NULL,'en_US','argon2i');

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
	(1,1,1,1,'FASHION_WEB','Zeta Meds','#000000',NULL,1,'localhost','2019-11-26 01:08:10','2019-11-26 01:12:30','benborla/zetameds-theme','order_items_based',NULL,0,0,1,1);

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
	(1,1,843,NULL,'FASHION_WEB'),
	(2,2,644,NULL,'FASHION_WEB'),
	(3,3,815,NULL,'FASHION_WEB'),
	(4,4,3765,NULL,'FASHION_WEB'),
	(5,5,676,NULL,'FASHION_WEB'),
	(6,6,4694,NULL,'FASHION_WEB'),
	(7,7,111,NULL,'FASHION_WEB'),
	(8,8,5463,NULL,'FASHION_WEB'),
	(9,9,8969,NULL,'FASHION_WEB'),
	(10,10,8805,NULL,'FASHION_WEB'),
	(11,11,3045,NULL,'FASHION_WEB'),
	(12,12,8217,NULL,'FASHION_WEB'),
	(13,13,7226,NULL,'FASHION_WEB'),
	(14,14,9775,NULL,'FASHION_WEB'),
	(15,15,9259,NULL,'FASHION_WEB'),
	(16,16,5831,NULL,'FASHION_WEB'),
	(17,17,2940,NULL,'FASHION_WEB'),
	(18,18,5168,NULL,'FASHION_WEB'),
	(19,19,7394,NULL,'FASHION_WEB'),
	(20,20,2601,NULL,'FASHION_WEB'),
	(21,21,2803,NULL,'FASHION_WEB'),
	(22,22,2124,NULL,'FASHION_WEB'),
	(23,23,4853,NULL,'FASHION_WEB'),
	(24,24,7790,NULL,'FASHION_WEB'),
	(25,25,8043,NULL,'FASHION_WEB'),
	(26,26,2940,NULL,'FASHION_WEB'),
	(27,27,5592,NULL,'FASHION_WEB'),
	(28,28,8418,NULL,'FASHION_WEB'),
	(29,29,361,NULL,'FASHION_WEB'),
	(30,30,1846,NULL,'FASHION_WEB'),
	(31,31,3891,NULL,'FASHION_WEB'),
	(32,32,7055,NULL,'FASHION_WEB'),
	(33,33,2120,NULL,'FASHION_WEB'),
	(34,34,5331,NULL,'FASHION_WEB'),
	(35,35,8337,NULL,'FASHION_WEB'),
	(36,36,1633,NULL,'FASHION_WEB'),
	(37,37,7295,NULL,'FASHION_WEB'),
	(38,38,7891,NULL,'FASHION_WEB'),
	(39,39,5011,NULL,'FASHION_WEB'),
	(40,40,3553,NULL,'FASHION_WEB'),
	(41,41,8294,NULL,'FASHION_WEB'),
	(42,42,8433,NULL,'FASHION_WEB'),
	(43,43,7336,NULL,'FASHION_WEB'),
	(44,44,301,NULL,'FASHION_WEB'),
	(45,45,4361,NULL,'FASHION_WEB'),
	(46,46,8720,NULL,'FASHION_WEB'),
	(47,47,3256,NULL,'FASHION_WEB'),
	(48,48,6462,NULL,'FASHION_WEB'),
	(49,49,3446,NULL,'FASHION_WEB'),
	(50,50,9436,NULL,'FASHION_WEB'),
	(51,51,509,NULL,'FASHION_WEB'),
	(52,52,9377,NULL,'FASHION_WEB'),
	(53,53,9791,NULL,'FASHION_WEB'),
	(54,54,5841,NULL,'FASHION_WEB'),
	(55,55,4084,NULL,'FASHION_WEB'),
	(56,56,2524,NULL,'FASHION_WEB'),
	(57,57,5456,NULL,'FASHION_WEB'),
	(58,58,2065,NULL,'FASHION_WEB'),
	(59,59,443,NULL,'FASHION_WEB'),
	(60,60,258,NULL,'FASHION_WEB'),
	(61,61,6167,NULL,'FASHION_WEB'),
	(62,62,9367,NULL,'FASHION_WEB'),
	(63,63,781,NULL,'FASHION_WEB'),
	(64,64,2912,NULL,'FASHION_WEB'),
	(65,65,8201,NULL,'FASHION_WEB'),
	(66,66,131,NULL,'FASHION_WEB'),
	(67,67,4928,NULL,'FASHION_WEB'),
	(68,68,1226,NULL,'FASHION_WEB'),
	(69,69,2990,NULL,'FASHION_WEB'),
	(70,70,5806,NULL,'FASHION_WEB'),
	(71,71,8198,NULL,'FASHION_WEB'),
	(72,72,9310,NULL,'FASHION_WEB'),
	(73,73,381,NULL,'FASHION_WEB'),
	(74,74,7697,NULL,'FASHION_WEB'),
	(75,75,2477,NULL,'FASHION_WEB'),
	(76,76,295,NULL,'FASHION_WEB'),
	(77,77,9605,NULL,'FASHION_WEB'),
	(78,78,4088,NULL,'FASHION_WEB'),
	(79,79,2296,NULL,'FASHION_WEB'),
	(80,80,5023,NULL,'FASHION_WEB'),
	(81,81,8772,NULL,'FASHION_WEB'),
	(82,82,8894,NULL,'FASHION_WEB'),
	(83,83,1132,NULL,'FASHION_WEB'),
	(84,84,4684,NULL,'FASHION_WEB'),
	(85,85,6250,NULL,'FASHION_WEB'),
	(86,86,1789,NULL,'FASHION_WEB'),
	(87,87,2151,NULL,'FASHION_WEB'),
	(88,88,7174,NULL,'FASHION_WEB'),
	(89,89,6186,NULL,'FASHION_WEB'),
	(90,90,2998,NULL,'FASHION_WEB'),
	(91,91,4679,NULL,'FASHION_WEB'),
	(92,92,1116,NULL,'FASHION_WEB'),
	(93,93,9439,NULL,'FASHION_WEB'),
	(94,94,3911,NULL,'FASHION_WEB'),
	(95,95,1803,NULL,'FASHION_WEB'),
	(96,96,9756,NULL,'FASHION_WEB'),
	(97,97,6200,NULL,'FASHION_WEB'),
	(98,98,9798,NULL,'FASHION_WEB'),
	(99,99,5919,NULL,'FASHION_WEB'),
	(100,100,1761,NULL,'FASHION_WEB'),
	(101,101,9145,NULL,'FASHION_WEB'),
	(102,102,985,NULL,'FASHION_WEB'),
	(103,103,4156,NULL,'FASHION_WEB'),
	(104,104,3508,NULL,'FASHION_WEB'),
	(105,105,5716,NULL,'FASHION_WEB'),
	(106,106,5503,NULL,'FASHION_WEB'),
	(107,107,2472,NULL,'FASHION_WEB'),
	(108,108,3927,NULL,'FASHION_WEB'),
	(109,109,9132,NULL,'FASHION_WEB'),
	(110,110,3666,NULL,'FASHION_WEB'),
	(111,111,431,NULL,'FASHION_WEB'),
	(112,112,3025,NULL,'FASHION_WEB'),
	(113,113,5830,NULL,'FASHION_WEB'),
	(114,114,9176,NULL,'FASHION_WEB'),
	(115,115,7989,NULL,'FASHION_WEB'),
	(116,116,2380,NULL,'FASHION_WEB'),
	(117,117,789,NULL,'FASHION_WEB'),
	(118,118,7974,NULL,'FASHION_WEB'),
	(119,119,9130,NULL,'FASHION_WEB');

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
	(1,2,NULL,'shop@example.com','shop@example.com','John','Doe','1966-03-01 11:54:55','u','2019-11-26 01:08:10','2019-11-26 01:08:10','1-328-867-9630',0),
	(2,1,NULL,'arne44@gmail.com','arne44@gmail.com','Adam','Larkin','2007-11-15 20:09:14','u','2019-11-26 01:08:10','2019-11-26 01:08:10','+14483344280',0),
	(3,2,NULL,'javon.nolan@yahoo.com','javon.nolan@yahoo.com','Rahsaan','Simonis','1990-09-28 23:02:25','u','2019-11-26 01:08:10','2019-11-26 01:08:11','716.817.2662',0),
	(4,1,NULL,'frami.howell@gmail.com','frami.howell@gmail.com','Hans','Kertzmann','1927-11-22 04:21:50','u','2019-11-26 01:08:11','2019-11-26 01:08:11','1-629-497-8307 x327',0),
	(5,1,NULL,'alanis.pacocha@armstrong.com','alanis.pacocha@armstrong.com','Jon','Okuneva','1990-07-29 07:48:07','u','2019-11-26 01:08:11','2019-11-26 01:08:11','+14866245437',0),
	(6,2,NULL,'jovanny.roob@hotmail.com','jovanny.roob@hotmail.com','Lenore','Effertz','1920-12-11 18:10:10','u','2019-11-26 01:08:11','2019-11-26 01:08:11','(845) 320-2433 x44084',0),
	(7,1,NULL,'russel.alayna@gmail.com','russel.alayna@gmail.com','Delta','Gutmann','1923-03-26 23:42:32','u','2019-11-26 01:08:11','2019-11-26 01:08:11','953-403-0087',0),
	(8,2,NULL,'lee.bernier@bartell.biz','lee.bernier@bartell.biz','Linnie','Kris','1945-11-29 11:41:04','u','2019-11-26 01:08:11','2019-11-26 01:08:11','(997) 707-7890 x8742',0),
	(9,1,NULL,'raphaelle.steuber@yahoo.com','raphaelle.steuber@yahoo.com','Sheridan','Bogan','1982-01-07 06:31:39','u','2019-11-26 01:08:11','2019-11-26 01:08:12','584.658.3142 x66548',0),
	(10,2,NULL,'stokes.dante@yahoo.com','stokes.dante@yahoo.com','Kelly','Emmerich','1981-03-18 18:15:10','u','2019-11-26 01:08:12','2019-11-26 01:08:12','324.691.9886 x478',0),
	(11,2,NULL,'zhirthe@gibson.com','zhirthe@gibson.com','Eula','Hahn','1989-04-09 01:30:07','u','2019-11-26 01:08:12','2019-11-26 01:08:12','(241) 396-9832 x2790',0),
	(12,2,NULL,'senger.francisca@block.com','senger.francisca@block.com','Sydni','Mante','1988-04-24 13:14:36','u','2019-11-26 01:08:12','2019-11-26 01:08:12','+1-460-336-1820',0),
	(13,1,NULL,'flemke@pfeffer.org','flemke@pfeffer.org','Lempi','Renner','1947-07-25 07:30:17','u','2019-11-26 01:08:12','2019-11-26 01:08:12','(432) 997-5985 x26945',0),
	(14,2,NULL,'buster75@conn.org','buster75@conn.org','Myrtle','Huel','1997-06-29 01:35:00','u','2019-11-26 01:08:12','2019-11-26 01:08:12','725-300-4679 x2321',0),
	(15,2,NULL,'adelle.green@gmail.com','adelle.green@gmail.com','Angela','Jast','1970-07-30 07:56:35','u','2019-11-26 01:08:12','2019-11-26 01:08:13','778.569.8220 x053',0),
	(16,1,NULL,'urussel@gmail.com','urussel@gmail.com','Ashlynn','Marquardt','1928-07-09 02:31:54','u','2019-11-26 01:08:13','2019-11-26 01:08:13','946-814-6769 x2508',0),
	(17,2,NULL,'ternser@gmail.com','ternser@gmail.com','Lance','Fahey','1977-12-24 02:36:59','u','2019-11-26 01:08:13','2019-11-26 01:08:13','+1 (584) 886-8733',0),
	(18,2,NULL,'violette.pfannerstill@lubowitz.com','violette.pfannerstill@lubowitz.com','Kaia','Watsica','2002-06-20 02:19:27','u','2019-11-26 01:08:13','2019-11-26 01:08:13','791.472.8466 x177',0),
	(19,2,NULL,'ggottlieb@yahoo.com','ggottlieb@yahoo.com','Tina','Cassin','1978-11-12 07:07:43','u','2019-11-26 01:08:13','2019-11-26 01:08:13','545.832.3008 x8371',0),
	(20,2,NULL,'zulauf.marcelino@hotmail.com','zulauf.marcelino@hotmail.com','Jacklyn','Huel','1949-05-23 07:13:06','u','2019-11-26 01:08:13','2019-11-26 01:08:13','+1 (998) 725-8025',0),
	(21,1,NULL,'alverta16@yahoo.com','alverta16@yahoo.com','Modesta','Reichel','1958-07-29 09:15:21','u','2019-11-26 01:08:13','2019-11-26 01:08:14','796-568-1142 x5239',0);

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

LOCK TABLES `sylius_customer_group` WRITE;
/*!40000 ALTER TABLE `sylius_customer_group` DISABLE KEYS */;

INSERT INTO `sylius_customer_group` (`id`, `code`, `name`)
VALUES
	(1,'retail','Retail'),
	(2,'wholesale','Wholesale');

/*!40000 ALTER TABLE `sylius_customer_group` ENABLE KEYS */;
UNLOCK TABLES;


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
	(2,'Offline','offline','[]');

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

LOCK TABLES `sylius_invoicing_plugin_billing_data` WRITE;
/*!40000 ALTER TABLE `sylius_invoicing_plugin_billing_data` DISABLE KEYS */;

INSERT INTO `sylius_invoicing_plugin_billing_data` (`id`, `first_name`, `last_name`, `company`, `street`, `city`, `postcode`, `country_code`, `province_code`, `province_name`)
VALUES
	(1,'Luis','Jakubowski',NULL,'54762 Gregoria Shores Apt. 050','Titushaven','22519','US',NULL,NULL),
	(2,'Geo','Funk',NULL,'725 Brock Inlet Suite 232','Kevonbury','64204-1487','US',NULL,NULL),
	(3,'Edd','Greenholt',NULL,'68226 Turcotte Alley Apt. 598','Port Marjolaineberg','64507-7818','US',NULL,NULL),
	(4,'Cary','Marquardt',NULL,'238 Judson Crest','Fatimaburgh','74518','US',NULL,NULL),
	(5,'Rod','Pagac',NULL,'15747 Dayna Neck','Rivermouth','48018-9987','US',NULL,NULL),
	(6,'Edwina','Wilkinson',NULL,'57155 Towne Radial','Katarinamouth','13244','US',NULL,NULL),
	(7,'Larue','Schultz',NULL,'8603 Judah Run Suite 644','North Craig','26780-9237','US',NULL,NULL),
	(8,'Ashton','Nader',NULL,'831 Kaleigh Green','Kubside','82126','US',NULL,NULL),
	(9,'Shaun','Dicki',NULL,'325 Monahan Corner Apt. 625','South Bradyville','70808','US',NULL,NULL),
	(10,'Reta','Auer',NULL,'4090 Tod Common Suite 621','Port Germaineburgh','78771-9158','US',NULL,NULL),
	(11,'Katarina','Davis',NULL,'69800 Duncan Stravenue Suite 648','Port Ebony','37631-8474','US',NULL,NULL),
	(12,'Irma','Weber',NULL,'8467 Lebsack Estate','Port Sheaburgh','63453-9299','US',NULL,NULL),
	(13,'Howell','Christiansen',NULL,'179 Little Keys Suite 896','Lake Pricefurt','71341','US',NULL,NULL),
	(14,'Elliot','Pfannerstill',NULL,'703 Hilda Plains','East Celia','37818','US',NULL,NULL),
	(15,'Grayson','Schinner',NULL,'856 Tracy Well Suite 484','South Lizeth','87578-6346','US',NULL,NULL),
	(16,'Marcia','Swaniawski',NULL,'730 Herman Pike','Winnifredland','15823-4648','US',NULL,NULL),
	(17,'Lupe','Ritchie',NULL,'3276 Demetris Plain Suite 205','West Wendy','57385-4504','US',NULL,NULL),
	(18,'Ludie','Stoltenberg',NULL,'78805 Torp Light','Jeanieton','27541','US',NULL,NULL),
	(19,'Sheridan','Bins',NULL,'726 Stiedemann Circle','West Libbie','02036','US',NULL,NULL),
	(20,'Brain','Parisian',NULL,'4772 Amelia Unions','New Anabel','69751-6483','US',NULL,NULL);

/*!40000 ALTER TABLE `sylius_invoicing_plugin_billing_data` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_invoicing_plugin_invoice` WRITE;
/*!40000 ALTER TABLE `sylius_invoicing_plugin_invoice` DISABLE KEYS */;

INSERT INTO `sylius_invoicing_plugin_invoice` (`id`, `billing_data_id`, `order_number`, `issued_at`, `currency_code`, `total`, `number`, `locale_code`, `channel_code`, `channel_name`, `shop_billing_data_company`, `shop_billing_data_tax_id`, `shop_billing_data_street`, `shop_billing_data_city`, `shop_billing_data_postcode`, `shop_billing_data_country_code`, `shop_billing_data_representative`)
VALUES
	('107ff04e-1cb7-4cd4-84ee-ec0ab3496ac9',14,'000000014','2019-11-26 01:08:16','USD',7927,'2019/11/000000014','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('115207b9-b48e-4042-9f4d-9c3ccd27c597',9,'000000009','2019-11-26 01:08:16','USD',13631,'2019/11/000000009','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('1a7d85ce-9bab-47aa-a59c-11e6dddd07ac',19,'000000019','2019-11-26 01:08:16','USD',31404,'2019/11/000000019','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('2c768c0d-8ef5-486e-8e0d-7b19ab1572d8',16,'000000016','2019-11-26 01:08:16','USD',678,'2019/11/000000016','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('2d110571-e452-4f46-bb29-3e4fc66957ff',18,'000000018','2019-11-26 01:08:16','USD',31113,'2019/11/000000018','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('2d2f0815-2689-474d-9601-6082ac0ffff0',6,'000000006','2019-11-26 01:08:16','USD',6415,'2019/11/000000006','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('4e05b3b0-818d-4c70-a8e6-7137cc40f7e8',15,'000000015','2019-11-26 01:08:16','USD',21970,'2019/11/000000015','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('56f6d414-6496-4c88-9679-f3b014425bcc',2,'000000002','2019-11-26 01:08:16','USD',10072,'2019/11/000000002','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('587a669c-15c4-466f-bae3-f8606d9e9a9b',7,'000000007','2019-11-26 01:08:16','USD',12431,'2019/11/000000007','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('5a527b5a-01e7-4ba4-8c57-2b55f97ef382',10,'000000010','2019-11-26 01:08:16','USD',27100,'2019/11/000000010','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('7edc9487-127d-4f07-b495-ba85b9d3635e',5,'000000005','2019-11-26 01:08:16','USD',56649,'2019/11/000000005','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('7f846219-8c81-43b0-9a79-5784bf7f433c',17,'000000017','2019-11-26 01:08:16','USD',15209,'2019/11/000000017','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('a656081c-fa69-4bbd-9c6f-8c740f808495',13,'000000013','2019-11-26 01:08:16','USD',9006,'2019/11/000000013','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('bc2f0de1-1dbe-4b53-bcdb-34f29477bb40',11,'000000011','2019-11-26 01:08:16','USD',73814,'2019/11/000000011','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('c6ae8901-2dee-493d-be8b-300400ffac55',20,'000000020','2019-11-26 01:08:16','USD',53762,'2019/11/000000020','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('d7bdb741-1a9f-4420-810a-bab2ec8d4fd7',8,'000000008','2019-11-26 01:08:16','USD',19363,'2019/11/000000008','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('dc44f790-089c-4f44-93c8-41f714472b0e',12,'000000012','2019-11-26 01:08:16','USD',21681,'2019/11/000000012','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('e47de297-8c49-48c3-9bed-7360f80fc557',3,'000000003','2019-11-26 01:08:16','USD',53937,'2019/11/000000003','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('f621d973-c4bb-46cd-89fc-20dee165ec45',4,'000000004','2019-11-26 01:08:16','USD',29029,'2019/11/000000004','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL),
	('ffd426d3-f0f1-4842-98e9-6c80b6912b9e',1,'000000001','2019-11-26 01:08:15','USD',24057,'2019/11/000000001','en_US','FASHION_WEB','US Web Store','Sylius','0001112222','Test St. 15','eCommerce Town','00 33 22','US',NULL);

/*!40000 ALTER TABLE `sylius_invoicing_plugin_invoice` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_invoicing_plugin_line_item` WRITE;
/*!40000 ALTER TABLE `sylius_invoicing_plugin_line_item` DISABLE KEYS */;

INSERT INTO `sylius_invoicing_plugin_line_item` (`id`, `invoice_id`, `name`, `quantity`, `unit_price`, `subtotal`, `tax_total`, `total`, `variant_code`, `variant_name`)
VALUES
	(1,'ffd426d3-f0f1-4842-98e9-6c80b6912b9e','Basic regular',1,4684,4684,176,2696,'Basic_regular-variant-4','XXL'),
	(2,'ffd426d3-f0f1-4842-98e9-6c80b6912b9e','Simple cap',5,5331,26655,2556,15338,'Simple_cap-variant-0',''),
	(3,'ffd426d3-f0f1-4842-98e9-6c80b6912b9e','Regular Fit V-neck woman',3,3045,9135,344,5256,'Regular_Fit_V_neck_woman-variant-0','S'),
	(4,'ffd426d3-f0f1-4842-98e9-6c80b6912b9e','DHL Express',1,767,767,0,767,NULL,NULL),
	(5,'56f6d414-6496-4c88-9679-f3b014425bcc','Slim fit V-neck men',2,1846,3692,134,2049,'Slim_fit_V_neck_men-variant-4','XXL'),
	(6,'56f6d414-6496-4c88-9679-f3b014425bcc','Slim fit V-neck men',4,361,1444,52,801,'Slim_fit_V_neck_men-variant-3','XL'),
	(7,'56f6d414-6496-4c88-9679-f3b014425bcc','Slim fit men',2,5831,11662,423,6471,'Slim_fit_men-variant-0','S'),
	(8,'56f6d414-6496-4c88-9679-f3b014425bcc','UPS',1,751,751,0,751,NULL,NULL),
	(9,'e47de297-8c49-48c3-9bed-7360f80fc557','Regular Fit V-neck woman',2,9259,18518,707,10806,'Regular_Fit_V_neck_woman-variant-4','XXL'),
	(10,'e47de297-8c49-48c3-9bed-7360f80fc557','Regular cap with big pompon',3,2120,6360,619,3711,'Regular_cap_with_big_pompon-variant-0',''),
	(11,'e47de297-8c49-48c3-9bed-7360f80fc557','Simple cap',3,5331,15993,1555,9332,'Simple_cap-variant-0',''),
	(12,'e47de297-8c49-48c3-9bed-7360f80fc557','Slim fit men',4,5168,20672,789,12063,'Slim_fit_men-variant-2','L'),
	(13,'e47de297-8c49-48c3-9bed-7360f80fc557','Slim fit men',4,7394,29576,1129,17258,'Slim_fit_men-variant-3','XL'),
	(14,'e47de297-8c49-48c3-9bed-7360f80fc557','DHL Express',1,767,767,0,767,NULL,NULL),
	(15,'f621d973-c4bb-46cd-89fc-20dee165ec45','Sleeveless Dress',2,9436,18872,714,10910,'Sleeveless_Dress-variant-0','S Petite'),
	(16,'f621d973-c4bb-46cd-89fc-20dee165ec45','Slim fit men',5,2601,13005,492,7518,'Slim_fit_men-variant-4','XXL'),
	(17,'f621d973-c4bb-46cd-89fc-20dee165ec45','Basic regular',2,8894,17788,673,10284,'Basic_regular-variant-2','L'),
	(18,'f621d973-c4bb-46cd-89fc-20dee165ec45','FedEx',1,317,317,0,317,NULL,NULL),
	(19,'7edc9487-127d-4f07-b495-ba85b9d3635e','Ultra slim',2,3508,7016,268,4097,'Ultra_slim-variant-4','XXL'),
	(20,'7edc9487-127d-4f07-b495-ba85b9d3635e','Regular Fit V-neck woman',4,9775,39100,1493,22828,'Regular_Fit_V_neck_woman-variant-3','XL'),
	(21,'7edc9487-127d-4f07-b495-ba85b9d3635e','Summer tunic',4,7697,30788,1176,17975,'Summer_tunic-variant-9','XL Petite'),
	(22,'7edc9487-127d-4f07-b495-ba85b9d3635e','Summer tunic',5,2296,11480,438,6702,'Summer_tunic-variant-14','XXL Tall'),
	(23,'7edc9487-127d-4f07-b495-ba85b9d3635e','New age regular',2,3666,7332,280,4280,'New_age_regular-variant-0','S'),
	(24,'7edc9487-127d-4f07-b495-ba85b9d3635e','DHL Express',1,767,767,0,767,NULL,NULL),
	(25,'2d2f0815-2689-474d-9601-6082ac0ffff0','Regular cap with big pompon',5,2120,10600,944,5664,'Regular_cap_with_big_pompon-variant-0',''),
	(26,'2d2f0815-2689-474d-9601-6082ac0ffff0','UPS',1,751,751,0,751,NULL,NULL),
	(27,'587a669c-15c4-466f-bae3-f8606d9e9a9b','Ultra slim',2,1761,3522,129,1979,'Ultra_slim-variant-0','S'),
	(28,'587a669c-15c4-466f-bae3-f8606d9e9a9b','Slim fit V-neck men',4,361,1444,53,811,'Slim_fit_V_neck_men-variant-3','XL'),
	(29,'587a669c-15c4-466f-bae3-f8606d9e9a9b','Simple cap',2,5331,10662,998,5988,'Simple_cap-variant-0',''),
	(30,'587a669c-15c4-466f-bae3-f8606d9e9a9b','Slim fit men',1,5168,5168,190,2902,'Slim_fit_men-variant-2','L'),
	(31,'587a669c-15c4-466f-bae3-f8606d9e9a9b','UPS',1,751,751,0,751,NULL,NULL),
	(32,'d7bdb741-1a9f-4420-810a-bab2ec8d4fd7','Slim fit elegant',2,9798,19596,1217,18596,'Slim_fit_elegant-variant-3','XL'),
	(33,'d7bdb741-1a9f-4420-810a-bab2ec8d4fd7','DHL Express',1,767,767,0,767,NULL,NULL),
	(34,'115207b9-b48e-4042-9f4d-9c3ccd27c597','Basic winter hot cap',5,3891,19455,1829,10975,'Basic_winter_hot_cap-variant-0',''),
	(35,'115207b9-b48e-4042-9f4d-9c3ccd27c597','Regular Fit casual',3,1116,3348,124,1889,'Regular_Fit_casual-variant-2','L'),
	(36,'115207b9-b48e-4042-9f4d-9c3ccd27c597','DHL Express',1,767,767,0,767,NULL,NULL),
	(37,'5a527b5a-01e7-4ba4-8c57-2b55f97ef382','New age regular',3,3666,10998,415,6346,'New_age_regular-variant-0','S'),
	(38,'5a527b5a-01e7-4ba4-8c57-2b55f97ef382','Regular Fit V-neck woman',3,8217,24651,931,14226,'Regular_Fit_V_neck_woman-variant-1','M'),
	(39,'5a527b5a-01e7-4ba4-8c57-2b55f97ef382','Slim fit V-neck men',2,2940,5880,222,3393,'Slim_fit_V_neck_men-variant-0','S'),
	(40,'5a527b5a-01e7-4ba4-8c57-2b55f97ef382','Sleeveless Dress',2,2065,4130,156,2384,'Sleeveless_Dress-variant-8','L Tall'),
	(41,'5a527b5a-01e7-4ba4-8c57-2b55f97ef382','UPS',1,751,751,0,751,NULL,NULL),
	(42,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','Beautiful cap for woman',5,7055,35275,3469,20812,'Beautiful_cap_for_woman-variant-0',''),
	(43,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','Slim fit elegant',4,9798,39192,1513,23123,'Slim_fit_elegant-variant-3','XL'),
	(44,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','Regular fit men',5,4853,24265,937,14316,'Regular_fit_men-variant-2','L'),
	(45,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','Slim fit men',5,5168,25840,997,15246,'Slim_fit_men-variant-2','L'),
	(46,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','FedEx',1,317,317,0,317,NULL,NULL),
	(47,'dc44f790-089c-4f44-93c8-41f714472b0e','Slim fit V-neck men',3,2940,8820,340,5204,'Slim_fit_V_neck_men-variant-0','S'),
	(48,'dc44f790-089c-4f44-93c8-41f714472b0e','Whole holes classic',3,9130,27390,1057,16160,'Whole_holes_classic-variant-4','XXL'),
	(49,'dc44f790-089c-4f44-93c8-41f714472b0e','FedEx',1,317,317,0,317,NULL,NULL),
	(50,'a656081c-fa69-4bbd-9c6f-8c740f808495','Circle-skirt Dress',2,6462,12924,499,7625,'Circle_skirt_Dress-variant-13','XXL Regular'),
	(51,'a656081c-fa69-4bbd-9c6f-8c740f808495','Slim fit elegant',1,1803,1803,70,1064,'Slim_fit_elegant-variant-0','S'),
	(52,'a656081c-fa69-4bbd-9c6f-8c740f808495','FedEx',1,317,317,0,317,NULL,NULL),
	(53,'107ff04e-1cb7-4cd4-84ee-ec0ab3496ac9','Sleeveless Dress',4,781,3124,121,1843,'Sleeveless_Dress-variant-13','XXL Regular'),
	(54,'107ff04e-1cb7-4cd4-84ee-ec0ab3496ac9','Regular Fit V-neck woman',1,9775,9775,377,5767,'Regular_Fit_V_neck_woman-variant-3','XL'),
	(55,'107ff04e-1cb7-4cd4-84ee-ec0ab3496ac9','FedEx',1,317,317,0,317,NULL,NULL),
	(56,'4e05b3b0-818d-4c70-a8e6-7137cc40f7e8','Regular cap with big pompon',4,2120,8480,834,5003,'Regular_cap_with_big_pompon-variant-0',''),
	(57,'4e05b3b0-818d-4c70-a8e6-7137cc40f7e8','Beautiful cap for woman',4,7055,28220,2775,16650,'Beautiful_cap_for_woman-variant-0',''),
	(58,'4e05b3b0-818d-4c70-a8e6-7137cc40f7e8','FedEx',1,317,317,0,317,NULL,NULL),
	(59,'2c768c0d-8ef5-486e-8e0d-7b19ab1572d8','Slim fit V-neck men',1,361,361,24,361,'Slim_fit_V_neck_men-variant-3','XL'),
	(60,'2c768c0d-8ef5-486e-8e0d-7b19ab1572d8','FedEx',1,317,317,0,317,NULL,NULL),
	(61,'7f846219-8c81-43b0-9a79-5784bf7f433c','Whole holes classic',4,2380,9520,367,5617,'Whole_holes_classic-variant-1','M'),
	(62,'7f846219-8c81-43b0-9a79-5784bf7f433c','Slim fit elegant',1,9756,9756,377,5756,'Slim_fit_elegant-variant-1','M'),
	(63,'7f846219-8c81-43b0-9a79-5784bf7f433c','Slim fit men',2,2601,5202,201,3069,'Slim_fit_men-variant-4','XXL'),
	(64,'7f846219-8c81-43b0-9a79-5784bf7f433c','DHL Express',1,767,767,0,767,NULL,NULL),
	(65,'2d110571-e452-4f46-bb29-3e4fc66957ff','Slim fit woman',5,5463,27315,1054,16116,'Slim_fit_woman-variant-2','L'),
	(66,'2d110571-e452-4f46-bb29-3e4fc66957ff','Circle-skirt Dress',3,8294,24882,960,14680,'Circle_skirt_Dress-variant-6','L Petite'),
	(67,'2d110571-e452-4f46-bb29-3e4fc66957ff','FedEx',1,317,317,0,317,NULL,NULL),
	(68,'1a7d85ce-9bab-47aa-a59c-11e6dddd07ac','Regular Fit casual',5,9439,47195,1822,27845,'Regular_Fit_casual-variant-3','XL'),
	(69,'1a7d85ce-9bab-47aa-a59c-11e6dddd07ac','Whole holes classic',2,2380,4760,184,2808,'Whole_holes_classic-variant-1','M'),
	(70,'1a7d85ce-9bab-47aa-a59c-11e6dddd07ac','UPS',1,751,751,0,751,NULL,NULL),
	(71,'c6ae8901-2dee-493d-be8b-300400ffac55','Circle-skirt Dress',4,3553,14212,549,8385,'Circle_skirt_Dress-variant-5','M Tall'),
	(72,'c6ae8901-2dee-493d-be8b-300400ffac55','Regular Fit V-neck woman',2,9259,18518,715,10926,'Regular_Fit_V_neck_woman-variant-4','XXL'),
	(73,'c6ae8901-2dee-493d-be8b-300400ffac55','Regular Fit V-neck woman',1,8217,8217,317,4848,'Regular_Fit_V_neck_woman-variant-1','M'),
	(74,'c6ae8901-2dee-493d-be8b-300400ffac55','Regular Fit V-neck woman',5,9775,48875,1886,28836,'Regular_Fit_V_neck_woman-variant-3','XL'),
	(75,'c6ae8901-2dee-493d-be8b-300400ffac55','DHL Express',1,767,767,0,767,NULL,NULL);

/*!40000 ALTER TABLE `sylius_invoicing_plugin_line_item` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sylius_invoicing_plugin_sequence
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sylius_invoicing_plugin_sequence`;

CREATE TABLE `sylius_invoicing_plugin_sequence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idx` int(11) NOT NULL,
  `version` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sylius_invoicing_plugin_sequence` WRITE;
/*!40000 ALTER TABLE `sylius_invoicing_plugin_sequence` DISABLE KEYS */;

INSERT INTO `sylius_invoicing_plugin_sequence` (`id`, `idx`, `version`)
VALUES
	(1,20,20);

/*!40000 ALTER TABLE `sylius_invoicing_plugin_sequence` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_invoicing_plugin_tax_item` WRITE;
/*!40000 ALTER TABLE `sylius_invoicing_plugin_tax_item` DISABLE KEYS */;

INSERT INTO `sylius_invoicing_plugin_tax_item` (`id`, `invoice_id`, `label`, `amount`)
VALUES
	(1,'ffd426d3-f0f1-4842-98e9-6c80b6912b9e','Clothing Sales Tax 7% (7%)',520),
	(2,'ffd426d3-f0f1-4842-98e9-6c80b6912b9e','Sales Tax 20% (20%)',2556),
	(3,'56f6d414-6496-4c88-9679-f3b014425bcc','Clothing Sales Tax 7% (7%)',609),
	(4,'e47de297-8c49-48c3-9bed-7360f80fc557','Clothing Sales Tax 7% (7%)',2625),
	(5,'e47de297-8c49-48c3-9bed-7360f80fc557','Sales Tax 20% (20%)',2174),
	(6,'f621d973-c4bb-46cd-89fc-20dee165ec45','Clothing Sales Tax 7% (7%)',1879),
	(7,'7edc9487-127d-4f07-b495-ba85b9d3635e','Clothing Sales Tax 7% (7%)',3655),
	(8,'2d2f0815-2689-474d-9601-6082ac0ffff0','Sales Tax 20% (20%)',944),
	(9,'587a669c-15c4-466f-bae3-f8606d9e9a9b','Clothing Sales Tax 7% (7%)',372),
	(10,'587a669c-15c4-466f-bae3-f8606d9e9a9b','Sales Tax 20% (20%)',998),
	(11,'d7bdb741-1a9f-4420-810a-bab2ec8d4fd7','Clothing Sales Tax 7% (7%)',1217),
	(12,'115207b9-b48e-4042-9f4d-9c3ccd27c597','Sales Tax 20% (20%)',1829),
	(13,'115207b9-b48e-4042-9f4d-9c3ccd27c597','Clothing Sales Tax 7% (7%)',124),
	(14,'5a527b5a-01e7-4ba4-8c57-2b55f97ef382','Clothing Sales Tax 7% (7%)',1724),
	(15,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','Sales Tax 20% (20%)',3469),
	(16,'bc2f0de1-1dbe-4b53-bcdb-34f29477bb40','Clothing Sales Tax 7% (7%)',3447),
	(17,'dc44f790-089c-4f44-93c8-41f714472b0e','Clothing Sales Tax 7% (7%)',1397),
	(18,'a656081c-fa69-4bbd-9c6f-8c740f808495','Clothing Sales Tax 7% (7%)',569),
	(19,'107ff04e-1cb7-4cd4-84ee-ec0ab3496ac9','Clothing Sales Tax 7% (7%)',498),
	(20,'4e05b3b0-818d-4c70-a8e6-7137cc40f7e8','Sales Tax 20% (20%)',3609),
	(21,'2c768c0d-8ef5-486e-8e0d-7b19ab1572d8','Clothing Sales Tax 7% (7%)',24),
	(22,'7f846219-8c81-43b0-9a79-5784bf7f433c','Clothing Sales Tax 7% (7%)',945),
	(23,'2d110571-e452-4f46-bb29-3e4fc66957ff','Clothing Sales Tax 7% (7%)',2014),
	(24,'1a7d85ce-9bab-47aa-a59c-11e6dddd07ac','Clothing Sales Tax 7% (7%)',2006),
	(25,'c6ae8901-2dee-493d-be8b-300400ffac55','Clothing Sales Tax 7% (7%)',3467);

/*!40000 ALTER TABLE `sylius_invoicing_plugin_tax_item` ENABLE KEYS */;
UNLOCK TABLES;


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
	(1,2,3,1,NULL,10,'000000001',NULL,'new','2018-11-26 01:59:20',23290,767,24057,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','-Zpj16ckMV',NULL),
	(2,5,6,1,NULL,2,'000000002',NULL,'new','2018-12-12 20:01:47',9321,751,10072,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','u3nNHGq-yu',NULL),
	(3,8,9,1,NULL,14,'000000003',NULL,'new','2019-01-12 13:17:26',53170,767,53937,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','tWYRZNWa8u',NULL),
	(4,11,12,1,NULL,8,'000000004',NULL,'new','2019-01-14 12:02:06',28712,317,29029,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','sVTLxKuZDK',NULL),
	(5,14,15,1,NULL,5,'000000005',NULL,'new','2019-01-24 11:20:22',55882,767,56649,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','Cg3k54Y7G-',NULL),
	(6,17,18,1,NULL,16,'000000006',NULL,'new','2019-02-04 20:31:24',5664,751,6415,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','q_b5GLeaCI',NULL),
	(7,20,21,1,NULL,21,'000000007',NULL,'new','2019-02-07 21:24:17',11680,751,12431,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','3Eu6sTeU-q',NULL),
	(8,23,24,1,NULL,2,'000000008','Amet possimus aperiam eum.','new','2019-02-15 04:47:41',18596,767,19363,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','HKWCPeOY_b',NULL),
	(9,26,27,1,NULL,6,'000000009','Saepe nihil nulla quis maxime at quo.','new','2019-02-18 12:25:52',12864,767,13631,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','cSKix7UbTI',NULL),
	(10,29,30,1,NULL,11,'000000010',NULL,'new','2019-03-09 11:34:30',26349,751,27100,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','4BNHJY~pto',NULL),
	(11,32,33,1,NULL,3,'000000011',NULL,'new','2019-04-24 09:39:57',73497,317,73814,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','KEdLYc4hH8',NULL),
	(12,35,36,1,NULL,5,'000000012',NULL,'new','2019-05-08 15:07:03',21364,317,21681,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','ekuB7bwUAG',NULL),
	(13,38,39,1,NULL,18,'000000013',NULL,'new','2019-05-12 18:02:50',8689,317,9006,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','B~2rBAyNJW',NULL),
	(14,41,42,1,NULL,1,'000000014',NULL,'new','2019-05-17 23:00:41',7610,317,7927,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','b6vFCEgw1e',NULL),
	(15,44,45,1,NULL,4,'000000015','Iure et sit et aut perferendis possimus iste veritatis.','new','2019-06-01 21:37:29',21653,317,21970,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','b5~hVbtOpK',NULL),
	(16,47,48,1,NULL,12,'000000016',NULL,'new','2019-06-15 01:18:46',361,317,678,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','jwT2s1CD-P',NULL),
	(17,50,51,1,NULL,4,'000000017',NULL,'new','2019-10-12 12:10:50',14442,767,15209,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','OGz1umydEp',NULL),
	(18,53,54,1,NULL,3,'000000018','Illum voluptatem magni et deserunt consequatur.','new','2019-10-15 01:39:55',30796,317,31113,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','iZAtLahgHc',NULL),
	(19,56,57,1,NULL,11,'000000019','Ipsum vel qui ipsa.','new','2019-10-19 14:47:31',30653,751,31404,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','FMiByOwEza',NULL),
	(20,59,60,1,NULL,18,'000000020',NULL,'new','2019-11-18 11:14:24',52995,767,53762,'2019-11-26 01:08:15','2019-11-26 01:08:15','USD','en_US','completed','awaiting_payment','ready','tWeBZU97TX',NULL);

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
	(1,1,84,1,4684,2696,0,2696,0,'Basic regular','XXL'),
	(2,1,34,5,5331,15338,0,15338,0,'Simple cap',''),
	(3,1,11,3,3045,5256,0,5256,0,'Regular Fit V-neck woman','S'),
	(4,2,30,2,1846,2049,0,2049,0,'Slim fit V-neck men','XXL'),
	(5,2,29,4,361,801,0,801,0,'Slim fit V-neck men','XL'),
	(6,2,16,2,5831,6471,0,6471,0,'Slim fit men','S'),
	(7,3,15,2,9259,10806,0,10806,0,'Regular Fit V-neck woman','XXL'),
	(8,3,33,3,2120,3711,0,3711,0,'Regular cap with big pompon',''),
	(9,3,34,3,5331,9332,0,9332,0,'Simple cap',''),
	(10,3,18,4,5168,12063,0,12063,0,'Slim fit men','L'),
	(11,3,19,4,7394,17258,0,17258,0,'Slim fit men','XL'),
	(12,4,50,2,9436,10910,0,10910,0,'Sleeveless Dress','S Petite'),
	(13,4,20,5,2601,7518,0,7518,0,'Slim fit men','XXL'),
	(14,4,82,2,8894,10284,0,10284,0,'Basic regular','L'),
	(15,5,104,2,3508,4097,0,4097,0,'Ultra slim','XXL'),
	(16,5,14,4,9775,22828,0,22828,0,'Regular Fit V-neck woman','XL'),
	(17,5,74,4,7697,17975,0,17975,0,'Summer tunic','XL Petite'),
	(18,5,79,5,2296,6702,0,6702,0,'Summer tunic','XXL Tall'),
	(19,5,110,2,3666,4280,0,4280,0,'New age regular','S'),
	(20,6,33,5,2120,5664,0,5664,0,'Regular cap with big pompon',''),
	(21,7,100,2,1761,1979,0,1979,0,'Ultra slim','S'),
	(22,7,29,4,361,811,0,811,0,'Slim fit V-neck men','XL'),
	(23,7,34,2,5331,5988,0,5988,0,'Simple cap',''),
	(24,7,18,1,5168,2902,0,2902,0,'Slim fit men','L'),
	(25,8,98,2,9798,18596,0,18596,0,'Slim fit elegant','XL'),
	(26,9,31,5,3891,10975,0,10975,0,'Basic winter hot cap',''),
	(27,9,92,3,1116,1889,0,1889,0,'Regular Fit casual','L'),
	(28,10,110,3,3666,6346,0,6346,0,'New age regular','S'),
	(29,10,12,3,8217,14226,0,14226,0,'Regular Fit V-neck woman','M'),
	(30,10,26,2,2940,3393,0,3393,0,'Slim fit V-neck men','S'),
	(31,10,58,2,2065,2384,0,2384,0,'Sleeveless Dress','L Tall'),
	(32,11,32,5,7055,20812,0,20812,0,'Beautiful cap for woman',''),
	(33,11,98,4,9798,23123,0,23123,0,'Slim fit elegant','XL'),
	(34,11,23,5,4853,14316,0,14316,0,'Regular fit men','L'),
	(35,11,18,5,5168,15246,0,15246,0,'Slim fit men','L'),
	(36,12,26,3,2940,5204,0,5204,0,'Slim fit V-neck men','S'),
	(37,12,119,3,9130,16160,0,16160,0,'Whole holes classic','XXL'),
	(38,13,48,2,6462,7625,0,7625,0,'Circle-skirt Dress','XXL Regular'),
	(39,13,95,1,1803,1064,0,1064,0,'Slim fit elegant','S'),
	(40,14,63,4,781,1843,0,1843,0,'Sleeveless Dress','XXL Regular'),
	(41,14,14,1,9775,5767,0,5767,0,'Regular Fit V-neck woman','XL'),
	(42,15,33,4,2120,5003,0,5003,0,'Regular cap with big pompon',''),
	(43,15,32,4,7055,16650,0,16650,0,'Beautiful cap for woman',''),
	(44,16,29,1,361,361,0,361,0,'Slim fit V-neck men','XL'),
	(45,17,116,4,2380,5617,0,5617,0,'Whole holes classic','M'),
	(46,17,96,1,9756,5756,0,5756,0,'Slim fit elegant','M'),
	(47,17,20,2,2601,3069,0,3069,0,'Slim fit men','XXL'),
	(48,18,8,5,5463,16116,0,16116,0,'Slim fit woman','L'),
	(49,18,41,3,8294,14680,0,14680,0,'Circle-skirt Dress','L Petite'),
	(50,19,93,5,9439,27845,0,27845,0,'Regular Fit casual','XL'),
	(51,19,116,2,2380,2808,0,2808,0,'Whole holes classic','M'),
	(52,20,40,4,3553,8385,0,8385,0,'Circle-skirt Dress','M Tall'),
	(53,20,15,2,9259,10926,0,10926,0,'Regular Fit V-neck woman','XXL'),
	(54,20,12,1,8217,4848,0,4848,0,'Regular Fit V-neck woman','M'),
	(55,20,14,5,9775,28836,0,28836,0,'Regular Fit V-neck woman','XL');

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
	(1,1,1,-1988,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(2,2,1,-2264,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(3,2,1,-2264,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(4,2,1,-2264,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(5,2,1,-2263,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(6,2,1,-2262,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(7,3,1,-1294,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(8,3,1,-1293,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(9,3,1,-1292,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(10,4,2,-822,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(11,4,2,-821,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(12,5,2,-162,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(13,5,2,-161,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(14,5,2,-160,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(15,5,2,-160,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(16,6,2,-2596,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(17,6,2,-2595,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(18,7,3,-3856,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(19,7,3,-3856,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(20,8,3,-884,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(21,8,3,-883,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(22,8,3,-882,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(23,9,3,-2221,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(24,9,3,-2221,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(25,9,3,-2219,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(26,10,3,-2153,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(27,10,3,-2153,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(28,10,3,-2152,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(29,10,3,-2151,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(30,11,3,-3081,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(31,11,3,-3079,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(32,11,3,-3079,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(33,11,3,-3079,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(34,12,4,-3981,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(35,12,4,-3981,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(36,13,4,-1098,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(37,13,4,-1098,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(38,13,4,-1097,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(39,13,4,-1097,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(40,13,4,-1097,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(41,14,4,-3752,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(42,14,4,-3752,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(43,15,5,-1460,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(44,15,5,-1459,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(45,16,5,-4069,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(46,16,5,-4068,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(47,16,5,-4068,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(48,16,5,-4067,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(49,17,5,-3204,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(50,17,5,-3204,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(51,17,5,-3203,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(52,17,5,-3202,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(53,18,5,-956,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(54,18,5,-956,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(55,18,5,-956,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(56,18,5,-955,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(57,18,5,-955,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(58,19,5,-1527,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(59,19,5,-1525,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(60,20,6,-988,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(61,20,6,-987,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(62,20,6,-987,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(63,20,6,-987,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(64,20,6,-987,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(65,21,7,-772,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(66,21,7,-771,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(67,22,7,-159,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(68,22,7,-158,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(69,22,7,-158,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(70,22,7,-158,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(71,23,7,-2338,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(72,23,7,-2336,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(73,24,7,-2266,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(74,25,8,-500,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(75,25,8,-500,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(76,26,9,-1697,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(77,26,9,-1697,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(78,26,9,-1696,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(79,26,9,-1695,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(80,26,9,-1695,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(81,27,9,-487,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(82,27,9,-486,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(83,27,9,-486,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(84,28,10,-1552,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(85,28,10,-1550,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(86,28,10,-1550,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(87,29,10,-3475,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(88,29,10,-3475,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(89,29,10,-3475,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(90,30,10,-1244,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(91,30,10,-1243,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(92,31,10,-873,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(93,31,10,-873,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(94,32,11,-2893,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(95,32,11,-2893,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(96,32,11,-2893,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(97,32,11,-2892,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(98,32,11,-2892,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(99,33,11,-4018,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(100,33,11,-4017,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(101,33,11,-4017,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(102,33,11,-4017,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(103,34,11,-1990,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(104,34,11,-1990,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(105,34,11,-1990,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(106,34,11,-1990,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(107,34,11,-1989,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(108,35,11,-2119,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(109,35,11,-2119,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(110,35,11,-2119,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(111,35,11,-2119,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(112,35,11,-2118,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(113,36,12,-1206,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(114,36,12,-1205,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(115,36,12,-1205,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(116,37,12,-3744,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(117,37,12,-3743,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(118,37,12,-3743,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(119,38,13,-2650,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(120,38,13,-2649,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(121,39,13,-739,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(122,40,14,-321,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(123,40,14,-320,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(124,40,14,-320,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(125,40,14,-320,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(126,41,14,-4008,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(127,42,15,-870,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(128,42,15,-869,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(129,42,15,-869,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(130,42,15,-869,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(131,43,15,-2893,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(132,43,15,-2893,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(133,43,15,-2892,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(134,43,15,-2892,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(135,44,16,0,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(136,45,17,-976,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(137,45,17,-976,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(138,45,17,-976,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(139,45,17,-975,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(140,46,17,-4000,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(141,47,17,-1067,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(142,47,17,-1066,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(143,48,18,-2240,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(144,48,18,-2240,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(145,48,18,-2240,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(146,48,18,-2240,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(147,48,18,-2239,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(148,49,18,-3401,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(149,49,18,-3401,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(150,49,18,-3400,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(151,50,19,-3870,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(152,50,19,-3870,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(153,50,19,-3870,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(154,50,19,-3870,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(155,50,19,-3870,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(156,51,19,-976,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(157,51,19,-976,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(158,52,20,-1457,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(159,52,20,-1457,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(160,52,20,-1457,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(161,52,20,-1456,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(162,53,20,-3796,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(163,53,20,-3796,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(164,54,20,-3369,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(165,55,20,-4008,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(166,55,20,-4008,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(167,55,20,-4008,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(168,55,20,-4008,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(169,55,20,-4007,'2019-11-26 01:08:15','2019-11-26 01:08:15');

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
	(1,1,1,'USD',24057,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(2,2,2,'USD',10072,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(3,2,3,'USD',53937,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(4,1,4,'USD',29029,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(5,1,5,'USD',56649,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(6,2,6,'USD',6415,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(7,1,7,'USD',12431,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(8,1,8,'USD',19363,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(9,2,9,'USD',13631,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(10,2,10,'USD',27100,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(11,1,11,'USD',73814,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(12,2,12,'USD',21681,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(13,2,13,'USD',9006,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(14,2,14,'USD',7927,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(15,2,15,'USD',21970,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(16,1,16,'USD',678,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(17,1,17,'USD',15209,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(18,2,18,'USD',31113,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(19,2,19,'USD',31404,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(20,1,20,'USD',53762,'new','[]','2019-11-26 01:08:15','2019-11-26 01:08:15');

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
	(1,1,'cash_on_delivery',NULL,1,0,'2019-11-26 01:08:10','2019-11-26 01:08:10'),
	(2,2,'bank_transfer',NULL,1,1,'2019-11-26 01:08:10','2019-11-26 01:08:10');

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
	(1,1),
	(2,1);

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
	(2,2,'Bank transfer','Voluptatem quod odio et consequatur.',NULL,'en_US');

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
	(1,4,'Basic_regular_woman','2019-11-19 04:54:43','2019-11-26 01:08:15',1,'match',4),
	(2,4,'Slim_fit_woman','2019-11-21 22:01:14','2019-11-26 01:08:15',1,'match',3),
	(3,4,'Regular_Fit_V_neck_woman','2019-11-21 02:09:33','2019-11-26 01:08:15',1,'match',2),
	(4,3,'Slim_fit_men','2019-11-23 06:00:11','2019-11-26 01:08:14',1,'match',0),
	(5,3,'Regular_fit_men','2019-11-19 11:45:05','2019-11-26 01:08:15',1,'match',2),
	(6,3,'Slim_fit_V_neck_men','2019-11-22 13:14:34','2019-11-26 01:08:14',1,'match',0),
	(7,7,'Basic_winter_hot_cap','2019-11-19 02:43:19','2019-11-26 01:08:14',1,'match',0),
	(8,6,'Beautiful_cap_for_woman','2019-11-23 18:22:15','2019-11-26 01:08:15',1,'match',2),
	(9,7,'Regular_cap_with_big_pompon','2019-11-20 01:21:06','2019-11-26 01:08:14',1,'match',0),
	(10,6,'Simple_cap','2019-11-24 16:58:26','2019-11-26 01:08:14',1,'match',0),
	(11,8,'Circle_skirt_Dress','2019-11-20 20:45:16','2019-11-26 01:08:14',1,'match',0),
	(12,8,'Sleeveless_Dress','2019-11-20 17:40:54','2019-11-26 01:08:15',1,'match',2.5),
	(13,8,'Summer_tunic','2019-11-24 19:15:20','2019-11-26 01:08:15',1,'match',5),
	(14,10,'Basic_regular','2019-11-22 10:21:40','2019-11-26 01:08:14',1,'match',0),
	(15,10,'Slim_fit_classic','2019-11-25 18:14:22','2019-11-26 01:08:15',1,'match',1.5),
	(16,10,'Regular_Fit_casual','2019-11-24 06:43:33','2019-11-26 01:08:14',1,'match',0),
	(17,10,'Slim_fit_elegant','2019-11-21 11:48:42','2019-11-26 01:08:14',1,'match',0),
	(18,11,'Ultra_slim','2019-11-20 03:44:53','2019-11-26 01:08:14',1,'match',0),
	(19,11,'Slim_fit','2019-11-23 04:34:15','2019-11-26 01:08:14',1,'match',0),
	(20,11,'New_age_regular','2019-11-23 10:21:23','2019-11-26 01:08:15',1,'match',3),
	(21,11,'Whole_holes_classic','2019-11-24 23:04:32','2019-11-26 01:08:14',1,'match',0);

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
	(1,1,3,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(2,1,6,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(3,1,2,'2019-11-26 01:08:15','2019-11-26 01:08:15');

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
	(1,3),
	(2,4),
	(2,6),
	(3,1),
	(3,2);

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
	(1,'similar_products','2019-11-26 01:08:15','2019-11-26 01:08:15');

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
	(1,1,'Similar products','en_US');

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

LOCK TABLES `sylius_product_attribute` WRITE;
/*!40000 ALTER TABLE `sylius_product_attribute` DISABLE KEYS */;

INSERT INTO `sylius_product_attribute` (`id`, `code`, `type`, `storage_type`, `configuration`, `created_at`, `updated_at`, `position`)
VALUES
	(1,'t_shirt_brand','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',0),
	(2,'t_shirt_collection','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',1),
	(3,'t_shirt_material','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',2),
	(4,'cap_brand','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',3),
	(5,'cap_collection','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',4),
	(6,'cap_material','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',5),
	(7,'dress_brand','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',6),
	(8,'dress_collection','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',7),
	(9,'dress_material','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',8),
	(10,'jeans_brand','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',9),
	(11,'jeans_collection','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',10),
	(12,'jeans_material','text','text','a:0:{}','2019-11-26 01:08:14','2019-11-26 01:08:14',11);

/*!40000 ALTER TABLE `sylius_product_attribute` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_attribute_translation` WRITE;
/*!40000 ALTER TABLE `sylius_product_attribute_translation` DISABLE KEYS */;

INSERT INTO `sylius_product_attribute_translation` (`id`, `translatable_id`, `name`, `locale`)
VALUES
	(1,1,'T-shirt brand','en_US'),
	(2,2,'T-shirt collection','en_US'),
	(3,3,'T-shirt material','en_US'),
	(4,4,'Cap brand','en_US'),
	(5,5,'Cap collection','en_US'),
	(6,6,'Cap material','en_US'),
	(7,7,'Dress brand','en_US'),
	(8,8,'Dress collection','en_US'),
	(9,9,'Dress material','en_US'),
	(10,10,'Jeans brand','en_US'),
	(11,11,'Jeans collection','en_US'),
	(12,12,'Jeans material','en_US');

/*!40000 ALTER TABLE `sylius_product_attribute_translation` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_attribute_value` WRITE;
/*!40000 ALTER TABLE `sylius_product_attribute_value` DISABLE KEYS */;

INSERT INTO `sylius_product_attribute_value` (`id`, `product_id`, `attribute_id`, `locale_code`, `text_value`, `boolean_value`, `integer_value`, `float_value`, `datetime_value`, `date_value`, `json_value`)
VALUES
	(1,1,1,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(2,1,2,'en_US','Sylius Summer 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(3,1,3,'en_US','100% viscose',NULL,NULL,NULL,NULL,NULL,NULL),
	(4,2,1,'en_US','Modern Wear',NULL,NULL,NULL,NULL,NULL,NULL),
	(5,2,2,'en_US','Sylius Summer 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(6,2,3,'en_US','100% cotton',NULL,NULL,NULL,NULL,NULL,NULL),
	(7,3,1,'en_US','Celsius Small',NULL,NULL,NULL,NULL,NULL,NULL),
	(8,3,2,'en_US','Sylius Summer 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(9,3,3,'en_US','100% viscose',NULL,NULL,NULL,NULL,NULL,NULL),
	(10,4,1,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(11,4,2,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(12,4,3,'en_US','100% nylon',NULL,NULL,NULL,NULL,NULL,NULL),
	(13,5,1,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(14,5,2,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(15,5,3,'en_US','100% linen',NULL,NULL,NULL,NULL,NULL,NULL),
	(16,6,1,'en_US','Modern Wear',NULL,NULL,NULL,NULL,NULL,NULL),
	(17,6,2,'en_US','Sylius Summer 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(18,6,3,'en_US','100% polyester',NULL,NULL,NULL,NULL,NULL,NULL),
	(19,7,4,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(20,7,5,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(21,7,6,'en_US','100% wool',NULL,NULL,NULL,NULL,NULL,NULL),
	(22,8,4,'en_US','Modern Wear',NULL,NULL,NULL,NULL,NULL,NULL),
	(23,8,5,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(24,8,6,'en_US','100% wool',NULL,NULL,NULL,NULL,NULL,NULL),
	(25,9,4,'en_US','Celsius Small',NULL,NULL,NULL,NULL,NULL,NULL),
	(26,9,5,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(27,9,6,'en_US','100% wool',NULL,NULL,NULL,NULL,NULL,NULL),
	(28,10,4,'en_US','Date & Banana',NULL,NULL,NULL,NULL,NULL,NULL),
	(29,10,5,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(30,10,6,'en_US','100% wool',NULL,NULL,NULL,NULL,NULL,NULL),
	(31,11,7,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(32,11,8,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(33,11,9,'en_US','100% polyester',NULL,NULL,NULL,NULL,NULL,NULL),
	(34,12,7,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(35,12,8,'en_US','Sylius Summer 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(36,12,9,'en_US','100% wool',NULL,NULL,NULL,NULL,NULL,NULL),
	(37,13,7,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(38,13,8,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(39,13,9,'en_US','100% ',NULL,NULL,NULL,NULL,NULL,NULL),
	(40,14,10,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(41,14,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(42,14,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(43,15,10,'en_US','Modern Wear',NULL,NULL,NULL,NULL,NULL,NULL),
	(44,15,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(45,15,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(46,16,10,'en_US','Celsius Small',NULL,NULL,NULL,NULL,NULL,NULL),
	(47,16,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(48,16,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(49,17,10,'en_US','Date & Banana',NULL,NULL,NULL,NULL,NULL,NULL),
	(50,17,11,'en_US','Sylius summer 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(51,17,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(52,18,10,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(53,18,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(54,18,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(55,19,10,'en_US','You are breathtaking',NULL,NULL,NULL,NULL,NULL,NULL),
	(56,19,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(57,19,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(58,20,10,'en_US','Modern Wear',NULL,NULL,NULL,NULL,NULL,NULL),
	(59,20,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(60,20,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL),
	(61,21,10,'en_US','Modern Wear',NULL,NULL,NULL,NULL,NULL,NULL),
	(62,21,11,'en_US','Sylius Winter 2019',NULL,NULL,NULL,NULL,NULL,NULL),
	(63,21,12,'en_US','100% jeans',NULL,NULL,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `sylius_product_attribute_value` ENABLE KEYS */;
UNLOCK TABLES;


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
	(6,1),
	(7,1),
	(8,1),
	(9,1),
	(10,1),
	(11,1),
	(12,1),
	(13,1),
	(14,1),
	(15,1),
	(16,1),
	(17,1),
	(18,1),
	(19,1),
	(20,1),
	(21,1);

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
	(1,1,'main','49/08/8d4aecb0d85733b3817125010fb8.jpeg'),
	(2,2,'main','0a/35/7ef69be2dc3814cb584eb0d5a22e.jpeg'),
	(3,3,'main','27/03/1ce30406dc7cfdd69808a3d9d0ee.jpeg'),
	(4,4,'main','82/42/4439f4061f4c0d55274228a19361.jpeg'),
	(5,5,'main','41/b3/280ff32b78537a4f466b049554cb.jpeg'),
	(6,6,'main','20/fd/b5543e3522250b3b0b086de83407.jpeg'),
	(7,7,'main','e2/d1/259fd58d0bcd6ce7dc8eb7873b3c.jpeg'),
	(8,8,'main','8b/af/563035148ca56006028f7031b18f.jpeg'),
	(9,9,'main','f8/aa/6cfb79954c93d74c8a195bef74e9.jpeg'),
	(10,10,'main','7e/2f/0cd2ee5588233578ee463dcb5018.jpeg'),
	(11,11,'main','c8/ab/c9f0ab7d03dba92f110c4e6c980c.jpeg'),
	(12,12,'main','40/54/cbdbddfe322fc45166af5eff013c.jpeg'),
	(13,13,'main','40/43/e5cc52f57ef6c11e0c94f7cd0e12.jpeg'),
	(14,14,'main','19/4c/85ba2101effdc9ce5d480deb0f88.jpeg'),
	(15,15,'main','01/4a/60b87502572c423057359de1c2fc.jpeg'),
	(16,16,'main','73/47/659ed4b3aa5d4942ecd526e83fd0.jpeg'),
	(17,17,'main','c6/d7/30fb2a69193261d788256cdcee2b.jpeg'),
	(18,18,'main','52/e3/1151d502ef09170c6d535e2f460d.jpeg'),
	(19,19,'main','6a/bb/68d3b0cc3f876a45f029f43b2676.jpeg'),
	(20,20,'main','d3/a4/6e89bc7085027bbff1ca8e6992e1.jpeg'),
	(21,21,'main','8a/4c/cb8a1a5eed556c40036eaeac6b43.jpeg');

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

LOCK TABLES `sylius_product_option` WRITE;
/*!40000 ALTER TABLE `sylius_product_option` DISABLE KEYS */;

INSERT INTO `sylius_product_option` (`id`, `code`, `position`, `created_at`, `updated_at`)
VALUES
	(1,'t_shirt_size',0,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(2,'dress_size',1,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(3,'dress_height',2,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(4,'jeans_size',3,'2019-11-26 01:08:14','2019-11-26 01:08:14');

/*!40000 ALTER TABLE `sylius_product_option` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_option_translation` WRITE;
/*!40000 ALTER TABLE `sylius_product_option_translation` DISABLE KEYS */;

INSERT INTO `sylius_product_option_translation` (`id`, `translatable_id`, `name`, `locale`)
VALUES
	(1,1,'T-shirt size','en_US'),
	(2,2,'Dress size','en_US'),
	(3,3,'Dress height','en_US'),
	(4,4,'Jeans size','en_US');

/*!40000 ALTER TABLE `sylius_product_option_translation` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_option_value` WRITE;
/*!40000 ALTER TABLE `sylius_product_option_value` DISABLE KEYS */;

INSERT INTO `sylius_product_option_value` (`id`, `option_id`, `code`)
VALUES
	(1,1,'t_shirt_size_s'),
	(2,1,'t_shirt_size_m'),
	(3,1,'t_shirt_size_l'),
	(4,1,'t_shirt_size_xl'),
	(5,1,'t_shirt_size_xxl'),
	(6,2,'dress_s'),
	(7,2,'dress_m'),
	(8,2,'dress_l'),
	(9,2,'dress_xl'),
	(10,2,'dress_xxl'),
	(11,3,'dress_height_petite'),
	(12,3,'dress_height_regular'),
	(13,3,'dress_height_tall'),
	(14,4,'jeans_size_s'),
	(15,4,'jeans_size_m'),
	(16,4,'jeans_size_l'),
	(17,4,'jeans_size_xl'),
	(18,4,'jeans_size_xxl');

/*!40000 ALTER TABLE `sylius_product_option_value` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_option_value_translation` WRITE;
/*!40000 ALTER TABLE `sylius_product_option_value_translation` DISABLE KEYS */;

INSERT INTO `sylius_product_option_value_translation` (`id`, `translatable_id`, `value`, `locale`)
VALUES
	(1,1,'S','en_US'),
	(2,2,'M','en_US'),
	(3,3,'L','en_US'),
	(4,4,'XL','en_US'),
	(5,5,'XXL','en_US'),
	(6,6,'S','en_US'),
	(7,7,'M','en_US'),
	(8,8,'L','en_US'),
	(9,9,'XL','en_US'),
	(10,10,'XXL','en_US'),
	(11,11,'Petite','en_US'),
	(12,12,'Regular','en_US'),
	(13,13,'Tall','en_US'),
	(14,14,'S','en_US'),
	(15,15,'M','en_US'),
	(16,16,'L','en_US'),
	(17,17,'XL','en_US'),
	(18,18,'XXL','en_US');

/*!40000 ALTER TABLE `sylius_product_option_value_translation` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_options` WRITE;
/*!40000 ALTER TABLE `sylius_product_options` DISABLE KEYS */;

INSERT INTO `sylius_product_options` (`product_id`, `option_id`)
VALUES
	(1,1),
	(2,1),
	(3,1),
	(4,1),
	(5,1),
	(6,1),
	(11,2),
	(11,3),
	(12,2),
	(12,3),
	(13,2),
	(13,3),
	(14,4),
	(15,4),
	(16,4),
	(17,4),
	(18,4),
	(19,4),
	(20,4),
	(21,4);

/*!40000 ALTER TABLE `sylius_product_options` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `sylius_product_review` WRITE;
/*!40000 ALTER TABLE `sylius_product_review` DISABLE KEYS */;

INSERT INTO `sylius_product_review` (`id`, `product_id`, `author_id`, `title`, `rating`, `comment`, `status`, `created_at`, `updated_at`)
VALUES
	(1,3,14,'nam asperiores quas',2,'Rerum maxime quo et et. Et architecto aut et enim rerum non. Est quo delectus eos magnam.','rejected','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(2,4,7,'aliquid dolor nemo',3,'Atque nihil et voluptas sed. Repellendus consequatur voluptatem fugit atque nemo. Iste maiores aliquid et laboriosam.','rejected','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(3,21,4,'ipsa sit eveniet',4,'Dolore accusamus est voluptas vel non. Labore commodi eveniet laboriosam vero ab dolores iusto. Quos autem in quo dolores quia et.','rejected','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(4,16,20,'numquam perspiciatis numquam',5,'Qui ut eius quia commodi. Velit numquam esse ut illum. Debitis laboriosam perspiciatis modi quod.','rejected','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(5,18,19,'expedita aut sed',5,'Quae facilis iure libero est incidunt quas qui. Aut est ad aut aut voluptatem doloremque. At consectetur animi et exercitationem.','new','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(6,19,21,'porro consectetur voluptatem',2,'Est quibusdam autem sed ut. Non sapiente itaque sunt veniam. Ut ab accusantium ea recusandae facilis nulla.','new','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(7,1,19,'atque nihil autem',2,'Recusandae et accusantium odio laudantium aut qui. Soluta voluptatibus facilis consequatur aut cum enim. Est ipsum vero dicta et.','rejected','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(8,13,16,'id earum sit',2,'Labore ab consequatur quisquam accusamus culpa libero nihil veritatis. Sint sit aperiam sit perferendis itaque. Minus unde dolor consequuntur veniam eum rerum voluptas.','new','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(9,2,10,'non dolorem et',3,'Aut et dolore quia. Id neque et veniam autem. Sit sed dolor provident qui.','accepted','2019-11-26 01:08:14','2019-11-26 01:08:15'),
	(10,20,12,'velit sequi aut',1,'Aut facilis et placeat vero non ut quae. Facilis autem ex nostrum magnam assumenda. Est beatae possimus at voluptas.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(11,8,3,'quidem optio et',2,'Veniam fugiat consequatur ipsam est quae. Ut qui velit reiciendis quia animi. Aperiam aut reiciendis ipsum consequatur accusantium veniam.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(12,3,10,'laudantium culpa minima',5,'Necessitatibus eligendi qui saepe laboriosam. Et distinctio sed aut est. Magni at eligendi eligendi incidunt vel.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(13,13,16,'quasi saepe error',5,'Ea unde vero omnis qui. Adipisci quia amet enim molestias animi placeat maxime sint. Sit ut harum id quia maxime voluptas libero sapiente.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(14,20,20,'rem ratione autem',5,'Autem rerum nam porro dolores qui. Sunt et est amet eius eos non. Suscipit nulla aspernatur sint atque dicta.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(15,14,16,'optio et temporibus',1,'Voluptas deleniti ut quod et aut. Ut alias est incidunt eaque. Nostrum error molestias et occaecati repudiandae.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(16,7,21,'blanditiis impedit dolorem',2,'Omnis natus et nobis eum odit quia autem. Sit ea non autem. Rem deleniti nemo eos.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(17,14,8,'quibusdam rerum fuga',3,'Vel voluptatem possimus laboriosam ut. Quia natus cum deleniti qui odit. Voluptates quisquam voluptatem voluptas consequuntur.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(18,5,21,'maxime quae expedita',2,'Consequuntur hic at consequatur dolorem id. Tempora et non dolore aliquam. Aliquid aspernatur et sit commodi omnis accusantium.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(19,21,10,'accusamus libero consequatur',4,'Veniam praesentium quas soluta ipsum qui eius. Illo iste libero nulla delectus aut vitae ea ea. Aperiam delectus et labore hic.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(20,20,17,'earum id dolore',2,'Exercitationem sit esse molestias sunt sunt veritatis. Consectetur possimus aliquid molestiae iusto quia corrupti perferendis. Nulla vitae voluptatem alias.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(21,17,12,'dignissimos et tenetur',2,'Voluptatibus nobis ut quia nam facere fugiat. Ut qui est officia quaerat in architecto. Recusandae fugiat facere et quas nobis optio officiis.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(22,10,7,'sint dolorum quam',5,'Nihil eum similique non fugit aut dicta dolores. Cumque repellendus et harum illum voluptate voluptatem accusantium. Molestiae nemo voluptatibus ex.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(23,21,19,'sit assumenda quo',1,'Sit sunt quis omnis qui totam in praesentium. Vel saepe at harum ab blanditiis veniam dolor. Nihil et sit dolorem.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(24,14,1,'exercitationem velit eligendi',2,'Inventore recusandae molestiae dolorum. Omnis et voluptatem eaque ipsum qui quas. Ad labore commodi molestias magni.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(25,15,6,'deserunt non nisi',1,'Omnis nisi doloremque perferendis et harum. Omnis voluptas aperiam nulla sint enim. At magnam occaecati non rerum voluptatum.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(26,3,14,'eius ullam quidem',3,'Temporibus soluta adipisci nihil tenetur error. Ad voluptatem blanditiis incidunt libero consequuntur ipsam voluptatem. Unde quia laboriosam repellat quam sint magnam.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(27,3,13,'sit dolorem et',1,'Laborum placeat quasi sapiente. Est earum facere dolorum blanditiis vel. Ducimus porro odit accusantium et enim qui.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(28,11,15,'tenetur odit a',1,'Corporis dolores sunt voluptas esse. Labore voluptates aut ea perferendis tempora voluptatem accusantium. Quis accusantium temporibus sunt illum unde.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(29,12,11,'provident laboriosam omnis',4,'Rerum quis et at laboriosam. Voluptas rem nostrum facilis magni. Sit ab tenetur sit numquam inventore culpa.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(30,10,21,'iste doloribus maxime',3,'Accusamus quidem tempora exercitationem et sit. Placeat eaque sunt architecto aliquid necessitatibus recusandae. Ut odio aut voluptatem aperiam vero soluta.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(31,16,5,'illum ut odio',1,'Atque ea dolores voluptatem odio. Aut alias qui atque. Dolor quia nihil magni rem.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(32,21,7,'et nihil nemo',1,'Fugit pariatur quo saepe ad harum. Unde natus impedit veniam autem voluptatem debitis corrupti. Eius repellat officiis laudantium.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(33,1,6,'in omnis aut',4,'Quae repudiandae voluptas qui aut. Aut qui ut exercitationem ut eum minus animi nobis. Libero quia et doloribus rerum tenetur.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(34,10,10,'animi tempora dignissimos',5,'Maxime doloribus est sit ad. Non aliquam officiis recusandae omnis. Inventore est qui et repellat nisi molestias.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(35,12,3,'libero quisquam cum',1,'Et alias optio similique assumenda eum. Odit quasi rerum libero accusantium qui aut autem eos. Sed cum voluptatem voluptatum vero.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(36,1,19,'voluptates laboriosam consequatur',4,'Tenetur error et odio magni corrupti. Consequuntur nisi ratione perspiciatis quia. Consequatur non itaque et quibusdam ut facilis veritatis aut.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(37,15,3,'corrupti aut rem',2,'Et corrupti non cupiditate dolor dolor. Nobis qui nobis consequatur dolorem. Cupiditate qui corrupti ut qui exercitationem.','accepted','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(38,13,6,'vel alias accusantium',3,'In ut quisquam ut perspiciatis sunt voluptatum natus consequuntur. Laboriosam ipsam veritatis odit nemo id fugiat. Expedita velit et ratione ea qui explicabo ratione possimus.','new','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(39,16,2,'corporis voluptates vitae',5,'Similique sit soluta voluptates eum dolore sint fugit. Cum soluta aut ab sed ex. Cum voluptatem aut consequatur neque autem.','rejected','2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(40,6,11,'ea voluptatem asperiores',5,'Illum sint saepe itaque. Sapiente provident odit quia et rerum et expedita nihil. Quia aut quisquam sed distinctio quis perspiciatis.','new','2019-11-26 01:08:15','2019-11-26 01:08:15');

/*!40000 ALTER TABLE `sylius_product_review` ENABLE KEYS */;
UNLOCK TABLES;


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
	(1,1,2,0),
	(2,1,4,0),
	(3,2,2,1),
	(4,2,4,1),
	(5,3,2,2),
	(6,3,4,2),
	(7,4,2,3),
	(8,4,3,0),
	(9,5,2,4),
	(10,5,3,1),
	(11,6,2,5),
	(12,6,3,2),
	(13,7,5,0),
	(14,7,7,0),
	(15,8,5,1),
	(16,8,6,0),
	(17,9,5,2),
	(18,9,7,1),
	(19,10,5,3),
	(20,10,6,1),
	(21,11,8,0),
	(22,12,8,1),
	(23,13,8,2),
	(24,14,9,0),
	(25,14,10,0),
	(26,15,9,1),
	(27,15,10,1),
	(28,16,9,2),
	(29,16,10,2),
	(30,17,9,3),
	(31,17,10,3),
	(32,18,9,4),
	(33,18,11,0),
	(34,19,9,5),
	(35,19,11,1),
	(36,20,9,6),
	(37,20,11,2),
	(38,21,9,7),
	(39,21,11,3);

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
	(1,1,'Basic regular woman','basic-regular-woman','Omnis nihil voluptatem et et temporibus aliquid. Culpa tenetur sunt maxime temporibus quos sed ut. A deserunt dolorem ea rerum sunt earum voluptate. Dolores quisquam quod commodi autem earum delectus.\n\nAutem nulla iusto consequatur vel ad corrupti. Ut velit voluptas rerum illum accusantium deleniti. Et a nobis provident sequi. In ab et recusandae commodi iure magnam.\n\nDicta similique non dolorum perspiciatis nihil expedita. Eligendi non culpa voluptatibus blanditiis. Provident sint sit eum odio ex impedit. Consequatur tempore voluptas quis adipisci rem.',NULL,NULL,'Sint exercitationem nostrum repellendus quis qui fugiat. Ut placeat sint iusto voluptatem molestias vel. Sit pariatur explicabo possimus sed. Culpa ea optio reiciendis illum voluptatem culpa.','en_US'),
	(2,2,'Slim fit woman','slim-fit-woman','Deserunt et est sit. Rem distinctio iusto tempora pariatur sint enim autem. Vel culpa sit nulla non.\n\nLibero quidem reprehenderit ea ullam in minus quibusdam. Quasi libero temporibus est necessitatibus. Beatae ducimus est saepe repellat aut sapiente.\n\nId neque facere sequi quod. Adipisci accusantium veritatis ex nostrum. Sed ullam unde modi quam iure. Animi molestiae corporis dolor nihil pariatur voluptas.',NULL,NULL,'Officia repellendus et doloremque qui. Et id sit autem et similique. Voluptas est et unde dignissimos debitis rerum dolorem provident. Quos fugiat quis aut ipsa.','en_US'),
	(3,3,'Regular Fit V-neck woman','regular-fit-v-neck-woman','Odit et sint placeat tempore sit sed voluptatem. Minus omnis et ipsa voluptatem atque. Sed et autem quis id perspiciatis ipsam. Recusandae qui voluptatem ea quisquam et quia.\n\nVoluptas sit aspernatur harum qui quidem neque consectetur. Corrupti aperiam sed reiciendis voluptas. Eligendi distinctio ut nihil similique saepe itaque. Molestias aperiam non reiciendis dicta.\n\nOfficia voluptatem tempore eum velit necessitatibus nisi corrupti. Non dolore ipsam est aut. Qui repellat sit laboriosam soluta. Consectetur asperiores nam eius voluptas eum perspiciatis sint voluptatem.',NULL,NULL,'Quis a quod est illo aliquam soluta dicta. Tempora iure placeat veniam. Odit aliquam iste fugiat eos aut sed itaque eius. Dolorem eaque inventore amet ea occaecati alias repellendus.','en_US'),
	(4,4,'Slim fit men','slim-fit-men','Occaecati consequatur natus commodi ea aspernatur. Sequi et fuga libero doloribus tenetur repellendus. Excepturi libero blanditiis eum aut delectus incidunt. Rerum ipsam et minus molestiae repellat voluptatibus et.\n\nEx at soluta sit aperiam ad sit. Corporis necessitatibus et repudiandae non expedita.\n\nCum rerum veritatis animi. Blanditiis omnis molestiae quia sit. Harum et natus repellendus recusandae.',NULL,NULL,'Aut distinctio eum ab non. Culpa esse vel qui provident aut distinctio molestiae.','en_US'),
	(5,5,'Regular fit men','regular-fit-men','Mollitia aut eveniet voluptatem voluptatum veniam aut sed. Tempore assumenda ad mollitia. Pariatur dolorem aperiam minus cupiditate porro.\n\nNon reprehenderit voluptatem sunt omnis dolore. Soluta et asperiores necessitatibus ut. Tempora dolore dolores at sapiente voluptatum. Repudiandae doloribus et distinctio autem illo ut nemo. Officiis consequatur harum dicta qui cumque quo.\n\nNatus enim veritatis non et. Libero veniam et minus hic. Non sed suscipit nam ea voluptas. Saepe autem deserunt ad autem. Illo voluptatem eligendi quam aspernatur autem.',NULL,NULL,'Labore laborum ea rerum quo. Eos qui porro autem nobis voluptatem. Qui velit eum similique vel sunt officia natus.','en_US'),
	(6,6,'Slim fit V-neck men','slim-fit-v-neck-men','Totam qui asperiores qui id qui. Corrupti iure itaque enim numquam nisi aut. Eos quod adipisci provident.\n\nAut voluptas tempore aperiam facere. Aliquam veniam accusamus ipsam minus. Officia eveniet optio ut facilis.\n\nSimilique adipisci voluptatem cum quidem architecto. Reiciendis repellat a dolores et accusantium voluptate. Veniam recusandae praesentium impedit a molestiae aut mollitia. Harum quidem laborum voluptatum voluptate nihil dolorem perferendis. Amet velit excepturi molestiae maxime alias iure.',NULL,NULL,'Et veniam et est unde quam. Dolor qui harum accusamus quos. Inventore libero quis et ullam ut ut.','en_US'),
	(7,7,'Basic winter hot cap','basic-winter-hot-cap','Quos adipisci consectetur cumque debitis fugit et sit. Qui non corrupti aut et. Labore voluptates sunt dignissimos sit soluta.\n\nAnimi ea natus beatae nihil. Fugiat voluptatum est maiores. Rerum exercitationem impedit odio repudiandae commodi consequatur.\n\nAmet exercitationem eveniet aut est nulla sed soluta. Deserunt voluptatem velit soluta optio. Autem sequi fuga voluptatem culpa est hic aperiam explicabo.',NULL,NULL,'Voluptas molestias consequatur voluptatibus in. Sunt et expedita ullam nobis.','en_US'),
	(8,8,'Beautiful cap for woman','beautiful-cap-for-woman','Natus aut rem et aut rerum repellendus aspernatur autem. Aspernatur rerum natus id voluptatem molestiae molestiae.\n\nQuo quod ratione sed aut. Temporibus temporibus esse qui laudantium et qui a. Dolor earum quos tempore provident porro sequi.\n\nIpsa qui optio repellendus debitis similique facere omnis dolor. Culpa magnam qui quam voluptas. Nisi voluptate autem tempora molestiae repellendus eos ea. Vitae aut omnis ut itaque et blanditiis.',NULL,NULL,'Explicabo facere iusto aperiam. Harum reiciendis unde ut ipsam doloribus doloribus dolor. Libero sapiente cum natus molestias.','en_US'),
	(9,9,'Regular cap with big pompon','regular-cap-with-big-pompon','Nostrum a ea nisi consequatur. Cum non labore qui eveniet harum voluptatibus animi unde. Autem omnis labore corrupti soluta qui nihil.\n\nPerspiciatis dolorum voluptatem accusamus optio sed iure est expedita. Dolores quam nulla ullam dolorem nesciunt. Unde itaque animi aut sed. Aut commodi qui odit sunt est non. Ut fugit consequuntur qui illum libero explicabo.\n\nCulpa dolorem voluptate aperiam est. At dolorem non nostrum sit. Ipsam aut expedita error necessitatibus pariatur.',NULL,NULL,'Vel veniam repudiandae aliquid accusantium laudantium voluptas. Voluptatum molestiae suscipit sunt consectetur. Incidunt vero quaerat similique itaque quisquam non.','en_US'),
	(10,10,'Simple cap','simple-cap','Aliquid doloribus id et minus. Distinctio neque architecto odit ut.\n\nExplicabo adipisci dolorem nisi autem alias sit recusandae quis. Nihil quia est alias eaque tenetur sint. Atque debitis voluptas consequatur id odio suscipit. Ad minima quam autem.\n\nDolor sed ut cum laborum ipsum. Aspernatur ea consequatur vel. Qui et dolores laudantium ipsum. Eligendi minus quisquam adipisci.',NULL,NULL,'Molestias nemo eos molestiae odio doloribus illum. Aut sed harum incidunt dolorem. Consequatur veniam aut saepe tenetur sed. Consequatur quis veniam id provident qui iure ducimus.','en_US'),
	(11,11,'Circle-skirt Dress','circle-skirt-dress','Velit ad nihil est et recusandae asperiores et. Quibusdam autem aperiam alias dolores nisi. Deleniti a sequi facilis doloremque quia. Dolorum quos occaecati est minima nemo.\n\nVero odio labore suscipit impedit a. Aut cum at ratione et dolor expedita. Sit ipsum ut animi incidunt blanditiis quasi dolor. Aperiam inventore at eaque sed debitis quos.\n\nVoluptas aliquid et quo accusamus. Cum sit facere itaque voluptatum est. Et nobis expedita deleniti culpa excepturi. Dolores dolores quas quia harum vitae consequatur.',NULL,NULL,'Dignissimos assumenda dolorem fugit officia iusto ut. Et incidunt consequuntur dolores.','en_US'),
	(12,12,'Sleeveless Dress','sleeveless-dress','Deleniti laborum sit quae est. Iure omnis totam voluptas nihil at at aperiam. Deserunt molestiae delectus ut aut iusto quia quia. Dolor nam quia sit cupiditate nulla et qui. Asperiores quia consequatur dicta quis.\n\nAliquam rerum nobis unde praesentium iste est. Blanditiis perferendis et omnis ducimus.\n\nCorrupti reiciendis eum quia consequatur adipisci voluptatem nisi quisquam. Aut ratione hic officiis consequatur. Sunt tenetur consequatur assumenda aperiam qui. Molestiae qui libero repudiandae qui minima officia. Non et hic quos aut.',NULL,NULL,'Dolores autem rerum sed maxime ut sequi porro. Praesentium illo exercitationem possimus veniam dolor.','en_US'),
	(13,13,'Summer tunic','summer-tunic','Ut atque corporis qui molestias est. Rem qui nesciunt ex praesentium. Aperiam libero ea est.\n\nNulla rerum et illo et doloribus repellendus assumenda. Debitis qui odio in aliquid officia similique natus. Quisquam dignissimos labore quia in et ullam.\n\nNemo inventore nobis ea deserunt iste numquam. Velit illum velit suscipit consectetur fugit ut cupiditate porro. Omnis sed inventore dignissimos possimus.',NULL,NULL,'Et mollitia sint fugiat ut accusantium harum. In ut officiis aut earum quia enim est. Omnis repellendus consequuntur voluptates vel quisquam.','en_US'),
	(14,14,'Basic regular','basic-regular','Aut magnam itaque magnam qui. Repellendus nesciunt totam ullam repellat facilis. Expedita molestiae modi explicabo libero. Rerum id quas sunt alias voluptas cupiditate fugit.\n\nFugiat facere autem quia ullam. Quia harum qui quas perspiciatis magni qui. Ad iusto quas dolorum a molestiae similique eaque. Voluptates tenetur et sapiente cumque accusamus commodi itaque quos.\n\nDoloribus at sint est natus provident nulla est. Repellendus perspiciatis odit autem aut voluptatem aut minus. Ut mollitia atque eos provident.',NULL,NULL,'Nemo sed velit quae qui assumenda nisi iure. Aut assumenda dolor quos qui ipsum sunt amet. Minus facilis tempora unde eveniet doloremque. Iste voluptate nihil quia culpa sit numquam occaecati.','en_US'),
	(15,15,'Slim fit classic','slim-fit-classic','Suscipit ut hic nemo et. Magnam laborum fugiat numquam deserunt saepe.\n\nIpsa et in architecto doloremque. Eveniet dolores deserunt cum ea nihil eos amet.\n\nAb optio nihil similique ut. Reiciendis ut aut aut enim ducimus ad architecto adipisci. Aliquam consectetur provident assumenda laborum.',NULL,NULL,'Impedit consectetur vero aut alias dolorum. Beatae ipsa et et sed tempore. Eum dolorem repellendus et rerum dolor.','en_US'),
	(16,16,'Regular Fit casual','regular-fit-casual','Saepe modi rem dolorem ea. Non atque et reiciendis. Facilis mollitia et velit odit consequatur voluptate aut. Praesentium aut fugit qui ut in esse provident. Maiores id voluptatibus ipsam voluptatibus ducimus sed facere.\n\nSint enim in inventore dolores maiores vel. Cum qui voluptatibus fugiat vel magnam. Recusandae blanditiis nobis autem tempora earum. Qui sint a eligendi aut fuga.\n\nCorporis laboriosam omnis laboriosam a ea quam cupiditate. Cupiditate soluta provident cumque nemo. Optio quia vero accusamus voluptas. Eos necessitatibus nam non culpa quas laborum quis.',NULL,NULL,'Aperiam culpa quas deleniti illum. Atque aut ut quo numquam veritatis. Et eligendi ut laborum quo dolor. Consequuntur quaerat quibusdam quia.','en_US'),
	(17,17,'Slim fit elegant','slim-fit-elegant','Illo numquam similique at laboriosam expedita at vero. Voluptatibus mollitia voluptatem libero ut est eum. Hic non rerum repellendus fugit doloremque aut accusantium illum.\n\nDicta ducimus veniam praesentium. Iusto eum aut eius quos sit praesentium saepe. Rerum sed et tempora.\n\nEveniet optio qui ut. Quis dolor explicabo id maxime. Cumque nostrum iste et eum sequi fugiat sapiente. Minima eligendi voluptatibus impedit quia.',NULL,NULL,'Unde neque et temporibus. Optio qui est autem. Cupiditate error repellendus omnis eaque cum fuga eum. Magni illo qui architecto mollitia ullam debitis aut.','en_US'),
	(18,18,'Ultra slim','ultra-slim','Dignissimos aperiam consequatur id harum. Rem sed aut eligendi nemo tempore inventore vitae repellat. Voluptas officiis occaecati eveniet totam excepturi sed sit.\n\nQui id perspiciatis eos autem molestiae. Aut blanditiis sint facere veniam impedit at. Qui sint provident et eligendi. Nisi veritatis ex magnam quia tempora expedita.\n\nIn iure accusamus eveniet eum dolorum molestias veniam non. Aliquam blanditiis vitae ut corrupti sed doloribus illo. Architecto vitae sequi adipisci eos est nesciunt.',NULL,NULL,'Ad impedit aliquid facilis. Incidunt nihil nobis voluptatem ipsum. Veniam non illo quam quam molestias.','en_US'),
	(19,19,'Slim fit','slim-fit','Nisi voluptatem ratione minima natus maiores. Amet temporibus consequatur illo vel ratione ut ut rerum. Animi ut illo voluptatum minus eos. Aperiam ea asperiores voluptatem minus atque et.\n\nNon rerum doloremque ea aut necessitatibus rerum. At ipsa corrupti sapiente aut explicabo dolorem. Eos sint odio velit odit ut ut.\n\nAliquam aut provident laudantium adipisci blanditiis asperiores accusamus. Modi odio et qui. Consequatur architecto ducimus officiis eveniet officiis sint suscipit magnam.',NULL,NULL,'Sed explicabo molestiae nam sunt animi tempora est. Tempore beatae minus cumque et qui a. Necessitatibus doloremque officiis eos molestias ab est libero.','en_US'),
	(20,20,'New age regular','new-age-regular','Accusantium odit magnam architecto aliquid tempore et suscipit nisi. Dolore magnam similique neque deleniti architecto reiciendis.\n\nVoluptate rem ad facilis sit ipsum nihil. Aspernatur ut enim deserunt voluptatem labore quisquam ea asperiores. Molestiae tenetur qui illo.\n\nQuibusdam aut sequi est illo. Odio facilis eum nemo. Fugiat architecto et laborum eligendi ipsa reiciendis expedita.',NULL,NULL,'Ex sit aut vitae explicabo neque eaque ea. Sequi beatae omnis et et sed maiores. Iusto id voluptatem tempora minima.','en_US'),
	(21,21,'Whole holes classic','whole-holes-classic','Quisquam a et perspiciatis vel corrupti tempore fugiat cumque. Ut eos soluta doloribus eos quis dolores eum accusamus.\n\nId quod rerum exercitationem et voluptates. Voluptate et voluptatum itaque nulla voluptas id. Quasi velit alias corporis tempore. Ut possimus aut quis ipsa optio blanditiis facere.\n\nSed ipsa doloribus accusamus sapiente itaque et modi. Quis reprehenderit provident eligendi dolores. Eos deleniti error labore minus.',NULL,NULL,'Iusto ab sit quisquam soluta. Et dolores quis eius maxime a sunt. Rerum laboriosam dolorem laboriosam neque. Omnis eum odio suscipit optio.','en_US');

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
	(1,1,1,NULL,'Basic_regular_woman-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(2,1,1,NULL,'Basic_regular_woman-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(3,1,1,NULL,'Basic_regular_woman-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(4,1,1,NULL,'Basic_regular_woman-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(5,1,1,NULL,'Basic_regular_woman-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(6,2,1,NULL,'Slim_fit_woman-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(7,2,1,NULL,'Slim_fit_woman-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(8,2,1,NULL,'Slim_fit_woman-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(9,2,1,NULL,'Slim_fit_woman-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(10,2,1,NULL,'Slim_fit_woman-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(11,3,1,NULL,'Regular_Fit_V_neck_woman-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(12,3,1,NULL,'Regular_Fit_V_neck_woman-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(13,3,1,NULL,'Regular_Fit_V_neck_woman-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(14,3,1,NULL,'Regular_Fit_V_neck_woman-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(15,3,1,NULL,'Regular_Fit_V_neck_woman-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(16,4,1,NULL,'Slim_fit_men-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(17,4,1,NULL,'Slim_fit_men-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(18,4,1,NULL,'Slim_fit_men-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(19,4,1,NULL,'Slim_fit_men-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(20,4,1,NULL,'Slim_fit_men-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(21,5,1,NULL,'Regular_fit_men-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(22,5,1,NULL,'Regular_fit_men-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(23,5,1,NULL,'Regular_fit_men-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(24,5,1,NULL,'Regular_fit_men-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(25,5,1,NULL,'Regular_fit_men-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(26,6,1,NULL,'Slim_fit_V_neck_men-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(27,6,1,NULL,'Slim_fit_V_neck_men-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(28,6,1,NULL,'Slim_fit_V_neck_men-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(29,6,1,NULL,'Slim_fit_V_neck_men-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(30,6,1,NULL,'Slim_fit_V_neck_men-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(31,7,2,NULL,'Basic_winter_hot_cap-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(32,8,2,NULL,'Beautiful_cap_for_woman-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(33,9,2,NULL,'Regular_cap_with_big_pompon-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(34,10,2,NULL,'Simple_cap-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(35,11,1,NULL,'Circle_skirt_Dress-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(36,11,1,NULL,'Circle_skirt_Dress-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(37,11,1,NULL,'Circle_skirt_Dress-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(38,11,1,NULL,'Circle_skirt_Dress-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(39,11,1,NULL,'Circle_skirt_Dress-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(40,11,1,NULL,'Circle_skirt_Dress-variant-5','2019-11-26 01:08:14','2019-11-26 01:08:14',5,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(41,11,1,NULL,'Circle_skirt_Dress-variant-6','2019-11-26 01:08:14','2019-11-26 01:08:14',6,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(42,11,1,NULL,'Circle_skirt_Dress-variant-7','2019-11-26 01:08:14','2019-11-26 01:08:14',7,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(43,11,1,NULL,'Circle_skirt_Dress-variant-8','2019-11-26 01:08:14','2019-11-26 01:08:14',8,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(44,11,1,NULL,'Circle_skirt_Dress-variant-9','2019-11-26 01:08:14','2019-11-26 01:08:14',9,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(45,11,1,NULL,'Circle_skirt_Dress-variant-10','2019-11-26 01:08:14','2019-11-26 01:08:14',10,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(46,11,1,NULL,'Circle_skirt_Dress-variant-11','2019-11-26 01:08:14','2019-11-26 01:08:14',11,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(47,11,1,NULL,'Circle_skirt_Dress-variant-12','2019-11-26 01:08:14','2019-11-26 01:08:14',12,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(48,11,1,NULL,'Circle_skirt_Dress-variant-13','2019-11-26 01:08:14','2019-11-26 01:08:14',13,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(49,11,1,NULL,'Circle_skirt_Dress-variant-14','2019-11-26 01:08:14','2019-11-26 01:08:14',14,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(50,12,1,NULL,'Sleeveless_Dress-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(51,12,1,NULL,'Sleeveless_Dress-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(52,12,1,NULL,'Sleeveless_Dress-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(53,12,1,NULL,'Sleeveless_Dress-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(54,12,1,NULL,'Sleeveless_Dress-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(55,12,1,NULL,'Sleeveless_Dress-variant-5','2019-11-26 01:08:14','2019-11-26 01:08:14',5,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(56,12,1,NULL,'Sleeveless_Dress-variant-6','2019-11-26 01:08:14','2019-11-26 01:08:14',6,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(57,12,1,NULL,'Sleeveless_Dress-variant-7','2019-11-26 01:08:14','2019-11-26 01:08:14',7,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(58,12,1,NULL,'Sleeveless_Dress-variant-8','2019-11-26 01:08:14','2019-11-26 01:08:14',8,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(59,12,1,NULL,'Sleeveless_Dress-variant-9','2019-11-26 01:08:14','2019-11-26 01:08:14',9,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(60,12,1,NULL,'Sleeveless_Dress-variant-10','2019-11-26 01:08:14','2019-11-26 01:08:14',10,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(61,12,1,NULL,'Sleeveless_Dress-variant-11','2019-11-26 01:08:14','2019-11-26 01:08:14',11,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(62,12,1,NULL,'Sleeveless_Dress-variant-12','2019-11-26 01:08:14','2019-11-26 01:08:14',12,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(63,12,1,NULL,'Sleeveless_Dress-variant-13','2019-11-26 01:08:14','2019-11-26 01:08:14',13,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(64,12,1,NULL,'Sleeveless_Dress-variant-14','2019-11-26 01:08:14','2019-11-26 01:08:14',14,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(65,13,1,NULL,'Summer_tunic-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(66,13,1,NULL,'Summer_tunic-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(67,13,1,NULL,'Summer_tunic-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(68,13,1,NULL,'Summer_tunic-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(69,13,1,NULL,'Summer_tunic-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(70,13,1,NULL,'Summer_tunic-variant-5','2019-11-26 01:08:14','2019-11-26 01:08:14',5,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(71,13,1,NULL,'Summer_tunic-variant-6','2019-11-26 01:08:14','2019-11-26 01:08:14',6,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(72,13,1,NULL,'Summer_tunic-variant-7','2019-11-26 01:08:14','2019-11-26 01:08:14',7,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(73,13,1,NULL,'Summer_tunic-variant-8','2019-11-26 01:08:14','2019-11-26 01:08:14',8,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(74,13,1,NULL,'Summer_tunic-variant-9','2019-11-26 01:08:14','2019-11-26 01:08:14',9,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(75,13,1,NULL,'Summer_tunic-variant-10','2019-11-26 01:08:14','2019-11-26 01:08:14',10,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(76,13,1,NULL,'Summer_tunic-variant-11','2019-11-26 01:08:14','2019-11-26 01:08:14',11,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(77,13,1,NULL,'Summer_tunic-variant-12','2019-11-26 01:08:14','2019-11-26 01:08:14',12,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(78,13,1,NULL,'Summer_tunic-variant-13','2019-11-26 01:08:14','2019-11-26 01:08:14',13,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(79,13,1,NULL,'Summer_tunic-variant-14','2019-11-26 01:08:14','2019-11-26 01:08:14',14,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(80,14,1,NULL,'Basic_regular-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(81,14,1,NULL,'Basic_regular-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(82,14,1,NULL,'Basic_regular-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(83,14,1,NULL,'Basic_regular-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(84,14,1,NULL,'Basic_regular-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(85,15,1,NULL,'Slim_fit_classic-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(86,15,1,NULL,'Slim_fit_classic-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(87,15,1,NULL,'Slim_fit_classic-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(88,15,1,NULL,'Slim_fit_classic-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(89,15,1,NULL,'Slim_fit_classic-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(90,16,1,NULL,'Regular_Fit_casual-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(91,16,1,NULL,'Regular_Fit_casual-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(92,16,1,NULL,'Regular_Fit_casual-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(93,16,1,NULL,'Regular_Fit_casual-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,9,0,NULL,NULL,NULL,NULL,1),
	(94,16,1,NULL,'Regular_Fit_casual-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(95,17,1,NULL,'Slim_fit_elegant-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(96,17,1,NULL,'Slim_fit_elegant-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(97,17,1,NULL,'Slim_fit_elegant-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(98,17,1,NULL,'Slim_fit_elegant-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(99,17,1,NULL,'Slim_fit_elegant-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(100,18,1,NULL,'Ultra_slim-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(101,18,1,NULL,'Ultra_slim-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(102,18,1,NULL,'Ultra_slim-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(103,18,1,NULL,'Ultra_slim-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(104,18,1,NULL,'Ultra_slim-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,1,0,NULL,NULL,NULL,NULL,1),
	(105,19,1,NULL,'Slim_fit-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,4,0,NULL,NULL,NULL,NULL,1),
	(106,19,1,NULL,'Slim_fit-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,8,0,NULL,NULL,NULL,NULL,1),
	(107,19,1,NULL,'Slim_fit-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(108,19,1,NULL,'Slim_fit-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(109,19,1,NULL,'Slim_fit-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(110,20,1,NULL,'New_age_regular-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,5,0,NULL,NULL,NULL,NULL,1),
	(111,20,1,NULL,'New_age_regular-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(112,20,1,NULL,'New_age_regular-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(113,20,1,NULL,'New_age_regular-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,7,0,NULL,NULL,NULL,NULL,1),
	(114,20,1,NULL,'New_age_regular-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,3,0,NULL,NULL,NULL,NULL,1),
	(115,21,1,NULL,'Whole_holes_classic-variant-0','2019-11-26 01:08:14','2019-11-26 01:08:14',0,1,0,0,0,NULL,NULL,NULL,NULL,1),
	(116,21,1,NULL,'Whole_holes_classic-variant-1','2019-11-26 01:08:14','2019-11-26 01:08:14',1,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(117,21,1,NULL,'Whole_holes_classic-variant-2','2019-11-26 01:08:14','2019-11-26 01:08:14',2,1,0,6,0,NULL,NULL,NULL,NULL,1),
	(118,21,1,NULL,'Whole_holes_classic-variant-3','2019-11-26 01:08:14','2019-11-26 01:08:14',3,1,0,2,0,NULL,NULL,NULL,NULL,1),
	(119,21,1,NULL,'Whole_holes_classic-variant-4','2019-11-26 01:08:14','2019-11-26 01:08:14',4,1,0,4,0,NULL,NULL,NULL,NULL,1);

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

LOCK TABLES `sylius_product_variant_option_value` WRITE;
/*!40000 ALTER TABLE `sylius_product_variant_option_value` DISABLE KEYS */;

INSERT INTO `sylius_product_variant_option_value` (`variant_id`, `option_value_id`)
VALUES
	(1,1),
	(2,2),
	(3,3),
	(4,4),
	(5,5),
	(6,1),
	(7,2),
	(8,3),
	(9,4),
	(10,5),
	(11,1),
	(12,2),
	(13,3),
	(14,4),
	(15,5),
	(16,1),
	(17,2),
	(18,3),
	(19,4),
	(20,5),
	(21,1),
	(22,2),
	(23,3),
	(24,4),
	(25,5),
	(26,1),
	(27,2),
	(28,3),
	(29,4),
	(30,5),
	(35,6),
	(35,11),
	(36,6),
	(36,12),
	(37,6),
	(37,13),
	(38,7),
	(38,11),
	(39,7),
	(39,12),
	(40,7),
	(40,13),
	(41,8),
	(41,11),
	(42,8),
	(42,12),
	(43,8),
	(43,13),
	(44,9),
	(44,11),
	(45,9),
	(45,12),
	(46,9),
	(46,13),
	(47,10),
	(47,11),
	(48,10),
	(48,12),
	(49,10),
	(49,13),
	(50,6),
	(50,11),
	(51,6),
	(51,12),
	(52,6),
	(52,13),
	(53,7),
	(53,11),
	(54,7),
	(54,12),
	(55,7),
	(55,13),
	(56,8),
	(56,11),
	(57,8),
	(57,12),
	(58,8),
	(58,13),
	(59,9),
	(59,11),
	(60,9),
	(60,12),
	(61,9),
	(61,13),
	(62,10),
	(62,11),
	(63,10),
	(63,12),
	(64,10),
	(64,13),
	(65,6),
	(65,11),
	(66,6),
	(66,12),
	(67,6),
	(67,13),
	(68,7),
	(68,11),
	(69,7),
	(69,12),
	(70,7),
	(70,13),
	(71,8),
	(71,11),
	(72,8),
	(72,12),
	(73,8),
	(73,13),
	(74,9),
	(74,11),
	(75,9),
	(75,12),
	(76,9),
	(76,13),
	(77,10),
	(77,11),
	(78,10),
	(78,12),
	(79,10),
	(79,13),
	(80,14),
	(81,15),
	(82,16),
	(83,17),
	(84,18),
	(85,14),
	(86,15),
	(87,16),
	(88,17),
	(89,18),
	(90,14),
	(91,15),
	(92,16),
	(93,17),
	(94,18),
	(95,14),
	(96,15),
	(97,16),
	(98,17),
	(99,18),
	(100,14),
	(101,15),
	(102,16),
	(103,17),
	(104,18),
	(105,14),
	(106,15),
	(107,16),
	(108,17),
	(109,18),
	(110,14),
	(111,15),
	(112,16),
	(113,17),
	(114,18),
	(115,14),
	(116,15),
	(117,16),
	(118,17),
	(119,18);

/*!40000 ALTER TABLE `sylius_product_variant_option_value` ENABLE KEYS */;
UNLOCK TABLES;


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
	(1,1,'S','en_US'),
	(2,2,'M','en_US'),
	(3,3,'L','en_US'),
	(4,4,'XL','en_US'),
	(5,5,'XXL','en_US'),
	(6,6,'S','en_US'),
	(7,7,'M','en_US'),
	(8,8,'L','en_US'),
	(9,9,'XL','en_US'),
	(10,10,'XXL','en_US'),
	(11,11,'S','en_US'),
	(12,12,'M','en_US'),
	(13,13,'L','en_US'),
	(14,14,'XL','en_US'),
	(15,15,'XXL','en_US'),
	(16,16,'S','en_US'),
	(17,17,'M','en_US'),
	(18,18,'L','en_US'),
	(19,19,'XL','en_US'),
	(20,20,'XXL','en_US'),
	(21,21,'S','en_US'),
	(22,22,'M','en_US'),
	(23,23,'L','en_US'),
	(24,24,'XL','en_US'),
	(25,25,'XXL','en_US'),
	(26,26,'S','en_US'),
	(27,27,'M','en_US'),
	(28,28,'L','en_US'),
	(29,29,'XL','en_US'),
	(30,30,'XXL','en_US'),
	(31,31,'','en_US'),
	(32,32,'','en_US'),
	(33,33,'','en_US'),
	(34,34,'','en_US'),
	(35,35,'S Petite','en_US'),
	(36,36,'S Regular','en_US'),
	(37,37,'S Tall','en_US'),
	(38,38,'M Petite','en_US'),
	(39,39,'M Regular','en_US'),
	(40,40,'M Tall','en_US'),
	(41,41,'L Petite','en_US'),
	(42,42,'L Regular','en_US'),
	(43,43,'L Tall','en_US'),
	(44,44,'XL Petite','en_US'),
	(45,45,'XL Regular','en_US'),
	(46,46,'XL Tall','en_US'),
	(47,47,'XXL Petite','en_US'),
	(48,48,'XXL Regular','en_US'),
	(49,49,'XXL Tall','en_US'),
	(50,50,'S Petite','en_US'),
	(51,51,'S Regular','en_US'),
	(52,52,'S Tall','en_US'),
	(53,53,'M Petite','en_US'),
	(54,54,'M Regular','en_US'),
	(55,55,'M Tall','en_US'),
	(56,56,'L Petite','en_US'),
	(57,57,'L Regular','en_US'),
	(58,58,'L Tall','en_US'),
	(59,59,'XL Petite','en_US'),
	(60,60,'XL Regular','en_US'),
	(61,61,'XL Tall','en_US'),
	(62,62,'XXL Petite','en_US'),
	(63,63,'XXL Regular','en_US'),
	(64,64,'XXL Tall','en_US'),
	(65,65,'S Petite','en_US'),
	(66,66,'S Regular','en_US'),
	(67,67,'S Tall','en_US'),
	(68,68,'M Petite','en_US'),
	(69,69,'M Regular','en_US'),
	(70,70,'M Tall','en_US'),
	(71,71,'L Petite','en_US'),
	(72,72,'L Regular','en_US'),
	(73,73,'L Tall','en_US'),
	(74,74,'XL Petite','en_US'),
	(75,75,'XL Regular','en_US'),
	(76,76,'XL Tall','en_US'),
	(77,77,'XXL Petite','en_US'),
	(78,78,'XXL Regular','en_US'),
	(79,79,'XXL Tall','en_US'),
	(80,80,'S','en_US'),
	(81,81,'M','en_US'),
	(82,82,'L','en_US'),
	(83,83,'XL','en_US'),
	(84,84,'XXL','en_US'),
	(85,85,'S','en_US'),
	(86,86,'M','en_US'),
	(87,87,'L','en_US'),
	(88,88,'XL','en_US'),
	(89,89,'XXL','en_US'),
	(90,90,'S','en_US'),
	(91,91,'M','en_US'),
	(92,92,'L','en_US'),
	(93,93,'XL','en_US'),
	(94,94,'XXL','en_US'),
	(95,95,'S','en_US'),
	(96,96,'M','en_US'),
	(97,97,'L','en_US'),
	(98,98,'XL','en_US'),
	(99,99,'XXL','en_US'),
	(100,100,'S','en_US'),
	(101,101,'M','en_US'),
	(102,102,'L','en_US'),
	(103,103,'XL','en_US'),
	(104,104,'XXL','en_US'),
	(105,105,'S','en_US'),
	(106,106,'M','en_US'),
	(107,107,'L','en_US'),
	(108,108,'XL','en_US'),
	(109,109,'XXL','en_US'),
	(110,110,'S','en_US'),
	(111,111,'M','en_US'),
	(112,112,'L','en_US'),
	(113,113,'XL','en_US'),
	(114,114,'XXL','en_US'),
	(115,115,'S','en_US'),
	(116,116,'M','en_US'),
	(117,117,'L','en_US'),
	(118,118,'XL','en_US'),
	(119,119,'XXL','en_US');

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
	(1,'christmas','Christmas','Labore fugiat incidunt quibusdam et omnis corporis expedita.',0,0,NULL,18,0,NULL,NULL,'2019-11-26 01:08:14','2019-11-26 01:08:16'),
	(2,'new_year','New Year','Labore fugiat incidunt quibusdam et omnis corporis expedita.',2,0,10,10,0,'2019-11-19 01:08:14','2019-12-03 01:08:14','2019-11-26 01:08:14','2019-11-26 01:08:16');

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
	(1,1,'order_percentage_discount','a:1:{s:10:\"percentage\";d:0.41;}'),
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
	(1,1),
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

LOCK TABLES `sylius_promotion_order` WRITE;
/*!40000 ALTER TABLE `sylius_promotion_order` DISABLE KEYS */;

INSERT INTO `sylius_promotion_order` (`order_id`, `promotion_id`)
VALUES
	(1,1),
	(1,2),
	(2,1),
	(2,2),
	(3,1),
	(3,2),
	(4,1),
	(4,2),
	(5,1),
	(5,2),
	(6,1),
	(6,2),
	(7,1),
	(7,2),
	(8,2),
	(9,1),
	(9,2),
	(10,1),
	(10,2),
	(11,1),
	(12,1),
	(13,1),
	(14,1),
	(15,1),
	(17,1),
	(18,1),
	(19,1),
	(20,1);

/*!40000 ALTER TABLE `sylius_promotion_order` ENABLE KEYS */;
UNLOCK TABLES;


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
	(1,1,'cart_quantity','a:1:{s:5:\"count\";i:3;}'),
	(2,2,'item_total','a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:10000;}}');

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
	(1,2,1,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(2,1,2,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(3,2,3,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(4,3,4,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(5,2,5,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(6,1,6,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(7,1,7,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(8,2,8,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(9,2,9,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(10,1,10,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(11,3,11,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(12,3,12,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(13,3,13,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(14,3,14,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(15,3,15,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(16,3,16,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(17,2,17,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(18,3,18,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(19,1,19,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15'),
	(20,2,20,'ready',NULL,'2019-11-26 01:08:15','2019-11-26 01:08:15');

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
	(1,NULL,1,NULL,'ups','a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:751;}}',1,'flat_rate',1,0,NULL,'2019-11-26 01:08:10','2019-11-26 01:08:10'),
	(2,NULL,1,NULL,'dhl_express','a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:767;}}',1,'flat_rate',1,1,NULL,'2019-11-26 01:08:10','2019-11-26 01:08:10'),
	(3,NULL,1,NULL,'fedex','a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:317;}}',1,'flat_rate',1,2,NULL,'2019-11-26 01:08:10','2019-11-26 01:08:10');

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
	(1,1),
	(2,1),
	(3,1);

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
	(1,1,'UPS','Debitis dolorem id voluptas tempore id ex.','en_US'),
	(2,2,'DHL Express','Quidem molestiae quia est id saepe.','en_US'),
	(3,3,'FedEx','Fugit sit consequuntur sint et.','en_US');

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
	(1,'Sylius','0001112222','US','Test St. 15','eCommerce Town','00 33 22');

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
	(1,1,'shop@example.com','shop@example.com',1,'kkj1lidx4hwk88c0s4sg048cs4ckwco','$argon2i$v=19$m=65536,t=4,p=1$V3MvZUlJV1luczhubC9uMA$zE89nxaHczxWItA3O905cSA/am78UaD0vSnxIWSKzFs',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:10','2019-11-26 01:08:10','argon2i'),
	(2,2,'arne44@gmail.com','arne44@gmail.com',1,'nyr573yrjhck44gwcw8sksookow80c8','$argon2i$v=19$m=65536,t=4,p=1$MExRNng4UmNMLnQvaWRmVw$T0iIfPd9dfmiFMwEkwI3k1F2c+n0kRg72yTc/9j3Rv0',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:10','2019-11-26 01:08:10','argon2i'),
	(3,3,'javon.nolan@yahoo.com','javon.nolan@yahoo.com',1,'5bvx7nxdviosc4cw0cccwg0c8ccwoko','$argon2i$v=19$m=65536,t=4,p=1$eXFPYlBPWUwzSGR1a3RSdQ$r6hsDjLDBt0B39dC2+NSFRrGGj4ib7y5DHWiUnv99hA',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:10','2019-11-26 01:08:10','argon2i'),
	(4,4,'frami.howell@gmail.com','frami.howell@gmail.com',1,'l9xv1qmakxcskgg8cw484w8sk88ogo0','$argon2i$v=19$m=65536,t=4,p=1$SmJ1YzE5eFR2a2VPaUNFQQ$a3WPfXs56if2nxxv0sc6zBPwxTIGI5vktUx/Q/lJYS0',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:11','2019-11-26 01:08:11','argon2i'),
	(5,5,'alanis.pacocha@armstrong.com','alanis.pacocha@armstrong.com',1,'8w79ojtv2vc4w0o80sg0kkg4sok88s4','$argon2i$v=19$m=65536,t=4,p=1$OUFtdGhKZS43M2QxRTZvUQ$2AcnNKllr6XOQZBxAprJ7QxDpkqjifvoVXYOErUZePs',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:11','2019-11-26 01:08:11','argon2i'),
	(6,6,'jovanny.roob@hotmail.com','jovanny.roob@hotmail.com',1,'6a7soqprcpcso00gkgsog48o088cww4','$argon2i$v=19$m=65536,t=4,p=1$dGlZN05ZUldMYnFiU29saQ$hJRNftapJdYrvuvbNYmMw3GZ6Jv9BMGbp4W5nRyPegI',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:11','2019-11-26 01:08:11','argon2i'),
	(7,7,'russel.alayna@gmail.com','russel.alayna@gmail.com',1,'kks5s0hhn9c08ssosg00os80scswsgo','$argon2i$v=19$m=65536,t=4,p=1$c3ByODJId2R6dHJsNjhVLg$/3A5GqeXfZWLv6WH6pmJ7CxnPAVKB6t6YJ9h2/vMTYI',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:11','2019-11-26 01:08:11','argon2i'),
	(8,8,'lee.bernier@bartell.biz','lee.bernier@bartell.biz',1,'7164abxvfhs8ogcw8ww8gocosgks44k','$argon2i$v=19$m=65536,t=4,p=1$WVh3ejF1WnQzWXFKWWhiaw$VoyMliJNPTZAqU8BUYTq8MKTePO39iLi0+J8yJShGLU',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:11','2019-11-26 01:08:11','argon2i'),
	(9,9,'raphaelle.steuber@yahoo.com','raphaelle.steuber@yahoo.com',1,'dy2gyq7pe800c4wk4o8gk48oswoc08k','$argon2i$v=19$m=65536,t=4,p=1$N0VxSDdSeDc3N3U4T3FTVQ$YbHuqCyRXVGIPk/FAAsB23/5nMdd59GV9ri9xIK7I2w',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:11','2019-11-26 01:08:11','argon2i'),
	(10,10,'stokes.dante@yahoo.com','stokes.dante@yahoo.com',1,'nvme9gph9dco04c8osw8gw0skg4s08k','$argon2i$v=19$m=65536,t=4,p=1$NWYweDlBNHExTUhhU2p4Zg$+438kvr5+y77K8ZzZijPJ+Q8HlKqvPQq3OY+mHedq5g',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:12','2019-11-26 01:08:12','argon2i'),
	(11,11,'zhirthe@gibson.com','zhirthe@gibson.com',1,'5wm5e97g3nk04w0w8gsg8gswcwggogo','$argon2i$v=19$m=65536,t=4,p=1$UGl0MktTT3QvakNtdzhBag$GleQZSshnNYzc2zyeb5nNnojqFS8RxzLaMJIX5sYV2E',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:12','2019-11-26 01:08:12','argon2i'),
	(12,12,'senger.francisca@block.com','senger.francisca@block.com',1,'mguhv7g6xq84okogsosk04cswo84g04','$argon2i$v=19$m=65536,t=4,p=1$Lm9obUdGM29OOHhEZkxIbA$daacuHYPYmj0tvq9sXq/1VOifI0ozZB3au1UYEESn8I',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:12','2019-11-26 01:08:12','argon2i'),
	(13,13,'flemke@pfeffer.org','flemke@pfeffer.org',1,'fu28z1mjkkgk00cc44c40sg48ok48s0','$argon2i$v=19$m=65536,t=4,p=1$R2dxalgvZUNVT0w3M2N0VQ$1Ov0C0f5r1mJJljd5kAZWjanFPs4E+fhZCKKZ3Xaiwo',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:12','2019-11-26 01:08:12','argon2i'),
	(14,14,'buster75@conn.org','buster75@conn.org',1,'8obpmeupvy800kkwowc4cc8kwk48wks','$argon2i$v=19$m=65536,t=4,p=1$Z25rcEp4ZkM4NFlaUHRnbw$GOrfndiSfY8bRESBcJs6z0T8N/8xWNihyGSEnSq2zMY',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:12','2019-11-26 01:08:12','argon2i'),
	(15,15,'adelle.green@gmail.com','adelle.green@gmail.com',1,'t9l89ja6vhckg8gkcwcookoowkssog0','$argon2i$v=19$m=65536,t=4,p=1$akNEUjZSaHNjZnl6UndQRA$z28JF6V626KlbERvpFOy1yzRjNq4Au3ZLjWAzzyq6Ls',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:12','2019-11-26 01:08:12','argon2i'),
	(16,16,'urussel@gmail.com','urussel@gmail.com',1,'m86784c97hcgscg4sw40wcw8cc884w8','$argon2i$v=19$m=65536,t=4,p=1$aHFGcE8uTS5obERmOTdjVQ$lxSxXlRpaZxBSLNkUfzRnhEiXDGHFdZxNAd6azunzMM',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:13','2019-11-26 01:08:13','argon2i'),
	(17,17,'ternser@gmail.com','ternser@gmail.com',1,'d38a6adsgbkgw4008cok4ko88so488g','$argon2i$v=19$m=65536,t=4,p=1$Ni4xSVdMRXhFQTZ1MWY5TA$kSpz14Z1QiZN7Hv8pZkz04r2cmCZqvmtQSwGewBKDTs',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:13','2019-11-26 01:08:13','argon2i'),
	(18,18,'violette.pfannerstill@lubowitz.com','violette.pfannerstill@lubowitz.com',1,'sd5mc2g0bzkog4w0kokckow8gos04cw','$argon2i$v=19$m=65536,t=4,p=1$YTcwdzM4dWNLN1dPcHFhaQ$dd2XBu17crslXKHqBmyInFU4O5xbZapa2yCN0Ra/mp8',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:13','2019-11-26 01:08:13','argon2i'),
	(19,19,'ggottlieb@yahoo.com','ggottlieb@yahoo.com',1,'1wn4fmprkipwo084gw4skogckwow48k','$argon2i$v=19$m=65536,t=4,p=1$cERQSWRlNEszTHkwLnJoMg$FkpqeNGGW1gmJQJjMWUctiKKMUbVgYh/zS0CcnWsGsY',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:13','2019-11-26 01:08:13','argon2i'),
	(20,20,'zulauf.marcelino@hotmail.com','zulauf.marcelino@hotmail.com',1,'42niolnvg9c0wks0css4cooc8sk4ksk','$argon2i$v=19$m=65536,t=4,p=1$Lm5RVmM4RlF6SHhuTUV4cQ$5b51wJ94BifuMfE5KbvaxYdIegH661BqEtE3+oxacXw',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:13','2019-11-26 01:08:13','argon2i'),
	(21,21,'alverta16@yahoo.com','alverta16@yahoo.com',1,'4x7dm2q8k5k4kkc0kw8cos0wc880kok','$argon2i$v=19$m=65536,t=4,p=1$Z2xFTkw1ZUZmNjhpOFNxLg$GAYitbqKnaebFjYj1qlDOxd/4zNJy5fhZGrfAylBCP8',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'a:1:{i:0;s:9:\"ROLE_USER\";}',NULL,NULL,'2019-11-26 01:08:13','2019-11-26 01:08:13','argon2i');

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
	(1,'clothing','Clothing','Et culpa et accusantium deserunt rem reiciendis. Deleniti consequuntur dolorum totam repudiandae voluptatem quia ut perferendis. Rerum consequatur et itaque est beatae nesciunt enim. Vero assumenda rerum vel est ut.','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(2,'other','Other','Molestias minima provident et rerum. Consequatur dicta ex vitae voluptatem doloremque. Iusto maxime cum est autem temporibus.','2019-11-26 01:08:14','2019-11-26 01:08:14');

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
	(1,1,1,'clothing_sales_tax_7','Clothing Sales Tax 7%',0.07000,1,'default','2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(2,2,1,'sales_tax_20','Sales Tax 20%',0.20000,1,'default','2019-11-26 01:08:14','2019-11-26 01:08:14');

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
	(1,1,NULL,'category',1,22,0,0,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(2,1,1,'t_shirts',2,7,1,0,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(3,1,2,'mens_t_shirts',3,4,2,0,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(4,1,2,'womens_t_shirts',5,6,2,1,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(5,1,1,'caps',8,13,1,1,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(6,1,5,'simple_caps',9,10,2,0,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(7,1,5,'caps_with_pompons',11,12,2,1,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(8,1,1,'dresses',14,15,1,2,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(9,1,1,'jeans',16,21,1,3,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(10,1,9,'mens_jeans',17,18,2,0,'2019-11-26 01:08:14','2019-11-26 01:08:14'),
	(11,1,9,'womens_jeans',19,20,2,1,'2019-11-26 01:08:14','2019-11-26 01:08:14');

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
	(1,1,'Category','category','Ducimus vel ipsa aliquam natus rerum facilis ut at. Et fugiat sit rerum dolorum fugiat quo. Voluptatem harum et error fuga veniam adipisci quis. Accusantium dicta eos consequuntur culpa.','en_US'),
	(2,1,'Categorie','categorie','Repellat laudantium nihil perferendis neque quo. Cum et et rerum eos maiores ab animi. Et non iure non rerum quam possimus. Ut consequuntur quos reiciendis quaerat veniam.','fr_FR'),
	(3,2,'T-shirts','category/t-shirts','Minima repellat illum eligendi ducimus nisi. Cum exercitationem blanditiis suscipit est et aut eum non. Odio dicta quod voluptatem quis voluptates vero. Necessitatibus magnam tenetur iusto vel.','en_US'),
	(4,2,'T-shirts','categorie/t-shirts','Enim totam sed accusantium soluta facere. Mollitia ratione quo eos. Omnis culpa odio similique fugit dolorum aut dolores voluptas.','fr_FR'),
	(5,3,'Men','t-shirts/men','Consequatur voluptatibus ea et unde ut voluptatum cupiditate. Est est et et sunt. Facere et dolores consequuntur.','en_US'),
	(6,3,'Hommes','t-shirts/hommes','Dolores error optio quis rerum cupiditate placeat fugit. Vel quam id iusto ut error sit consectetur. Voluptatem nihil libero laudantium reprehenderit sit dolorum vel. Quia rerum molestias tempore voluptatibus voluptatibus.','fr_FR'),
	(7,4,'Women','t-shirts/women','Eius dolorem exercitationem perspiciatis in. Repudiandae pariatur veniam est. Rerum autem minima quo distinctio qui aliquid.','en_US'),
	(8,4,'Femme','t-shirts/femmes','Voluptatem voluptatem a cupiditate. Quaerat non cupiditate adipisci soluta. Et aut hic tempora facere quod reprehenderit.','fr_FR'),
	(9,5,'Caps','category/caps','Sit ratione molestias sed est consectetur eos maiores similique. Ea provident sunt quis iste non fugit. Nobis eveniet nam totam eos. Fuga porro expedita vel alias.','en_US'),
	(10,5,'Casquestte','categorie/casquestte','Perspiciatis ea animi tenetur fuga unde quia et voluptas. Occaecati dolorem quibusdam est culpa nemo. Numquam velit rerum iste sit reiciendis. Quas tempore fugit nobis dignissimos est sit.','fr_FR'),
	(11,6,'Simple','caps/simple','Nesciunt et alias omnis eum voluptates velit doloremque. Sequi facilis atque deleniti tempora eveniet quidem et.','en_US'),
	(12,6,'simple','casquette/simple','Qui nemo natus porro rem. Nam et fuga eum et adipisci error itaque. Natus voluptas ut fuga dolor illum.','fr_FR'),
	(13,7,'With pompons','caps/with-pompons','Est explicabo quis impedit laboriosam ut quos iure. Earum veritatis illum omnis deserunt. Dolores omnis non nam natus amet voluptatum qui.','en_US'),
	(14,7,'A pompon','casquette/a-pompon','Minima quasi ad cumque quis non voluptas. Cum sed explicabo magnam exercitationem in ipsum rem totam.','fr_FR'),
	(15,8,'Dresses','category/dresses','Et quisquam laudantium in nulla. Reiciendis vel et quia fugit nostrum.','en_US'),
	(16,8,'Robes','categorie/robes','Molestiae ullam qui sit qui. Consequatur id iste amet molestiae. Ut est omnis amet commodi odit ducimus exercitationem. Mollitia nobis est deleniti ducimus aperiam et.','fr_FR'),
	(17,9,'Jeans','category/jeans','Qui dignissimos pariatur iure accusantium nisi expedita. Distinctio magnam est ab. Unde aut deleniti blanditiis. Assumenda error atque nihil fuga molestias placeat. Saepe excepturi omnis et neque aut.','en_US'),
	(18,9,'Jeans','categorie/jeans','Aspernatur est sint consequatur qui magnam maiores aspernatur. In sint corporis sint et consectetur quis. Adipisci ut quibusdam quaerat et. Debitis et vel voluptas.','fr_FR'),
	(19,10,'Men','jeans/men','Perspiciatis laudantium quidem dolorem. Doloribus aperiam architecto autem perspiciatis sit expedita. Vel omnis non vel necessitatibus dolore sunt.','en_US'),
	(20,10,'Hommes','jeans/hommes','Et provident itaque molestiae quia qui eum perferendis. Voluptas voluptas debitis minima quibusdam repudiandae. Voluptatum at esse laudantium nulla.','fr_FR'),
	(21,11,'Women','jeans/women','Iste eum aut qui consequatur sit et. Ea sed culpa similique perferendis. Beatae dignissimos tempore nihil totam hic doloremque. At itaque nam officia officiis omnis. Id deserunt eligendi voluptate exercitationem cum enim.','en_US'),
	(22,11,'Femme','jeans/femme','Molestiae quam consectetur facilis qui fugit reprehenderit. Voluptatem in vel nesciunt dolor veritatis ut beatae. Maiores itaque fugiat ut libero. Commodi quia corrupti neque asperiores eius.','fr_FR');

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
	(1,'US','United States of America','country','all');

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
	(1,1,'US');

/*!40000 ALTER TABLE `sylius_zone_member` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
