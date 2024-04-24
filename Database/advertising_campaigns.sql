-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2024 at 07:08 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `advertising_campaigns`
--
CREATE DATABASE IF NOT EXISTS `advertising_campaigns` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `advertising_campaigns`;

-- --------------------------------------------------------

--
-- Table structure for table `advertisingplatforms`
--

CREATE TABLE `advertisingplatforms` (
  `id` int(11) NOT NULL,
  `advertisingPlatform` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `advertisingplatforms`
--

INSERT INTO `advertisingplatforms` (`id`, `advertisingPlatform`) VALUES
(1, 'Google'),
(2, 'Taboola'),
(3, 'TikTok');

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` int(11) NOT NULL,
  `campaignName` varchar(100) NOT NULL,
  `advertisingPlatformId` int(11) NOT NULL,
  `advertiserUrl` varchar(250) NOT NULL,
  `bannerImageUrl` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `campaignName`, `advertisingPlatformId`, `advertiserUrl`, `bannerImageUrl`) VALUES
(1, 'Google Campaign', 1, 'https://www.google.com/', 'https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw'),
(2, 'Taboola Campaign', 2, 'https://www.taboola.com/', 'https://cdn.exchangewire.com/wp-content/uploads/2021/11/taboola-logo-e1656515428563.png'),
(3, 'TikTok Campaign', 3, 'https://www.tiktok.com/', 'https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/4a93c1ebbe481027efba6b2472881b39.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisingplatforms`
--
ALTER TABLE `advertisingplatforms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `advertisingPlatform` (`advertisingPlatformId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisingplatforms`
--
ALTER TABLE `advertisingplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD CONSTRAINT `campaigns_ibfk_1` FOREIGN KEY (`advertisingPlatformId`) REFERENCES `advertisingplatforms` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
