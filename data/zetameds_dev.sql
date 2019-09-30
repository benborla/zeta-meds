-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 01, 2019 at 06:37 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zetameds_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20170912085504', '2019-09-08 15:30:54'),
('20170913125128', '2019-09-08 15:30:54'),
('20171003103916', '2019-09-08 15:30:54'),
('20180102140039', '2019-09-08 15:30:54'),
('20190109095211', '2019-09-08 15:30:54'),
('20190109160409', '2019-09-08 15:30:54'),
('20190508083953', '2019-09-08 15:30:54'),
('20190621035710', '2019-09-08 15:30:54');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_address`
--

CREATE TABLE `sylius_address` (
  `id` int(11) NOT NULL,
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
  `province_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_address`
--

INSERT INTO `sylius_address` (`id`, `customer_id`, `first_name`, `last_name`, `phone_number`, `street`, `company`, `city`, `postcode`, `created_at`, `updated_at`, `country_code`, `province_code`, `province_name`) VALUES
(1, 10, 'Alfonso', 'Turner', NULL, '2023 Treutel Crest Suite 114', NULL, 'East Tianna', '38377-6939', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(2, NULL, 'Alfonso', 'Turner', NULL, '2023 Treutel Crest Suite 114', NULL, 'East Tianna', '38377-6939', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(3, NULL, 'Alfonso', 'Turner', NULL, '2023 Treutel Crest Suite 114', NULL, 'East Tianna', '38377-6939', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(4, 4, 'Virginie', 'Larkin', NULL, '185 Madge Center Apt. 169', NULL, 'Shanytown', '39537-3778', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(5, NULL, 'Virginie', 'Larkin', NULL, '185 Madge Center Apt. 169', NULL, 'Shanytown', '39537-3778', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(6, NULL, 'Virginie', 'Larkin', NULL, '185 Madge Center Apt. 169', NULL, 'Shanytown', '39537-3778', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(7, 4, 'Hilma', 'Larson', NULL, '542 Mary Port Apt. 324', NULL, 'Jeniferburgh', '83408-8434', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(8, NULL, 'Hilma', 'Larson', NULL, '542 Mary Port Apt. 324', NULL, 'Jeniferburgh', '83408-8434', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(9, NULL, 'Hilma', 'Larson', NULL, '542 Mary Port Apt. 324', NULL, 'Jeniferburgh', '83408-8434', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(10, 12, 'Tracy', 'Graham', NULL, '321 Trycia Plains', NULL, 'Kuhlmantown', '42555', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(11, NULL, 'Tracy', 'Graham', NULL, '321 Trycia Plains', NULL, 'Kuhlmantown', '42555', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(12, NULL, 'Tracy', 'Graham', NULL, '321 Trycia Plains', NULL, 'Kuhlmantown', '42555', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(13, 8, 'Pierre', 'Berge', NULL, '1016 Mallie Ferry Apt. 482', NULL, 'Julienfurt', '74619', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(14, NULL, 'Pierre', 'Berge', NULL, '1016 Mallie Ferry Apt. 482', NULL, 'Julienfurt', '74619', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(15, NULL, 'Pierre', 'Berge', NULL, '1016 Mallie Ferry Apt. 482', NULL, 'Julienfurt', '74619', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(16, 10, 'Ilene', 'Graham', NULL, '29829 Unique Knolls', NULL, 'New Jaleelview', '77920', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(17, NULL, 'Ilene', 'Graham', NULL, '29829 Unique Knolls', NULL, 'New Jaleelview', '77920', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(18, NULL, 'Ilene', 'Graham', NULL, '29829 Unique Knolls', NULL, 'New Jaleelview', '77920', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(19, 18, 'Jasmin', 'Howell', NULL, '117 Hickle Loop', NULL, 'West Winifredshire', '82264', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(20, NULL, 'Jasmin', 'Howell', NULL, '117 Hickle Loop', NULL, 'West Winifredshire', '82264', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(21, NULL, 'Jasmin', 'Howell', NULL, '117 Hickle Loop', NULL, 'West Winifredshire', '82264', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(22, 2, 'Helena', 'Koch', NULL, '6114 Goodwin Canyon Apt. 388', NULL, 'Nolanland', '26890', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(23, NULL, 'Helena', 'Koch', NULL, '6114 Goodwin Canyon Apt. 388', NULL, 'Nolanland', '26890', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(24, NULL, 'Helena', 'Koch', NULL, '6114 Goodwin Canyon Apt. 388', NULL, 'Nolanland', '26890', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(25, 5, 'Lennie', 'Waters', NULL, '3467 Herminio Center Suite 158', NULL, 'Demarcusmouth', '42744-4395', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(26, NULL, 'Lennie', 'Waters', NULL, '3467 Herminio Center Suite 158', NULL, 'Demarcusmouth', '42744-4395', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(27, NULL, 'Lennie', 'Waters', NULL, '3467 Herminio Center Suite 158', NULL, 'Demarcusmouth', '42744-4395', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(28, 8, 'Enrique', 'Treutel', NULL, '129 Yundt Underpass Apt. 324', NULL, 'New Neomaborough', '73758', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(29, NULL, 'Enrique', 'Treutel', NULL, '129 Yundt Underpass Apt. 324', NULL, 'New Neomaborough', '73758', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(30, NULL, 'Enrique', 'Treutel', NULL, '129 Yundt Underpass Apt. 324', NULL, 'New Neomaborough', '73758', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(31, 9, 'Telly', 'Weimann', NULL, '335 Sydnee Village', NULL, 'East Prince', '06219-0987', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(32, NULL, 'Telly', 'Weimann', NULL, '335 Sydnee Village', NULL, 'East Prince', '06219-0987', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(33, NULL, 'Telly', 'Weimann', NULL, '335 Sydnee Village', NULL, 'East Prince', '06219-0987', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(34, 20, 'Grace', 'Carroll', NULL, '6703 Murphy Cove Suite 693', NULL, 'Fernland', '10376-0934', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(35, NULL, 'Grace', 'Carroll', NULL, '6703 Murphy Cove Suite 693', NULL, 'Fernland', '10376-0934', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(36, NULL, 'Grace', 'Carroll', NULL, '6703 Murphy Cove Suite 693', NULL, 'Fernland', '10376-0934', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(37, 10, 'Kiarra', 'Eichmann', NULL, '801 Johns Knolls Suite 390', NULL, 'Corwinville', '51056-3321', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(38, NULL, 'Kiarra', 'Eichmann', NULL, '801 Johns Knolls Suite 390', NULL, 'Corwinville', '51056-3321', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(39, NULL, 'Kiarra', 'Eichmann', NULL, '801 Johns Knolls Suite 390', NULL, 'Corwinville', '51056-3321', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(40, 4, 'Katharina', 'Lehner', NULL, '81552 D\'Amore Summit', NULL, 'Danebury', '38354', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(41, NULL, 'Katharina', 'Lehner', NULL, '81552 D\'Amore Summit', NULL, 'Danebury', '38354', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(42, NULL, 'Katharina', 'Lehner', NULL, '81552 D\'Amore Summit', NULL, 'Danebury', '38354', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(43, 11, 'Katrine', 'Hermann', NULL, '511 Nettie Hill Apt. 409', NULL, 'Lowellborough', '25195', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(44, NULL, 'Katrine', 'Hermann', NULL, '511 Nettie Hill Apt. 409', NULL, 'Lowellborough', '25195', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(45, NULL, 'Katrine', 'Hermann', NULL, '511 Nettie Hill Apt. 409', NULL, 'Lowellborough', '25195', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(46, 2, 'Adrianna', 'Monahan', NULL, '1856 Jack Springs Suite 268', NULL, 'Wehnerfurt', '19372-5106', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(47, NULL, 'Adrianna', 'Monahan', NULL, '1856 Jack Springs Suite 268', NULL, 'Wehnerfurt', '19372-5106', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(48, NULL, 'Adrianna', 'Monahan', NULL, '1856 Jack Springs Suite 268', NULL, 'Wehnerfurt', '19372-5106', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(49, 1, 'Daryl', 'Fritsch', NULL, '3284 Lynch Way', NULL, 'East Vanessa', '06341', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(50, NULL, 'Daryl', 'Fritsch', NULL, '3284 Lynch Way', NULL, 'East Vanessa', '06341', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(51, NULL, 'Daryl', 'Fritsch', NULL, '3284 Lynch Way', NULL, 'East Vanessa', '06341', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(52, 5, 'Beryl', 'Grady', NULL, '71832 Schultz Drive', NULL, 'Croninborough', '67613-3445', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(53, NULL, 'Beryl', 'Grady', NULL, '71832 Schultz Drive', NULL, 'Croninborough', '67613-3445', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(54, NULL, 'Beryl', 'Grady', NULL, '71832 Schultz Drive', NULL, 'Croninborough', '67613-3445', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(55, 6, 'Stephon', 'Weimann', NULL, '39169 Elenora Village Apt. 871', NULL, 'East Beauland', '23598', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(56, NULL, 'Stephon', 'Weimann', NULL, '39169 Elenora Village Apt. 871', NULL, 'East Beauland', '23598', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(57, NULL, 'Stephon', 'Weimann', NULL, '39169 Elenora Village Apt. 871', NULL, 'East Beauland', '23598', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(58, 1, 'Otto', 'Hudson', NULL, '75886 Morris View', NULL, 'Harveyhaven', '69686-5797', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(59, NULL, 'Otto', 'Hudson', NULL, '75886 Morris View', NULL, 'Harveyhaven', '69686-5797', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(60, NULL, 'Otto', 'Hudson', NULL, '75886 Morris View', NULL, 'Harveyhaven', '69686-5797', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(61, 7, 'Herta', 'Jacobs', NULL, '748 Kreiger Alley', 'Beatty, Veum and Morissette', 'West Monaton', '52715-5537', '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'US', NULL, NULL),
(62, 16, 'Guy', 'Smitham', NULL, '586 Ritchie Parkways Suite 149', NULL, 'Lueilwitzside', '53200', '2019-09-08 23:31:02', '2019-09-08 23:31:03', 'US', NULL, NULL),
(63, 12, 'Lewis', 'Moore', NULL, '782 Ross Station', 'Klein PLC', 'New Shakira', '78383', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(64, 16, 'Helena', 'Rempel', '701.883.6971 x339', '4624 Stuart Drive', NULL, 'Port Blaze', '45368-1251', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(65, 4, 'Dax', 'Oberbrunner', NULL, '686 Medhurst Glen Apt. 816', 'Robel and Sons', 'Lenniebury', '74669', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(66, 7, 'Adriana', 'Osinski', NULL, '8924 Ivah Trafficway', 'Cole-Heidenreich', 'Laurieport', '43619', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(67, 10, 'Emory', 'Beahan', '407.992.0171 x30395', '56876 Amber Mews', 'Beer-Bayer', 'Kirlinchester', '53654-3844', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(68, 4, 'Geoffrey', 'Donnelly', '1-480-998-3868', '802 Purdy Road Apt. 686', 'Abbott-Kunze', 'Zandershire', '78241-9791', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(69, 8, 'Jerome', 'Runte', NULL, '500 Jaskolski Roads', 'Ullrich Inc', 'East Cristalside', '93347-5702', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL),
(70, 17, 'Francisco', 'Roberts', NULL, '6367 Mary Fall Suite 061', 'Dietrich LLC', 'North Sheldon', '95302-4434', '2019-09-08 23:31:03', '2019-09-08 23:31:03', 'US', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_address_log_entries`
--

