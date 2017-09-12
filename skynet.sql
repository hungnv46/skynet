-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2017 at 04:17 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skynet`
--

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `row_id` int(11) NOT NULL,
  `game_code` varchar(32) NOT NULL,
  `game_type` varchar(12) NOT NULL,
  `game_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `uid` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `reward_type` varchar(12) NOT NULL,
  `created_date` datetime NOT NULL,
  `latest_updated` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `row_id` int(11) NOT NULL,
  `game_code` varchar(32) NOT NULL,
  `player_id` varchar(32) NOT NULL,
  `player_phone` varchar(18) NOT NULL,
  `player_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `created_date` datetime NOT NULL,
  `latest_updated` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reward`
--

CREATE TABLE `reward` (
  `row_id` int(11) NOT NULL,
  `reward_code` varchar(32) NOT NULL,
  `reward_type` varchar(12) NOT NULL,
  `reward_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `reward_picture` text NOT NULL,
  `uid` varchar(32) NOT NULL,
  `created_date` datetime NOT NULL,
  `latest_updated` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `row_id` int(11) NOT NULL,
  `uid` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `firstname` varchar(12) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `lastname` varchar(12) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(52) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `latest_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`row_id`, `uid`, `firstname`, `lastname`, `email`, `password`, `role`, `created_date`, `latest_updated`) VALUES
(8, '1643452049021536', 'Nguyen', 'Hung', 'vanhung_nguyen1984@yahoo.com', '', 1, '2017-09-09 00:33:27', '2017-09-12 22:32:14'),
(9, '2225009570858331', 'Huong', 'Nguyen', 'quynhhuong_2811@yahoo.com.vn', '', 1, '2017-09-12 22:35:22', '2017-09-12 22:35:22');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `row_id` int(11) NOT NULL,
  `role_value` int(11) NOT NULL,
  `role_name` varchar(12) NOT NULL,
  `created_date` datetime NOT NULL,
  `latest_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`row_id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`row_id`);

--
-- Indexes for table `reward`
--
ALTER TABLE `reward`
  ADD PRIMARY KEY (`row_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`row_id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`row_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `row_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `row_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `reward`
--
ALTER TABLE `reward`
  MODIFY `row_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `row_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