CREATE TABLE `sylius_address_log_entries` (
  `id` int(11) NOT NULL,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `logged_at` datetime NOT NULL,
  `object_id` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `object_class` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `version` int(11) NOT NULL,
  `data` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_address_log_entries`
--

INSERT INTO `sylius_address_log_entries` (`id`, `action`, `logged_at`, `object_id`, `object_class`, `version`, `data`, `username`) VALUES
(1, 'create', '2019-09-08 23:31:02', '1', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Alfonso\";s:8:\"lastName\";s:6:\"Turner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"2023 Treutel Crest Suite 114\";s:7:\"company\";N;s:4:\"city\";s:11:\"East Tianna\";s:8:\"postcode\";s:10:\"38377-6939\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(2, 'create', '2019-09-08 23:31:02', '2', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Alfonso\";s:8:\"lastName\";s:6:\"Turner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"2023 Treutel Crest Suite 114\";s:7:\"company\";N;s:4:\"city\";s:11:\"East Tianna\";s:8:\"postcode\";s:10:\"38377-6939\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(3, 'create', '2019-09-08 23:31:02', '3', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Alfonso\";s:8:\"lastName\";s:6:\"Turner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"2023 Treutel Crest Suite 114\";s:7:\"company\";N;s:4:\"city\";s:11:\"East Tianna\";s:8:\"postcode\";s:10:\"38377-6939\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(4, 'create', '2019-09-08 23:31:02', '4', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Virginie\";s:8:\"lastName\";s:6:\"Larkin\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"185 Madge Center Apt. 169\";s:7:\"company\";N;s:4:\"city\";s:9:\"Shanytown\";s:8:\"postcode\";s:10:\"39537-3778\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(5, 'create', '2019-09-08 23:31:02', '5', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Virginie\";s:8:\"lastName\";s:6:\"Larkin\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"185 Madge Center Apt. 169\";s:7:\"company\";N;s:4:\"city\";s:9:\"Shanytown\";s:8:\"postcode\";s:10:\"39537-3778\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(6, 'create', '2019-09-08 23:31:02', '6', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Virginie\";s:8:\"lastName\";s:6:\"Larkin\";s:11:\"phoneNumber\";N;s:6:\"street\";s:25:\"185 Madge Center Apt. 169\";s:7:\"company\";N;s:4:\"city\";s:9:\"Shanytown\";s:8:\"postcode\";s:10:\"39537-3778\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(7, 'create', '2019-09-08 23:31:02', '7', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Hilma\";s:8:\"lastName\";s:6:\"Larson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:22:\"542 Mary Port Apt. 324\";s:7:\"company\";N;s:4:\"city\";s:12:\"Jeniferburgh\";s:8:\"postcode\";s:10:\"83408-8434\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(8, 'create', '2019-09-08 23:31:02', '8', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Hilma\";s:8:\"lastName\";s:6:\"Larson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:22:\"542 Mary Port Apt. 324\";s:7:\"company\";N;s:4:\"city\";s:12:\"Jeniferburgh\";s:8:\"postcode\";s:10:\"83408-8434\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(9, 'create', '2019-09-08 23:31:02', '9', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Hilma\";s:8:\"lastName\";s:6:\"Larson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:22:\"542 Mary Port Apt. 324\";s:7:\"company\";N;s:4:\"city\";s:12:\"Jeniferburgh\";s:8:\"postcode\";s:10:\"83408-8434\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(10, 'create', '2019-09-08 23:31:02', '10', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Tracy\";s:8:\"lastName\";s:6:\"Graham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"321 Trycia Plains\";s:7:\"company\";N;s:4:\"city\";s:11:\"Kuhlmantown\";s:8:\"postcode\";s:5:\"42555\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(11, 'create', '2019-09-08 23:31:02', '11', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Tracy\";s:8:\"lastName\";s:6:\"Graham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"321 Trycia Plains\";s:7:\"company\";N;s:4:\"city\";s:11:\"Kuhlmantown\";s:8:\"postcode\";s:5:\"42555\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(12, 'create', '2019-09-08 23:31:02', '12', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Tracy\";s:8:\"lastName\";s:6:\"Graham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"321 Trycia Plains\";s:7:\"company\";N;s:4:\"city\";s:11:\"Kuhlmantown\";s:8:\"postcode\";s:5:\"42555\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(13, 'create', '2019-09-08 23:31:02', '13', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Pierre\";s:8:\"lastName\";s:5:\"Berge\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"1016 Mallie Ferry Apt. 482\";s:7:\"company\";N;s:4:\"city\";s:10:\"Julienfurt\";s:8:\"postcode\";s:5:\"74619\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(14, 'create', '2019-09-08 23:31:02', '14', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Pierre\";s:8:\"lastName\";s:5:\"Berge\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"1016 Mallie Ferry Apt. 482\";s:7:\"company\";N;s:4:\"city\";s:10:\"Julienfurt\";s:8:\"postcode\";s:5:\"74619\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(15, 'create', '2019-09-08 23:31:02', '15', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Pierre\";s:8:\"lastName\";s:5:\"Berge\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"1016 Mallie Ferry Apt. 482\";s:7:\"company\";N;s:4:\"city\";s:10:\"Julienfurt\";s:8:\"postcode\";s:5:\"74619\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(16, 'create', '2019-09-08 23:31:02', '16', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Ilene\";s:8:\"lastName\";s:6:\"Graham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"29829 Unique Knolls\";s:7:\"company\";N;s:4:\"city\";s:14:\"New Jaleelview\";s:8:\"postcode\";s:5:\"77920\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(17, 'create', '2019-09-08 23:31:02', '17', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Ilene\";s:8:\"lastName\";s:6:\"Graham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"29829 Unique Knolls\";s:7:\"company\";N;s:4:\"city\";s:14:\"New Jaleelview\";s:8:\"postcode\";s:5:\"77920\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(18, 'create', '2019-09-08 23:31:02', '18', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Ilene\";s:8:\"lastName\";s:6:\"Graham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"29829 Unique Knolls\";s:7:\"company\";N;s:4:\"city\";s:14:\"New Jaleelview\";s:8:\"postcode\";s:5:\"77920\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(19, 'create', '2019-09-08 23:31:02', '19', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Jasmin\";s:8:\"lastName\";s:6:\"Howell\";s:11:\"phoneNumber\";N;s:6:\"street\";s:15:\"117 Hickle Loop\";s:7:\"company\";N;s:4:\"city\";s:18:\"West Winifredshire\";s:8:\"postcode\";s:5:\"82264\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(20, 'create', '2019-09-08 23:31:02', '20', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Jasmin\";s:8:\"lastName\";s:6:\"Howell\";s:11:\"phoneNumber\";N;s:6:\"street\";s:15:\"117 Hickle Loop\";s:7:\"company\";N;s:4:\"city\";s:18:\"West Winifredshire\";s:8:\"postcode\";s:5:\"82264\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(21, 'create', '2019-09-08 23:31:02', '21', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Jasmin\";s:8:\"lastName\";s:6:\"Howell\";s:11:\"phoneNumber\";N;s:6:\"street\";s:15:\"117 Hickle Loop\";s:7:\"company\";N;s:4:\"city\";s:18:\"West Winifredshire\";s:8:\"postcode\";s:5:\"82264\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(22, 'create', '2019-09-08 23:31:02', '22', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Helena\";s:8:\"lastName\";s:4:\"Koch\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"6114 Goodwin Canyon Apt. 388\";s:7:\"company\";N;s:4:\"city\";s:9:\"Nolanland\";s:8:\"postcode\";s:5:\"26890\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(23, 'create', '2019-09-08 23:31:02', '23', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Helena\";s:8:\"lastName\";s:4:\"Koch\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"6114 Goodwin Canyon Apt. 388\";s:7:\"company\";N;s:4:\"city\";s:9:\"Nolanland\";s:8:\"postcode\";s:5:\"26890\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(24, 'create', '2019-09-08 23:31:02', '24', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Helena\";s:8:\"lastName\";s:4:\"Koch\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"6114 Goodwin Canyon Apt. 388\";s:7:\"company\";N;s:4:\"city\";s:9:\"Nolanland\";s:8:\"postcode\";s:5:\"26890\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(25, 'create', '2019-09-08 23:31:02', '25', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Lennie\";s:8:\"lastName\";s:6:\"Waters\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"3467 Herminio Center Suite 158\";s:7:\"company\";N;s:4:\"city\";s:13:\"Demarcusmouth\";s:8:\"postcode\";s:10:\"42744-4395\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(26, 'create', '2019-09-08 23:31:02', '26', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Lennie\";s:8:\"lastName\";s:6:\"Waters\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"3467 Herminio Center Suite 158\";s:7:\"company\";N;s:4:\"city\";s:13:\"Demarcusmouth\";s:8:\"postcode\";s:10:\"42744-4395\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(27, 'create', '2019-09-08 23:31:02', '27', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Lennie\";s:8:\"lastName\";s:6:\"Waters\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"3467 Herminio Center Suite 158\";s:7:\"company\";N;s:4:\"city\";s:13:\"Demarcusmouth\";s:8:\"postcode\";s:10:\"42744-4395\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(28, 'create', '2019-09-08 23:31:02', '28', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Enrique\";s:8:\"lastName\";s:7:\"Treutel\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"129 Yundt Underpass Apt. 324\";s:7:\"company\";N;s:4:\"city\";s:16:\"New Neomaborough\";s:8:\"postcode\";s:5:\"73758\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(29, 'create', '2019-09-08 23:31:02', '29', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Enrique\";s:8:\"lastName\";s:7:\"Treutel\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"129 Yundt Underpass Apt. 324\";s:7:\"company\";N;s:4:\"city\";s:16:\"New Neomaborough\";s:8:\"postcode\";s:5:\"73758\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(30, 'create', '2019-09-08 23:31:02', '30', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Enrique\";s:8:\"lastName\";s:7:\"Treutel\";s:11:\"phoneNumber\";N;s:6:\"street\";s:28:\"129 Yundt Underpass Apt. 324\";s:7:\"company\";N;s:4:\"city\";s:16:\"New Neomaborough\";s:8:\"postcode\";s:5:\"73758\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(31, 'create', '2019-09-08 23:31:02', '31', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Telly\";s:8:\"lastName\";s:7:\"Weimann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"335 Sydnee Village\";s:7:\"company\";N;s:4:\"city\";s:11:\"East Prince\";s:8:\"postcode\";s:10:\"06219-0987\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(32, 'create', '2019-09-08 23:31:02', '32', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Telly\";s:8:\"lastName\";s:7:\"Weimann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"335 Sydnee Village\";s:7:\"company\";N;s:4:\"city\";s:11:\"East Prince\";s:8:\"postcode\";s:10:\"06219-0987\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(33, 'create', '2019-09-08 23:31:02', '33', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Telly\";s:8:\"lastName\";s:7:\"Weimann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:18:\"335 Sydnee Village\";s:7:\"company\";N;s:4:\"city\";s:11:\"East Prince\";s:8:\"postcode\";s:10:\"06219-0987\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(34, 'create', '2019-09-08 23:31:02', '34', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Grace\";s:8:\"lastName\";s:7:\"Carroll\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"6703 Murphy Cove Suite 693\";s:7:\"company\";N;s:4:\"city\";s:8:\"Fernland\";s:8:\"postcode\";s:10:\"10376-0934\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(35, 'create', '2019-09-08 23:31:02', '35', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Grace\";s:8:\"lastName\";s:7:\"Carroll\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"6703 Murphy Cove Suite 693\";s:7:\"company\";N;s:4:\"city\";s:8:\"Fernland\";s:8:\"postcode\";s:10:\"10376-0934\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(36, 'create', '2019-09-08 23:31:02', '36', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Grace\";s:8:\"lastName\";s:7:\"Carroll\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"6703 Murphy Cove Suite 693\";s:7:\"company\";N;s:4:\"city\";s:8:\"Fernland\";s:8:\"postcode\";s:10:\"10376-0934\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(37, 'create', '2019-09-08 23:31:02', '37', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Kiarra\";s:8:\"lastName\";s:8:\"Eichmann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"801 Johns Knolls Suite 390\";s:7:\"company\";N;s:4:\"city\";s:11:\"Corwinville\";s:8:\"postcode\";s:10:\"51056-3321\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(38, 'create', '2019-09-08 23:31:02', '38', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Kiarra\";s:8:\"lastName\";s:8:\"Eichmann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"801 Johns Knolls Suite 390\";s:7:\"company\";N;s:4:\"city\";s:11:\"Corwinville\";s:8:\"postcode\";s:10:\"51056-3321\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(39, 'create', '2019-09-08 23:31:02', '39', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Kiarra\";s:8:\"lastName\";s:8:\"Eichmann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"801 Johns Knolls Suite 390\";s:7:\"company\";N;s:4:\"city\";s:11:\"Corwinville\";s:8:\"postcode\";s:10:\"51056-3321\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(40, 'create', '2019-09-08 23:31:02', '40', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:9:\"Katharina\";s:8:\"lastName\";s:6:\"Lehner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:20:\"81552 D\'Amore Summit\";s:7:\"company\";N;s:4:\"city\";s:8:\"Danebury\";s:8:\"postcode\";s:5:\"38354\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(41, 'create', '2019-09-08 23:31:02', '41', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:9:\"Katharina\";s:8:\"lastName\";s:6:\"Lehner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:20:\"81552 D\'Amore Summit\";s:7:\"company\";N;s:4:\"city\";s:8:\"Danebury\";s:8:\"postcode\";s:5:\"38354\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(42, 'create', '2019-09-08 23:31:02', '42', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:9:\"Katharina\";s:8:\"lastName\";s:6:\"Lehner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:20:\"81552 D\'Amore Summit\";s:7:\"company\";N;s:4:\"city\";s:8:\"Danebury\";s:8:\"postcode\";s:5:\"38354\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(43, 'create', '2019-09-08 23:31:02', '43', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Katrine\";s:8:\"lastName\";s:7:\"Hermann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"511 Nettie Hill Apt. 409\";s:7:\"company\";N;s:4:\"city\";s:13:\"Lowellborough\";s:8:\"postcode\";s:5:\"25195\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(44, 'create', '2019-09-08 23:31:02', '44', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Katrine\";s:8:\"lastName\";s:7:\"Hermann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"511 Nettie Hill Apt. 409\";s:7:\"company\";N;s:4:\"city\";s:13:\"Lowellborough\";s:8:\"postcode\";s:5:\"25195\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(45, 'create', '2019-09-08 23:31:02', '45', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Katrine\";s:8:\"lastName\";s:7:\"Hermann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"511 Nettie Hill Apt. 409\";s:7:\"company\";N;s:4:\"city\";s:13:\"Lowellborough\";s:8:\"postcode\";s:5:\"25195\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(46, 'create', '2019-09-08 23:31:02', '46', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Adrianna\";s:8:\"lastName\";s:7:\"Monahan\";s:11:\"phoneNumber\";N;s:6:\"street\";s:27:\"1856 Jack Springs Suite 268\";s:7:\"company\";N;s:4:\"city\";s:10:\"Wehnerfurt\";s:8:\"postcode\";s:10:\"19372-5106\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(47, 'create', '2019-09-08 23:31:02', '47', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Adrianna\";s:8:\"lastName\";s:7:\"Monahan\";s:11:\"phoneNumber\";N;s:6:\"street\";s:27:\"1856 Jack Springs Suite 268\";s:7:\"company\";N;s:4:\"city\";s:10:\"Wehnerfurt\";s:8:\"postcode\";s:10:\"19372-5106\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(48, 'create', '2019-09-08 23:31:02', '48', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Adrianna\";s:8:\"lastName\";s:7:\"Monahan\";s:11:\"phoneNumber\";N;s:6:\"street\";s:27:\"1856 Jack Springs Suite 268\";s:7:\"company\";N;s:4:\"city\";s:10:\"Wehnerfurt\";s:8:\"postcode\";s:10:\"19372-5106\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(49, 'create', '2019-09-08 23:31:02', '49', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Daryl\";s:8:\"lastName\";s:7:\"Fritsch\";s:11:\"phoneNumber\";N;s:6:\"street\";s:14:\"3284 Lynch Way\";s:7:\"company\";N;s:4:\"city\";s:12:\"East Vanessa\";s:8:\"postcode\";s:5:\"06341\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(50, 'create', '2019-09-08 23:31:02', '50', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Daryl\";s:8:\"lastName\";s:7:\"Fritsch\";s:11:\"phoneNumber\";N;s:6:\"street\";s:14:\"3284 Lynch Way\";s:7:\"company\";N;s:4:\"city\";s:12:\"East Vanessa\";s:8:\"postcode\";s:5:\"06341\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(51, 'create', '2019-09-08 23:31:02', '51', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Daryl\";s:8:\"lastName\";s:7:\"Fritsch\";s:11:\"phoneNumber\";N;s:6:\"street\";s:14:\"3284 Lynch Way\";s:7:\"company\";N;s:4:\"city\";s:12:\"East Vanessa\";s:8:\"postcode\";s:5:\"06341\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(52, 'create', '2019-09-08 23:31:02', '52', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Beryl\";s:8:\"lastName\";s:5:\"Grady\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"71832 Schultz Drive\";s:7:\"company\";N;s:4:\"city\";s:13:\"Croninborough\";s:8:\"postcode\";s:10:\"67613-3445\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(53, 'create', '2019-09-08 23:31:02', '53', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Beryl\";s:8:\"lastName\";s:5:\"Grady\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"71832 Schultz Drive\";s:7:\"company\";N;s:4:\"city\";s:13:\"Croninborough\";s:8:\"postcode\";s:10:\"67613-3445\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(54, 'create', '2019-09-08 23:31:02', '54', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Beryl\";s:8:\"lastName\";s:5:\"Grady\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"71832 Schultz Drive\";s:7:\"company\";N;s:4:\"city\";s:13:\"Croninborough\";s:8:\"postcode\";s:10:\"67613-3445\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(55, 'create', '2019-09-08 23:31:02', '55', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Stephon\";s:8:\"lastName\";s:7:\"Weimann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"39169 Elenora Village Apt. 871\";s:7:\"company\";N;s:4:\"city\";s:13:\"East Beauland\";s:8:\"postcode\";s:5:\"23598\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(56, 'create', '2019-09-08 23:31:02', '56', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Stephon\";s:8:\"lastName\";s:7:\"Weimann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"39169 Elenora Village Apt. 871\";s:7:\"company\";N;s:4:\"city\";s:13:\"East Beauland\";s:8:\"postcode\";s:5:\"23598\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(57, 'create', '2019-09-08 23:31:02', '57', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Stephon\";s:8:\"lastName\";s:7:\"Weimann\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"39169 Elenora Village Apt. 871\";s:7:\"company\";N;s:4:\"city\";s:13:\"East Beauland\";s:8:\"postcode\";s:5:\"23598\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(58, 'create', '2019-09-08 23:31:02', '58', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:4:\"Otto\";s:8:\"lastName\";s:6:\"Hudson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"75886 Morris View\";s:7:\"company\";N;s:4:\"city\";s:11:\"Harveyhaven\";s:8:\"postcode\";s:10:\"69686-5797\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(59, 'create', '2019-09-08 23:31:02', '59', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:4:\"Otto\";s:8:\"lastName\";s:6:\"Hudson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"75886 Morris View\";s:7:\"company\";N;s:4:\"city\";s:11:\"Harveyhaven\";s:8:\"postcode\";s:10:\"69686-5797\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(60, 'create', '2019-09-08 23:31:02', '60', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:4:\"Otto\";s:8:\"lastName\";s:6:\"Hudson\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"75886 Morris View\";s:7:\"company\";N;s:4:\"city\";s:11:\"Harveyhaven\";s:8:\"postcode\";s:10:\"69686-5797\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(61, 'create', '2019-09-08 23:31:03', '61', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Herta\";s:8:\"lastName\";s:6:\"Jacobs\";s:11:\"phoneNumber\";N;s:6:\"street\";s:17:\"748 Kreiger Alley\";s:7:\"company\";s:27:\"Beatty, Veum and Morissette\";s:4:\"city\";s:12:\"West Monaton\";s:8:\"postcode\";s:10:\"52715-5537\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(62, 'create', '2019-09-08 23:31:03', '62', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:3:\"Guy\";s:8:\"lastName\";s:7:\"Smitham\";s:11:\"phoneNumber\";N;s:6:\"street\";s:30:\"586 Ritchie Parkways Suite 149\";s:7:\"company\";N;s:4:\"city\";s:13:\"Lueilwitzside\";s:8:\"postcode\";s:5:\"53200\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(63, 'create', '2019-09-08 23:31:03', '63', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Lewis\";s:8:\"lastName\";s:5:\"Moore\";s:11:\"phoneNumber\";N;s:6:\"street\";s:16:\"782 Ross Station\";s:7:\"company\";s:9:\"Klein PLC\";s:4:\"city\";s:11:\"New Shakira\";s:8:\"postcode\";s:5:\"78383\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(64, 'create', '2019-09-08 23:31:03', '64', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Helena\";s:8:\"lastName\";s:6:\"Rempel\";s:11:\"phoneNumber\";s:17:\"701.883.6971 x339\";s:6:\"street\";s:17:\"4624 Stuart Drive\";s:7:\"company\";N;s:4:\"city\";s:10:\"Port Blaze\";s:8:\"postcode\";s:10:\"45368-1251\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(65, 'create', '2019-09-08 23:31:03', '65', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:3:\"Dax\";s:8:\"lastName\";s:11:\"Oberbrunner\";s:11:\"phoneNumber\";N;s:6:\"street\";s:26:\"686 Medhurst Glen Apt. 816\";s:7:\"company\";s:14:\"Robel and Sons\";s:4:\"city\";s:10:\"Lenniebury\";s:8:\"postcode\";s:5:\"74669\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(66, 'create', '2019-09-08 23:31:03', '66', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:7:\"Adriana\";s:8:\"lastName\";s:7:\"Osinski\";s:11:\"phoneNumber\";N;s:6:\"street\";s:20:\"8924 Ivah Trafficway\";s:7:\"company\";s:16:\"Cole-Heidenreich\";s:4:\"city\";s:10:\"Laurieport\";s:8:\"postcode\";s:5:\"43619\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(67, 'create', '2019-09-08 23:31:03', '67', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:5:\"Emory\";s:8:\"lastName\";s:6:\"Beahan\";s:11:\"phoneNumber\";s:19:\"407.992.0171 x30395\";s:6:\"street\";s:16:\"56876 Amber Mews\";s:7:\"company\";s:10:\"Beer-Bayer\";s:4:\"city\";s:13:\"Kirlinchester\";s:8:\"postcode\";s:10:\"53654-3844\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(68, 'create', '2019-09-08 23:31:03', '68', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:8:\"Geoffrey\";s:8:\"lastName\";s:8:\"Donnelly\";s:11:\"phoneNumber\";s:14:\"1-480-998-3868\";s:6:\"street\";s:23:\"802 Purdy Road Apt. 686\";s:7:\"company\";s:12:\"Abbott-Kunze\";s:4:\"city\";s:11:\"Zandershire\";s:8:\"postcode\";s:10:\"78241-9791\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(69, 'create', '2019-09-08 23:31:03', '69', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:6:\"Jerome\";s:8:\"lastName\";s:5:\"Runte\";s:11:\"phoneNumber\";N;s:6:\"street\";s:19:\"500 Jaskolski Roads\";s:7:\"company\";s:11:\"Ullrich Inc\";s:4:\"city\";s:16:\"East Cristalside\";s:8:\"postcode\";s:10:\"93347-5702\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL),
(70, 'create', '2019-09-08 23:31:03', '70', 'App\\Entity\\Addressing\\Address', 1, 'a:10:{s:9:\"firstName\";s:9:\"Francisco\";s:8:\"lastName\";s:7:\"Roberts\";s:11:\"phoneNumber\";N;s:6:\"street\";s:24:\"6367 Mary Fall Suite 061\";s:7:\"company\";s:12:\"Dietrich LLC\";s:4:\"city\";s:13:\"North Sheldon\";s:8:\"postcode\";s:10:\"95302-4434\";s:11:\"countryCode\";s:2:\"US\";s:12:\"provinceCode\";N;s:12:\"provinceName\";N;}', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_adjustment`
--

CREATE TABLE `sylius_adjustment` (
  `id` int(11) NOT NULL,
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
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_adjustment`
--

INSERT INTO `sylius_adjustment` (`id`, `order_id`, `order_item_id`, `order_item_unit_id`, `type`, `label`, `amount`, `is_neutral`, `is_locked`, `origin_code`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 1, 'order_promotion', 'New Year', -176, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(2, NULL, NULL, 1, 'order_promotion', 'Christmas', -3198, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(3, NULL, NULL, 1, 'tax', 'Clothing Sales Tax 7% (7%)', 341, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(4, NULL, NULL, 2, 'order_promotion', 'New Year', -4, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(5, NULL, NULL, 2, 'order_promotion', 'Christmas', -72, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(6, NULL, NULL, 2, 'tax', 'Clothing Sales Tax 7% (7%)', 8, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(7, NULL, NULL, 3, 'order_promotion', 'New Year', -4, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(8, NULL, NULL, 3, 'order_promotion', 'Christmas', -71, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(9, NULL, NULL, 3, 'tax', 'Clothing Sales Tax 7% (7%)', 8, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(10, NULL, NULL, 4, 'order_promotion', 'New Year', -4, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(11, NULL, NULL, 4, 'order_promotion', 'Christmas', -71, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(12, NULL, NULL, 4, 'tax', 'Clothing Sales Tax 7% (7%)', 8, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(13, NULL, NULL, 5, 'order_promotion', 'New Year', -4, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(14, NULL, NULL, 5, 'order_promotion', 'Christmas', -71, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(15, NULL, NULL, 5, 'tax', 'Clothing Sales Tax 7% (7%)', 7, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(16, NULL, NULL, 6, 'order_promotion', 'New Year', -3, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(17, NULL, NULL, 6, 'order_promotion', 'Christmas', -71, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(18, NULL, NULL, 6, 'tax', 'Clothing Sales Tax 7% (7%)', 7, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(19, NULL, NULL, 7, 'order_promotion', 'New Year', -172, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(20, NULL, NULL, 7, 'order_promotion', 'Christmas', -3149, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(21, NULL, NULL, 7, 'tax', 'Clothing Sales Tax 7% (7%)', 336, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(22, NULL, NULL, 8, 'order_promotion', 'New Year', -162, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(23, NULL, NULL, 8, 'order_promotion', 'Christmas', -2946, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(24, NULL, NULL, 8, 'tax', 'Clothing Sales Tax 7% (7%)', 315, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(25, NULL, NULL, 9, 'order_promotion', 'New Year', -161, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(26, NULL, NULL, 9, 'order_promotion', 'Christmas', -2945, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(27, NULL, NULL, 9, 'tax', 'Clothing Sales Tax 7% (7%)', 314, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(28, NULL, NULL, 10, 'order_promotion', 'New Year', -161, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(29, NULL, NULL, 10, 'order_promotion', 'Christmas', -2945, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(30, NULL, NULL, 10, 'tax', 'Clothing Sales Tax 7% (7%)', 314, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(31, NULL, NULL, 11, 'order_promotion', 'New Year', -149, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(32, NULL, NULL, 11, 'order_promotion', 'Christmas', -2717, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(33, NULL, NULL, 11, 'tax', 'Clothing Sales Tax 7% (7%)', 290, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(34, 1, NULL, NULL, 'shipping', 'DHL Express', 373, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(35, NULL, NULL, 12, 'order_promotion', 'New Year', -92, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(36, NULL, NULL, 12, 'order_promotion', 'Christmas', -3159, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(37, NULL, NULL, 12, 'tax', 'Clothing Sales Tax 7% (7%)', 338, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(38, NULL, NULL, 13, 'order_promotion', 'New Year', -92, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(39, NULL, NULL, 13, 'order_promotion', 'Christmas', -3159, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(40, NULL, NULL, 13, 'tax', 'Clothing Sales Tax 7% (7%)', 337, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(41, NULL, NULL, 14, 'order_promotion', 'New Year', -92, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(42, NULL, NULL, 14, 'order_promotion', 'Christmas', -3159, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(43, NULL, NULL, 14, 'tax', 'Clothing Sales Tax 7% (7%)', 337, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(44, NULL, NULL, 15, 'order_promotion', 'New Year', -92, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(45, NULL, NULL, 15, 'order_promotion', 'Christmas', -3159, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(46, NULL, NULL, 15, 'tax', 'Clothing Sales Tax 7% (7%)', 337, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(47, NULL, NULL, 16, 'order_promotion', 'New Year', -92, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(48, NULL, NULL, 16, 'order_promotion', 'Christmas', -3158, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(49, NULL, NULL, 16, 'tax', 'Clothing Sales Tax 7% (7%)', 337, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(50, NULL, NULL, 17, 'order_promotion', 'New Year', -70, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(51, NULL, NULL, 17, 'order_promotion', 'Christmas', -2386, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(52, NULL, NULL, 17, 'tax', 'Sales Tax 20% (20%)', 649, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(53, NULL, NULL, 18, 'order_promotion', 'New Year', -69, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(54, NULL, NULL, 18, 'order_promotion', 'Christmas', -2386, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(55, NULL, NULL, 18, 'tax', 'Sales Tax 20% (20%)', 649, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(56, NULL, NULL, 19, 'order_promotion', 'New Year', -87, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(57, NULL, NULL, 19, 'order_promotion', 'Christmas', -2974, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(58, NULL, NULL, 19, 'tax', 'Clothing Sales Tax 7% (7%)', 318, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(59, NULL, NULL, 20, 'order_promotion', 'New Year', -86, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(60, NULL, NULL, 20, 'order_promotion', 'Christmas', -2973, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(61, NULL, NULL, 20, 'tax', 'Clothing Sales Tax 7% (7%)', 317, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(62, NULL, NULL, 21, 'order_promotion', 'New Year', -44, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(63, NULL, NULL, 21, 'order_promotion', 'Christmas', -1494, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(64, NULL, NULL, 21, 'tax', 'Clothing Sales Tax 7% (7%)', 160, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(65, NULL, NULL, 22, 'order_promotion', 'New Year', -44, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(66, NULL, NULL, 22, 'order_promotion', 'Christmas', -1494, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(67, NULL, NULL, 22, 'tax', 'Clothing Sales Tax 7% (7%)', 160, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(68, NULL, NULL, 23, 'order_promotion', 'New Year', -43, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(69, NULL, NULL, 23, 'order_promotion', 'Christmas', -1494, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(70, NULL, NULL, 23, 'tax', 'Clothing Sales Tax 7% (7%)', 159, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(71, NULL, NULL, 24, 'order_promotion', 'New Year', -43, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(72, NULL, NULL, 24, 'order_promotion', 'Christmas', -1493, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(73, NULL, NULL, 24, 'tax', 'Clothing Sales Tax 7% (7%)', 159, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(74, NULL, NULL, 25, 'order_promotion', 'New Year', -43, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(75, NULL, NULL, 25, 'order_promotion', 'Christmas', -1493, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(76, NULL, NULL, 25, 'tax', 'Clothing Sales Tax 7% (7%)', 159, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(77, NULL, NULL, 26, 'order_promotion', 'New Year', -3, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(78, NULL, NULL, 26, 'order_promotion', 'Christmas', -96, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(79, NULL, NULL, 26, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(80, NULL, NULL, 27, 'order_promotion', 'New Year', -3, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(81, NULL, NULL, 27, 'order_promotion', 'Christmas', -96, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(82, NULL, NULL, 27, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(83, NULL, NULL, 28, 'order_promotion', 'New Year', -3, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(84, NULL, NULL, 28, 'order_promotion', 'Christmas', -95, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(85, NULL, NULL, 28, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(86, NULL, NULL, 29, 'order_promotion', 'New Year', -2, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(87, NULL, NULL, 29, 'order_promotion', 'Christmas', -95, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(88, NULL, NULL, 29, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(89, 2, NULL, NULL, 'shipping', 'DHL Express', 373, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(90, NULL, NULL, 30, 'order_promotion', 'New Year', -52, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(91, NULL, NULL, 30, 'order_promotion', 'Christmas', -851, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(92, NULL, NULL, 30, 'tax', 'Clothing Sales Tax 7% (7%)', 91, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(93, NULL, NULL, 31, 'order_promotion', 'New Year', -52, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(94, NULL, NULL, 31, 'order_promotion', 'Christmas', -851, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(95, NULL, NULL, 31, 'tax', 'Clothing Sales Tax 7% (7%)', 91, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(96, NULL, NULL, 32, 'order_promotion', 'New Year', -52, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(97, NULL, NULL, 32, 'order_promotion', 'Christmas', -851, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(98, NULL, NULL, 32, 'tax', 'Clothing Sales Tax 7% (7%)', 91, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(99, NULL, NULL, 33, 'order_promotion', 'New Year', -51, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(100, NULL, NULL, 33, 'order_promotion', 'Christmas', -851, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(101, NULL, NULL, 33, 'tax', 'Clothing Sales Tax 7% (7%)', 91, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(102, NULL, NULL, 34, 'order_promotion', 'New Year', -51, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(103, NULL, NULL, 34, 'order_promotion', 'Christmas', -851, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(104, NULL, NULL, 34, 'tax', 'Clothing Sales Tax 7% (7%)', 90, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(105, NULL, NULL, 35, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(106, NULL, NULL, 35, 'order_promotion', 'Christmas', -1572, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(107, NULL, NULL, 35, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(108, NULL, NULL, 36, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(109, NULL, NULL, 36, 'order_promotion', 'Christmas', -1572, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(110, NULL, NULL, 36, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(111, NULL, NULL, 37, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(112, NULL, NULL, 37, 'order_promotion', 'Christmas', -1572, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(113, NULL, NULL, 37, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(114, NULL, NULL, 38, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(115, NULL, NULL, 38, 'order_promotion', 'Christmas', -1572, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(116, NULL, NULL, 38, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(117, NULL, NULL, 39, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(118, NULL, NULL, 39, 'order_promotion', 'Christmas', -1572, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(119, NULL, NULL, 39, 'tax', 'Clothing Sales Tax 7% (7%)', 167, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(120, NULL, NULL, 40, 'order_promotion', 'New Year', -89, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(121, NULL, NULL, 40, 'order_promotion', 'Christmas', -1473, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(122, NULL, NULL, 40, 'tax', 'Clothing Sales Tax 7% (7%)', 158, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(123, NULL, NULL, 41, 'order_promotion', 'New Year', -89, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(124, NULL, NULL, 41, 'order_promotion', 'Christmas', -1473, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(125, NULL, NULL, 41, 'tax', 'Clothing Sales Tax 7% (7%)', 157, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(126, NULL, NULL, 42, 'order_promotion', 'New Year', -89, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(127, NULL, NULL, 42, 'order_promotion', 'Christmas', -1473, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(128, NULL, NULL, 42, 'tax', 'Clothing Sales Tax 7% (7%)', 157, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(129, 3, NULL, NULL, 'shipping', 'DHL Express', 373, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(130, NULL, NULL, 43, 'order_promotion', 'New Year', -25, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(131, NULL, NULL, 43, 'order_promotion', 'Christmas', -526, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(132, NULL, NULL, 43, 'tax', 'Clothing Sales Tax 7% (7%)', 57, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(133, NULL, NULL, 44, 'order_promotion', 'New Year', -25, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(134, NULL, NULL, 44, 'order_promotion', 'Christmas', -526, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(135, NULL, NULL, 44, 'tax', 'Clothing Sales Tax 7% (7%)', 56, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(136, NULL, NULL, 45, 'order_promotion', 'New Year', -25, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(137, NULL, NULL, 45, 'order_promotion', 'Christmas', -526, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(138, NULL, NULL, 45, 'tax', 'Clothing Sales Tax 7% (7%)', 56, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(139, NULL, NULL, 46, 'order_promotion', 'New Year', -25, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(140, NULL, NULL, 46, 'order_promotion', 'Christmas', -525, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(141, NULL, NULL, 46, 'tax', 'Clothing Sales Tax 7% (7%)', 56, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(142, NULL, NULL, 47, 'order_promotion', 'New Year', -24, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(143, NULL, NULL, 47, 'order_promotion', 'Christmas', -525, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(144, NULL, NULL, 47, 'tax', 'Clothing Sales Tax 7% (7%)', 56, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(145, NULL, NULL, 48, 'order_promotion', 'New Year', -105, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(146, NULL, NULL, 48, 'order_promotion', 'Christmas', -2226, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(147, NULL, NULL, 48, 'tax', 'Clothing Sales Tax 7% (7%)', 238, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(148, NULL, NULL, 49, 'order_promotion', 'New Year', -104, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(149, NULL, NULL, 49, 'order_promotion', 'Christmas', -2225, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(150, NULL, NULL, 49, 'tax', 'Clothing Sales Tax 7% (7%)', 237, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(151, NULL, NULL, 50, 'order_promotion', 'New Year', -28, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(152, NULL, NULL, 50, 'order_promotion', 'Christmas', -599, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(153, NULL, NULL, 50, 'tax', 'Clothing Sales Tax 7% (7%)', 64, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(154, NULL, NULL, 51, 'order_promotion', 'New Year', -28, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(155, NULL, NULL, 51, 'order_promotion', 'Christmas', -599, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(156, NULL, NULL, 51, 'tax', 'Clothing Sales Tax 7% (7%)', 64, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(157, NULL, NULL, 52, 'order_promotion', 'New Year', -28, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(158, NULL, NULL, 52, 'order_promotion', 'Christmas', -598, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(159, NULL, NULL, 52, 'tax', 'Clothing Sales Tax 7% (7%)', 64, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(160, NULL, NULL, 53, 'order_promotion', 'New Year', -28, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(161, NULL, NULL, 53, 'order_promotion', 'Christmas', -598, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(162, NULL, NULL, 53, 'tax', 'Clothing Sales Tax 7% (7%)', 64, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(163, NULL, NULL, 54, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(164, NULL, NULL, 54, 'order_promotion', 'Christmas', -2004, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(165, NULL, NULL, 54, 'tax', 'Clothing Sales Tax 7% (7%)', 214, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(166, NULL, NULL, 55, 'order_promotion', 'New Year', -94, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(167, NULL, NULL, 55, 'order_promotion', 'Christmas', -2004, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(168, NULL, NULL, 55, 'tax', 'Clothing Sales Tax 7% (7%)', 214, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(169, NULL, NULL, 56, 'order_promotion', 'New Year', -94, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(170, NULL, NULL, 56, 'order_promotion', 'Christmas', -2004, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(171, NULL, NULL, 56, 'tax', 'Clothing Sales Tax 7% (7%)', 214, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(172, NULL, NULL, 57, 'order_promotion', 'New Year', -94, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(173, NULL, NULL, 57, 'order_promotion', 'Christmas', -2003, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(174, NULL, NULL, 57, 'tax', 'Clothing Sales Tax 7% (7%)', 214, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(175, NULL, NULL, 58, 'order_promotion', 'New Year', -94, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(176, NULL, NULL, 58, 'order_promotion', 'Christmas', -2003, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(177, NULL, NULL, 58, 'tax', 'Clothing Sales Tax 7% (7%)', 213, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(178, NULL, NULL, 59, 'order_promotion', 'New Year', -84, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(179, NULL, NULL, 59, 'order_promotion', 'Christmas', -1787, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(180, NULL, NULL, 59, 'tax', 'Clothing Sales Tax 7% (7%)', 191, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(181, 4, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(182, NULL, NULL, 60, 'order_promotion', 'New Year', -123, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(183, NULL, NULL, 60, 'order_promotion', 'Christmas', -3186, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(184, NULL, NULL, 60, 'tax', 'Clothing Sales Tax 7% (7%)', 340, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(185, NULL, NULL, 61, 'order_promotion', 'New Year', -123, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(186, NULL, NULL, 61, 'order_promotion', 'Christmas', -3185, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(187, NULL, NULL, 61, 'tax', 'Clothing Sales Tax 7% (7%)', 340, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(188, NULL, NULL, 62, 'order_promotion', 'New Year', -123, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(189, NULL, NULL, 62, 'order_promotion', 'Christmas', -3185, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(190, NULL, NULL, 62, 'tax', 'Clothing Sales Tax 7% (7%)', 340, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(191, NULL, NULL, 63, 'order_promotion', 'New Year', -123, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(192, NULL, NULL, 63, 'order_promotion', 'Christmas', -3185, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(193, NULL, NULL, 63, 'tax', 'Clothing Sales Tax 7% (7%)', 340, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(194, NULL, NULL, 64, 'order_promotion', 'New Year', -102, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(195, NULL, NULL, 64, 'order_promotion', 'Christmas', -2628, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(196, NULL, NULL, 64, 'tax', 'Clothing Sales Tax 7% (7%)', 281, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(197, NULL, NULL, 65, 'order_promotion', 'New Year', -102, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(198, NULL, NULL, 65, 'order_promotion', 'Christmas', -2628, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(199, NULL, NULL, 65, 'tax', 'Clothing Sales Tax 7% (7%)', 281, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(200, NULL, NULL, 66, 'order_promotion', 'New Year', -102, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(201, NULL, NULL, 66, 'order_promotion', 'Christmas', -2628, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(202, NULL, NULL, 66, 'tax', 'Clothing Sales Tax 7% (7%)', 280, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(203, NULL, NULL, 67, 'order_promotion', 'New Year', -101, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(204, NULL, NULL, 67, 'order_promotion', 'Christmas', -2628, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(205, NULL, NULL, 67, 'tax', 'Clothing Sales Tax 7% (7%)', 280, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(206, NULL, NULL, 68, 'order_promotion', 'New Year', -101, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(207, NULL, NULL, 68, 'order_promotion', 'Christmas', -2627, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(208, NULL, NULL, 68, 'tax', 'Clothing Sales Tax 7% (7%)', 280, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(209, 5, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(210, NULL, NULL, 69, 'tax', 'Clothing Sales Tax 7% (7%)', 177, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(211, NULL, NULL, 70, 'tax', 'Clothing Sales Tax 7% (7%)', 177, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(212, NULL, NULL, 71, 'tax', 'Clothing Sales Tax 7% (7%)', 176, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(213, 6, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(214, NULL, NULL, 72, 'order_promotion', 'New Year', -201, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(215, NULL, NULL, 72, 'order_promotion', 'Christmas', -2752, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(216, NULL, NULL, 72, 'tax', 'Clothing Sales Tax 7% (7%)', 294, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(217, NULL, NULL, 73, 'order_promotion', 'New Year', -172, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(218, NULL, NULL, 73, 'order_promotion', 'Christmas', -2347, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(219, NULL, NULL, 73, 'tax', 'Sales Tax 20% (20%)', 638, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(220, NULL, NULL, 74, 'order_promotion', 'New Year', -260, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(221, NULL, NULL, 74, 'order_promotion', 'Christmas', -3556, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(222, NULL, NULL, 74, 'tax', 'Clothing Sales Tax 7% (7%)', 380, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(223, NULL, NULL, 75, 'order_promotion', 'New Year', -123, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(224, NULL, NULL, 75, 'order_promotion', 'Christmas', -1670, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(225, NULL, NULL, 75, 'tax', 'Clothing Sales Tax 7% (7%)', 179, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(226, NULL, NULL, 76, 'order_promotion', 'New Year', -122, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(227, NULL, NULL, 76, 'order_promotion', 'Christmas', -1670, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(228, NULL, NULL, 76, 'tax', 'Clothing Sales Tax 7% (7%)', 178, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(229, NULL, NULL, 77, 'order_promotion', 'New Year', -122, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(230, NULL, NULL, 77, 'order_promotion', 'Christmas', -1669, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(231, NULL, NULL, 77, 'tax', 'Clothing Sales Tax 7% (7%)', 178, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(232, 7, NULL, NULL, 'shipping', 'UPS', 164, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(233, NULL, NULL, 78, 'order_promotion', 'New Year', -12, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(234, NULL, NULL, 78, 'order_promotion', 'Christmas', -322, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(235, NULL, NULL, 78, 'tax', 'Clothing Sales Tax 7% (7%)', 35, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(236, NULL, NULL, 79, 'order_promotion', 'New Year', -11, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(237, NULL, NULL, 79, 'order_promotion', 'Christmas', -322, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(238, NULL, NULL, 79, 'tax', 'Clothing Sales Tax 7% (7%)', 35, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(239, NULL, NULL, 80, 'order_promotion', 'New Year', -11, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(240, NULL, NULL, 80, 'order_promotion', 'Christmas', -322, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(241, NULL, NULL, 80, 'tax', 'Clothing Sales Tax 7% (7%)', 34, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(242, NULL, NULL, 81, 'order_promotion', 'New Year', -11, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(243, NULL, NULL, 81, 'order_promotion', 'Christmas', -322, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(244, NULL, NULL, 81, 'tax', 'Clothing Sales Tax 7% (7%)', 34, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(245, NULL, NULL, 82, 'order_promotion', 'New Year', -11, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(246, NULL, NULL, 82, 'order_promotion', 'Christmas', -321, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(247, NULL, NULL, 82, 'tax', 'Clothing Sales Tax 7% (7%)', 34, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(248, NULL, NULL, 83, 'order_promotion', 'New Year', -60, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(249, NULL, NULL, 83, 'order_promotion', 'Christmas', -1730, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(250, NULL, NULL, 83, 'tax', 'Clothing Sales Tax 7% (7%)', 185, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(251, NULL, NULL, 84, 'order_promotion', 'New Year', -60, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(252, NULL, NULL, 84, 'order_promotion', 'Christmas', -1730, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(253, NULL, NULL, 84, 'tax', 'Clothing Sales Tax 7% (7%)', 185, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(254, NULL, NULL, 85, 'order_promotion', 'New Year', -60, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(255, NULL, NULL, 85, 'order_promotion', 'Christmas', -1730, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(256, NULL, NULL, 85, 'tax', 'Clothing Sales Tax 7% (7%)', 185, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(257, NULL, NULL, 86, 'order_promotion', 'New Year', -60, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(258, NULL, NULL, 86, 'order_promotion', 'Christmas', -1730, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(259, NULL, NULL, 86, 'tax', 'Clothing Sales Tax 7% (7%)', 184, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(260, NULL, NULL, 87, 'order_promotion', 'New Year', -59, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(261, NULL, NULL, 87, 'order_promotion', 'Christmas', -1729, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(262, NULL, NULL, 87, 'tax', 'Clothing Sales Tax 7% (7%)', 184, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(263, NULL, NULL, 88, 'order_promotion', 'New Year', -119, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(264, NULL, NULL, 88, 'order_promotion', 'Christmas', -3428, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(265, NULL, NULL, 88, 'tax', 'Clothing Sales Tax 7% (7%)', 366, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(266, NULL, NULL, 89, 'order_promotion', 'New Year', -119, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(267, NULL, NULL, 89, 'order_promotion', 'Christmas', -3428, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(268, NULL, NULL, 89, 'tax', 'Clothing Sales Tax 7% (7%)', 366, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(269, NULL, NULL, 90, 'order_promotion', 'New Year', -118, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(270, NULL, NULL, 90, 'order_promotion', 'Christmas', -3427, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(271, NULL, NULL, 90, 'tax', 'Clothing Sales Tax 7% (7%)', 366, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(272, NULL, NULL, 91, 'order_promotion', 'New Year', -109, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(273, NULL, NULL, 91, 'order_promotion', 'Christmas', -3152, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(274, NULL, NULL, 91, 'tax', 'Clothing Sales Tax 7% (7%)', 337, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(275, NULL, NULL, 92, 'order_promotion', 'New Year', -109, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(276, NULL, NULL, 92, 'order_promotion', 'Christmas', -3152, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(277, NULL, NULL, 92, 'tax', 'Clothing Sales Tax 7% (7%)', 336, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(278, NULL, NULL, 93, 'order_promotion', 'New Year', -18, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(279, NULL, NULL, 93, 'order_promotion', 'Christmas', -512, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(280, NULL, NULL, 93, 'tax', 'Clothing Sales Tax 7% (7%)', 55, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(281, NULL, NULL, 94, 'order_promotion', 'New Year', -18, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(282, NULL, NULL, 94, 'order_promotion', 'Christmas', -511, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(283, NULL, NULL, 94, 'tax', 'Clothing Sales Tax 7% (7%)', 55, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(284, NULL, NULL, 95, 'order_promotion', 'New Year', -18, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(285, NULL, NULL, 95, 'order_promotion', 'Christmas', -511, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(286, NULL, NULL, 95, 'tax', 'Clothing Sales Tax 7% (7%)', 54, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(287, NULL, NULL, 96, 'order_promotion', 'New Year', -17, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(288, NULL, NULL, 96, 'order_promotion', 'Christmas', -511, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(289, NULL, NULL, 96, 'tax', 'Clothing Sales Tax 7% (7%)', 54, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(290, 8, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(291, NULL, NULL, 97, 'order_promotion', 'New Year', -444, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(292, NULL, NULL, 97, 'order_promotion', 'Christmas', -2243, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(293, NULL, NULL, 97, 'tax', 'Sales Tax 20% (20%)', 610, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(294, NULL, NULL, 98, 'order_promotion', 'New Year', -426, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(295, NULL, NULL, 98, 'order_promotion', 'Christmas', -2160, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(296, NULL, NULL, 98, 'tax', 'Sales Tax 20% (20%)', 587, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(297, NULL, NULL, 99, 'order_promotion', 'New Year', -95, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(298, NULL, NULL, 99, 'order_promotion', 'Christmas', -482, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(299, NULL, NULL, 99, 'tax', 'Clothing Sales Tax 7% (7%)', 51, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(300, NULL, NULL, 100, 'order_promotion', 'New Year', -18, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(301, NULL, NULL, 100, 'order_promotion', 'Christmas', -90, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(302, NULL, NULL, 100, 'tax', 'Sales Tax 20% (20%)', 25, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(303, NULL, NULL, 101, 'order_promotion', 'New Year', -17, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(304, NULL, NULL, 101, 'order_promotion', 'Christmas', -90, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(305, NULL, NULL, 101, 'tax', 'Sales Tax 20% (20%)', 24, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(306, 9, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(307, NULL, NULL, 102, 'order_promotion', 'New Year', -35, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(308, NULL, NULL, 102, 'order_promotion', 'Christmas', -352, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(309, NULL, NULL, 102, 'tax', 'Clothing Sales Tax 7% (7%)', 38, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(310, NULL, NULL, 103, 'order_promotion', 'New Year', -35, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(311, NULL, NULL, 103, 'order_promotion', 'Christmas', -352, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(312, NULL, NULL, 103, 'tax', 'Clothing Sales Tax 7% (7%)', 38, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(313, NULL, NULL, 104, 'order_promotion', 'New Year', -35, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(314, NULL, NULL, 104, 'order_promotion', 'Christmas', -351, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(315, NULL, NULL, 104, 'tax', 'Clothing Sales Tax 7% (7%)', 37, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(316, NULL, NULL, 105, 'order_promotion', 'New Year', -35, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(317, NULL, NULL, 105, 'order_promotion', 'Christmas', -351, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(318, NULL, NULL, 105, 'tax', 'Clothing Sales Tax 7% (7%)', 37, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(319, NULL, NULL, 106, 'order_promotion', 'New Year', -267, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(320, NULL, NULL, 106, 'order_promotion', 'Christmas', -2673, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(321, NULL, NULL, 106, 'tax', 'Clothing Sales Tax 7% (7%)', 286, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(322, NULL, NULL, 107, 'order_promotion', 'New Year', -266, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(323, NULL, NULL, 107, 'order_promotion', 'Christmas', -2673, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(324, NULL, NULL, 107, 'tax', 'Clothing Sales Tax 7% (7%)', 285, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(325, NULL, NULL, 108, 'order_promotion', 'New Year', -266, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(326, NULL, NULL, 108, 'order_promotion', 'Christmas', -2672, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(327, NULL, NULL, 108, 'tax', 'Clothing Sales Tax 7% (7%)', 285, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(328, NULL, NULL, 109, 'order_promotion', 'New Year', -13, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(329, NULL, NULL, 109, 'order_promotion', 'Christmas', -122, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(330, NULL, NULL, 109, 'tax', 'Clothing Sales Tax 7% (7%)', 13, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(331, NULL, NULL, 110, 'order_promotion', 'New Year', -12, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(332, NULL, NULL, 110, 'order_promotion', 'Christmas', -122, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(333, NULL, NULL, 110, 'tax', 'Clothing Sales Tax 7% (7%)', 13, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(334, NULL, NULL, 111, 'order_promotion', 'New Year', -12, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(335, NULL, NULL, 111, 'order_promotion', 'Christmas', -122, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(336, NULL, NULL, 111, 'tax', 'Clothing Sales Tax 7% (7%)', 13, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(337, NULL, NULL, 112, 'order_promotion', 'New Year', -12, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(338, NULL, NULL, 112, 'order_promotion', 'Christmas', -121, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(339, NULL, NULL, 112, 'tax', 'Clothing Sales Tax 7% (7%)', 13, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(340, NULL, NULL, 113, 'order_promotion', 'New Year', -12, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(341, NULL, NULL, 113, 'order_promotion', 'Christmas', -121, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(342, NULL, NULL, 113, 'tax', 'Clothing Sales Tax 7% (7%)', 13, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(343, 10, NULL, NULL, 'shipping', 'UPS', 164, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(344, NULL, NULL, 114, 'order_promotion', 'New Year', -108, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(345, NULL, NULL, 114, 'order_promotion', 'Christmas', -3342, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(346, NULL, NULL, 114, 'tax', 'Clothing Sales Tax 7% (7%)', 357, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(347, NULL, NULL, 115, 'order_promotion', 'New Year', -107, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(348, NULL, NULL, 115, 'order_promotion', 'Christmas', -3342, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(349, NULL, NULL, 115, 'tax', 'Clothing Sales Tax 7% (7%)', 357, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(350, NULL, NULL, 116, 'order_promotion', 'New Year', -107, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(351, NULL, NULL, 116, 'order_promotion', 'Christmas', -3342, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(352, NULL, NULL, 116, 'tax', 'Clothing Sales Tax 7% (7%)', 357, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(353, NULL, NULL, 117, 'order_promotion', 'New Year', -107, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(354, NULL, NULL, 117, 'order_promotion', 'Christmas', -3342, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(355, NULL, NULL, 117, 'tax', 'Clothing Sales Tax 7% (7%)', 357, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(356, NULL, NULL, 118, 'order_promotion', 'New Year', -107, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(357, NULL, NULL, 118, 'order_promotion', 'Christmas', -3342, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(358, NULL, NULL, 118, 'tax', 'Clothing Sales Tax 7% (7%)', 356, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(359, NULL, NULL, 119, 'order_promotion', 'New Year', -93, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(360, NULL, NULL, 119, 'order_promotion', 'Christmas', -2888, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(361, NULL, NULL, 119, 'tax', 'Clothing Sales Tax 7% (7%)', 309, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(362, NULL, NULL, 120, 'order_promotion', 'New Year', -93, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(363, NULL, NULL, 120, 'order_promotion', 'Christmas', -2888, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(364, NULL, NULL, 120, 'tax', 'Clothing Sales Tax 7% (7%)', 308, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(365, NULL, NULL, 121, 'order_promotion', 'New Year', -93, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(366, NULL, NULL, 121, 'order_promotion', 'Christmas', -2888, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(367, NULL, NULL, 121, 'tax', 'Clothing Sales Tax 7% (7%)', 308, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(368, NULL, NULL, 122, 'order_promotion', 'New Year', -93, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(369, NULL, NULL, 122, 'order_promotion', 'Christmas', -2888, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(370, NULL, NULL, 122, 'tax', 'Clothing Sales Tax 7% (7%)', 308, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(371, NULL, NULL, 123, 'order_promotion', 'New Year', -92, 0, 0, 'new_year', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(372, NULL, NULL, 123, 'order_promotion', 'Christmas', -2887, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(373, NULL, NULL, 123, 'tax', 'Clothing Sales Tax 7% (7%)', 308, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(374, 11, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(375, NULL, NULL, 124, 'order_promotion', 'Christmas', -2774, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(376, NULL, NULL, 124, 'tax', 'Clothing Sales Tax 7% (7%)', 296, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(377, NULL, NULL, 125, 'order_promotion', 'Christmas', -2774, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(378, NULL, NULL, 125, 'tax', 'Clothing Sales Tax 7% (7%)', 296, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(379, NULL, NULL, 126, 'order_promotion', 'Christmas', -2774, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(380, NULL, NULL, 126, 'tax', 'Clothing Sales Tax 7% (7%)', 296, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(381, NULL, NULL, 127, 'order_promotion', 'Christmas', -2413, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(382, NULL, NULL, 127, 'tax', 'Sales Tax 20% (20%)', 656, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(383, NULL, NULL, 128, 'order_promotion', 'Christmas', -2413, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(384, NULL, NULL, 128, 'tax', 'Sales Tax 20% (20%)', 656, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(385, NULL, NULL, 129, 'order_promotion', 'Christmas', -2412, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(386, NULL, NULL, 129, 'tax', 'Sales Tax 20% (20%)', 656, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(387, NULL, NULL, 130, 'order_promotion', 'Christmas', -3194, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(388, NULL, NULL, 130, 'tax', 'Clothing Sales Tax 7% (7%)', 341, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(389, NULL, NULL, 131, 'order_promotion', 'Christmas', -3194, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(390, NULL, NULL, 131, 'tax', 'Clothing Sales Tax 7% (7%)', 341, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(391, NULL, NULL, 132, 'order_promotion', 'Christmas', -3193, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(392, NULL, NULL, 132, 'tax', 'Clothing Sales Tax 7% (7%)', 341, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(393, NULL, NULL, 133, 'order_promotion', 'Christmas', -3193, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(394, NULL, NULL, 133, 'tax', 'Clothing Sales Tax 7% (7%)', 340, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(395, NULL, NULL, 134, 'order_promotion', 'Christmas', -1068, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(396, NULL, NULL, 134, 'tax', 'Clothing Sales Tax 7% (7%)', 114, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(397, NULL, NULL, 135, 'order_promotion', 'Christmas', -1068, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(398, NULL, NULL, 135, 'tax', 'Clothing Sales Tax 7% (7%)', 114, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(399, 12, NULL, NULL, 'shipping', 'UPS', 164, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(400, NULL, NULL, 136, 'order_promotion', 'Christmas', -97, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(401, NULL, NULL, 136, 'tax', 'Sales Tax 20% (20%)', 27, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(402, NULL, NULL, 137, 'order_promotion', 'Christmas', -97, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(403, NULL, NULL, 137, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(404, NULL, NULL, 138, 'order_promotion', 'Christmas', -96, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(405, NULL, NULL, 138, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(406, NULL, NULL, 139, 'order_promotion', 'Christmas', -96, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(407, NULL, NULL, 139, 'tax', 'Sales Tax 20% (20%)', 26, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(408, NULL, NULL, 140, 'order_promotion', 'Christmas', -1025, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(409, NULL, NULL, 140, 'tax', 'Clothing Sales Tax 7% (7%)', 110, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(410, NULL, NULL, 141, 'order_promotion', 'Christmas', -1025, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02');
INSERT INTO `sylius_adjustment` (`id`, `order_id`, `order_item_id`, `order_item_unit_id`, `type`, `label`, `amount`, `is_neutral`, `is_locked`, `origin_code`, `created_at`, `updated_at`) VALUES
(411, NULL, NULL, 141, 'tax', 'Clothing Sales Tax 7% (7%)', 110, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(412, NULL, NULL, 142, 'order_promotion', 'Christmas', -1025, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(413, NULL, NULL, 142, 'tax', 'Clothing Sales Tax 7% (7%)', 109, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(414, NULL, NULL, 143, 'order_promotion', 'Christmas', -1025, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(415, NULL, NULL, 143, 'tax', 'Clothing Sales Tax 7% (7%)', 109, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(416, NULL, NULL, 144, 'order_promotion', 'Christmas', -1024, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(417, NULL, NULL, 144, 'tax', 'Clothing Sales Tax 7% (7%)', 109, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(418, 13, NULL, NULL, 'shipping', 'DHL Express', 373, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(419, NULL, NULL, 145, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(420, NULL, NULL, 145, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(421, NULL, NULL, 146, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(422, NULL, NULL, 146, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(423, NULL, NULL, 147, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(424, NULL, NULL, 147, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(425, NULL, NULL, 148, 'order_promotion', 'Christmas', -2017, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(426, NULL, NULL, 148, 'tax', 'Clothing Sales Tax 7% (7%)', 216, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(427, NULL, NULL, 149, 'order_promotion', 'Christmas', -2017, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(428, NULL, NULL, 149, 'tax', 'Clothing Sales Tax 7% (7%)', 215, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(429, NULL, NULL, 150, 'order_promotion', 'Christmas', -2017, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(430, NULL, NULL, 150, 'tax', 'Clothing Sales Tax 7% (7%)', 215, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(431, NULL, NULL, 151, 'order_promotion', 'Christmas', -1846, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(432, NULL, NULL, 151, 'tax', 'Clothing Sales Tax 7% (7%)', 197, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(433, NULL, NULL, 152, 'order_promotion', 'Christmas', -1608, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(434, NULL, NULL, 152, 'tax', 'Clothing Sales Tax 7% (7%)', 172, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(435, NULL, NULL, 153, 'order_promotion', 'Christmas', -3596, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(436, NULL, NULL, 153, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(437, NULL, NULL, 154, 'order_promotion', 'Christmas', -3596, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(438, NULL, NULL, 154, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(439, NULL, NULL, 155, 'order_promotion', 'Christmas', -3596, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(440, NULL, NULL, 155, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(441, NULL, NULL, 156, 'order_promotion', 'Christmas', -3595, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(442, NULL, NULL, 156, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(443, NULL, NULL, 157, 'order_promotion', 'Christmas', -3595, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(444, NULL, NULL, 157, 'tax', 'Clothing Sales Tax 7% (7%)', 383, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(445, 14, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(446, NULL, NULL, 158, 'tax', 'Clothing Sales Tax 7% (7%)', 563, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(447, 15, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(448, NULL, NULL, 159, 'order_promotion', 'Christmas', -3596, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(449, NULL, NULL, 159, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(450, NULL, NULL, 160, 'order_promotion', 'Christmas', -3596, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(451, NULL, NULL, 160, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(452, NULL, NULL, 161, 'order_promotion', 'Christmas', -3596, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(453, NULL, NULL, 161, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(454, NULL, NULL, 162, 'order_promotion', 'Christmas', -3595, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(455, NULL, NULL, 162, 'tax', 'Clothing Sales Tax 7% (7%)', 384, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(456, NULL, NULL, 163, 'order_promotion', 'Christmas', -3595, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(457, NULL, NULL, 163, 'tax', 'Clothing Sales Tax 7% (7%)', 383, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(458, 16, NULL, NULL, 'shipping', 'UPS', 164, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(459, NULL, NULL, 164, 'order_promotion', 'Christmas', -1507, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(460, NULL, NULL, 164, 'tax', 'Clothing Sales Tax 7% (7%)', 161, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(461, NULL, NULL, 165, 'order_promotion', 'Christmas', -2322, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(462, NULL, NULL, 165, 'tax', 'Sales Tax 20% (20%)', 632, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(463, NULL, NULL, 166, 'order_promotion', 'Christmas', -2322, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(464, NULL, NULL, 166, 'tax', 'Sales Tax 20% (20%)', 631, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(465, NULL, NULL, 167, 'order_promotion', 'Christmas', -2321, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(466, NULL, NULL, 167, 'tax', 'Sales Tax 20% (20%)', 631, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(467, NULL, NULL, 168, 'order_promotion', 'Christmas', -2321, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(468, NULL, NULL, 168, 'tax', 'Sales Tax 20% (20%)', 631, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(469, NULL, NULL, 169, 'order_promotion', 'Christmas', -2321, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(470, NULL, NULL, 169, 'tax', 'Sales Tax 20% (20%)', 631, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(471, NULL, NULL, 170, 'order_promotion', 'Christmas', -3345, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(472, NULL, NULL, 170, 'tax', 'Clothing Sales Tax 7% (7%)', 357, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(473, NULL, NULL, 171, 'order_promotion', 'Christmas', -3344, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(474, NULL, NULL, 171, 'tax', 'Clothing Sales Tax 7% (7%)', 357, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(475, NULL, NULL, 172, 'order_promotion', 'Christmas', -909, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(476, NULL, NULL, 172, 'tax', 'Clothing Sales Tax 7% (7%)', 97, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(477, NULL, NULL, 173, 'order_promotion', 'Christmas', -908, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(478, NULL, NULL, 173, 'tax', 'Clothing Sales Tax 7% (7%)', 97, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(479, NULL, NULL, 174, 'order_promotion', 'Christmas', -908, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(480, NULL, NULL, 174, 'tax', 'Clothing Sales Tax 7% (7%)', 97, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(481, NULL, NULL, 175, 'order_promotion', 'Christmas', -908, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(482, NULL, NULL, 175, 'tax', 'Clothing Sales Tax 7% (7%)', 97, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(483, NULL, NULL, 176, 'order_promotion', 'Christmas', -908, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(484, NULL, NULL, 176, 'tax', 'Clothing Sales Tax 7% (7%)', 97, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(485, 17, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(486, NULL, NULL, 177, 'order_promotion', 'Christmas', -3332, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(487, NULL, NULL, 177, 'tax', 'Clothing Sales Tax 7% (7%)', 356, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(488, NULL, NULL, 178, 'order_promotion', 'Christmas', -3331, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(489, NULL, NULL, 178, 'tax', 'Clothing Sales Tax 7% (7%)', 355, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(490, NULL, NULL, 179, 'order_promotion', 'Christmas', -2801, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(491, NULL, NULL, 179, 'tax', 'Clothing Sales Tax 7% (7%)', 299, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(492, NULL, NULL, 180, 'order_promotion', 'Christmas', -2800, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(493, NULL, NULL, 180, 'tax', 'Clothing Sales Tax 7% (7%)', 299, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(494, NULL, NULL, 181, 'order_promotion', 'Christmas', -2800, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(495, NULL, NULL, 181, 'tax', 'Clothing Sales Tax 7% (7%)', 299, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(496, NULL, NULL, 182, 'order_promotion', 'Christmas', -2800, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(497, NULL, NULL, 182, 'tax', 'Clothing Sales Tax 7% (7%)', 299, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(498, NULL, NULL, 183, 'order_promotion', 'Christmas', -1606, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(499, NULL, NULL, 183, 'tax', 'Clothing Sales Tax 7% (7%)', 172, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(500, NULL, NULL, 184, 'order_promotion', 'Christmas', -1606, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(501, NULL, NULL, 184, 'tax', 'Clothing Sales Tax 7% (7%)', 171, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(502, NULL, NULL, 185, 'order_promotion', 'Christmas', -3214, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(503, NULL, NULL, 185, 'tax', 'Clothing Sales Tax 7% (7%)', 343, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(504, NULL, NULL, 186, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(505, NULL, NULL, 186, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(506, NULL, NULL, 187, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(507, NULL, NULL, 187, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(508, 18, NULL, NULL, 'shipping', 'DHL Express', 373, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(509, NULL, NULL, 188, 'order_promotion', 'Christmas', -1574, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(510, NULL, NULL, 188, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(511, NULL, NULL, 189, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(512, NULL, NULL, 189, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(513, NULL, NULL, 190, 'order_promotion', 'Christmas', -1573, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(514, NULL, NULL, 190, 'tax', 'Clothing Sales Tax 7% (7%)', 168, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(515, NULL, NULL, 191, 'order_promotion', 'Christmas', -2413, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(516, NULL, NULL, 191, 'tax', 'Sales Tax 20% (20%)', 656, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(517, NULL, NULL, 192, 'order_promotion', 'Christmas', -1196, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(518, NULL, NULL, 192, 'tax', 'Clothing Sales Tax 7% (7%)', 128, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(519, NULL, NULL, 193, 'order_promotion', 'Christmas', -1196, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(520, NULL, NULL, 193, 'tax', 'Clothing Sales Tax 7% (7%)', 128, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(521, NULL, NULL, 194, 'order_promotion', 'Christmas', -1195, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(522, NULL, NULL, 194, 'tax', 'Clothing Sales Tax 7% (7%)', 127, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(523, NULL, NULL, 195, 'order_promotion', 'Christmas', -1195, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(524, NULL, NULL, 195, 'tax', 'Clothing Sales Tax 7% (7%)', 127, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(525, NULL, NULL, 196, 'order_promotion', 'Christmas', -2265, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(526, NULL, NULL, 196, 'tax', 'Clothing Sales Tax 7% (7%)', 242, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(527, NULL, NULL, 197, 'order_promotion', 'Christmas', -2265, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(528, NULL, NULL, 197, 'tax', 'Clothing Sales Tax 7% (7%)', 242, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(529, 19, NULL, NULL, 'shipping', 'FedEx', 732, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(530, NULL, NULL, 198, 'order_promotion', 'Christmas', -2923, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(531, NULL, NULL, 198, 'tax', 'Clothing Sales Tax 7% (7%)', 312, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(532, NULL, NULL, 199, 'order_promotion', 'Christmas', -2923, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(533, NULL, NULL, 199, 'tax', 'Clothing Sales Tax 7% (7%)', 312, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(534, NULL, NULL, 200, 'order_promotion', 'Christmas', -2923, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(535, NULL, NULL, 200, 'tax', 'Clothing Sales Tax 7% (7%)', 312, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(536, NULL, NULL, 201, 'order_promotion', 'Christmas', -1642, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(537, NULL, NULL, 201, 'tax', 'Clothing Sales Tax 7% (7%)', 176, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(538, NULL, NULL, 202, 'order_promotion', 'Christmas', -1642, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(539, NULL, NULL, 202, 'tax', 'Clothing Sales Tax 7% (7%)', 175, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(540, NULL, NULL, 203, 'order_promotion', 'Christmas', -1641, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(541, NULL, NULL, 203, 'tax', 'Clothing Sales Tax 7% (7%)', 175, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(542, NULL, NULL, 204, 'order_promotion', 'Christmas', -3545, 0, 0, 'christmas', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(543, NULL, NULL, 204, 'tax', 'Clothing Sales Tax 7% (7%)', 378, 1, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(544, 20, NULL, NULL, 'shipping', 'UPS', 164, 0, 0, NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(545, NULL, NULL, 205, 'tax', 'Clothing Sales Tax 7% (7%)', 518, 1, 0, NULL, '2019-09-23 16:06:21', '2019-09-23 16:06:21'),
(546, 21, NULL, NULL, 'shipping', 'UPS', 164, 0, 0, NULL, '2019-09-23 16:06:21', '2019-09-23 16:06:21');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_admin_api_access_token`
--

CREATE TABLE `sylius_admin_api_access_token` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_admin_api_access_token`
--

INSERT INTO `sylius_admin_api_access_token` (`id`, `client_id`, `user_id`, `token`, `expires_at`, `scope`) VALUES
(1, 1, 2, 'SampleToken', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_admin_api_auth_code`
--

CREATE TABLE `sylius_admin_api_auth_code` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `redirect_uri` longtext COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_admin_api_client`
--

CREATE TABLE `sylius_admin_api_client` (
  `id` int(11) NOT NULL,
  `random_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `redirect_uris` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `secret` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `allowed_grant_types` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_admin_api_client`
--

INSERT INTO `sylius_admin_api_client` (`id`, `random_id`, `redirect_uris`, `secret`, `allowed_grant_types`) VALUES
(1, 'demo_client', 'a:0:{}', 'secret_demo_client', 'a:1:{i:0;s:8:\"password\";}');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_admin_api_refresh_token`
--

CREATE TABLE `sylius_admin_api_refresh_token` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_admin_user`
--

CREATE TABLE `sylius_admin_user` (
  `id` int(11) NOT NULL,
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
  `encoder_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_admin_user`
--

INSERT INTO `sylius_admin_user` (`id`, `username`, `username_canonical`, `enabled`, `salt`, `password`, `last_login`, `password_reset_token`, `password_requested_at`, `email_verification_token`, `verified_at`, `locked`, `expires_at`, `credentials_expire_at`, `roles`, `email`, `email_canonical`, `created_at`, `updated_at`, `first_name`, `last_name`, `locale_code`, `encoder_name`) VALUES
(1, 'sylius', 'sylius', 1, '10h4okcpyvg0ogss0k4gc80s88ok4o4', '$argon2i$v=19$m=1024,t=2,p=2$ZTlQLlFKRmpnbEZZdU9wQg$Hw3hsiWmSQiSzAp2T2tN5Ye2O7qdD58E362TUm/VSMs', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";}', 'sylius@example.com', 'sylius@example.com', '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'John', 'Doe', 'en_US', 'argon2i'),
(2, 'api', 'api', 1, '31xwnwy74csgok4s8ooosswcs4c00k8', '$argon2i$v=19$m=1024,t=2,p=2$NEFtSngydDBFY056bzhvYw$65hLnPRJojrp8bZ6FMEL7QmVfyXi7kiTaGHEf0Wsnyo', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:2:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";i:1;s:15:\"ROLE_API_ACCESS\";}', 'api@example.com', 'api@example.com', '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'Luke', 'Brushwood', 'en_US', 'argon2i'),
(3, 'benborla@icloud.com', 'benborla@icloud.com', 1, 'ie9yisi2luogkwocgcwgocksc4048oo', '$argon2i$v=19$m=1024,t=2,p=2$a0xOaWJTaXE5UzVKTTlBcg$Riu6upQa7J4Bk5vQ4lH1Tf9aOj5MVQrxpsPtutLgRMk', '2019-09-30 14:41:46', NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";}', 'benborla@icloud.com', 'benborla@icloud.com', '2019-09-08 23:31:25', '2019-09-30 14:41:46', NULL, NULL, 'en_US', 'argon2i'),
(4, 'admin', 'admin', 1, 'r3bdkivuc004ck0884o8k8g0ks0k84', '$argon2i$v=19$m=65536,t=4,p=1$SHg2N2xadmtndUIyYlcyYw$oq88HR4iTR0cXp+BlcoiKPSrkCbq5dqFCXTS+UWknZk', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:26:\"ROLE_ADMINISTRATION_ACCESS\";}', 'admin@mail.com', 'admin@mail.com', '2019-09-21 13:39:22', '2019-09-21 13:39:22', 'Admin', 'Nistrator', 'en_US', 'argon2i');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_avatar_image`
--

CREATE TABLE `sylius_avatar_image` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_channel`
--

CREATE TABLE `sylius_channel` (
  `id` int(11) NOT NULL,
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
  `shop_billing_data_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_channel`
--

INSERT INTO `sylius_channel` (`id`, `default_locale_id`, `base_currency_id`, `default_tax_zone_id`, `code`, `name`, `color`, `description`, `enabled`, `hostname`, `created_at`, `updated_at`, `theme_name`, `tax_calculation_strategy`, `contact_email`, `skipping_shipping_step_allowed`, `skipping_payment_step_allowed`, `account_verification_required`, `shop_billing_data_id`) VALUES
(1, 1, 1, 1, 'FASHION_WEB', 'US Web Store', '#000000', NULL, 1, 'localhost', '2019-09-08 23:31:00', '2019-09-30 14:59:14', 'benborla/zeta-meds', 'order_items_based', 'benborla@icloud.com', 0, 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_channel_currencies`
--

CREATE TABLE `sylius_channel_currencies` (
  `channel_id` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_channel_currencies`
--

INSERT INTO `sylius_channel_currencies` (`channel_id`, `currency_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_channel_locales`
--

CREATE TABLE `sylius_channel_locales` (
  `channel_id` int(11) NOT NULL,
  `locale_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_channel_locales`
--

INSERT INTO `sylius_channel_locales` (`channel_id`, `locale_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_channel_pricing`
--

CREATE TABLE `sylius_channel_pricing` (
  `id` int(11) NOT NULL,
  `product_variant_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `original_price` int(11) DEFAULT NULL,
  `channel_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_channel_pricing`
--

INSERT INTO `sylius_channel_pricing` (`id`, `product_variant_id`, `price`, `original_price`, `channel_code`) VALUES
(1, 1, 1408, NULL, 'FASHION_WEB'),
(2, 2, 5057, NULL, 'FASHION_WEB'),
(3, 3, 4140, NULL, 'FASHION_WEB'),
(4, 4, 4320, NULL, 'FASHION_WEB'),
(5, 5, 733, NULL, 'FASHION_WEB'),
(6, 6, 5863, NULL, 'FASHION_WEB'),
(7, 7, 5227, NULL, 'FASHION_WEB'),
(8, 8, 633, NULL, 'FASHION_WEB'),
(9, 9, 7591, NULL, 'FASHION_WEB'),
(10, 10, 5720, NULL, 'FASHION_WEB'),
(11, 11, 7300, NULL, 'FASHION_WEB'),
(12, 12, 3651, NULL, 'FASHION_WEB'),
(13, 13, 1595, NULL, 'FASHION_WEB'),
(14, 14, 1899, NULL, 'FASHION_WEB'),
(15, 15, 3597, NULL, 'FASHION_WEB'),
(16, 16, 7912, NULL, 'FASHION_WEB'),
(17, 17, 1463, NULL, 'FASHION_WEB'),
(18, 18, 8505, NULL, 'FASHION_WEB'),
(19, 19, 8481, NULL, 'FASHION_WEB'),
(20, 20, 3646, NULL, 'FASHION_WEB'),
(21, 21, 960, NULL, 'FASHION_WEB'),
(22, 22, 7154, NULL, 'FASHION_WEB'),
(23, 23, 431, NULL, 'FASHION_WEB'),
(24, 24, 2291, NULL, 'FASHION_WEB'),
(25, 25, 8601, NULL, 'FASHION_WEB'),
(26, 26, 7369, NULL, 'FASHION_WEB'),
(27, 27, 2810, NULL, 'FASHION_WEB'),
(28, 28, 3965, NULL, 'FASHION_WEB'),
(29, 29, 8766, NULL, 'FASHION_WEB'),
(30, 30, 2815, NULL, 'FASHION_WEB'),
(31, 31, 254, NULL, 'FASHION_WEB'),
(32, 32, 6109, NULL, 'FASHION_WEB'),
(33, 33, 6349, NULL, 'FASHION_WEB'),
(34, 34, 2145, NULL, 'FASHION_WEB'),
(35, 35, 765, NULL, 'FASHION_WEB'),
(36, 36, 5390, NULL, 'FASHION_WEB'),
(37, 37, 7017, NULL, 'FASHION_WEB'),
(38, 38, 8301, NULL, 'FASHION_WEB'),
(39, 39, 130, NULL, 'FASHION_WEB'),
(40, 40, 9491, NULL, 'FASHION_WEB'),
(41, 41, 332, NULL, 'FASHION_WEB'),
(42, 42, 4961, NULL, 'FASHION_WEB'),
(43, 43, 8592, NULL, 'FASHION_WEB'),
(44, 44, 9618, NULL, 'FASHION_WEB'),
(45, 45, 4108, NULL, 'FASHION_WEB'),
(46, 46, 2565, NULL, 'FASHION_WEB'),
(47, 47, 7442, NULL, 'FASHION_WEB'),
(48, 48, 8960, NULL, 'FASHION_WEB'),
(49, 49, 1177, NULL, 'FASHION_WEB'),
(50, 50, 4612, NULL, 'FASHION_WEB'),
(51, 51, 3464, NULL, 'FASHION_WEB'),
(52, 52, 8208, NULL, 'FASHION_WEB'),
(53, 53, 191, NULL, 'FASHION_WEB'),
(54, 54, 858, NULL, 'FASHION_WEB'),
(55, 55, 4641, NULL, 'FASHION_WEB'),
(56, 56, 7324, NULL, 'FASHION_WEB'),
(57, 57, 5323, NULL, 'FASHION_WEB'),
(58, 58, 5101, NULL, 'FASHION_WEB'),
(59, 59, 1211, NULL, 'FASHION_WEB'),
(60, 60, 4189, NULL, 'FASHION_WEB'),
(61, 61, 5961, NULL, 'FASHION_WEB'),
(62, 62, 6078, NULL, 'FASHION_WEB'),
(63, 63, 9835, NULL, 'FASHION_WEB'),
(64, 64, 3242, NULL, 'FASHION_WEB'),
(65, 65, 9662, NULL, 'FASHION_WEB'),
(66, 66, 1680, NULL, 'FASHION_WEB'),
(67, 67, 2390, NULL, 'FASHION_WEB'),
(68, 68, 9467, NULL, 'FASHION_WEB'),
(69, 69, 1553, NULL, 'FASHION_WEB'),
(70, 70, 5418, NULL, 'FASHION_WEB'),
(71, 71, 252, NULL, 'FASHION_WEB'),
(72, 72, 1518, NULL, 'FASHION_WEB'),
(73, 73, 4227, NULL, 'FASHION_WEB'),
(74, 74, 9330, NULL, 'FASHION_WEB'),
(75, 75, 8328, NULL, 'FASHION_WEB'),
(76, 76, 9110, NULL, 'FASHION_WEB'),
(77, 77, 9297, NULL, 'FASHION_WEB'),
(78, 78, 1363, NULL, 'FASHION_WEB'),
(79, 79, 5089, NULL, 'FASHION_WEB'),
(80, 80, 2699, NULL, 'FASHION_WEB'),
(81, 81, 6600, NULL, 'FASHION_WEB'),
(82, 82, 8801, NULL, 'FASHION_WEB'),
(83, 83, 4857, NULL, 'FASHION_WEB'),
(84, 84, 866, NULL, 'FASHION_WEB'),
(85, 85, 5308, NULL, 'FASHION_WEB'),
(86, 86, 500, NULL, 'FASHION_WEB'),
(87, 87, 7509, NULL, 'FASHION_WEB'),
(88, 88, 5367, NULL, 'FASHION_WEB'),
(89, 89, 4516, NULL, 'FASHION_WEB'),
(90, 90, 5461, NULL, 'FASHION_WEB'),
(91, 91, 3146, NULL, 'FASHION_WEB'),
(92, 92, 8381, NULL, 'FASHION_WEB'),
(93, 93, 3299, NULL, 'FASHION_WEB'),
(94, 94, 2697, NULL, 'FASHION_WEB'),
(95, 95, 8016, NULL, 'FASHION_WEB'),
(96, 96, 1348, NULL, 'FASHION_WEB'),
(97, 97, 9334, NULL, 'FASHION_WEB'),
(98, 98, 7692, NULL, 'FASHION_WEB'),
(99, 99, 8404, NULL, 'FASHION_WEB'),
(100, 100, 4494, NULL, 'FASHION_WEB'),
(101, 101, 2042, NULL, 'FASHION_WEB'),
(102, 102, 7342, NULL, 'FASHION_WEB'),
(103, 103, 9462, NULL, 'FASHION_WEB'),
(104, 104, 8459, NULL, 'FASHION_WEB'),
(105, 105, 1293, NULL, 'FASHION_WEB'),
(106, 106, 9139, NULL, 'FASHION_WEB'),
(107, 107, 5062, NULL, 'FASHION_WEB'),
(108, 108, 8902, NULL, 'FASHION_WEB'),
(109, 109, 4787, NULL, 'FASHION_WEB'),
(110, 110, 2875, NULL, 'FASHION_WEB'),
(111, 111, 3974, NULL, 'FASHION_WEB'),
(112, 112, 9792, NULL, 'FASHION_WEB'),
(113, 113, 9130, NULL, 'FASHION_WEB'),
(114, 114, 1603, NULL, 'FASHION_WEB'),
(115, 115, 1518, NULL, 'FASHION_WEB'),
(116, 116, 7062, NULL, 'FASHION_WEB'),
(117, 117, 4232, NULL, 'FASHION_WEB'),
(118, 118, 7631, NULL, 'FASHION_WEB'),
(119, 119, 2552, NULL, 'FASHION_WEB');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_country`
--

CREATE TABLE `sylius_country` (
  `id` int(11) NOT NULL,
  `code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_country`
--

INSERT INTO `sylius_country` (`id`, `code`, `enabled`) VALUES
(1, 'US', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_currency`
--

CREATE TABLE `sylius_currency` (
  `id` int(11) NOT NULL,
  `code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_currency`
--

INSERT INTO `sylius_currency` (`id`, `code`, `created_at`, `updated_at`) VALUES
(1, 'USD', '2019-09-08 23:31:00', '2019-09-08 23:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_customer`
--

CREATE TABLE `sylius_customer` (
  `id` int(11) NOT NULL,
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
  `subscribed_to_newsletter` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_customer`
--

INSERT INTO `sylius_customer` (`id`, `customer_group_id`, `default_address_id`, `email`, `email_canonical`, `first_name`, `last_name`, `birthday`, `gender`, `created_at`, `updated_at`, `phone_number`, `subscribed_to_newsletter`) VALUES
(1, 1, NULL, 'shop@example.com', 'shop@example.com', 'John', 'Doe', '1946-10-19 00:46:21', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '252-285-0616', 0),
(2, 2, NULL, 'meda09@okon.net', 'meda09@okon.net', 'Kassandra', 'Reinger', '1980-12-28 22:52:10', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '570-774-7451 x2655', 0),
(3, 1, NULL, 'nelle.kub@gmail.com', 'nelle.kub@gmail.com', 'Johnathon', 'O\'Kon', '1966-12-26 18:22:47', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '207.278.3317 x291', 0),
(4, 1, NULL, 'amills@hotmail.com', 'amills@hotmail.com', 'Renee', 'Hayes', '1994-03-06 09:59:13', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '1-494-254-5481 x18213', 0),
(5, 1, NULL, 'gislason.chester@gmail.com', 'gislason.chester@gmail.com', 'Jalon', 'Tromp', '1976-11-02 21:05:07', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '1-806-692-9815 x51814', 0),
(6, 1, NULL, 'robel.glenda@bechtelar.com', 'robel.glenda@bechtelar.com', 'Collin', 'Halvorson', '1933-09-14 22:14:14', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '(343) 962-5961 x861', 0),
(7, 1, NULL, 'harvey41@gerhold.com', 'harvey41@gerhold.com', 'Sabryna', 'Miller', '1992-10-30 01:59:12', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '(747) 366-2571', 0),
(8, 1, NULL, 'bwolff@yahoo.com', 'bwolff@yahoo.com', 'Arch', 'Braun', '1923-10-17 15:45:28', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '424.772.5198 x78439', 0),
(9, 1, NULL, 'conn.magali@ondricka.com', 'conn.magali@ondricka.com', 'Breana', 'Wyman', '1938-11-25 08:08:00', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '404-552-2536 x89003', 0),
(10, 2, NULL, 'abreitenberg@hotmail.com', 'abreitenberg@hotmail.com', 'Chadrick', 'Jenkins', '1947-02-24 09:33:33', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '996.515.9744 x03663', 0),
(11, 1, NULL, 'karlee27@leuschke.com', 'karlee27@leuschke.com', 'Yasmeen', 'Lubowitz', '1985-08-06 08:11:45', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '1-634-682-5278 x71856', 0),
(12, 1, NULL, 'wehner.davon@gmail.com', 'wehner.davon@gmail.com', 'Breanna', 'Abernathy', '2000-11-11 10:28:00', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '(940) 267-2057 x5119', 0),
(13, 2, NULL, 'xnader@hotmail.com', 'xnader@hotmail.com', 'Orpha', 'Padberg', '1963-03-24 00:47:18', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '1-296-603-9886 x2874', 0),
(14, 1, NULL, 'vince12@hotmail.com', 'vince12@hotmail.com', 'Bennett', 'Murphy', '2011-11-21 06:11:32', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '595.250.0896 x419', 0),
(15, 1, NULL, 'aufderhar.lurline@gmail.com', 'aufderhar.lurline@gmail.com', 'Rodrick', 'Bogisich', '1999-08-15 21:15:54', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '971-951-3422 x91404', 0),
(16, 1, NULL, 'aroberts@gmail.com', 'aroberts@gmail.com', 'Clara', 'Crona', '2005-02-09 22:00:30', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '+1.672.762.1188', 0),
(17, 2, NULL, 'sierra93@doyle.biz', 'sierra93@doyle.biz', 'Maia', 'Nolan', '1980-04-07 20:52:01', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '412-586-1483', 0),
(18, 1, NULL, 'cydney04@abbott.com', 'cydney04@abbott.com', 'Ray', 'McCullough', '2016-07-05 21:44:04', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '(850) 355-5940', 0),
(19, 2, NULL, 'rogahn.therese@kozey.com', 'rogahn.therese@kozey.com', 'Barrett', 'Okuneva', '1978-04-22 01:54:09', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '(708) 538-2511', 0),
(20, 2, NULL, 'ynicolas@gmail.com', 'ynicolas@gmail.com', 'Sister', 'Fay', '1999-09-08 15:49:33', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '219-657-4324', 0),
(21, 1, NULL, 'evandervort@hotmail.com', 'evandervort@hotmail.com', 'Okey', 'Labadie', '1935-08-23 03:13:33', 'u', '2019-09-08 23:31:00', '2019-09-08 23:31:00', '+19032546411', 0);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_customer_group`
--

CREATE TABLE `sylius_customer_group` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_customer_group`
--

INSERT INTO `sylius_customer_group` (`id`, `code`, `name`) VALUES
(1, 'retail', 'Retail'),
(2, 'wholesale', 'Wholesale');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_exchange_rate`
--

CREATE TABLE `sylius_exchange_rate` (
  `id` int(11) NOT NULL,
  `source_currency` int(11) NOT NULL,
  `target_currency` int(11) NOT NULL,
  `ratio` decimal(10,5) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_gateway_config`
--

CREATE TABLE `sylius_gateway_config` (
  `id` int(11) NOT NULL,
  `gateway_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `factory_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `config` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:json_array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_gateway_config`
--

INSERT INTO `sylius_gateway_config` (`id`, `gateway_name`, `factory_name`, `config`) VALUES
(1, 'Offline', 'offline', '[]'),
(2, 'Offline', 'offline', '[]');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_locale`
--

CREATE TABLE `sylius_locale` (
  `id` int(11) NOT NULL,
  `code` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_locale`
--

INSERT INTO `sylius_locale` (`id`, `code`, `created_at`, `updated_at`) VALUES
(1, 'en_US', '2019-09-08 23:31:00', '2019-09-08 23:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_order`
--

CREATE TABLE `sylius_order` (
  `id` int(11) NOT NULL,
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
  `customer_ip` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_order`
--

INSERT INTO `sylius_order` (`id`, `shipping_address_id`, `billing_address_id`, `channel_id`, `promotion_coupon_id`, `customer_id`, `number`, `notes`, `state`, `checkout_completed_at`, `items_total`, `adjustments_total`, `total`, `created_at`, `updated_at`, `currency_code`, `locale_code`, `checkout_state`, `payment_state`, `shipping_state`, `token_value`, `customer_ip`) VALUES
(1, 2, 3, 1, NULL, 10, '000000001', NULL, 'new', '2018-09-22 07:08:35', 29786, 373, 30159, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'cVygPaCOjC', NULL),
(2, 5, 6, 1, NULL, 4, '000000002', NULL, 'new', '2018-09-24 14:27:16', 56065, 373, 56438, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'OPgU~Ne~8M', NULL),
(3, 8, 9, 1, NULL, 4, '000000003', NULL, 'new', '2018-09-29 20:40:13', 26976, 373, 27349, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'HyhB-t2t5W', NULL),
(4, 11, 12, 1, NULL, 12, '000000004', 'Velit esse temporibus illo dolorum iusto voluptas labore.', 'new', '2018-10-13 01:11:23', 34718, 732, 35450, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'Yh7Mg9DrFk', NULL),
(5, 14, 15, 1, NULL, 8, '000000005', NULL, 'new', '2018-11-03 07:49:52', 42225, 732, 42957, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'Qk4CyqVx3t', NULL),
(6, 17, 18, 1, NULL, 10, '000000006', NULL, 'new', '2018-11-20 08:58:53', 8097, 732, 8829, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'nh5rO8Jhns', NULL),
(7, 20, 21, 1, NULL, 18, '000000007', NULL, 'new', '2018-12-19 10:55:42', 22293, 164, 22457, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'gvsqd~Fn~o', NULL),
(8, 23, 24, 1, NULL, 2, '000000008', NULL, 'new', '2018-12-23 07:11:32', 47137, 732, 47869, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'ejpieBI8_s', NULL),
(9, 26, 27, 1, NULL, 5, '000000009', NULL, 'new', '2018-12-28 03:24:06', 8264, 732, 8996, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'LZhdi0dda6', NULL),
(10, 29, 30, 1, NULL, 8, '000000010', NULL, 'new', '2019-02-10 05:06:35', 16368, 164, 16532, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'JFhJGA-eSc', NULL),
(11, 32, 33, 1, NULL, 9, '000000011', NULL, 'new', '2019-02-16 15:55:48', 50821, 732, 51553, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'o0fyg034Or', NULL),
(12, 35, 36, 1, NULL, 20, '000000012', NULL, 'new', '2019-03-02 03:28:06', 49713, 164, 49877, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'VsUqNgyAx0', NULL),
(13, 38, 39, 1, NULL, 10, '000000013', NULL, 'new', '2019-03-12 05:09:03', 8991, 373, 9364, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'd8vUCgkRgf', NULL),
(14, 41, 42, 1, NULL, 4, '000000014', NULL, 'new', '2019-03-26 17:25:44', 52541, 732, 53273, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'q2dK96O3e~', NULL),
(15, 44, 45, 1, NULL, 11, '000000015', NULL, 'new', '2019-04-23 23:48:30', 8601, 732, 9333, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'o2ResiGNb4', NULL),
(16, 47, 48, 1, NULL, 2, '000000016', NULL, 'new', '2019-06-30 14:21:39', 29332, 164, 29496, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'An9K9kHWLQ', NULL),
(17, 50, 51, 1, NULL, 1, '000000017', NULL, 'new', '2019-07-06 17:48:06', 39718, 732, 40450, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'OquwSmYEgi', NULL),
(18, 53, 54, 1, NULL, 5, '000000018', NULL, 'new', '2019-07-24 01:56:10', 44765, 373, 45138, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'gru9_-ANY0', NULL),
(19, 56, 57, 1, NULL, 6, '000000019', 'Autem vitae voluptatibus vero sapiente.', 'new', '2019-08-17 20:47:56', 26830, 732, 27562, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'i-wGNos4HA', NULL),
(20, 59, 60, 1, NULL, 1, '000000020', 'Officia sed fuga explicabo consequatur libero.', 'new', '2019-08-21 12:47:16', 28127, 164, 28291, '2019-09-08 23:31:02', '2019-09-08 23:31:02', 'USD', 'en_US', 'completed', 'awaiting_payment', 'ready', 'cf1rHVD93H', NULL),
(21, NULL, NULL, 1, NULL, NULL, NULL, NULL, 'cart', NULL, 7912, 164, 8076, '2019-09-23 16:06:20', '2019-09-23 16:06:21', 'USD', 'en_US', 'cart', 'cart', 'cart', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_order_item`
--

CREATE TABLE `sylius_order_item` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `units_total` int(11) NOT NULL,
  `adjustments_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `is_immutable` tinyint(1) NOT NULL,
  `product_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `variant_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_order_item`
--

INSERT INTO `sylius_order_item` (`id`, `order_id`, `variant_id`, `quantity`, `unit_price`, `units_total`, `adjustments_total`, `total`, `is_immutable`, `product_name`, `variant_name`) VALUES
(1, 1, 43, 1, 8592, 5218, 0, 5218, 0, 'Circle-skirt Dress', 'L Tall'),
(2, 1, 53, 5, 191, 580, 0, 580, 0, 'Sleeveless Dress', 'M Petite'),
(3, 1, 104, 1, 8459, 5138, 0, 5138, 0, 'Ultra slim', 'XXL'),
(4, 1, 16, 3, 7912, 14416, 0, 14416, 0, 'Slim fit men', 'S'),
(5, 1, 11, 1, 7300, 4434, 0, 4434, 0, 'Regular Fit V-neck woman', 'S'),
(6, 2, 99, 5, 8404, 25766, 0, 25766, 0, 'Slim fit elegant', 'XXL'),
(7, 2, 33, 2, 6349, 7787, 0, 7787, 0, 'Regular cap with big pompon', ''),
(8, 2, 16, 2, 7912, 9704, 0, 9704, 0, 'Slim fit men', 'S'),
(9, 2, 111, 5, 3974, 12185, 0, 12185, 0, 'New age regular', 'M'),
(10, 2, 31, 4, 254, 623, 0, 623, 0, 'Basic winter hot cap', ''),
(11, 3, 24, 5, 2291, 6942, 0, 6942, 0, 'Regular fit men', 'XL'),
(12, 3, 117, 5, 4232, 12825, 0, 12825, 0, 'Whole holes classic', 'L'),
(13, 3, 28, 3, 3965, 7209, 0, 7209, 0, 'Slim fit V-neck men', 'L'),
(14, 4, 1, 5, 1408, 4288, 0, 4288, 0, 'Basic regular woman', 'S'),
(15, 4, 61, 2, 5961, 7262, 0, 7262, 0, 'Sleeveless Dress', 'XL Tall'),
(16, 4, 114, 4, 1603, 3906, 0, 3906, 0, 'New age regular', 'XXL'),
(17, 4, 88, 5, 5367, 16346, 0, 16346, 0, 'Slim fit classic', 'XL'),
(18, 4, 109, 1, 4787, 2916, 0, 2916, 0, 'Slim fit', 'XXL'),
(19, 5, 18, 4, 8505, 20787, 0, 20787, 0, 'Slim fit men', 'L'),
(20, 5, 37, 5, 7017, 21438, 0, 21438, 0, 'Circle-skirt Dress', 'S Tall'),
(21, 6, 80, 3, 2699, 8097, 0, 8097, 0, 'Basic regular', 'S'),
(22, 7, 47, 1, 7442, 4489, 0, 4489, 0, 'Circle-skirt Dress', 'XXL Petite'),
(23, 7, 33, 1, 6349, 3830, 0, 3830, 0, 'Regular cap with big pompon', ''),
(24, 7, 44, 1, 9618, 5802, 0, 5802, 0, 'Circle-skirt Dress', 'XL Petite'),
(25, 7, 89, 3, 4516, 8172, 0, 8172, 0, 'Slim fit classic', 'XXL'),
(26, 8, 54, 5, 858, 2625, 0, 2625, 0, 'Sleeveless Dress', 'M Regular'),
(27, 8, 50, 5, 4612, 14112, 0, 14112, 0, 'Sleeveless Dress', 'S Petite'),
(28, 8, 106, 3, 9139, 16778, 0, 16778, 0, 'Slim fit', 'M'),
(29, 8, 99, 2, 8404, 10286, 0, 10286, 0, 'Slim fit elegant', 'XXL'),
(30, 8, 78, 4, 1363, 3336, 0, 3336, 0, 'Summer tunic', 'XXL Regular'),
(31, 9, 33, 1, 6349, 3662, 0, 3662, 0, 'Regular cap with big pompon', ''),
(32, 9, 32, 1, 6109, 3523, 0, 3523, 0, 'Beautiful cap for woman', ''),
(33, 9, 78, 1, 1363, 786, 0, 786, 0, 'Summer tunic', 'XXL Regular'),
(34, 9, 31, 2, 254, 293, 0, 293, 0, 'Basic winter hot cap', ''),
(35, 10, 21, 4, 960, 2294, 0, 2294, 0, 'Regular fit men', 'S'),
(36, 10, 11, 3, 7300, 13083, 0, 13083, 0, 'Regular Fit V-neck woman', 'S'),
(37, 10, 41, 5, 332, 991, 0, 991, 0, 'Circle-skirt Dress', 'L Petite'),
(38, 11, 108, 5, 8902, 27264, 0, 27264, 0, 'Slim fit', 'XL'),
(39, 11, 98, 5, 7692, 23557, 0, 23557, 0, 'Slim fit elegant', 'XL'),
(40, 12, 11, 3, 7300, 13578, 0, 13578, 0, 'Regular Fit V-neck woman', 'S'),
(41, 12, 33, 3, 6349, 11809, 0, 11809, 0, 'Regular cap with big pompon', ''),
(42, 12, 99, 4, 8404, 20842, 0, 20842, 0, 'Slim fit elegant', 'XXL'),
(43, 12, 27, 2, 2810, 3484, 0, 3484, 0, 'Slim fit V-neck men', 'M'),
(44, 13, 31, 4, 254, 630, 0, 630, 0, 'Basic winter hot cap', ''),
(45, 13, 94, 5, 2697, 8361, 0, 8361, 0, 'Regular Fit casual', 'XXL'),
(46, 14, 3, 3, 4140, 7701, 0, 7701, 0, 'Basic regular woman', 'L'),
(47, 14, 85, 3, 5308, 9873, 0, 9873, 0, 'Slim fit classic', 'S'),
(48, 14, 83, 1, 4857, 3011, 0, 3011, 0, 'Basic regular', 'XL'),
(49, 14, 117, 1, 4232, 2624, 0, 2624, 0, 'Whole holes classic', 'L'),
(50, 14, 103, 5, 9462, 29332, 0, 29332, 0, 'Ultra slim', 'XL'),
(51, 15, 25, 1, 8601, 8601, 0, 8601, 0, 'Regular fit men', 'XXL'),
(52, 16, 103, 5, 9462, 29332, 0, 29332, 0, 'Ultra slim', 'XL'),
(53, 17, 28, 1, 3965, 2458, 0, 2458, 0, 'Slim fit V-neck men', 'L'),
(54, 17, 32, 5, 6109, 18938, 0, 18938, 0, 'Beautiful cap for woman', ''),
(55, 17, 82, 2, 8801, 10913, 0, 10913, 0, 'Basic regular', 'L'),
(56, 17, 67, 5, 2390, 7409, 0, 7409, 0, 'Summer tunic', 'S Tall'),
(57, 18, 29, 2, 8766, 10869, 0, 10869, 0, 'Slim fit V-neck men', 'XL'),
(58, 18, 26, 4, 7369, 18275, 0, 18275, 0, 'Slim fit V-neck men', 'S'),
(59, 18, 73, 2, 4227, 5242, 0, 5242, 0, 'Summer tunic', 'L Tall'),
(60, 18, 104, 1, 8459, 5245, 0, 5245, 0, 'Ultra slim', 'XXL'),
(61, 18, 3, 2, 4140, 5134, 0, 5134, 0, 'Basic regular woman', 'L'),
(62, 19, 3, 3, 4140, 7700, 0, 7700, 0, 'Basic regular woman', 'L'),
(63, 19, 33, 1, 6349, 3936, 0, 3936, 0, 'Regular cap with big pompon', ''),
(64, 19, 91, 4, 3146, 7802, 0, 7802, 0, 'Regular Fit casual', 'M'),
(65, 19, 61, 2, 5961, 7392, 0, 7392, 0, 'Sleeveless Dress', 'XL Tall'),
(66, 20, 98, 3, 7692, 14307, 0, 14307, 0, 'Slim fit elegant', 'XL'),
(67, 20, 4, 3, 4320, 8035, 0, 8035, 0, 'Basic regular woman', 'XL'),
(68, 20, 74, 1, 9330, 5785, 0, 5785, 0, 'Summer tunic', 'XL Petite'),
(69, 21, 16, 1, 7912, 7912, 0, 7912, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_order_item_unit`
--

CREATE TABLE `sylius_order_item_unit` (
  `id` int(11) NOT NULL,
  `order_item_id` int(11) NOT NULL,
  `shipment_id` int(11) DEFAULT NULL,
  `adjustments_total` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_order_item_unit`
--

INSERT INTO `sylius_order_item_unit` (`id`, `order_item_id`, `shipment_id`, `adjustments_total`, `created_at`, `updated_at`) VALUES
(1, 1, 1, -3374, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(2, 2, 1, -76, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(3, 2, 1, -75, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(4, 2, 1, -75, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(5, 2, 1, -75, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(6, 2, 1, -74, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(7, 3, 1, -3321, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(8, 4, 1, -3108, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(9, 4, 1, -3106, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(10, 4, 1, -3106, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(11, 5, 1, -2866, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(12, 6, 2, -3251, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(13, 6, 2, -3251, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(14, 6, 2, -3251, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(15, 6, 2, -3251, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(16, 6, 2, -3250, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(17, 7, 2, -2456, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(18, 7, 2, -2455, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(19, 8, 2, -3061, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(20, 8, 2, -3059, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(21, 9, 2, -1538, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(22, 9, 2, -1538, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(23, 9, 2, -1537, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(24, 9, 2, -1536, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(25, 9, 2, -1536, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(26, 10, 2, -99, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(27, 10, 2, -99, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(28, 10, 2, -98, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(29, 10, 2, -97, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(30, 11, 3, -903, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(31, 11, 3, -903, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(32, 11, 3, -903, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(33, 11, 3, -902, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(34, 11, 3, -902, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(35, 12, 3, -1667, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(36, 12, 3, -1667, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(37, 12, 3, -1667, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(38, 12, 3, -1667, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(39, 12, 3, -1667, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(40, 13, 3, -1562, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(41, 13, 3, -1562, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(42, 13, 3, -1562, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(43, 14, 4, -551, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(44, 14, 4, -551, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(45, 14, 4, -551, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(46, 14, 4, -550, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(47, 14, 4, -549, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(48, 15, 4, -2331, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(49, 15, 4, -2329, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(50, 16, 4, -627, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(51, 16, 4, -627, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(52, 16, 4, -626, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(53, 16, 4, -626, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(54, 17, 4, -2099, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(55, 17, 4, -2098, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(56, 17, 4, -2098, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(57, 17, 4, -2097, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(58, 17, 4, -2097, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(59, 18, 4, -1871, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(60, 19, 5, -3309, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(61, 19, 5, -3308, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(62, 19, 5, -3308, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(63, 19, 5, -3308, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(64, 20, 5, -2730, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(65, 20, 5, -2730, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(66, 20, 5, -2730, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(67, 20, 5, -2729, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(68, 20, 5, -2728, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(69, 21, 6, 0, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(70, 21, 6, 0, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(71, 21, 6, 0, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(72, 22, 7, -2953, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(73, 23, 7, -2519, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(74, 24, 7, -3816, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(75, 25, 7, -1793, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(76, 25, 7, -1792, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(77, 25, 7, -1791, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(78, 26, 8, -334, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(79, 26, 8, -333, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(80, 26, 8, -333, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(81, 26, 8, -333, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(82, 26, 8, -332, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(83, 27, 8, -1790, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(84, 27, 8, -1790, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(85, 27, 8, -1790, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(86, 27, 8, -1790, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(87, 27, 8, -1788, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(88, 28, 8, -3547, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(89, 28, 8, -3547, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(90, 28, 8, -3545, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(91, 29, 8, -3261, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(92, 29, 8, -3261, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(93, 30, 8, -530, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(94, 30, 8, -529, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(95, 30, 8, -529, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(96, 30, 8, -528, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(97, 31, 9, -2687, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(98, 32, 9, -2586, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(99, 33, 9, -577, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(100, 34, 9, -108, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(101, 34, 9, -107, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(102, 35, 10, -387, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(103, 35, 10, -387, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(104, 35, 10, -386, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(105, 35, 10, -386, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(106, 36, 10, -2940, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(107, 36, 10, -2939, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(108, 36, 10, -2938, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(109, 37, 10, -135, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(110, 37, 10, -134, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(111, 37, 10, -134, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(112, 37, 10, -133, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(113, 37, 10, -133, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(114, 38, 11, -3450, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(115, 38, 11, -3449, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(116, 38, 11, -3449, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(117, 38, 11, -3449, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(118, 38, 11, -3449, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(119, 39, 11, -2981, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(120, 39, 11, -2981, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(121, 39, 11, -2981, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(122, 39, 11, -2981, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(123, 39, 11, -2979, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(124, 40, 12, -2774, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(125, 40, 12, -2774, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(126, 40, 12, -2774, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(127, 41, 12, -2413, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(128, 41, 12, -2413, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(129, 41, 12, -2412, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(130, 42, 12, -3194, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(131, 42, 12, -3194, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(132, 42, 12, -3193, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(133, 42, 12, -3193, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(134, 43, 12, -1068, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(135, 43, 12, -1068, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(136, 44, 13, -97, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(137, 44, 13, -97, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(138, 44, 13, -96, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(139, 44, 13, -96, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(140, 45, 13, -1025, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(141, 45, 13, -1025, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(142, 45, 13, -1025, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(143, 45, 13, -1025, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(144, 45, 13, -1024, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(145, 46, 14, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(146, 46, 14, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(147, 46, 14, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(148, 47, 14, -2017, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(149, 47, 14, -2017, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(150, 47, 14, -2017, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(151, 48, 14, -1846, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(152, 49, 14, -1608, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(153, 50, 14, -3596, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(154, 50, 14, -3596, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(155, 50, 14, -3596, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(156, 50, 14, -3595, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(157, 50, 14, -3595, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(158, 51, 15, 0, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(159, 52, 16, -3596, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(160, 52, 16, -3596, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(161, 52, 16, -3596, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(162, 52, 16, -3595, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(163, 52, 16, -3595, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(164, 53, 17, -1507, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(165, 54, 17, -2322, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(166, 54, 17, -2322, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(167, 54, 17, -2321, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(168, 54, 17, -2321, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(169, 54, 17, -2321, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(170, 55, 17, -3345, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(171, 55, 17, -3344, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(172, 56, 17, -909, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(173, 56, 17, -908, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(174, 56, 17, -908, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(175, 56, 17, -908, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(176, 56, 17, -908, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(177, 57, 18, -3332, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(178, 57, 18, -3331, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(179, 58, 18, -2801, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(180, 58, 18, -2800, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(181, 58, 18, -2800, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(182, 58, 18, -2800, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(183, 59, 18, -1606, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(184, 59, 18, -1606, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(185, 60, 18, -3214, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(186, 61, 18, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(187, 61, 18, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(188, 62, 19, -1574, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(189, 62, 19, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(190, 62, 19, -1573, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(191, 63, 19, -2413, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(192, 64, 19, -1196, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(193, 64, 19, -1196, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(194, 64, 19, -1195, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(195, 64, 19, -1195, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(196, 65, 19, -2265, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(197, 65, 19, -2265, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(198, 66, 20, -2923, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(199, 66, 20, -2923, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(200, 66, 20, -2923, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(201, 67, 20, -1642, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(202, 67, 20, -1642, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(203, 67, 20, -1641, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(204, 68, 20, -3545, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(205, 69, 21, 0, '2019-09-23 16:06:20', '2019-09-23 16:06:21');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_order_sequence`
--

CREATE TABLE `sylius_order_sequence` (
  `id` int(11) NOT NULL,
  `idx` int(11) NOT NULL,
  `version` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_order_sequence`
--

INSERT INTO `sylius_order_sequence` (`id`, `idx`, `version`) VALUES
(1, 20, 2);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_payment`
--

CREATE TABLE `sylius_payment` (
  `id` int(11) NOT NULL,
  `method_id` int(11) DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `details` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:json_array)',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_payment`
--

INSERT INTO `sylius_payment` (`id`, `method_id`, `order_id`, `currency_code`, `amount`, `state`, `details`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'USD', 30159, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(2, 2, 2, 'USD', 56438, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(3, 2, 3, 'USD', 27349, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(4, 2, 4, 'USD', 35450, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(5, 1, 5, 'USD', 42957, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(6, 1, 6, 'USD', 8829, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(7, 1, 7, 'USD', 22457, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(8, 1, 8, 'USD', 47869, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(9, 1, 9, 'USD', 8996, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(10, 1, 10, 'USD', 16532, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(11, 1, 11, 'USD', 51553, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(12, 2, 12, 'USD', 49877, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(13, 1, 13, 'USD', 9364, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(14, 1, 14, 'USD', 53273, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(15, 1, 15, 'USD', 9333, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(16, 2, 16, 'USD', 29496, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(17, 2, 17, 'USD', 40450, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(18, 2, 18, 'USD', 45138, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(19, 2, 19, 'USD', 27562, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(20, 2, 20, 'USD', 28291, 'new', '[]', '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(21, 1, 21, 'USD', 8076, 'cart', '[]', '2019-09-23 16:06:21', '2019-09-23 16:06:21');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_payment_method`
--

CREATE TABLE `sylius_payment_method` (
  `id` int(11) NOT NULL,
  `gateway_config_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `environment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_enabled` tinyint(1) NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_payment_method`
--

INSERT INTO `sylius_payment_method` (`id`, `gateway_config_id`, `code`, `environment`, `is_enabled`, `position`, `created_at`, `updated_at`) VALUES
(1, 1, 'cash_on_delivery', NULL, 1, 0, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(2, 2, 'bank_transfer', NULL, 1, 1, '2019-09-08 23:31:00', '2019-09-08 23:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_payment_method_channels`
--

CREATE TABLE `sylius_payment_method_channels` (
  `payment_method_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_payment_method_channels`
--

INSERT INTO `sylius_payment_method_channels` (`payment_method_id`, `channel_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_payment_method_translation`
--

CREATE TABLE `sylius_payment_method_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `instructions` longtext COLLATE utf8_unicode_ci,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_payment_method_translation`
--

INSERT INTO `sylius_payment_method_translation` (`id`, `translatable_id`, `name`, `description`, `instructions`, `locale`) VALUES
(1, 1, 'Cash on delivery', 'Enim iste provident corrupti in ipsa odio adipisci.', NULL, 'en_US'),
(2, 2, 'Bank transfer', 'Hic ab laudantium quod molestias facere labore.', NULL, 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_payment_security_token`
--

CREATE TABLE `sylius_payment_security_token` (
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `details` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:object)',
  `after_url` longtext COLLATE utf8_unicode_ci,
  `target_url` longtext COLLATE utf8_unicode_ci NOT NULL,
  `gateway_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product`
--

CREATE TABLE `sylius_product` (
  `id` int(11) NOT NULL,
  `main_taxon_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  `variant_selection_method` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `average_rating` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product`
--

INSERT INTO `sylius_product` (`id`, `main_taxon_id`, `code`, `created_at`, `updated_at`, `enabled`, `variant_selection_method`, `average_rating`) VALUES
(1, 4, 'Basic_regular_woman', '2019-09-03 20:20:24', '2019-09-08 23:31:01', 1, 'match', 3),
(2, 4, 'Slim_fit_woman', '2019-09-08 00:20:11', '2019-09-08 23:31:01', 1, 'match', 3.5),
(3, 4, 'Regular_Fit_V_neck_woman', '2019-09-02 05:56:44', '2019-09-08 23:31:01', 1, 'match', 5),
(4, 3, 'Slim_fit_men', '2019-09-08 04:34:44', '2019-09-08 23:31:01', 1, 'match', 3),
(5, 3, 'Regular_fit_men', '2019-09-03 04:47:37', '2019-09-08 23:31:01', 1, 'match', 0),
(6, 3, 'Slim_fit_V_neck_men', '2019-09-03 13:08:07', '2019-09-08 23:31:01', 1, 'match', 0),
(7, 7, 'Basic_winter_hot_cap', '2019-09-02 15:37:02', '2019-09-08 23:31:01', 1, 'match', 4),
(8, 6, 'Beautiful_cap_for_woman', '2019-09-08 19:10:15', '2019-09-08 23:31:01', 1, 'match', 0),
(9, 7, 'Regular_cap_with_big_pompon', '2019-09-02 05:43:25', '2019-09-08 23:31:01', 1, 'match', 2),
(10, 6, 'Simple_cap', '2019-09-05 03:29:01', '2019-09-08 23:31:01', 1, 'match', 3.5),
(11, 8, 'Circle_skirt_Dress', '2019-09-02 03:30:27', '2019-09-08 23:31:01', 1, 'match', 0),
(12, 8, 'Sleeveless_Dress', '2019-09-03 22:26:19', '2019-09-08 23:31:01', 1, 'match', 0),
(13, 8, 'Summer_tunic', '2019-09-05 14:12:16', '2019-09-08 23:31:01', 1, 'match', 3),
(14, 10, 'Basic_regular', '2019-09-07 04:49:47', '2019-09-08 23:31:01', 1, 'match', 4),
(15, 10, 'Slim_fit_classic', '2019-09-02 07:59:28', '2019-09-08 23:31:01', 1, 'match', 0),
(16, 10, 'Regular_Fit_casual', '2019-09-04 03:20:30', '2019-09-08 23:31:01', 1, 'match', 0),
(17, 10, 'Slim_fit_elegant', '2019-09-06 19:12:57', '2019-09-08 23:31:01', 1, 'match', 0),
(18, 11, 'Ultra_slim', '2019-09-03 09:37:07', '2019-09-08 23:31:01', 1, 'match', 3),
(19, 11, 'Slim_fit', '2019-09-08 18:19:42', '2019-09-08 23:31:01', 1, 'match', 2),
(20, 11, 'New_age_regular', '2019-09-05 17:21:32', '2019-09-08 23:31:01', 1, 'match', 0),
(21, 11, 'Whole_holes_classic', '2019-09-06 07:56:22', '2019-09-08 23:31:01', 1, 'match', 1.5);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_association`
--

CREATE TABLE `sylius_product_association` (
  `id` int(11) NOT NULL,
  `association_type_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_association`
--

INSERT INTO `sylius_product_association` (`id`, `association_type_id`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 1, 19, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(2, 1, 9, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(3, 1, 16, '2019-09-08 23:31:01', '2019-09-08 23:31:01');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_association_product`
--

CREATE TABLE `sylius_product_association_product` (
  `association_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_association_product`
--

INSERT INTO `sylius_product_association_product` (`association_id`, `product_id`) VALUES
(1, 19),
(1, 21),
(2, 7),
(2, 9),
(3, 15),
(3, 16);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_association_type`
--

CREATE TABLE `sylius_product_association_type` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_association_type`
--

INSERT INTO `sylius_product_association_type` (`id`, `code`, `created_at`, `updated_at`) VALUES
(1, 'similar_products', '2019-09-08 23:31:01', '2019-09-08 23:31:01');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_association_type_translation`
--

CREATE TABLE `sylius_product_association_type_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_association_type_translation`
--

INSERT INTO `sylius_product_association_type_translation` (`id`, `translatable_id`, `name`, `locale`) VALUES
(1, 1, 'Similar products', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_attribute`
--

CREATE TABLE `sylius_product_attribute` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `storage_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_attribute`
--

INSERT INTO `sylius_product_attribute` (`id`, `code`, `type`, `storage_type`, `configuration`, `created_at`, `updated_at`, `position`) VALUES
(1, 't_shirt_brand', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:00', '2019-09-08 23:31:00', 0),
(2, 't_shirt_collection', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:00', '2019-09-08 23:31:00', 1),
(3, 't_shirt_material', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:00', '2019-09-08 23:31:00', 2),
(4, 'cap_brand', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3),
(5, 'cap_collection', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4),
(6, 'cap_material', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 5),
(7, 'dress_brand', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 6),
(8, 'dress_collection', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 7),
(9, 'dress_material', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 8),
(10, 'jeans_brand', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 9),
(11, 'jeans_collection', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 10),
(12, 'jeans_material', 'text', 'text', 'a:0:{}', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 11);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_attribute_translation`
--

CREATE TABLE `sylius_product_attribute_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_attribute_translation`
--

INSERT INTO `sylius_product_attribute_translation` (`id`, `translatable_id`, `name`, `locale`) VALUES
(1, 1, 'T-shirt brand', 'en_US'),
(2, 2, 'T-shirt collection', 'en_US'),
(3, 3, 'T-shirt material', 'en_US'),
(4, 4, 'Cap brand', 'en_US'),
(5, 5, 'Cap collection', 'en_US'),
(6, 6, 'Cap material', 'en_US'),
(7, 7, 'Dress brand', 'en_US'),
(8, 8, 'Dress collection', 'en_US'),
(9, 9, 'Dress material', 'en_US'),
(10, 10, 'Jeans brand', 'en_US'),
(11, 11, 'Jeans collection', 'en_US'),
(12, 12, 'Jeans material', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_attribute_value`
--

CREATE TABLE `sylius_product_attribute_value` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `locale_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text_value` longtext COLLATE utf8_unicode_ci,
  `boolean_value` tinyint(1) DEFAULT NULL,
  `integer_value` int(11) DEFAULT NULL,
  `float_value` double DEFAULT NULL,
  `datetime_value` datetime DEFAULT NULL,
  `date_value` date DEFAULT NULL,
  `json_value` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:json_array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_attribute_value`
--

INSERT INTO `sylius_product_attribute_value` (`id`, `product_id`, `attribute_id`, `locale_code`, `text_value`, `boolean_value`, `integer_value`, `float_value`, `datetime_value`, `date_value`, `json_value`) VALUES
(1, 1, 1, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, 2, 'en_US', 'Sylius Summer 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 3, 'en_US', '100% viscose', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 2, 1, 'en_US', 'Modern Wear', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 2, 2, 'en_US', 'Sylius Summer 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 2, 3, 'en_US', '100% cotton', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 3, 1, 'en_US', 'Celsius Small', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 3, 2, 'en_US', 'Sylius Summer 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 3, 3, 'en_US', '100% viscose', NULL, NULL, NULL, NULL, NULL, NULL),
(10, 4, 1, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 4, 2, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(12, 4, 3, 'en_US', '100% nylon', NULL, NULL, NULL, NULL, NULL, NULL),
(13, 5, 1, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(14, 5, 2, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(15, 5, 3, 'en_US', '100% linen', NULL, NULL, NULL, NULL, NULL, NULL),
(16, 6, 1, 'en_US', 'Modern Wear', NULL, NULL, NULL, NULL, NULL, NULL),
(17, 6, 2, 'en_US', 'Sylius Summer 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(18, 6, 3, 'en_US', '100% polyester', NULL, NULL, NULL, NULL, NULL, NULL),
(19, 7, 4, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(20, 7, 5, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(21, 7, 6, 'en_US', '100% wool', NULL, NULL, NULL, NULL, NULL, NULL),
(22, 8, 4, 'en_US', 'Modern Wear', NULL, NULL, NULL, NULL, NULL, NULL),
(23, 8, 5, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(24, 8, 6, 'en_US', '100% wool', NULL, NULL, NULL, NULL, NULL, NULL),
(25, 9, 4, 'en_US', 'Celsius Small', NULL, NULL, NULL, NULL, NULL, NULL),
(26, 9, 5, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(27, 9, 6, 'en_US', '100% wool', NULL, NULL, NULL, NULL, NULL, NULL),
(28, 10, 4, 'en_US', 'Date & Banana', NULL, NULL, NULL, NULL, NULL, NULL),
(29, 10, 5, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(30, 10, 6, 'en_US', '100% wool', NULL, NULL, NULL, NULL, NULL, NULL),
(31, 11, 7, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(32, 11, 8, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(33, 11, 9, 'en_US', '100% polyester', NULL, NULL, NULL, NULL, NULL, NULL),
(34, 12, 7, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(35, 12, 8, 'en_US', 'Sylius Summer 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(36, 12, 9, 'en_US', '100% wool', NULL, NULL, NULL, NULL, NULL, NULL),
(37, 13, 7, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(38, 13, 8, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(39, 13, 9, 'en_US', '100% ', NULL, NULL, NULL, NULL, NULL, NULL),
(40, 14, 10, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(41, 14, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(42, 14, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(43, 15, 10, 'en_US', 'Modern Wear', NULL, NULL, NULL, NULL, NULL, NULL),
(44, 15, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(45, 15, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(46, 16, 10, 'en_US', 'Celsius Small', NULL, NULL, NULL, NULL, NULL, NULL),
(47, 16, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(48, 16, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(49, 17, 10, 'en_US', 'Date & Banana', NULL, NULL, NULL, NULL, NULL, NULL),
(50, 17, 11, 'en_US', 'Sylius summer 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(51, 17, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(52, 18, 10, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(53, 18, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(54, 18, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(55, 19, 10, 'en_US', 'You are breathtaking', NULL, NULL, NULL, NULL, NULL, NULL),
(56, 19, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(57, 19, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(58, 20, 10, 'en_US', 'Modern Wear', NULL, NULL, NULL, NULL, NULL, NULL),
(59, 20, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(60, 20, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL),
(61, 21, 10, 'en_US', 'Modern Wear', NULL, NULL, NULL, NULL, NULL, NULL),
(62, 21, 11, 'en_US', 'Sylius Winter 2019', NULL, NULL, NULL, NULL, NULL, NULL),
(63, 21, 12, 'en_US', '100% jeans', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_channels`
--

CREATE TABLE `sylius_product_channels` (
  `product_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_channels`
--

INSERT INTO `sylius_product_channels` (`product_id`, `channel_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_image`
--

CREATE TABLE `sylius_product_image` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_image`
--

INSERT INTO `sylius_product_image` (`id`, `owner_id`, `type`, `path`) VALUES
(1, 1, 'main', '1d/e3/ae7e3cc88c869b652d2b424d5605.jpeg'),
(2, 2, 'main', '15/40/1efbb7c74b0d510777c6e4f8471d.jpeg'),
(3, 3, 'main', 'ca/9d/e7d40dacf3daab280526eb341efc.jpeg'),
(4, 4, 'main', 'd0/96/e65ac4672a6df1440e5b262e060c.jpeg'),
(5, 5, 'main', 'd8/49/ce77e5d56f228dc35f50f308c4ef.jpeg'),
(6, 6, 'main', '53/59/d129a7601983018e0af47b5cc3a3.jpeg'),
(7, 7, 'main', '84/fa/c4d5db0c163f82a47cff0487c531.jpeg'),
(8, 8, 'main', '30/33/9c6516409e4ef1496bd1d1268b88.jpeg'),
(9, 9, 'main', '84/48/1785136ec233cbc827c67f25da79.jpeg'),
(10, 10, 'main', '7f/4c/a3a5cb2b2e9d7693e3957f2fa8e6.jpeg'),
(11, 11, 'main', '2b/e4/94908b786023aa6cd012223ef217.jpeg'),
(12, 12, 'main', '3b/f9/f9b47d638844d5e15332b30a16e4.jpeg'),
(13, 13, 'main', 'c2/58/c8e99a285dabc7258a023617b295.jpeg'),
(14, 14, 'main', '2c/ae/b8575d6f7ddb0507959e79babc42.jpeg'),
(15, 15, 'main', '7f/44/933f00236d80434a6ac9d8e0ca43.jpeg'),
(16, 16, 'main', '72/6e/1525bd6a3a6509c06d5318250704.jpeg'),
(17, 17, 'main', '69/64/974ba1d45d442b1639bed1656695.jpeg'),
(18, 18, 'main', 'e7/ee/d293120138d73a55936d547b0c08.jpeg'),
(19, 19, 'main', 'c6/8c/2fb36ef88da93a3821b9e649b849.jpeg'),
(20, 20, 'main', '82/07/557b97700b316a82d0d641765686.jpeg'),
(21, 21, 'main', '5d/b7/abfbec5039f53e76b3e863be0fac.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_image_product_variants`
--

CREATE TABLE `sylius_product_image_product_variants` (
  `image_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_option`
--

CREATE TABLE `sylius_product_option` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_option`
--

INSERT INTO `sylius_product_option` (`id`, `code`, `position`, `created_at`, `updated_at`) VALUES
(1, 't_shirt_size', 0, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(2, 'dress_size', 1, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(3, 'dress_height', 2, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(4, 'jeans_size', 3, '2019-09-08 23:31:01', '2019-09-08 23:31:01');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_options`
--

CREATE TABLE `sylius_product_options` (
  `product_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_options`
--

INSERT INTO `sylius_product_options` (`product_id`, `option_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(11, 2),
(11, 3),
(12, 2),
(12, 3),
(13, 2),
(13, 3),
(14, 4),
(15, 4),
(16, 4),
(17, 4),
(18, 4),
(19, 4),
(20, 4),
(21, 4);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_option_translation`
--

CREATE TABLE `sylius_product_option_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_option_translation`
--

INSERT INTO `sylius_product_option_translation` (`id`, `translatable_id`, `name`, `locale`) VALUES
(1, 1, 'T-shirt size', 'en_US'),
(2, 2, 'Dress size', 'en_US'),
(3, 3, 'Dress height', 'en_US'),
(4, 4, 'Jeans size', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_option_value`
--

CREATE TABLE `sylius_product_option_value` (
  `id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_option_value`
--

INSERT INTO `sylius_product_option_value` (`id`, `option_id`, `code`) VALUES
(1, 1, 't_shirt_size_s'),
(2, 1, 't_shirt_size_m'),
(3, 1, 't_shirt_size_l'),
(4, 1, 't_shirt_size_xl'),
(5, 1, 't_shirt_size_xxl'),
(6, 2, 'dress_s'),
(7, 2, 'dress_m'),
(8, 2, 'dress_l'),
(9, 2, 'dress_xl'),
(10, 2, 'dress_xxl'),
(11, 3, 'dress_height_petite'),
(12, 3, 'dress_height_regular'),
(13, 3, 'dress_height_tall'),
(14, 4, 'jeans_size_s'),
(15, 4, 'jeans_size_m'),
(16, 4, 'jeans_size_l'),
(17, 4, 'jeans_size_xl'),
(18, 4, 'jeans_size_xxl');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_option_value_translation`
--

CREATE TABLE `sylius_product_option_value_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_option_value_translation`
--

INSERT INTO `sylius_product_option_value_translation` (`id`, `translatable_id`, `value`, `locale`) VALUES
(1, 1, 'S', 'en_US'),
(2, 2, 'M', 'en_US'),
(3, 3, 'L', 'en_US'),
(4, 4, 'XL', 'en_US'),
(5, 5, 'XXL', 'en_US'),
(6, 6, 'S', 'en_US'),
(7, 7, 'M', 'en_US'),
(8, 8, 'L', 'en_US'),
(9, 9, 'XL', 'en_US'),
(10, 10, 'XXL', 'en_US'),
(11, 11, 'Petite', 'en_US'),
(12, 12, 'Regular', 'en_US'),
(13, 13, 'Tall', 'en_US'),
(14, 14, 'S', 'en_US'),
(15, 15, 'M', 'en_US'),
(16, 16, 'L', 'en_US'),
(17, 17, 'XL', 'en_US'),
(18, 18, 'XXL', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_review`
--

CREATE TABLE `sylius_product_review` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `comment` longtext COLLATE utf8_unicode_ci,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_review`
--

INSERT INTO `sylius_product_review` (`id`, `product_id`, `author_id`, `title`, `rating`, `comment`, `status`, `created_at`, `updated_at`) VALUES
(1, 6, 20, 'esse ipsum porro', 5, 'Quia voluptatem laudantium nihil quod aperiam sit. Id nobis doloremque hic omnis. Placeat dolorem voluptatem possimus mollitia et ea id.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(2, 7, 20, 'porro nesciunt et', 4, 'Praesentium corrupti velit dolorem culpa delectus quia non non. Modi laudantium magni praesentium et voluptas nihil tenetur. Et sunt laboriosam accusantium.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(3, 8, 2, 'deserunt adipisci labore', 5, 'Delectus rem asperiores nulla quas ut qui voluptatem. Beatae odit nulla non. Recusandae illum voluptate est aut odit qui.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(4, 10, 7, 'quas quia deserunt', 4, 'Molestiae porro itaque consequuntur voluptatem qui ipsum minima. Impedit expedita sint aut. Dolorem unde est temporibus nobis officia.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(5, 16, 3, 'aspernatur sunt ducimus', 4, 'Enim qui quod deleniti nesciunt recusandae quae iusto. Rem et eum temporibus explicabo. Voluptatem aliquid voluptates et earum.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(6, 9, 21, 'in sed et', 5, 'Velit dolor veritatis recusandae quisquam. Velit beatae magni qui quasi totam excepturi. Mollitia ipsam non sapiente voluptatem asperiores quo laboriosam excepturi.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(7, 1, 19, 'assumenda quae cupiditate', 1, 'Quia sed quia maxime voluptas ut. Sed ullam aut sed. Ut accusantium sit est totam hic autem soluta.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(8, 13, 2, 'et repellat nihil', 4, 'Odio est et voluptatibus accusamus non ut. Omnis dolorem nulla quas non est consequatur necessitatibus. Inventore corporis quia dolorem modi.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(9, 14, 19, 'harum cupiditate dolore', 3, 'Pariatur tempora ut quia eos dolorem ipsum ipsum. Nisi et consequatur eum reprehenderit aliquid repudiandae autem corrupti. Ut cum soluta laudantium ipsum quibusdam et voluptates.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(10, 18, 19, 'sunt accusamus omnis', 2, 'Maxime cupiditate est et ad. Beatae tenetur officiis maiores neque est et voluptas. Est officiis enim autem ex.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(11, 5, 11, 'voluptatum eum enim', 4, 'Autem aperiam consequatur voluptatum saepe. Unde id perspiciatis qui omnis saepe eveniet. Ut quas voluptas odit earum ratione.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(12, 9, 4, 'eum non maiores', 2, 'Repellendus magni ad sunt omnis voluptas quae sunt. Aut itaque recusandae eum laboriosam qui quisquam et. Accusantium tempore vero consequatur pariatur eos.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(13, 10, 17, 'velit consequatur quasi', 4, 'Veritatis et ratione qui ut natus maxime impedit. Fugit qui deserunt modi sit. Quam voluptatum voluptate voluptas illum.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(14, 14, 18, 'rerum corporis necessitatibus', 4, 'Enim nemo odit dolorum totam reiciendis aut non. Vitae cupiditate ut quis aut accusantium dolorem. Placeat labore eveniet repudiandae debitis.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(15, 1, 9, 'culpa in facere', 2, 'Exercitationem vel dolorem et enim ex sunt velit. Dolor unde quia ipsum repellendus cupiditate placeat itaque id. Ratione aut fugit assumenda sit aliquam at tempore et.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(16, 21, 12, 'qui eaque deleniti', 1, 'Nemo quidem non quidem ut est sint quia. Accusantium molestiae quae sed esse. Exercitationem recusandae eos ipsum autem quia ut esse sed.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(17, 18, 11, 'ut pariatur aut', 2, 'Voluptas natus tenetur facere architecto minus ut expedita. Fuga rerum repellendus nihil veritatis eligendi temporibus. Eos qui dolores tenetur maxime occaecati provident ea.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(18, 4, 6, 'ut nobis dignissimos', 4, 'Quia nihil quaerat est nesciunt ea aut. Adipisci tempore in qui optio eius. Inventore ut soluta eos consequuntur.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(19, 17, 13, 'enim occaecati corporis', 4, 'Sed blanditiis cumque eum rerum porro quia modi. Iure voluptas ut reiciendis corporis accusantium. Cumque maiores nesciunt similique temporibus.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(20, 17, 9, 'mollitia reiciendis repellendus', 4, 'Vero iusto voluptas qui sit. Atque numquam facilis deleniti et. Omnis et neque sed facilis.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(21, 1, 8, 'autem et et', 4, 'Nisi commodi quia eius quis voluptatibus in doloribus. Possimus perspiciatis adipisci et in. Consequatur alias culpa consequatur.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(22, 2, 6, 'rerum tempore dolorum', 5, 'Commodi qui sint illo sed similique. Consectetur assumenda et delectus. Natus rerum qui quas enim.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(23, 21, 3, 'quas atque et', 2, 'Delectus modi quae nihil aperiam. Non quisquam repellat iusto. Earum qui rerum voluptatem voluptatum ex maxime.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(24, 11, 3, 'quas quo aut', 5, 'Necessitatibus ut repellendus autem ea velit ut. Exercitationem dolores laudantium iste omnis laudantium voluptate expedita. Numquam excepturi cumque reprehenderit autem alias qui tempora.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(25, 2, 17, 'id et illum', 2, 'Et molestiae id consequuntur libero sint. Commodi similique sint dolores et labore occaecati quia. Quas maxime ipsa expedita ducimus numquam nobis.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(26, 4, 14, 'iste quia ipsum', 2, 'Nam est sed ut est dolor inventore sapiente. Molestiae porro est architecto. Fugit vel commodi illo quo.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(27, 20, 7, 'sint cupiditate dolorem', 3, 'Rem aut veritatis id officia quo. Voluptatem eos qui quasi soluta. Aut nemo qui nihil reiciendis ut in ut.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(28, 19, 11, 'quis adipisci dolor', 5, 'Sint quod quo minus quod. Voluptas velit sit similique minima ut sapiente mollitia. Aut aut qui quod dolor in recusandae omnis velit.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(29, 3, 19, 'accusamus cum corrupti', 5, 'Et exercitationem voluptas et. Vel quia sunt id quia veniam dolor. Totam ducimus perspiciatis qui exercitationem magni similique non praesentium.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(30, 18, 18, 'velit sunt modi', 3, 'Et consequatur voluptates dolores odio laboriosam laudantium. Similique necessitatibus pariatur ullam sit maiores. Minus eaque dolores sed molestiae.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(31, 13, 3, 'et nam sed', 3, 'Quia dolor et voluptas enim laborum vero eveniet. Ipsam vero deserunt possimus pariatur. Est ut veniam nihil veritatis eveniet quo.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(32, 7, 1, 'doloremque laboriosam minima', 3, 'Ratione eligendi excepturi ad enim vero. Laboriosam neque sapiente dolorum accusamus. Atque ipsam modi corrupti fugit distinctio.', 'new', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(33, 11, 1, 'saepe ea ea', 4, 'Et magni et dolore non. Rerum recusandae veniam reiciendis omnis nobis. Non assumenda dolores ipsa cum.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(34, 19, 17, 'omnis iste molestiae', 2, 'Recusandae mollitia rerum similique similique qui porro. Laudantium dolores laboriosam dolore pariatur dolorem rerum. Sed aut quo odit non rerum.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(35, 10, 7, 'earum eos voluptatem', 3, 'Excepturi ducimus voluptas vel rerum sed porro porro. Iure molestiae et et. Quos architecto nobis quia id aut esse quasi quia.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(36, 12, 6, 'omnis fugit qui', 4, 'Pariatur odit corrupti dolorem ullam quia reprehenderit voluptate iste. Ea esse rerum rem quasi et nihil. Aut nihil non vitae quia eligendi minima in.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(37, 21, 1, 'voluptate cum veniam', 4, 'Ea veniam optio architecto et id nostrum omnis. Aut sed tempora quam et rerum. Quae iure molestiae ullam et beatae.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(38, 12, 14, 'rerum suscipit quas', 3, 'Excepturi qui ab at perspiciatis adipisci quia. Neque qui sed dolor error. Vel voluptatibus asperiores et quia sit culpa.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(39, 21, 20, 'architecto voluptatem ut', 2, 'Adipisci nisi accusantium deserunt quasi voluptatum nisi. Et vel consectetur voluptatum natus sequi aut. Molestiae dolores ad consequatur.', 'accepted', '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(40, 16, 2, 'nisi ipsam laudantium', 4, 'Consequuntur voluptas et explicabo dolorem fuga. Ipsum suscipit omnis quis blanditiis. Rerum quia reiciendis ut iusto voluptate velit veritatis.', 'rejected', '2019-09-08 23:31:01', '2019-09-08 23:31:01');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_taxon`
--

CREATE TABLE `sylius_product_taxon` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `taxon_id` int(11) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_taxon`
--

INSERT INTO `sylius_product_taxon` (`id`, `product_id`, `taxon_id`, `position`) VALUES
(1, 1, 2, 0),
(2, 1, 4, 0),
(3, 2, 2, 1),
(4, 2, 4, 1),
(5, 3, 2, 2),
(6, 3, 4, 2),
(7, 4, 2, 3),
(8, 4, 3, 0),
(9, 5, 2, 4),
(10, 5, 3, 1),
(11, 6, 2, 5),
(12, 6, 3, 2),
(13, 7, 5, 0),
(14, 7, 7, 0),
(15, 8, 5, 1),
(16, 8, 6, 0),
(17, 9, 5, 2),
(18, 9, 7, 1),
(19, 10, 5, 3),
(20, 10, 6, 1),
(21, 11, 8, 0),
(22, 12, 8, 1),
(23, 13, 8, 2),
(24, 14, 9, 0),
(25, 14, 10, 0),
(26, 15, 9, 1),
(27, 15, 10, 1),
(28, 16, 9, 2),
(29, 16, 10, 2),
(30, 17, 9, 3),
(31, 17, 10, 3),
(32, 18, 9, 4),
(33, 18, 11, 0),
(34, 19, 9, 5),
(35, 19, 11, 1),
(36, 20, 9, 6),
(37, 20, 11, 2),
(38, 21, 9, 7),
(39, 21, 11, 3);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_translation`
--

CREATE TABLE `sylius_product_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `meta_keywords` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8_unicode_ci,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_translation`
--

INSERT INTO `sylius_product_translation` (`id`, `translatable_id`, `name`, `slug`, `description`, `meta_keywords`, `meta_description`, `short_description`, `locale`) VALUES
(1, 1, 'Basic regular woman', 'basic-regular-woman', 'Numquam velit maxime omnis alias fugit. Iure et est magni et reiciendis. Voluptatibus in et quos ratione id qui placeat. Qui neque reprehenderit est aut.\n\nFuga qui illum rem. Nulla consequatur et eum aliquam consequatur error culpa. Corrupti et earum amet eum.\n\nDolores voluptatibus dolore aspernatur placeat ut. Et velit eveniet rerum doloremque. Debitis fugiat possimus dolorem cum.', NULL, NULL, 'Voluptatem non nostrum autem quis omnis necessitatibus. Rerum sint beatae rerum quae et voluptas.', 'en_US'),
(2, 2, 'Slim fit woman', 'slim-fit-woman', 'Et quae nobis adipisci ut aut. Eos ea expedita iste illum deserunt similique et. Earum voluptatem dolore nam.\n\nOmnis ipsam ut quasi voluptatum quia et voluptatum quibusdam. Qui consequatur sit consequatur ipsum molestiae fugiat quae. Sit id nisi cupiditate natus. Rerum tempora esse deleniti fuga dolore.\n\nConsequatur error amet voluptas ut adipisci. Mollitia ab dolorum quo accusantium aut vitae dolores. Culpa ullam temporibus culpa sed.', NULL, NULL, 'Voluptatum qui dolor animi facilis. Fugit sunt quia quis molestiae. Nihil mollitia quod facere debitis est esse ea blanditiis. Soluta aut autem optio harum nulla ab et.', 'en_US'),
(3, 3, 'Regular Fit V-neck woman', 'regular-fit-v-neck-woman', 'Veritatis officiis placeat id sint nulla voluptatem voluptas. Cum et voluptas a quis perspiciatis. Molestiae natus ea quam aut voluptas sunt corrupti ut. Ut enim et dolorem qui.\n\nSit aut perferendis unde. Explicabo quam enim quae voluptatum molestiae.\n\nPossimus rerum et aut. Voluptas nulla minus consectetur similique doloribus. Consequatur voluptate accusantium voluptas quae. Eligendi atque voluptate ad quidem.', NULL, NULL, 'Consequatur fugiat doloremque eum. Magni ullam dolor ipsum sed. Voluptatibus qui corrupti labore vitae.', 'en_US'),
(4, 4, 'Slim fit men', 'slim-fit-men', 'Praesentium ea eos debitis. Autem eveniet odio est quae consequatur aliquid. Ratione repellendus aut natus qui error.\n\nVelit laudantium aut quia. Molestias doloremque rerum quo vitae quia. Est error ut vel asperiores debitis earum voluptatem. Omnis nemo eius libero incidunt autem recusandae.\n\nCorrupti doloribus ut provident veritatis ab iure. Modi incidunt est est corporis magni.', NULL, NULL, 'Omnis et neque est exercitationem aliquam. Cum ducimus doloremque rerum at nulla. Dolorem corrupti ea impedit repellendus.', 'en_US'),
(5, 5, 'Regular fit men', 'regular-fit-men', 'Temporibus itaque non quae qui. Voluptatibus quaerat et unde ut et. Et voluptatem dolorem doloribus molestias. Reprehenderit maiores eum et nesciunt deleniti itaque fuga.\n\nAut et et deserunt ipsam optio consequatur blanditiis. Est est aut ipsa. Dolor sed nihil ut aliquam quo ut.\n\nFuga accusantium possimus ullam distinctio omnis corrupti molestiae et. Vitae sint ab odio iusto. Qui aspernatur maxime et molestias.', NULL, NULL, 'Vero qui excepturi et omnis aut sint fuga. Ipsa dicta occaecati provident. Eligendi labore sunt sapiente minus eum ipsum. Nesciunt exercitationem omnis architecto.', 'en_US'),
(6, 6, 'Slim fit V-neck men', 'slim-fit-v-neck-men', 'Porro sunt eos voluptas corporis accusamus quia. Ut culpa sunt laboriosam repudiandae. Voluptates quis repudiandae ut est et dicta.\n\nCupiditate explicabo et exercitationem accusamus. At commodi aut delectus sint qui commodi. Et accusamus impedit qui ut explicabo.\n\nEt aut voluptatem quam saepe. Autem et qui id perspiciatis et. Repellendus odio enim velit molestiae.', NULL, NULL, 'A beatae fugiat optio ut sunt. Cumque necessitatibus rerum esse mollitia. Dicta est eligendi necessitatibus porro.', 'en_US'),
(7, 7, 'Basic winter hot cap', 'basic-winter-hot-cap', 'Molestias perferendis ut ratione voluptas eius omnis. Non natus qui quia quia harum occaecati ex ea. Vero quisquam voluptas recusandae autem est ea.\n\nSunt perferendis cupiditate possimus. Quisquam sit illo voluptatibus hic accusamus. Sed ut voluptas sint doloremque facere occaecati.\n\nQuis et dolorem id non alias. Qui dignissimos voluptatem incidunt. Odit eligendi aut deleniti veritatis sunt ipsum. Quia voluptatem sit minima nesciunt.', NULL, NULL, 'Nulla labore praesentium quo consequatur sed. Qui at aliquam quidem. Cumque praesentium tempore quisquam ea beatae. Dolores quos ipsa velit possimus ea.', 'en_US'),
(8, 8, 'Beautiful cap for woman', 'beautiful-cap-for-woman', 'Impedit perferendis sunt earum sit. Omnis sed et sunt magni iure ut. Est sed provident magni fugiat quis assumenda. Et iste laudantium ratione quo repellendus dolor. Laudantium ea nobis cumque ipsum ea adipisci.\n\nUt accusamus amet ut excepturi in nihil. Et veritatis id tempora et. Et et ut dignissimos sed. Quia qui quos et occaecati rerum provident.\n\nError ex facere ab tenetur non temporibus autem. Omnis quo dolorem aliquam quibusdam et deleniti. Suscipit voluptatem odit iusto sunt voluptas maxime minus ut. Quo assumenda qui provident beatae voluptatem. Error non accusantium delectus.', NULL, NULL, 'Exercitationem ut est autem natus porro deleniti. Quia omnis doloremque ipsum quaerat quibusdam in. Doloribus doloremque quis et voluptas dolorum labore facere.', 'en_US'),
(9, 9, 'Regular cap with big pompon', 'regular-cap-with-big-pompon', 'Ex blanditiis pariatur est et distinctio debitis totam. Ducimus iure fuga dicta unde. Est reiciendis minima non vel nesciunt.\n\nOptio quia voluptatum dolorem fuga perferendis quo. Aut ex et distinctio sint aut molestiae. Quos quia est magni odit quos. Omnis occaecati odio delectus expedita nam.\n\nConsequuntur sint aspernatur quos. Natus corrupti cum modi est beatae sed. Sit voluptate dolorum eos unde nulla. Sit aspernatur nesciunt cumque et enim.', NULL, NULL, 'Explicabo odit impedit veritatis ducimus voluptatem consequatur. Quo aut possimus dolore quia repellendus nobis. Corporis maxime et quia aspernatur molestias enim.', 'en_US'),
(10, 10, 'Simple cap', 'simple-cap', 'Aperiam inventore nisi nemo numquam voluptatum ducimus expedita. Mollitia dignissimos odit est consequatur quis possimus occaecati. Ut non mollitia aspernatur magnam iusto reprehenderit alias. Rem ut maiores sapiente impedit.\n\nQuaerat ut ducimus maxime. At sequi nihil ducimus. Omnis dolores occaecati repellat fugiat vel omnis. Voluptas quos assumenda facilis non impedit.\n\nAmet tempora itaque sapiente est. Quisquam ab consequuntur rem blanditiis est cumque. Necessitatibus impedit repudiandae ratione consequatur qui aut ut. Iste quis autem sed.', NULL, NULL, 'Occaecati vitae aut ducimus. Facere tempora ab consectetur facere aperiam iusto. Qui sapiente id in provident impedit adipisci. Voluptatem sunt eum explicabo fuga. Quod saepe ipsa quaerat similique odit doloribus vel.', 'en_US'),
(11, 11, 'Circle-skirt Dress', 'circle-skirt-dress', 'Aut quasi saepe eos mollitia in rerum ratione modi. Officia aliquid et excepturi omnis ea. Sed et delectus aperiam hic soluta ipsam.\n\nVitae minima possimus delectus molestiae illo. Perspiciatis amet earum non assumenda dolorem sint quo. Molestias consequatur libero dolorem est vel harum quia.\n\nRepudiandae rerum et reiciendis illum molestiae voluptates molestiae. In ipsa fugit iure sint est dolor. Rerum occaecati et accusamus aliquid molestiae architecto cupiditate porro. Accusamus autem non ut excepturi qui rerum.', NULL, NULL, 'Nemo maiores aspernatur optio tempore recusandae. Voluptas sit debitis voluptatem.', 'en_US'),
(12, 12, 'Sleeveless Dress', 'sleeveless-dress', 'Dolor nihil voluptatem perspiciatis. Occaecati qui quis dicta vitae quo. Tempora et beatae unde cupiditate. Facere exercitationem reprehenderit aspernatur blanditiis voluptatum.\n\nAut fugit rem unde numquam ipsa facilis laborum. Est earum vero non placeat dicta. Ab qui omnis et eaque vero expedita. Sint quibusdam quasi dolorem rerum accusamus provident et.\n\nEt et suscipit aut ipsum. Quisquam et est magnam excepturi eligendi vero exercitationem. Commodi ullam deleniti non aut.', NULL, NULL, 'Ut voluptatem cupiditate deleniti voluptas rerum qui. Consectetur voluptas tenetur tenetur iste iure sit numquam. Minima enim enim qui suscipit eos esse velit. Officiis quia ab fugiat hic aut.', 'en_US'),
(13, 13, 'Summer tunic', 'summer-tunic', 'Nobis ab nisi sit et sed quam magnam aut. Dolorem vitae quis veritatis quos aut. Ut occaecati et modi ullam.\n\nDoloribus excepturi autem mollitia. Qui tempora et optio facere maiores saepe. Modi dicta eveniet quisquam reiciendis in ratione amet.\n\nLaudantium optio maiores vel laboriosam corrupti temporibus. Esse ea corporis ut aut ut reiciendis. Minus neque et quia ut corporis et sed eum. Eaque et sapiente iste enim incidunt qui.', NULL, NULL, 'Voluptas in quis ut dolorem molestiae et facilis ullam. Minus fugit illum repudiandae et fugit eum. Odio eligendi non eveniet odio enim dolor magni. Molestiae aut velit alias ducimus aliquid adipisci quaerat.', 'en_US'),
(14, 14, 'Basic regular', 'basic-regular', 'Alias voluptatem sint pariatur vitae inventore amet ad. Quisquam ab a perferendis numquam. Perferendis eius tempore ab ipsam architecto corporis commodi ut. Illum ratione aut quae cupiditate et.\n\nFacilis facilis quia eaque rerum ducimus et qui rerum. Voluptatem distinctio sit deserunt porro ducimus est reprehenderit nihil. Quaerat aut sit illum dicta illum voluptas ducimus. Sapiente laboriosam numquam excepturi reiciendis ut.\n\nQuidem libero itaque suscipit ab dolorum consequatur. Adipisci dolorem sint cumque praesentium et aliquid sunt. Quia consequatur quis commodi praesentium ipsum tenetur. Quae iusto magnam sed dolorum delectus. Neque veniam omnis vitae sed nobis.', NULL, NULL, 'Asperiores repellendus molestiae et fugiat aut. Voluptate officiis quisquam distinctio repellat repudiandae beatae. At officiis est iusto ut est id. Alias reiciendis quis eligendi est eius voluptatem.', 'en_US'),
(15, 15, 'Slim fit classic', 'slim-fit-classic', 'Adipisci et inventore eius. Eveniet beatae molestiae aut voluptatem.\n\nNon dolorem dolorem deleniti possimus molestias ut dicta. At aliquid et nemo tempora sed corporis. Fugit qui est delectus et laboriosam. Eos atque rem odit consequatur nihil quod.\n\nVoluptate qui sed fugit ea aut vel magni. Nobis dolor id cupiditate in et ab officia. Ullam velit rem et ut accusantium sint animi.', NULL, NULL, 'Soluta et repudiandae est culpa libero sequi. Beatae dolore labore cupiditate aspernatur est laborum.', 'en_US'),
(16, 16, 'Regular Fit casual', 'regular-fit-casual', 'Voluptate enim ut accusamus ut sequi error suscipit. Dolor a ipsum ratione minus. Quos voluptates consequatur molestiae ipsam aut eum et.\n\nDucimus sunt labore ut enim exercitationem. Voluptatem et quidem et aut vel non libero. Voluptatem nobis et ut. Ut totam voluptates molestias facilis autem.\n\nEt odio natus odio et. Ea culpa quo ipsam perferendis tenetur. Impedit nesciunt laboriosam ea non quod. Hic quam cupiditate enim quidem optio vero quia est.', NULL, NULL, 'Ut sunt et et odit perspiciatis. Laborum minima hic id autem fugit.', 'en_US'),
(17, 17, 'Slim fit elegant', 'slim-fit-elegant', 'Quae iusto voluptatem ea ipsam. Pariatur ipsum autem optio odit distinctio maiores aperiam. Itaque sint fuga quam vero vitae veritatis esse. Beatae quaerat cumque ratione accusamus et vel itaque voluptatem. Vero et saepe ut sit.\n\nAb odio id natus vero totam voluptatum omnis. Officiis qui voluptatum soluta doloribus quo sunt quasi.\n\nQuam quia laudantium soluta quibusdam. Itaque non libero quis sint optio. Eos est sit harum blanditiis tempore.', NULL, NULL, 'Ea quidem et sint ea. Iste maxime hic omnis itaque quae maiores dignissimos. Optio vero sunt id aperiam.', 'en_US'),
(18, 18, 'Ultra slim', 'ultra-slim', 'Enim quia enim ea numquam iste. Fugit magni ducimus quo libero molestias consequatur. Perspiciatis dicta provident qui recusandae molestiae deserunt.\n\nNam hic autem aperiam mollitia. Ab nemo atque temporibus enim dolores dolorem. Nihil sit sit quia facere.\n\nOmnis ex error nam incidunt. Est quam iure placeat maiores. Aut nam ab doloribus et.', NULL, NULL, 'Numquam distinctio quaerat nobis ut ullam voluptas aut. Minima temporibus qui accusantium. Ut labore nesciunt est delectus molestias.', 'en_US'),
(19, 19, 'Slim fit', 'slim-fit', 'Cum nihil voluptate et tempore sit cum magni. Possimus fugiat aut cum. Id provident autem velit sequi ut eius suscipit accusamus.\n\nAd earum labore accusantium eaque aut. Consequatur et molestias illum. Et rerum ut dolor enim iste et totam. Sint autem qui beatae magnam minus praesentium.\n\nNatus quia quos pariatur nobis. Voluptas distinctio fugit necessitatibus quia expedita veritatis laudantium. Et provident voluptas qui quia quaerat.', NULL, NULL, 'Possimus similique pariatur nostrum qui tempora voluptatem. Enim perferendis quasi aut explicabo quisquam ad quis. Sit et autem pariatur itaque ratione praesentium facere.', 'en_US'),
(20, 20, 'New age regular', 'new-age-regular', 'Sequi dolores nihil esse ipsam. Veniam nam quia in in quam adipisci facilis tenetur. Molestiae nemo accusamus autem officiis quam aut. Maiores beatae dolorum dolor ab quas et.\n\nMolestias eveniet corporis quis. Velit et aperiam quod quas. Laudantium exercitationem rerum qui officia est blanditiis eos magnam. Et nostrum et fuga excepturi facilis ex at modi.\n\nPorro inventore et temporibus sequi nihil. Quis amet repellendus nesciunt quia.', NULL, NULL, 'Eos qui dolor magnam beatae molestias iusto aspernatur. Veritatis aut id aspernatur quia. Qui velit eum inventore quo dolorum delectus possimus.', 'en_US'),
(21, 21, 'Whole holes classic', 'whole-holes-classic', 'Vero mollitia veniam error maiores. Velit dolorem totam iste quidem voluptatibus qui quas. Dolorem qui similique consequuntur beatae aut quia. Placeat enim eveniet sed maxime.\n\nEst velit sed illum eius eveniet. Temporibus iste laudantium explicabo aliquid quo quo. Nam sapiente et dolor voluptas esse.\n\nProvident sequi rerum aliquam nostrum consequuntur voluptas hic. Odio deleniti nihil alias ut illum distinctio praesentium.', NULL, NULL, 'Reiciendis optio necessitatibus recusandae voluptatem. Voluptas tempore alias nihil consequatur provident consequuntur nisi. Debitis assumenda quis quis hic quod velit ut. Quia dolores ipsa et et voluptatem dolores eum.', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_variant`
--

CREATE TABLE `sylius_product_variant` (
  `id` int(11) NOT NULL,
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
  `shipping_required` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_variant`
--

INSERT INTO `sylius_product_variant` (`id`, `product_id`, `tax_category_id`, `shipping_category_id`, `code`, `created_at`, `updated_at`, `position`, `version`, `on_hold`, `on_hand`, `tracked`, `width`, `height`, `depth`, `weight`, `shipping_required`) VALUES
(1, 1, 1, NULL, 'Basic_regular_woman-variant-0', '2019-09-08 23:31:00', '2019-09-08 23:31:01', 0, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(2, 1, 1, NULL, 'Basic_regular_woman-variant-1', '2019-09-08 23:31:00', '2019-09-08 23:31:01', 1, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(3, 1, 1, NULL, 'Basic_regular_woman-variant-2', '2019-09-08 23:31:00', '2019-09-08 23:31:01', 2, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(4, 1, 1, NULL, 'Basic_regular_woman-variant-3', '2019-09-08 23:31:00', '2019-09-08 23:31:01', 3, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(5, 1, 1, NULL, 'Basic_regular_woman-variant-4', '2019-09-08 23:31:00', '2019-09-08 23:31:01', 4, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(6, 2, 1, NULL, 'Slim_fit_woman-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(7, 2, 1, NULL, 'Slim_fit_woman-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(8, 2, 1, NULL, 'Slim_fit_woman-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(9, 2, 1, NULL, 'Slim_fit_woman-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(10, 2, 1, NULL, 'Slim_fit_woman-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(11, 3, 1, NULL, 'Regular_Fit_V_neck_woman-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(12, 3, 1, NULL, 'Regular_Fit_V_neck_woman-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(13, 3, 1, NULL, 'Regular_Fit_V_neck_woman-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(14, 3, 1, NULL, 'Regular_Fit_V_neck_woman-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(15, 3, 1, NULL, 'Regular_Fit_V_neck_woman-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(16, 4, 1, NULL, 'Slim_fit_men-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:59:20', 0, 2, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(17, 4, 1, NULL, 'Slim_fit_men-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(18, 4, 1, NULL, 'Slim_fit_men-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(19, 4, 1, NULL, 'Slim_fit_men-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(20, 4, 1, NULL, 'Slim_fit_men-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(21, 5, 1, NULL, 'Regular_fit_men-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(22, 5, 1, NULL, 'Regular_fit_men-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(23, 5, 1, NULL, 'Regular_fit_men-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(24, 5, 1, NULL, 'Regular_fit_men-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(25, 5, 1, NULL, 'Regular_fit_men-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(26, 6, 1, NULL, 'Slim_fit_V_neck_men-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(27, 6, 1, NULL, 'Slim_fit_V_neck_men-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(28, 6, 1, NULL, 'Slim_fit_V_neck_men-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(29, 6, 1, NULL, 'Slim_fit_V_neck_men-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(30, 6, 1, NULL, 'Slim_fit_V_neck_men-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(31, 7, 2, NULL, 'Basic_winter_hot_cap-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(32, 8, 2, NULL, 'Beautiful_cap_for_woman-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(33, 9, 2, NULL, 'Regular_cap_with_big_pompon-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(34, 10, NULL, NULL, 'Simple_cap-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(35, 11, 1, NULL, 'Circle_skirt_Dress-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(36, 11, 1, NULL, 'Circle_skirt_Dress-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(37, 11, 1, NULL, 'Circle_skirt_Dress-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(38, 11, 1, NULL, 'Circle_skirt_Dress-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(39, 11, 1, NULL, 'Circle_skirt_Dress-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(40, 11, 1, NULL, 'Circle_skirt_Dress-variant-5', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 5, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(41, 11, 1, NULL, 'Circle_skirt_Dress-variant-6', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 6, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(42, 11, 1, NULL, 'Circle_skirt_Dress-variant-7', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 7, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(43, 11, 1, NULL, 'Circle_skirt_Dress-variant-8', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 8, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(44, 11, 1, NULL, 'Circle_skirt_Dress-variant-9', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 9, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(45, 11, 1, NULL, 'Circle_skirt_Dress-variant-10', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 10, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(46, 11, 1, NULL, 'Circle_skirt_Dress-variant-11', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 11, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(47, 11, 1, NULL, 'Circle_skirt_Dress-variant-12', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 12, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(48, 11, 1, NULL, 'Circle_skirt_Dress-variant-13', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 13, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(49, 11, 1, NULL, 'Circle_skirt_Dress-variant-14', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 14, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(50, 12, 1, NULL, 'Sleeveless_Dress-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(51, 12, 1, NULL, 'Sleeveless_Dress-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(52, 12, 1, NULL, 'Sleeveless_Dress-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(53, 12, 1, NULL, 'Sleeveless_Dress-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(54, 12, 1, NULL, 'Sleeveless_Dress-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(55, 12, 1, NULL, 'Sleeveless_Dress-variant-5', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 5, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(56, 12, 1, NULL, 'Sleeveless_Dress-variant-6', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 6, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(57, 12, 1, NULL, 'Sleeveless_Dress-variant-7', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 7, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(58, 12, 1, NULL, 'Sleeveless_Dress-variant-8', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 8, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(59, 12, 1, NULL, 'Sleeveless_Dress-variant-9', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 9, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(60, 12, 1, NULL, 'Sleeveless_Dress-variant-10', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 10, 1, 0, 8, 0, NULL, NULL, NULL, NULL, 1),
(61, 12, 1, NULL, 'Sleeveless_Dress-variant-11', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 11, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(62, 12, 1, NULL, 'Sleeveless_Dress-variant-12', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 12, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(63, 12, 1, NULL, 'Sleeveless_Dress-variant-13', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 13, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(64, 12, 1, NULL, 'Sleeveless_Dress-variant-14', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 14, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(65, 13, 1, NULL, 'Summer_tunic-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(66, 13, 1, NULL, 'Summer_tunic-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(67, 13, 1, NULL, 'Summer_tunic-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(68, 13, 1, NULL, 'Summer_tunic-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(69, 13, 1, NULL, 'Summer_tunic-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(70, 13, 1, NULL, 'Summer_tunic-variant-5', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 5, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(71, 13, 1, NULL, 'Summer_tunic-variant-6', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 6, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(72, 13, 1, NULL, 'Summer_tunic-variant-7', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 7, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(73, 13, 1, NULL, 'Summer_tunic-variant-8', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 8, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(74, 13, 1, NULL, 'Summer_tunic-variant-9', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 9, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(75, 13, 1, NULL, 'Summer_tunic-variant-10', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 10, 1, 0, 2, 0, NULL, NULL, NULL, NULL, 1),
(76, 13, 1, NULL, 'Summer_tunic-variant-11', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 11, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(77, 13, 1, NULL, 'Summer_tunic-variant-12', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 12, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(78, 13, 1, NULL, 'Summer_tunic-variant-13', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 13, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(79, 13, 1, NULL, 'Summer_tunic-variant-14', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 14, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(80, 14, 1, NULL, 'Basic_regular-variant-0', '2019-09-08 23:31:01', '2019-09-09 00:00:00', 0, 2, 0, 4, 1, NULL, NULL, NULL, NULL, 1),
(81, 14, 1, NULL, 'Basic_regular-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(82, 14, 1, NULL, 'Basic_regular-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(83, 14, 1, NULL, 'Basic_regular-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(84, 14, 1, NULL, 'Basic_regular-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(85, 15, 1, NULL, 'Slim_fit_classic-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(86, 15, 1, NULL, 'Slim_fit_classic-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(87, 15, 1, NULL, 'Slim_fit_classic-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(88, 15, 1, NULL, 'Slim_fit_classic-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(89, 15, 1, NULL, 'Slim_fit_classic-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(90, 16, 1, NULL, 'Regular_Fit_casual-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(91, 16, 1, NULL, 'Regular_Fit_casual-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(92, 16, 1, NULL, 'Regular_Fit_casual-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(93, 16, 1, NULL, 'Regular_Fit_casual-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(94, 16, 1, NULL, 'Regular_Fit_casual-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(95, 17, 1, NULL, 'Slim_fit_elegant-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(96, 17, 1, NULL, 'Slim_fit_elegant-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(97, 17, 1, NULL, 'Slim_fit_elegant-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(98, 17, 1, NULL, 'Slim_fit_elegant-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(99, 17, 1, NULL, 'Slim_fit_elegant-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(100, 18, 1, NULL, 'Ultra_slim-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(101, 18, 1, NULL, 'Ultra_slim-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(102, 18, 1, NULL, 'Ultra_slim-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(103, 18, 1, NULL, 'Ultra_slim-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(104, 18, 1, NULL, 'Ultra_slim-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 1, 0, NULL, NULL, NULL, NULL, 1),
(105, 19, 1, NULL, 'Slim_fit-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(106, 19, 1, NULL, 'Slim_fit-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 9, 0, NULL, NULL, NULL, NULL, 1),
(107, 19, 1, NULL, 'Slim_fit-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(108, 19, 1, NULL, 'Slim_fit-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(109, 19, 1, NULL, 'Slim_fit-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(110, 20, 1, NULL, 'New_age_regular-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1),
(111, 20, 1, NULL, 'New_age_regular-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(112, 20, 1, NULL, 'New_age_regular-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(113, 20, 1, NULL, 'New_age_regular-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(114, 20, 1, NULL, 'New_age_regular-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 6, 0, NULL, NULL, NULL, NULL, 1),
(115, 21, 1, NULL, 'Whole_holes_classic-variant-0', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 0, 1, 0, 7, 0, NULL, NULL, NULL, NULL, 1),
(116, 21, 1, NULL, 'Whole_holes_classic-variant-1', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 1, 1, 0, 5, 0, NULL, NULL, NULL, NULL, 1),
(117, 21, 1, NULL, 'Whole_holes_classic-variant-2', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 2, 1, 0, 3, 0, NULL, NULL, NULL, NULL, 1),
(118, 21, 1, NULL, 'Whole_holes_classic-variant-3', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 3, 1, 0, 4, 0, NULL, NULL, NULL, NULL, 1),
(119, 21, 1, NULL, 'Whole_holes_classic-variant-4', '2019-09-08 23:31:01', '2019-09-08 23:31:01', 4, 1, 0, 0, 0, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_variant_option_value`
--

CREATE TABLE `sylius_product_variant_option_value` (
  `variant_id` int(11) NOT NULL,
  `option_value_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_variant_option_value`
--

INSERT INTO `sylius_product_variant_option_value` (`variant_id`, `option_value_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5),
(11, 1),
(12, 2),
(13, 3),
(14, 4),
(15, 5),
(16, 1),
(17, 2),
(18, 3),
(19, 4),
(20, 5),
(21, 1),
(22, 2),
(23, 3),
(24, 4),
(25, 5),
(26, 1),
(27, 2),
(28, 3),
(29, 4),
(30, 5),
(35, 6),
(35, 11),
(36, 6),
(36, 12),
(37, 6),
(37, 13),
(38, 7),
(38, 11),
(39, 7),
(39, 12),
(40, 7),
(40, 13),
(41, 8),
(41, 11),
(42, 8),
(42, 12),
(43, 8),
(43, 13),
(44, 9),
(44, 11),
(45, 9),
(45, 12),
(46, 9),
(46, 13),
(47, 10),
(47, 11),
(48, 10),
(48, 12),
(49, 10),
(49, 13),
(50, 6),
(50, 11),
(51, 6),
(51, 12),
(52, 6),
(52, 13),
(53, 7),
(53, 11),
(54, 7),
(54, 12),
(55, 7),
(55, 13),
(56, 8),
(56, 11),
(57, 8),
(57, 12),
(58, 8),
(58, 13),
(59, 9),
(59, 11),
(60, 9),
(60, 12),
(61, 9),
(61, 13),
(62, 10),
(62, 11),
(63, 10),
(63, 12),
(64, 10),
(64, 13),
(65, 6),
(65, 11),
(66, 6),
(66, 12),
(67, 6),
(67, 13),
(68, 7),
(68, 11),
(69, 7),
(69, 12),
(70, 7),
(70, 13),
(71, 8),
(71, 11),
(72, 8),
(72, 12),
(73, 8),
(73, 13),
(74, 9),
(74, 11),
(75, 9),
(75, 12),
(76, 9),
(76, 13),
(77, 10),
(77, 11),
(78, 10),
(78, 12),
(79, 10),
(79, 13),
(80, 14),
(81, 15),
(82, 16),
(83, 17),
(84, 18),
(85, 14),
(86, 15),
(87, 16),
(88, 17),
(89, 18),
(90, 14),
(91, 15),
(92, 16),
(93, 17),
(94, 18),
(95, 14),
(96, 15),
(97, 16),
(98, 17),
(99, 18),
(100, 14),
(101, 15),
(102, 16),
(103, 17),
(104, 18),
(105, 14),
(106, 15),
(107, 16),
(108, 17),
(109, 18),
(110, 14),
(111, 15),
(112, 16),
(113, 17),
(114, 18),
(115, 14),
(116, 15),
(117, 16),
(118, 17),
(119, 18);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_product_variant_translation`
--

CREATE TABLE `sylius_product_variant_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_product_variant_translation`
--

INSERT INTO `sylius_product_variant_translation` (`id`, `translatable_id`, `name`, `locale`) VALUES
(1, 1, 'S', 'en_US'),
(2, 2, 'M', 'en_US'),
(3, 3, 'L', 'en_US'),
(4, 4, 'XL', 'en_US'),
(5, 5, 'XXL', 'en_US'),
(6, 6, 'S', 'en_US'),
(7, 7, 'M', 'en_US'),
(8, 8, 'L', 'en_US'),
(9, 9, 'XL', 'en_US'),
(10, 10, 'XXL', 'en_US'),
(11, 11, 'S', 'en_US'),
(12, 12, 'M', 'en_US'),
(13, 13, 'L', 'en_US'),
(14, 14, 'XL', 'en_US'),
(15, 15, 'XXL', 'en_US'),
(16, 16, 'S', 'en_US'),
(17, 17, 'M', 'en_US'),
(18, 18, 'L', 'en_US'),
(19, 19, 'XL', 'en_US'),
(20, 20, 'XXL', 'en_US'),
(21, 21, 'S', 'en_US'),
(22, 22, 'M', 'en_US'),
(23, 23, 'L', 'en_US'),
(24, 24, 'XL', 'en_US'),
(25, 25, 'XXL', 'en_US'),
(26, 26, 'S', 'en_US'),
(27, 27, 'M', 'en_US'),
(28, 28, 'L', 'en_US'),
(29, 29, 'XL', 'en_US'),
(30, 30, 'XXL', 'en_US'),
(31, 31, '', 'en_US'),
(32, 32, '', 'en_US'),
(33, 33, '', 'en_US'),
(34, 34, '', 'en_US'),
(35, 35, 'S Petite', 'en_US'),
(36, 36, 'S Regular', 'en_US'),
(37, 37, 'S Tall', 'en_US'),
(38, 38, 'M Petite', 'en_US'),
(39, 39, 'M Regular', 'en_US'),
(40, 40, 'M Tall', 'en_US'),
(41, 41, 'L Petite', 'en_US'),
(42, 42, 'L Regular', 'en_US'),
(43, 43, 'L Tall', 'en_US'),
(44, 44, 'XL Petite', 'en_US'),
(45, 45, 'XL Regular', 'en_US'),
(46, 46, 'XL Tall', 'en_US'),
(47, 47, 'XXL Petite', 'en_US'),
(48, 48, 'XXL Regular', 'en_US'),
(49, 49, 'XXL Tall', 'en_US'),
(50, 50, 'S Petite', 'en_US'),
(51, 51, 'S Regular', 'en_US'),
(52, 52, 'S Tall', 'en_US'),
(53, 53, 'M Petite', 'en_US'),
(54, 54, 'M Regular', 'en_US'),
(55, 55, 'M Tall', 'en_US'),
(56, 56, 'L Petite', 'en_US'),
(57, 57, 'L Regular', 'en_US'),
(58, 58, 'L Tall', 'en_US'),
(59, 59, 'XL Petite', 'en_US'),
(60, 60, 'XL Regular', 'en_US'),
(61, 61, 'XL Tall', 'en_US'),
(62, 62, 'XXL Petite', 'en_US'),
(63, 63, 'XXL Regular', 'en_US'),
(64, 64, 'XXL Tall', 'en_US'),
(65, 65, 'S Petite', 'en_US'),
(66, 66, 'S Regular', 'en_US'),
(67, 67, 'S Tall', 'en_US'),
(68, 68, 'M Petite', 'en_US'),
(69, 69, 'M Regular', 'en_US'),
(70, 70, 'M Tall', 'en_US'),
(71, 71, 'L Petite', 'en_US'),
(72, 72, 'L Regular', 'en_US'),
(73, 73, 'L Tall', 'en_US'),
(74, 74, 'XL Petite', 'en_US'),
(75, 75, 'XL Regular', 'en_US'),
(76, 76, 'XL Tall', 'en_US'),
(77, 77, 'XXL Petite', 'en_US'),
(78, 78, 'XXL Regular', 'en_US'),
(79, 79, 'XXL Tall', 'en_US'),
(80, 80, 'S', 'en_US'),
(81, 81, 'M', 'en_US'),
(82, 82, 'L', 'en_US'),
(83, 83, 'XL', 'en_US'),
(84, 84, 'XXL', 'en_US'),
(85, 85, 'S', 'en_US'),
(86, 86, 'M', 'en_US'),
(87, 87, 'L', 'en_US'),
(88, 88, 'XL', 'en_US'),
(89, 89, 'XXL', 'en_US'),
(90, 90, 'S', 'en_US'),
(91, 91, 'M', 'en_US'),
(92, 92, 'L', 'en_US'),
(93, 93, 'XL', 'en_US'),
(94, 94, 'XXL', 'en_US'),
(95, 95, 'S', 'en_US'),
(96, 96, 'M', 'en_US'),
(97, 97, 'L', 'en_US'),
(98, 98, 'XL', 'en_US'),
(99, 99, 'XXL', 'en_US'),
(100, 100, 'S', 'en_US'),
(101, 101, 'M', 'en_US'),
(102, 102, 'L', 'en_US'),
(103, 103, 'XL', 'en_US'),
(104, 104, 'XXL', 'en_US'),
(105, 105, 'S', 'en_US'),
(106, 106, 'M', 'en_US'),
(107, 107, 'L', 'en_US'),
(108, 108, 'XL', 'en_US'),
(109, 109, 'XXL', 'en_US'),
(110, 110, 'S', 'en_US'),
(111, 111, 'M', 'en_US'),
(112, 112, 'L', 'en_US'),
(113, 113, 'XL', 'en_US'),
(114, 114, 'XXL', 'en_US'),
(115, 115, 'S', 'en_US'),
(116, 116, 'M', 'en_US'),
(117, 117, 'L', 'en_US'),
(118, 118, 'XL', 'en_US'),
(119, 119, 'XXL', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_promotion`
--

CREATE TABLE `sylius_promotion` (
  `id` int(11) NOT NULL,
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
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_promotion`
--

INSERT INTO `sylius_promotion` (`id`, `code`, `name`, `description`, `priority`, `exclusive`, `usage_limit`, `used`, `coupon_based`, `starts_at`, `ends_at`, `created_at`, `updated_at`) VALUES
(1, 'christmas', 'Christmas', 'Nisi molestiae sapiente vel quo fugit aperiam repellat veritatis.', 0, 0, NULL, 18, 0, NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:02'),
(2, 'new_year', 'New Year', 'Nisi molestiae sapiente vel quo fugit aperiam repellat veritatis.', 2, 0, 10, 10, 0, '2019-09-01 23:31:00', '2019-09-15 23:31:00', '2019-09-08 23:31:00', '2019-09-08 23:31:02');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_promotion_action`
--

CREATE TABLE `sylius_promotion_action` (
  `id` int(11) NOT NULL,
  `promotion_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_promotion_action`
--

INSERT INTO `sylius_promotion_action` (`id`, `promotion_id`, `type`, `configuration`) VALUES
(1, 1, 'order_percentage_discount', 'a:1:{s:10:\"percentage\";d:0.38;}'),
(2, 2, 'order_fixed_discount', 'a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:1000;}}');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_promotion_channels`
--

CREATE TABLE `sylius_promotion_channels` (
  `promotion_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_promotion_channels`
--

INSERT INTO `sylius_promotion_channels` (`promotion_id`, `channel_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_promotion_coupon`
--

CREATE TABLE `sylius_promotion_coupon` (
  `id` int(11) NOT NULL,
  `promotion_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usage_limit` int(11) DEFAULT NULL,
  `used` int(11) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `per_customer_usage_limit` int(11) DEFAULT NULL,
  `reusable_from_cancelled_orders` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_promotion_order`
--

CREATE TABLE `sylius_promotion_order` (
  `order_id` int(11) NOT NULL,
  `promotion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_promotion_order`
--

INSERT INTO `sylius_promotion_order` (`order_id`, `promotion_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(5, 1),
(5, 2),
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(9, 1),
(9, 2),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(12, 1),
(13, 1),
(14, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_promotion_rule`
--

CREATE TABLE `sylius_promotion_rule` (
  `id` int(11) NOT NULL,
  `promotion_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_promotion_rule`
--

INSERT INTO `sylius_promotion_rule` (`id`, `promotion_id`, `type`, `configuration`) VALUES
(1, 1, 'cart_quantity', 'a:1:{s:5:\"count\";i:5;}'),
(2, 2, 'item_total', 'a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:10000;}}');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_province`
--

CREATE TABLE `sylius_province` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `abbreviation` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shipment`
--

CREATE TABLE `sylius_shipment` (
  `id` int(11) NOT NULL,
  `method_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tracking` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_shipment`
--

INSERT INTO `sylius_shipment` (`id`, `method_id`, `order_id`, `state`, `tracking`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(2, 2, 2, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(3, 2, 3, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(4, 3, 4, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(5, 3, 5, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(6, 3, 6, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(7, 1, 7, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(8, 3, 8, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(9, 3, 9, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(10, 1, 10, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(11, 3, 11, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(12, 1, 12, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(13, 2, 13, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(14, 3, 14, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(15, 3, 15, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(16, 1, 16, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(17, 3, 17, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(18, 2, 18, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(19, 3, 19, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(20, 1, 20, 'ready', NULL, '2019-09-08 23:31:02', '2019-09-08 23:31:02'),
(21, 1, 21, 'cart', NULL, '2019-09-23 16:06:21', '2019-09-23 16:06:21');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shipping_category`
--

CREATE TABLE `sylius_shipping_category` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shipping_method`
--

CREATE TABLE `sylius_shipping_method` (
  `id` int(11) NOT NULL,
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
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_shipping_method`
--

INSERT INTO `sylius_shipping_method` (`id`, `category_id`, `zone_id`, `tax_category_id`, `code`, `configuration`, `category_requirement`, `calculator`, `is_enabled`, `position`, `archived_at`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, NULL, 'ups', 'a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:164;}}', 1, 'flat_rate', 1, 0, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(2, NULL, 1, NULL, 'dhl_express', 'a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:373;}}', 1, 'flat_rate', 1, 1, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(3, NULL, 1, NULL, 'fedex', 'a:1:{s:11:\"FASHION_WEB\";a:1:{s:6:\"amount\";i:732;}}', 1, 'flat_rate', 1, 2, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shipping_method_channels`
--

CREATE TABLE `sylius_shipping_method_channels` (
  `shipping_method_id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_shipping_method_channels`
--

INSERT INTO `sylius_shipping_method_channels` (`shipping_method_id`, `channel_id`) VALUES
(1, 1),
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shipping_method_translation`
--

CREATE TABLE `sylius_shipping_method_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_shipping_method_translation`
--

INSERT INTO `sylius_shipping_method_translation` (`id`, `translatable_id`, `name`, `description`, `locale`) VALUES
(1, 1, 'UPS', 'Ut minima blanditiis id voluptas et.', 'en_US'),
(2, 2, 'DHL Express', 'Fuga ut eligendi nihil animi voluptas earum.', 'en_US'),
(3, 3, 'FedEx', 'Recusandae dolor quo at earum minima.', 'en_US');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shop_billing_data`
--

CREATE TABLE `sylius_shop_billing_data` (
  `id` int(11) NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tax_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postcode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_shop_billing_data`
--

INSERT INTO `sylius_shop_billing_data` (`id`, `company`, `tax_id`, `country_code`, `street`, `city`, `postcode`) VALUES
(1, 'Sylius', '0001112222', 'US', 'Test St. 15', 'eCommerce Town', '00 33 22'),
(2, 'Zeta', NULL, 'US', '3850 SE 58th Ave', 'Ocala', '34480');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_shop_user`
--

CREATE TABLE `sylius_shop_user` (
  `id` int(11) NOT NULL,
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
  `encoder_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_shop_user`
--

INSERT INTO `sylius_shop_user` (`id`, `customer_id`, `username`, `username_canonical`, `enabled`, `salt`, `password`, `last_login`, `password_reset_token`, `password_requested_at`, `email_verification_token`, `verified_at`, `locked`, `expires_at`, `credentials_expire_at`, `roles`, `email`, `email_canonical`, `created_at`, `updated_at`, `encoder_name`) VALUES
(1, 1, 'shop@example.com', 'shop@example.com', 1, 'hv9xojlnf688g4kkksc8gg40wscsoo0', '$argon2i$v=19$m=1024,t=2,p=2$S0Vudnhnd0V4c2dTNmpYTQ$DNwrT/7hjUFYKBfDpFbOHgtHU7EVdsJ5tkIYyI6oaBQ', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(2, 2, 'meda09@okon.net', 'meda09@okon.net', 1, 'efezuu4ftr4kw0g0wkogcs8cw8g0wcs', '$argon2i$v=19$m=1024,t=2,p=2$SkRVcVQ4aXk4bGhmL2guMQ$SthwNpQ6sum1cP+VV2enE1lYupoFvNwGFc/1bQ9V9b0', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(3, 3, 'nelle.kub@gmail.com', 'nelle.kub@gmail.com', 1, '4ippg00kieg4c8kw4kw0c8008ogo4wg', '$argon2i$v=19$m=1024,t=2,p=2$cnd0VHFzdmltN3ZIVlRnTg$NlrM7KmnTx7cnUf43aYRE0LUF4Q5uYC/ZmNLcJlEC6c', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(4, 4, 'amills@hotmail.com', 'amills@hotmail.com', 1, 'f1ws528emyo0gwwws4w8o84g0gg8cks', '$argon2i$v=19$m=1024,t=2,p=2$Ri54Vk1lL3VSdEl4ekFyZQ$lYU2WmdjxkQZZRi9vRPjEYUmfix3WOu52VT2dwebdEg', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(5, 5, 'gislason.chester@gmail.com', 'gislason.chester@gmail.com', 1, '60uob00u3cw04k8c88og44wkoggkccw', '$argon2i$v=19$m=1024,t=2,p=2$TjFJWEFQbzhhd2JGUmVnOA$T7a5+M+g0z9O62DRCfV6cUli3qC1ilSvZRFuSWkXkas', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(6, 6, 'robel.glenda@bechtelar.com', 'robel.glenda@bechtelar.com', 1, 'dfoal5h3x7sococw404gkckc4g4gc0g', '$argon2i$v=19$m=1024,t=2,p=2$NGZqYVYuQnpPR1UuWGJjQQ$ocU9SZuADdy674mjggzbkzMIIVLS0692FsPcIgyWgKw', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(7, 7, 'harvey41@gerhold.com', 'harvey41@gerhold.com', 1, '20mnopvbxmkkcg80gw4os0w0c4k8k44', '$argon2i$v=19$m=1024,t=2,p=2$SUdZbmJoaHRHSFE2YnJIWg$gX8JGXzAJ5vwBxCXRS15FTm68MaziNDGPMhjkPBemwg', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(8, 8, 'bwolff@yahoo.com', 'bwolff@yahoo.com', 1, 'is39s94s9y0c0c04ck0o0ks84wk8ogg', '$argon2i$v=19$m=1024,t=2,p=2$SU5qbWRiL2hmMWVDcnVUVA$nWhIxAMxCkzwrf+CmoPczecJi3GLMDS04FeixXernzU', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(9, 9, 'conn.magali@ondricka.com', 'conn.magali@ondricka.com', 1, 'pwnjlhmppy8gog08g4ggkkogsokook4', '$argon2i$v=19$m=1024,t=2,p=2$NWtIYTFsSHUwOHo0R1RYNA$k+Wf8FqmrjN3cKt33fsg6KU+abPY6/q1aFYGp9lVW1I', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(10, 10, 'abreitenberg@hotmail.com', 'abreitenberg@hotmail.com', 1, 'ec8ng5k5d3sckwssw88sc0848gk0scs', '$argon2i$v=19$m=1024,t=2,p=2$dTNpNE5Yc0pIT1ZJRi9ZTg$QJiWLwHE1KECiicXfUgr9NBFQx8urPx9tZbZY0SuqdI', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(11, 11, 'karlee27@leuschke.com', 'karlee27@leuschke.com', 1, '9699lr9b4j4skw4k4ss4cwc4k0gwkwo', '$argon2i$v=19$m=1024,t=2,p=2$T04uUlFyTWY1UVIzTWhxMg$X6FW+2Oyt4qO+aaQl+4heROWBUku036NQQQfMxoUL6s', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(12, 12, 'wehner.davon@gmail.com', 'wehner.davon@gmail.com', 1, 'c60w4po61dcs0go8wo8wccsc84swcoo', '$argon2i$v=19$m=1024,t=2,p=2$RHI0WmdYYmJTd3c0c013WQ$SPK28YkwInRgGf1b/dVpq86UC0xdwMA/2OygwHg5qGI', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(13, 13, 'xnader@hotmail.com', 'xnader@hotmail.com', 1, '14xtwyz98xb4ocwc8c4s04ss0ccggo8', '$argon2i$v=19$m=1024,t=2,p=2$MHN5aG5tbVBSUFQxMWlaWg$xk8MEQ3mY2sA3ynXZGRc+aHqImODrKnreOmXll4mmRk', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(14, 14, 'vince12@hotmail.com', 'vince12@hotmail.com', 1, 'dkj0qmn1jd44w808ogg4wog0og0owks', '$argon2i$v=19$m=1024,t=2,p=2$QU1ueUZvazNYOVVmMHphRQ$DB27thX+/caqqJwc6f107tKqQHD+HTloI0J8U/ZVc3k', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(15, 15, 'aufderhar.lurline@gmail.com', 'aufderhar.lurline@gmail.com', 1, 'ac0bziuwl5c8w8c0oc8o80gwk0w880g', '$argon2i$v=19$m=1024,t=2,p=2$LmouYjNKWTc4TXo2SHBUeA$bvDEX8S3ibbI51xOybOOVvqVgAQpQgkmVDXJOCmB0uw', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(16, 16, 'aroberts@gmail.com', 'aroberts@gmail.com', 1, '5a3mbr5gfnk0k0o8cksw4gkkw8cocow', '$argon2i$v=19$m=1024,t=2,p=2$dElGQS5DSjZnZ2xUaGJRVw$mLRo/hRUSdxOKCr7LLCRupptKcNSVNdmogc5ZjPS1vA', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(17, 17, 'sierra93@doyle.biz', 'sierra93@doyle.biz', 1, '8yuqypr1hc84c0kc8848wo4owokso0k', '$argon2i$v=19$m=1024,t=2,p=2$eHVzQjdLcFp5dXU2dHk4dg$BCWd8gbtiLmhg7ZORGfYZwki/Q8NOXSybwy6r+o34dQ', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(18, 18, 'cydney04@abbott.com', 'cydney04@abbott.com', 1, 'ecknl1te36gcc488gk48cc00socogkc', '$argon2i$v=19$m=1024,t=2,p=2$L2J6Y0lDbU1paUtaa0tlSg$td3nHm6JqUerhiVhdRVPcp6GZanBPei0P6AjDv7+nYA', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(19, 19, 'rogahn.therese@kozey.com', 'rogahn.therese@kozey.com', 1, 'fzl98bon2eoswoo4wwkgkw0o4ok884s', '$argon2i$v=19$m=1024,t=2,p=2$SUgzMTVaLzR2bDZ4SS9rTw$GQB/pdPUz6UXnTcJPTV9CQ40nwW/dxFsAPRrJMtFcTQ', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(20, 20, 'ynicolas@gmail.com', 'ynicolas@gmail.com', 1, 'i7h8c0epu348s0gc08c0s0wsscwk8cg', '$argon2i$v=19$m=1024,t=2,p=2$V3JnNENHOGMyMC5Ed3U4RQ$46mumjThn3kXaZPZM8D3rfiWT57R6cDIgaNycOvYmPs', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i'),
(21, 21, 'evandervort@hotmail.com', 'evandervort@hotmail.com', 1, '9ztapct9y6g44wwogo4ksc8kkco8ok0', '$argon2i$v=19$m=1024,t=2,p=2$QjU5cnBIcHJ4RmsydDh0aA$QOBLILmPERRqFm/KXGYu4Ip3RfqDSbewT/4Sjr1L/Ko', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, 'a:1:{i:0;s:9:\"ROLE_USER\";}', NULL, NULL, '2019-09-08 23:31:00', '2019-09-08 23:31:00', 'argon2i');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_taxon`
--

CREATE TABLE `sylius_taxon` (
  `id` int(11) NOT NULL,
  `tree_root` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tree_left` int(11) NOT NULL,
  `tree_right` int(11) NOT NULL,
  `tree_level` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_taxon`
--

INSERT INTO `sylius_taxon` (`id`, `tree_root`, `parent_id`, `code`, `tree_left`, `tree_right`, `tree_level`, `position`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'category', 1, 22, 0, 0, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(2, 1, 1, 't_shirts', 2, 7, 1, 0, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(3, 1, 2, 'mens_t_shirts', 3, 4, 2, 0, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(4, 1, 2, 'womens_t_shirts', 5, 6, 2, 1, '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(5, 1, 1, 'caps', 8, 13, 1, 1, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(6, 1, 5, 'simple_caps', 9, 10, 2, 0, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(7, 1, 5, 'caps_with_pompons', 11, 12, 2, 1, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(8, 1, 1, 'dresses', 14, 15, 1, 2, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(9, 1, 1, 'jeans', 16, 21, 1, 3, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(10, 1, 9, 'mens_jeans', 17, 18, 2, 0, '2019-09-08 23:31:01', '2019-09-08 23:31:01'),
(11, 1, 9, 'womens_jeans', 19, 20, 2, 1, '2019-09-08 23:31:01', '2019-09-08 23:31:01');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_taxon_image`
--

CREATE TABLE `sylius_taxon_image` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_taxon_translation`
--

CREATE TABLE `sylius_taxon_translation` (
  `id` int(11) NOT NULL,
  `translatable_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_taxon_translation`
--

INSERT INTO `sylius_taxon_translation` (`id`, `translatable_id`, `name`, `slug`, `description`, `locale`) VALUES
(1, 1, 'Category', 'category', 'Soluta totam ratione quis repellat quos voluptates consequuntur. Omnis magnam quis illum et autem odio. Dolorem illo nihil omnis voluptatem. Et magnam illo error vel accusantium. Nulla adipisci consequatur quibusdam ipsam.', 'en_US'),
(2, 1, 'Categorie', 'categorie', 'Sed nihil totam molestias maiores totam iusto. Eos aspernatur animi quo qui aut modi. Facilis quod sunt distinctio qui eveniet rerum consequuntur.', 'fr_FR'),
(3, 2, 'T-shirts', 'category/t-shirts', 'Eum nihil sint ut laborum esse. Aut tempore unde illum dolores blanditiis sint itaque rerum. Molestiae quis magnam voluptate accusantium in tempora necessitatibus.', 'en_US'),
(4, 2, 'T-shirts', 'categorie/t-shirts', 'Corporis et ducimus molestiae quo laudantium. Aliquam et nulla similique quisquam molestiae. Labore autem quis enim est eum id at dolorum. Et doloribus ex vel molestiae.', 'fr_FR'),
(5, 3, 'Men', 't-shirts/men', 'Quaerat alias sit labore. Eius est id non itaque.', 'en_US'),
(6, 3, 'Hommes', 't-shirts/hommes', 'Nihil et aut recusandae qui et cupiditate ea. Ullam accusamus iste modi necessitatibus aspernatur cumque sit repellat.', 'fr_FR'),
(7, 4, 'Women', 't-shirts/women', 'Dicta vel ea consectetur dolores. Eveniet voluptatem perferendis aperiam accusantium commodi voluptates laboriosam.', 'en_US'),
(8, 4, 'Femme', 't-shirts/femmes', 'Perspiciatis pariatur omnis architecto sequi corporis inventore nesciunt delectus. Fugit odit impedit animi ratione molestiae quidem voluptatem. Repellat vitae vero non accusamus.', 'fr_FR'),
(9, 5, 'Caps', 'category/caps', 'Rerum sint nihil quo totam delectus deserunt autem libero. Alias enim nemo ab est. Repellendus vitae in rerum sint molestias natus quasi. Ut et non maiores occaecati commodi adipisci. Maiores quisquam repellendus non ut.', 'en_US'),
(10, 5, 'Casquestte', 'categorie/casquestte', 'Deserunt quo quia vel corrupti quas officia cum. Iusto nostrum iste pariatur aut illo. Aliquid esse et quia odio earum a. Omnis praesentium et ea numquam consequatur repellendus.', 'fr_FR'),
(11, 6, 'Simple', 'caps/simple', 'Voluptatem dolore hic dolorem earum est dolores molestiae. Iure rerum earum dignissimos architecto. Et accusantium sit voluptas sed ullam labore temporibus.', 'en_US'),
(12, 6, 'simple', 'casquette/simple', 'Culpa modi ut eos neque similique rerum culpa consectetur. Saepe officia qui rerum mollitia quas debitis ipsam. Molestias aut officiis id natus et blanditiis.', 'fr_FR'),
(13, 7, 'With pompons', 'caps/with-pompons', 'Est rerum placeat quod et repellendus consequatur provident architecto. Sit laboriosam quae animi voluptatem. Qui ea et fugiat ea et.', 'en_US'),
(14, 7, 'A pompon', 'casquette/a-pompon', 'In aut fugit at laudantium nesciunt. Aspernatur quam consequatur aperiam sint quia dolores quos. Eos eveniet quia ea hic saepe eius officiis.', 'fr_FR'),
(15, 8, 'Dresses', 'category/dresses', 'Molestias necessitatibus unde possimus molestiae. Numquam veritatis et dignissimos quia aliquid quae labore. Dolor iusto fugit repudiandae laudantium nemo.', 'en_US'),
(16, 8, 'Robes', 'categorie/robes', 'Adipisci non sit ut fuga. Dolor beatae non cupiditate est incidunt. Omnis voluptatem voluptates dolorem sint sint tempore.', 'fr_FR'),
(17, 9, 'Jeans', 'category/jeans', 'Blanditiis et voluptates provident qui cum. Molestias et est dolorem temporibus ad. Enim totam quod non alias.', 'en_US'),
(18, 9, 'Jeans', 'categorie/jeans', 'Deleniti voluptas et tempore sit vel. Aliquam ex perferendis labore consequatur enim aspernatur vel. Quia pariatur omnis esse. Eligendi rerum quae nulla cupiditate et. Corrupti ab inventore consequuntur ut eum molestias magnam.', 'fr_FR'),
(19, 10, 'Men', 'jeans/men', 'Quisquam ut vero dolorum doloremque architecto. Ad quaerat illum assumenda ea totam consequatur. Quod id tempora aperiam natus mollitia sunt inventore. Est porro et pariatur est distinctio.', 'en_US'),
(20, 10, 'Hommes', 'jeans/hommes', 'Nobis a provident consequuntur quo. Inventore ducimus molestiae qui dolorem. Eos sint nihil nisi fugit quod expedita est facilis.', 'fr_FR'),
(21, 11, 'Women', 'jeans/women', 'Corrupti cumque et minima. Ex qui blanditiis fugit corporis iusto ad. Quos voluptas numquam et. Minima expedita aut sint dignissimos id dolor quos. Enim soluta maiores autem itaque.', 'en_US'),
(22, 11, 'Femme', 'jeans/femme', 'Quis perspiciatis expedita aliquam maxime. Sit natus quisquam error labore omnis.', 'fr_FR');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_tax_category`
--

CREATE TABLE `sylius_tax_category` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_tax_category`
--

INSERT INTO `sylius_tax_category` (`id`, `code`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'clothing', 'Clothing', 'Voluptas labore quaerat et quae. Iusto consequatur nihil sunt. Eos doloribus fuga mollitia dolorem. Ea perspiciatis aperiam esse debitis.', '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(2, 'other', 'Other', 'Voluptate est cumque repellat officia non nulla iure ut. Cupiditate accusamus possimus dolores.', '2019-09-08 23:31:00', '2019-09-08 23:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_tax_rate`
--

CREATE TABLE `sylius_tax_rate` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount` decimal(10,5) NOT NULL,
  `included_in_price` tinyint(1) NOT NULL,
  `calculator` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_tax_rate`
--

INSERT INTO `sylius_tax_rate` (`id`, `category_id`, `zone_id`, `code`, `name`, `amount`, `included_in_price`, `calculator`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'clothing_sales_tax_7', 'Clothing Sales Tax 7%', '0.07000', 1, 'default', '2019-09-08 23:31:00', '2019-09-08 23:31:00'),
(2, 2, 1, 'sales_tax_20', 'Sales Tax 20%', '0.20000', 1, 'default', '2019-09-08 23:31:00', '2019-09-08 23:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_user_oauth`
--

CREATE TABLE `sylius_user_oauth` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `identifier` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `access_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `refresh_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sylius_zone`
--

CREATE TABLE `sylius_zone` (
  `id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_zone`
--

INSERT INTO `sylius_zone` (`id`, `code`, `name`, `type`, `scope`) VALUES
(1, 'US', 'United States of America', 'country', 'all');

-- --------------------------------------------------------

--
-- Table structure for table `sylius_zone_member`
--

CREATE TABLE `sylius_zone_member` (
  `id` int(11) NOT NULL,
  `belongs_to` int(11) DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sylius_zone_member`
--

INSERT INTO `sylius_zone_member` (`id`, `belongs_to`, `code`) VALUES
(1, 1, 'US');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `sylius_address`
--
ALTER TABLE `sylius_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B97FF0589395C3F3` (`customer_id`);

--
-- Indexes for table `sylius_address_log_entries`
--
ALTER TABLE `sylius_address_log_entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sylius_adjustment`
--
ALTER TABLE `sylius_adjustment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_ACA6E0F28D9F6D38` (`order_id`),
  ADD KEY `IDX_ACA6E0F2E415FB15` (`order_item_id`),
  ADD KEY `IDX_ACA6E0F2F720C233` (`order_item_unit_id`);

--
-- Indexes for table `sylius_admin_api_access_token`
--
ALTER TABLE `sylius_admin_api_access_token`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_2AA4915D5F37A13B` (`token`),
  ADD KEY `IDX_2AA4915D19EB6921` (`client_id`),
  ADD KEY `IDX_2AA4915DA76ED395` (`user_id`);

--
-- Indexes for table `sylius_admin_api_auth_code`
--
ALTER TABLE `sylius_admin_api_auth_code`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_E366D8485F37A13B` (`token`),
  ADD KEY `IDX_E366D84819EB6921` (`client_id`),
  ADD KEY `IDX_E366D848A76ED395` (`user_id`);

--
-- Indexes for table `sylius_admin_api_client`
--
ALTER TABLE `sylius_admin_api_client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sylius_admin_api_refresh_token`
--
ALTER TABLE `sylius_admin_api_refresh_token`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_9160E3FA5F37A13B` (`token`),
  ADD KEY `IDX_9160E3FA19EB6921` (`client_id`),
  ADD KEY `IDX_9160E3FAA76ED395` (`user_id`);

--
-- Indexes for table `sylius_admin_user`
--
ALTER TABLE `sylius_admin_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sylius_avatar_image`
--
ALTER TABLE `sylius_avatar_image`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_1068A3A97E3C61F9` (`owner_id`);

--
-- Indexes for table `sylius_channel`
--
ALTER TABLE `sylius_channel`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_16C8119E77153098` (`code`),
  ADD UNIQUE KEY `UNIQ_16C8119EB5282EDF` (`shop_billing_data_id`),
  ADD KEY `IDX_16C8119E743BF776` (`default_locale_id`),
  ADD KEY `IDX_16C8119E3101778E` (`base_currency_id`),
  ADD KEY `IDX_16C8119EA978C17` (`default_tax_zone_id`),
  ADD KEY `IDX_16C8119EE551C011` (`hostname`);

--
-- Indexes for table `sylius_channel_currencies`
--
ALTER TABLE `sylius_channel_currencies`
  ADD PRIMARY KEY (`channel_id`,`currency_id`),
  ADD KEY `IDX_AE491F9372F5A1AA` (`channel_id`),
  ADD KEY `IDX_AE491F9338248176` (`currency_id`);

--
-- Indexes for table `sylius_channel_locales`
--
ALTER TABLE `sylius_channel_locales`
  ADD PRIMARY KEY (`channel_id`,`locale_id`),
  ADD KEY `IDX_786B7A8472F5A1AA` (`channel_id`),
  ADD KEY `IDX_786B7A84E559DFD1` (`locale_id`);

--
-- Indexes for table `sylius_channel_pricing`
--
ALTER TABLE `sylius_channel_pricing`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_variant_channel_idx` (`product_variant_id`,`channel_code`),
  ADD KEY `IDX_7801820CA80EF684` (`product_variant_id`);

--
-- Indexes for table `sylius_country`
--
ALTER TABLE `sylius_country`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_E74256BF77153098` (`code`),
  ADD KEY `IDX_E74256BF77153098` (`code`);

--
-- Indexes for table `sylius_currency`
--
ALTER TABLE `sylius_currency`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_96EDD3D077153098` (`code`);

--
-- Indexes for table `sylius_customer`
--
ALTER TABLE `sylius_customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7E82D5E6E7927C74` (`email`),
  ADD UNIQUE KEY `UNIQ_7E82D5E6A0D96FBF` (`email_canonical`),
  ADD UNIQUE KEY `UNIQ_7E82D5E6BD94FB16` (`default_address_id`),
  ADD KEY `IDX_7E82D5E6D2919A68` (`customer_group_id`);

--
-- Indexes for table `sylius_customer_group`
--
ALTER TABLE `sylius_customer_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7FCF9B0577153098` (`code`);

--
-- Indexes for table `sylius_exchange_rate`
--
ALTER TABLE `sylius_exchange_rate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_5F52B852A76BEEDB3FD5856` (`source_currency`,`target_currency`),
  ADD KEY `IDX_5F52B852A76BEED` (`source_currency`),
  ADD KEY `IDX_5F52B85B3FD5856` (`target_currency`);

--
-- Indexes for table `sylius_gateway_config`
--
ALTER TABLE `sylius_gateway_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sylius_locale`
--
ALTER TABLE `sylius_locale`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7BA1286477153098` (`code`);

--
-- Indexes for table `sylius_order`
--
ALTER TABLE `sylius_order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_6196A1F996901F54` (`number`),
  ADD UNIQUE KEY `UNIQ_6196A1F94D4CFF2B` (`shipping_address_id`),
  ADD UNIQUE KEY `UNIQ_6196A1F979D0C0E4` (`billing_address_id`),
  ADD KEY `IDX_6196A1F972F5A1AA` (`channel_id`),
  ADD KEY `IDX_6196A1F917B24436` (`promotion_coupon_id`),
  ADD KEY `IDX_6196A1F99395C3F3` (`customer_id`),
  ADD KEY `IDX_6196A1F9A393D2FB43625D9F` (`state`,`updated_at`);

--
-- Indexes for table `sylius_order_item`
--
ALTER TABLE `sylius_order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_77B587ED8D9F6D38` (`order_id`),
  ADD KEY `IDX_77B587ED3B69A9AF` (`variant_id`);

--
-- Indexes for table `sylius_order_item_unit`
--
ALTER TABLE `sylius_order_item_unit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_82BF226EE415FB15` (`order_item_id`),
  ADD KEY `IDX_82BF226E7BE036FC` (`shipment_id`);

--
-- Indexes for table `sylius_order_sequence`
--
ALTER TABLE `sylius_order_sequence`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sylius_payment`
--
ALTER TABLE `sylius_payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D9191BD419883967` (`method_id`),
  ADD KEY `IDX_D9191BD48D9F6D38` (`order_id`);

--
-- Indexes for table `sylius_payment_method`
--
ALTER TABLE `sylius_payment_method`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_A75B0B0D77153098` (`code`),
  ADD KEY `IDX_A75B0B0DF23D6140` (`gateway_config_id`);

--
-- Indexes for table `sylius_payment_method_channels`
--
ALTER TABLE `sylius_payment_method_channels`
  ADD PRIMARY KEY (`payment_method_id`,`channel_id`),
  ADD KEY `IDX_543AC0CC5AA1164F` (`payment_method_id`),
  ADD KEY `IDX_543AC0CC72F5A1AA` (`channel_id`);

--
-- Indexes for table `sylius_payment_method_translation`
--
ALTER TABLE `sylius_payment_method_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_payment_method_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_966BE3A12C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_payment_security_token`
--
ALTER TABLE `sylius_payment_security_token`
  ADD PRIMARY KEY (`hash`);

--
-- Indexes for table `sylius_product`
--
ALTER TABLE `sylius_product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_677B9B7477153098` (`code`),
  ADD KEY `IDX_677B9B74731E505` (`main_taxon_id`);

--
-- Indexes for table `sylius_product_association`
--
ALTER TABLE `sylius_product_association`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_association_idx` (`product_id`,`association_type_id`),
  ADD KEY `IDX_48E9CDABB1E1C39` (`association_type_id`),
  ADD KEY `IDX_48E9CDAB4584665A` (`product_id`);

--
-- Indexes for table `sylius_product_association_product`
--
ALTER TABLE `sylius_product_association_product`
  ADD PRIMARY KEY (`association_id`,`product_id`),
  ADD KEY `IDX_A427B983EFB9C8A5` (`association_id`),
  ADD KEY `IDX_A427B9834584665A` (`product_id`);

--
-- Indexes for table `sylius_product_association_type`
--
ALTER TABLE `sylius_product_association_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_CCB8914C77153098` (`code`);

--
-- Indexes for table `sylius_product_association_type_translation`
--
ALTER TABLE `sylius_product_association_type_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_product_association_type_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_4F618E52C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_product_attribute`
--
ALTER TABLE `sylius_product_attribute`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_BFAF484A77153098` (`code`);

--
-- Indexes for table `sylius_product_attribute_translation`
--
ALTER TABLE `sylius_product_attribute_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_product_attribute_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_93850EBA2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_product_attribute_value`
--
ALTER TABLE `sylius_product_attribute_value`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8A053E544584665A` (`product_id`),
  ADD KEY `IDX_8A053E54B6E62EFA` (`attribute_id`);

--
-- Indexes for table `sylius_product_channels`
--
ALTER TABLE `sylius_product_channels`
  ADD PRIMARY KEY (`product_id`,`channel_id`),
  ADD KEY `IDX_F9EF269B4584665A` (`product_id`),
  ADD KEY `IDX_F9EF269B72F5A1AA` (`channel_id`);

--
-- Indexes for table `sylius_product_image`
--
ALTER TABLE `sylius_product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_88C64B2D7E3C61F9` (`owner_id`);

--
-- Indexes for table `sylius_product_image_product_variants`
--
ALTER TABLE `sylius_product_image_product_variants`
  ADD PRIMARY KEY (`image_id`,`variant_id`),
  ADD KEY `IDX_8FFDAE8D3DA5256D` (`image_id`),
  ADD KEY `IDX_8FFDAE8D3B69A9AF` (`variant_id`);

--
-- Indexes for table `sylius_product_option`
--
ALTER TABLE `sylius_product_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_E4C0EBEF77153098` (`code`);

--
-- Indexes for table `sylius_product_options`
--
ALTER TABLE `sylius_product_options`
  ADD PRIMARY KEY (`product_id`,`option_id`),
  ADD KEY `IDX_2B5FF0094584665A` (`product_id`),
  ADD KEY `IDX_2B5FF009A7C41D6F` (`option_id`);

--
-- Indexes for table `sylius_product_option_translation`
--
ALTER TABLE `sylius_product_option_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_product_option_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_CBA491AD2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_product_option_value`
--
ALTER TABLE `sylius_product_option_value`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_F7FF7D4B77153098` (`code`),
  ADD KEY `IDX_F7FF7D4BA7C41D6F` (`option_id`);

--
-- Indexes for table `sylius_product_option_value_translation`
--
ALTER TABLE `sylius_product_option_value_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_product_option_value_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_8D4382DC2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_product_review`
--
ALTER TABLE `sylius_product_review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C7056A994584665A` (`product_id`),
  ADD KEY `IDX_C7056A99F675F31B` (`author_id`);

--
-- Indexes for table `sylius_product_taxon`
--
ALTER TABLE `sylius_product_taxon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_taxon_idx` (`product_id`,`taxon_id`),
  ADD KEY `IDX_169C6CD94584665A` (`product_id`),
  ADD KEY `IDX_169C6CD9DE13F470` (`taxon_id`);

--
-- Indexes for table `sylius_product_translation`
--
ALTER TABLE `sylius_product_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_105A9084180C698989D9B62` (`locale`,`slug`),
  ADD UNIQUE KEY `sylius_product_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_105A9082C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_product_variant`
--
ALTER TABLE `sylius_product_variant`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_A29B52377153098` (`code`),
  ADD KEY `IDX_A29B5234584665A` (`product_id`),
  ADD KEY `IDX_A29B5239DF894ED` (`tax_category_id`),
  ADD KEY `IDX_A29B5239E2D1A41` (`shipping_category_id`);

--
-- Indexes for table `sylius_product_variant_option_value`
--
ALTER TABLE `sylius_product_variant_option_value`
  ADD PRIMARY KEY (`variant_id`,`option_value_id`),
  ADD KEY `IDX_76CDAFA13B69A9AF` (`variant_id`),
  ADD KEY `IDX_76CDAFA1D957CA06` (`option_value_id`);

--
-- Indexes for table `sylius_product_variant_translation`
--
ALTER TABLE `sylius_product_variant_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_product_variant_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_8DC18EDC2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_promotion`
--
ALTER TABLE `sylius_promotion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_F157396377153098` (`code`);

--
-- Indexes for table `sylius_promotion_action`
--
ALTER TABLE `sylius_promotion_action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_933D0915139DF194` (`promotion_id`);

--
-- Indexes for table `sylius_promotion_channels`
--
ALTER TABLE `sylius_promotion_channels`
  ADD PRIMARY KEY (`promotion_id`,`channel_id`),
  ADD KEY `IDX_1A044F64139DF194` (`promotion_id`),
  ADD KEY `IDX_1A044F6472F5A1AA` (`channel_id`);

--
-- Indexes for table `sylius_promotion_coupon`
--
ALTER TABLE `sylius_promotion_coupon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B04EBA8577153098` (`code`),
  ADD KEY `IDX_B04EBA85139DF194` (`promotion_id`);

--
-- Indexes for table `sylius_promotion_order`
--
ALTER TABLE `sylius_promotion_order`
  ADD PRIMARY KEY (`order_id`,`promotion_id`),
  ADD KEY `IDX_BF9CF6FB8D9F6D38` (`order_id`),
  ADD KEY `IDX_BF9CF6FB139DF194` (`promotion_id`);

--
-- Indexes for table `sylius_promotion_rule`
--
ALTER TABLE `sylius_promotion_rule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2C188EA8139DF194` (`promotion_id`);

--
-- Indexes for table `sylius_province`
--
ALTER TABLE `sylius_province`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B5618FE477153098` (`code`),
  ADD UNIQUE KEY `UNIQ_B5618FE4F92F3E705E237E06` (`country_id`,`name`),
  ADD KEY `IDX_B5618FE4F92F3E70` (`country_id`);

--
-- Indexes for table `sylius_shipment`
--
ALTER TABLE `sylius_shipment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_FD707B3319883967` (`method_id`),
  ADD KEY `IDX_FD707B338D9F6D38` (`order_id`);

--
-- Indexes for table `sylius_shipping_category`
--
ALTER TABLE `sylius_shipping_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B1D6465277153098` (`code`);

--
-- Indexes for table `sylius_shipping_method`
--
ALTER TABLE `sylius_shipping_method`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_5FB0EE1177153098` (`code`),
  ADD KEY `IDX_5FB0EE1112469DE2` (`category_id`),
  ADD KEY `IDX_5FB0EE119F2C3FAB` (`zone_id`),
  ADD KEY `IDX_5FB0EE119DF894ED` (`tax_category_id`);

--
-- Indexes for table `sylius_shipping_method_channels`
--
ALTER TABLE `sylius_shipping_method_channels`
  ADD PRIMARY KEY (`shipping_method_id`,`channel_id`),
  ADD KEY `IDX_2D9833355F7D6850` (`shipping_method_id`),
  ADD KEY `IDX_2D98333572F5A1AA` (`channel_id`);

--
-- Indexes for table `sylius_shipping_method_translation`
--
ALTER TABLE `sylius_shipping_method_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sylius_shipping_method_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_2B37DB3D2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_shop_billing_data`
--
ALTER TABLE `sylius_shop_billing_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sylius_shop_user`
--
ALTER TABLE `sylius_shop_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7C2B74809395C3F3` (`customer_id`);

--
-- Indexes for table `sylius_taxon`
--
ALTER TABLE `sylius_taxon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_CFD811CA77153098` (`code`),
  ADD KEY `IDX_CFD811CAA977936C` (`tree_root`),
  ADD KEY `IDX_CFD811CA727ACA70` (`parent_id`);

--
-- Indexes for table `sylius_taxon_image`
--
ALTER TABLE `sylius_taxon_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_DBE52B287E3C61F9` (`owner_id`);

--
-- Indexes for table `sylius_taxon_translation`
--
ALTER TABLE `sylius_taxon_translation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug_uidx` (`locale`,`slug`),
  ADD UNIQUE KEY `sylius_taxon_translation_uniq_trans` (`translatable_id`,`locale`),
  ADD KEY `IDX_1487DFCF2C2AC5D3` (`translatable_id`);

--
-- Indexes for table `sylius_tax_category`
--
ALTER TABLE `sylius_tax_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_221EB0BE77153098` (`code`);

--
-- Indexes for table `sylius_tax_rate`
--
ALTER TABLE `sylius_tax_rate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_3CD86B2E77153098` (`code`),
  ADD KEY `IDX_3CD86B2E12469DE2` (`category_id`),
  ADD KEY `IDX_3CD86B2E9F2C3FAB` (`zone_id`);

--
-- Indexes for table `sylius_user_oauth`
--
ALTER TABLE `sylius_user_oauth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_provider` (`user_id`,`provider`),
  ADD KEY `IDX_C3471B78A76ED395` (`user_id`);

--
-- Indexes for table `sylius_zone`
--
ALTER TABLE `sylius_zone`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7BE2258E77153098` (`code`);

--
-- Indexes for table `sylius_zone_member`
--
ALTER TABLE `sylius_zone_member`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_E8B5ABF34B0E929B77153098` (`belongs_to`,`code`),
  ADD KEY `IDX_E8B5ABF34B0E929B` (`belongs_to`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sylius_address`
--
ALTER TABLE `sylius_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `sylius_address_log_entries`
--
ALTER TABLE `sylius_address_log_entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `sylius_adjustment`
--
ALTER TABLE `sylius_adjustment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=547;

--
-- AUTO_INCREMENT for table `sylius_admin_api_access_token`
--
ALTER TABLE `sylius_admin_api_access_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_admin_api_auth_code`
--
ALTER TABLE `sylius_admin_api_auth_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_admin_api_client`
--
ALTER TABLE `sylius_admin_api_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_admin_api_refresh_token`
--
ALTER TABLE `sylius_admin_api_refresh_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_admin_user`
--
ALTER TABLE `sylius_admin_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sylius_avatar_image`
--
ALTER TABLE `sylius_avatar_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_channel`
--
ALTER TABLE `sylius_channel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_channel_pricing`
--
ALTER TABLE `sylius_channel_pricing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `sylius_country`
--
ALTER TABLE `sylius_country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_currency`
--
ALTER TABLE `sylius_currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_customer`
--
ALTER TABLE `sylius_customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_customer_group`
--
ALTER TABLE `sylius_customer_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_exchange_rate`
--
ALTER TABLE `sylius_exchange_rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_gateway_config`
--
ALTER TABLE `sylius_gateway_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_locale`
--
ALTER TABLE `sylius_locale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_order`
--
ALTER TABLE `sylius_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_order_item`
--
ALTER TABLE `sylius_order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `sylius_order_item_unit`
--
ALTER TABLE `sylius_order_item_unit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;

--
-- AUTO_INCREMENT for table `sylius_order_sequence`
--
ALTER TABLE `sylius_order_sequence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_payment`
--
ALTER TABLE `sylius_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_payment_method`
--
ALTER TABLE `sylius_payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_payment_method_translation`
--
ALTER TABLE `sylius_payment_method_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_product`
--
ALTER TABLE `sylius_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_product_association`
--
ALTER TABLE `sylius_product_association`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sylius_product_association_type`
--
ALTER TABLE `sylius_product_association_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_product_association_type_translation`
--
ALTER TABLE `sylius_product_association_type_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_product_attribute`
--
ALTER TABLE `sylius_product_attribute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sylius_product_attribute_translation`
--
ALTER TABLE `sylius_product_attribute_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sylius_product_attribute_value`
--
ALTER TABLE `sylius_product_attribute_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `sylius_product_image`
--
ALTER TABLE `sylius_product_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_product_option`
--
ALTER TABLE `sylius_product_option`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sylius_product_option_translation`
--
ALTER TABLE `sylius_product_option_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sylius_product_option_value`
--
ALTER TABLE `sylius_product_option_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `sylius_product_option_value_translation`
--
ALTER TABLE `sylius_product_option_value_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `sylius_product_review`
--
ALTER TABLE `sylius_product_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `sylius_product_taxon`
--
ALTER TABLE `sylius_product_taxon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `sylius_product_translation`
--
ALTER TABLE `sylius_product_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_product_variant`
--
ALTER TABLE `sylius_product_variant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `sylius_product_variant_translation`
--
ALTER TABLE `sylius_product_variant_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `sylius_promotion`
--
ALTER TABLE `sylius_promotion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_promotion_action`
--
ALTER TABLE `sylius_promotion_action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_promotion_coupon`
--
ALTER TABLE `sylius_promotion_coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_promotion_rule`
--
ALTER TABLE `sylius_promotion_rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_province`
--
ALTER TABLE `sylius_province`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_shipment`
--
ALTER TABLE `sylius_shipment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_shipping_category`
--
ALTER TABLE `sylius_shipping_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_shipping_method`
--
ALTER TABLE `sylius_shipping_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sylius_shipping_method_translation`
--
ALTER TABLE `sylius_shipping_method_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sylius_shop_billing_data`
--
ALTER TABLE `sylius_shop_billing_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_shop_user`
--
ALTER TABLE `sylius_shop_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sylius_taxon`
--
ALTER TABLE `sylius_taxon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sylius_taxon_image`
--
ALTER TABLE `sylius_taxon_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_taxon_translation`
--
ALTER TABLE `sylius_taxon_translation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `sylius_tax_category`
--
ALTER TABLE `sylius_tax_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_tax_rate`
--
ALTER TABLE `sylius_tax_rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sylius_user_oauth`
--
ALTER TABLE `sylius_user_oauth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sylius_zone`
--
ALTER TABLE `sylius_zone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sylius_zone_member`
--
ALTER TABLE `sylius_zone_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sylius_address`
--
ALTER TABLE `sylius_address`
  ADD CONSTRAINT `FK_B97FF0589395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `sylius_customer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_adjustment`
--
ALTER TABLE `sylius_adjustment`
  ADD CONSTRAINT `FK_ACA6E0F28D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_ACA6E0F2E415FB15` FOREIGN KEY (`order_item_id`) REFERENCES `sylius_order_item` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_ACA6E0F2F720C233` FOREIGN KEY (`order_item_unit_id`) REFERENCES `sylius_order_item_unit` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_admin_api_access_token`
--
ALTER TABLE `sylius_admin_api_access_token`
  ADD CONSTRAINT `FK_2AA4915D19EB6921` FOREIGN KEY (`client_id`) REFERENCES `sylius_admin_api_client` (`id`),
  ADD CONSTRAINT `FK_2AA4915DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_admin_user` (`id`);

--
-- Constraints for table `sylius_admin_api_auth_code`
--
ALTER TABLE `sylius_admin_api_auth_code`
  ADD CONSTRAINT `FK_E366D84819EB6921` FOREIGN KEY (`client_id`) REFERENCES `sylius_admin_api_client` (`id`),
  ADD CONSTRAINT `FK_E366D848A76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_admin_user` (`id`);

--
-- Constraints for table `sylius_admin_api_refresh_token`
--
ALTER TABLE `sylius_admin_api_refresh_token`
  ADD CONSTRAINT `FK_9160E3FA19EB6921` FOREIGN KEY (`client_id`) REFERENCES `sylius_admin_api_client` (`id`),
  ADD CONSTRAINT `FK_9160E3FAA76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_admin_user` (`id`);

--
-- Constraints for table `sylius_avatar_image`
--
ALTER TABLE `sylius_avatar_image`
  ADD CONSTRAINT `FK_1068A3A97E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `sylius_admin_user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_channel`
--
ALTER TABLE `sylius_channel`
  ADD CONSTRAINT `FK_16C8119E3101778E` FOREIGN KEY (`base_currency_id`) REFERENCES `sylius_currency` (`id`),
  ADD CONSTRAINT `FK_16C8119E743BF776` FOREIGN KEY (`default_locale_id`) REFERENCES `sylius_locale` (`id`),
  ADD CONSTRAINT `FK_16C8119EA978C17` FOREIGN KEY (`default_tax_zone_id`) REFERENCES `sylius_zone` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_16C8119EB5282EDF` FOREIGN KEY (`shop_billing_data_id`) REFERENCES `sylius_shop_billing_data` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_channel_currencies`
--
ALTER TABLE `sylius_channel_currencies`
  ADD CONSTRAINT `FK_AE491F9338248176` FOREIGN KEY (`currency_id`) REFERENCES `sylius_currency` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AE491F9372F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_channel_locales`
--
ALTER TABLE `sylius_channel_locales`
  ADD CONSTRAINT `FK_786B7A8472F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_786B7A84E559DFD1` FOREIGN KEY (`locale_id`) REFERENCES `sylius_locale` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_channel_pricing`
--
ALTER TABLE `sylius_channel_pricing`
  ADD CONSTRAINT `FK_7801820CA80EF684` FOREIGN KEY (`product_variant_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_customer`
--
ALTER TABLE `sylius_customer`
  ADD CONSTRAINT `FK_7E82D5E6BD94FB16` FOREIGN KEY (`default_address_id`) REFERENCES `sylius_address` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_7E82D5E6D2919A68` FOREIGN KEY (`customer_group_id`) REFERENCES `sylius_customer_group` (`id`);

--
-- Constraints for table `sylius_exchange_rate`
--
ALTER TABLE `sylius_exchange_rate`
  ADD CONSTRAINT `FK_5F52B852A76BEED` FOREIGN KEY (`source_currency`) REFERENCES `sylius_currency` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_5F52B85B3FD5856` FOREIGN KEY (`target_currency`) REFERENCES `sylius_currency` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_order`
--
ALTER TABLE `sylius_order`
  ADD CONSTRAINT `FK_6196A1F917B24436` FOREIGN KEY (`promotion_coupon_id`) REFERENCES `sylius_promotion_coupon` (`id`),
  ADD CONSTRAINT `FK_6196A1F94D4CFF2B` FOREIGN KEY (`shipping_address_id`) REFERENCES `sylius_address` (`id`),
  ADD CONSTRAINT `FK_6196A1F972F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`),
  ADD CONSTRAINT `FK_6196A1F979D0C0E4` FOREIGN KEY (`billing_address_id`) REFERENCES `sylius_address` (`id`),
  ADD CONSTRAINT `FK_6196A1F99395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `sylius_customer` (`id`);

--
-- Constraints for table `sylius_order_item`
--
ALTER TABLE `sylius_order_item`
  ADD CONSTRAINT `FK_77B587ED3B69A9AF` FOREIGN KEY (`variant_id`) REFERENCES `sylius_product_variant` (`id`),
  ADD CONSTRAINT `FK_77B587ED8D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_order_item_unit`
--
ALTER TABLE `sylius_order_item_unit`
  ADD CONSTRAINT `FK_82BF226E7BE036FC` FOREIGN KEY (`shipment_id`) REFERENCES `sylius_shipment` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_82BF226EE415FB15` FOREIGN KEY (`order_item_id`) REFERENCES `sylius_order_item` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_payment`
--
ALTER TABLE `sylius_payment`
  ADD CONSTRAINT `FK_D9191BD419883967` FOREIGN KEY (`method_id`) REFERENCES `sylius_payment_method` (`id`),
  ADD CONSTRAINT `FK_D9191BD48D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_payment_method`
--
ALTER TABLE `sylius_payment_method`
  ADD CONSTRAINT `FK_A75B0B0DF23D6140` FOREIGN KEY (`gateway_config_id`) REFERENCES `sylius_gateway_config` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `sylius_payment_method_channels`
--
ALTER TABLE `sylius_payment_method_channels`
  ADD CONSTRAINT `FK_543AC0CC5AA1164F` FOREIGN KEY (`payment_method_id`) REFERENCES `sylius_payment_method` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_543AC0CC72F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_payment_method_translation`
--
ALTER TABLE `sylius_payment_method_translation`
  ADD CONSTRAINT `FK_966BE3A12C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_payment_method` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product`
--
ALTER TABLE `sylius_product`
  ADD CONSTRAINT `FK_677B9B74731E505` FOREIGN KEY (`main_taxon_id`) REFERENCES `sylius_taxon` (`id`);

--
-- Constraints for table `sylius_product_association`
--
ALTER TABLE `sylius_product_association`
  ADD CONSTRAINT `FK_48E9CDAB4584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_48E9CDABB1E1C39` FOREIGN KEY (`association_type_id`) REFERENCES `sylius_product_association_type` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_association_product`
--
ALTER TABLE `sylius_product_association_product`
  ADD CONSTRAINT `FK_A427B9834584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A427B983EFB9C8A5` FOREIGN KEY (`association_id`) REFERENCES `sylius_product_association` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_association_type_translation`
--
ALTER TABLE `sylius_product_association_type_translation`
  ADD CONSTRAINT `FK_4F618E52C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_association_type` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_attribute_translation`
--
ALTER TABLE `sylius_product_attribute_translation`
  ADD CONSTRAINT `FK_93850EBA2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_attribute` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_attribute_value`
--
ALTER TABLE `sylius_product_attribute_value`
  ADD CONSTRAINT `FK_8A053E544584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_8A053E54B6E62EFA` FOREIGN KEY (`attribute_id`) REFERENCES `sylius_product_attribute` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_channels`
--
ALTER TABLE `sylius_product_channels`
  ADD CONSTRAINT `FK_F9EF269B4584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_F9EF269B72F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_image`
--
ALTER TABLE `sylius_product_image`
  ADD CONSTRAINT `FK_88C64B2D7E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_image_product_variants`
--
ALTER TABLE `sylius_product_image_product_variants`
  ADD CONSTRAINT `FK_8FFDAE8D3B69A9AF` FOREIGN KEY (`variant_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_8FFDAE8D3DA5256D` FOREIGN KEY (`image_id`) REFERENCES `sylius_product_image` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_options`
--
ALTER TABLE `sylius_product_options`
  ADD CONSTRAINT `FK_2B5FF0094584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_2B5FF009A7C41D6F` FOREIGN KEY (`option_id`) REFERENCES `sylius_product_option` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_option_translation`
--
ALTER TABLE `sylius_product_option_translation`
  ADD CONSTRAINT `FK_CBA491AD2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_option` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_option_value`
--
ALTER TABLE `sylius_product_option_value`
  ADD CONSTRAINT `FK_F7FF7D4BA7C41D6F` FOREIGN KEY (`option_id`) REFERENCES `sylius_product_option` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_option_value_translation`
--
ALTER TABLE `sylius_product_option_value_translation`
  ADD CONSTRAINT `FK_8D4382DC2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_option_value` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_review`
--
ALTER TABLE `sylius_product_review`
  ADD CONSTRAINT `FK_C7056A994584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_C7056A99F675F31B` FOREIGN KEY (`author_id`) REFERENCES `sylius_customer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_taxon`
--
ALTER TABLE `sylius_product_taxon`
  ADD CONSTRAINT `FK_169C6CD94584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_169C6CD9DE13F470` FOREIGN KEY (`taxon_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_translation`
--
ALTER TABLE `sylius_product_translation`
  ADD CONSTRAINT `FK_105A9082C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_variant`
--
ALTER TABLE `sylius_product_variant`
  ADD CONSTRAINT `FK_A29B5234584665A` FOREIGN KEY (`product_id`) REFERENCES `sylius_product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A29B5239DF894ED` FOREIGN KEY (`tax_category_id`) REFERENCES `sylius_tax_category` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_A29B5239E2D1A41` FOREIGN KEY (`shipping_category_id`) REFERENCES `sylius_shipping_category` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `sylius_product_variant_option_value`
--
ALTER TABLE `sylius_product_variant_option_value`
  ADD CONSTRAINT `FK_76CDAFA13B69A9AF` FOREIGN KEY (`variant_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_76CDAFA1D957CA06` FOREIGN KEY (`option_value_id`) REFERENCES `sylius_product_option_value` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_product_variant_translation`
--
ALTER TABLE `sylius_product_variant_translation`
  ADD CONSTRAINT `FK_8DC18EDC2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_product_variant` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_promotion_action`
--
ALTER TABLE `sylius_promotion_action`
  ADD CONSTRAINT `FK_933D0915139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`);

--
-- Constraints for table `sylius_promotion_channels`
--
ALTER TABLE `sylius_promotion_channels`
  ADD CONSTRAINT `FK_1A044F64139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_1A044F6472F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_promotion_coupon`
--
ALTER TABLE `sylius_promotion_coupon`
  ADD CONSTRAINT `FK_B04EBA85139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`);

--
-- Constraints for table `sylius_promotion_order`
--
ALTER TABLE `sylius_promotion_order`
  ADD CONSTRAINT `FK_BF9CF6FB139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`),
  ADD CONSTRAINT `FK_BF9CF6FB8D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_promotion_rule`
--
ALTER TABLE `sylius_promotion_rule`
  ADD CONSTRAINT `FK_2C188EA8139DF194` FOREIGN KEY (`promotion_id`) REFERENCES `sylius_promotion` (`id`);

--
-- Constraints for table `sylius_province`
--
ALTER TABLE `sylius_province`
  ADD CONSTRAINT `FK_B5618FE4F92F3E70` FOREIGN KEY (`country_id`) REFERENCES `sylius_country` (`id`);

--
-- Constraints for table `sylius_shipment`
--
ALTER TABLE `sylius_shipment`
  ADD CONSTRAINT `FK_FD707B3319883967` FOREIGN KEY (`method_id`) REFERENCES `sylius_shipping_method` (`id`),
  ADD CONSTRAINT `FK_FD707B338D9F6D38` FOREIGN KEY (`order_id`) REFERENCES `sylius_order` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_shipping_method`
--
ALTER TABLE `sylius_shipping_method`
  ADD CONSTRAINT `FK_5FB0EE1112469DE2` FOREIGN KEY (`category_id`) REFERENCES `sylius_shipping_category` (`id`),
  ADD CONSTRAINT `FK_5FB0EE119DF894ED` FOREIGN KEY (`tax_category_id`) REFERENCES `sylius_tax_category` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_5FB0EE119F2C3FAB` FOREIGN KEY (`zone_id`) REFERENCES `sylius_zone` (`id`);

--
-- Constraints for table `sylius_shipping_method_channels`
--
ALTER TABLE `sylius_shipping_method_channels`
  ADD CONSTRAINT `FK_2D9833355F7D6850` FOREIGN KEY (`shipping_method_id`) REFERENCES `sylius_shipping_method` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_2D98333572F5A1AA` FOREIGN KEY (`channel_id`) REFERENCES `sylius_channel` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_shipping_method_translation`
--
ALTER TABLE `sylius_shipping_method_translation`
  ADD CONSTRAINT `FK_2B37DB3D2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_shipping_method` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_shop_user`
--
ALTER TABLE `sylius_shop_user`
  ADD CONSTRAINT `FK_7C2B74809395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `sylius_customer` (`id`);

--
-- Constraints for table `sylius_taxon`
--
ALTER TABLE `sylius_taxon`
  ADD CONSTRAINT `FK_CFD811CA727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_CFD811CAA977936C` FOREIGN KEY (`tree_root`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_taxon_image`
--
ALTER TABLE `sylius_taxon_image`
  ADD CONSTRAINT `FK_DBE52B287E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_taxon_translation`
--
ALTER TABLE `sylius_taxon_translation`
  ADD CONSTRAINT `FK_1487DFCF2C2AC5D3` FOREIGN KEY (`translatable_id`) REFERENCES `sylius_taxon` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sylius_tax_rate`
--
ALTER TABLE `sylius_tax_rate`
  ADD CONSTRAINT `FK_3CD86B2E12469DE2` FOREIGN KEY (`category_id`) REFERENCES `sylius_tax_category` (`id`),
  ADD CONSTRAINT `FK_3CD86B2E9F2C3FAB` FOREIGN KEY (`zone_id`) REFERENCES `sylius_zone` (`id`);

--
-- Constraints for table `sylius_user_oauth`
--
ALTER TABLE `sylius_user_oauth`
  ADD CONSTRAINT `FK_C3471B78A76ED395` FOREIGN KEY (`user_id`) REFERENCES `sylius_shop_user` (`id`);

--
-- Constraints for table `sylius_zone_member`
--
ALTER TABLE `sylius_zone_member`
  ADD CONSTRAINT `FK_E8B5ABF34B0E929B` FOREIGN KEY (`belongs_to`) REFERENCES `sylius_zone` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
