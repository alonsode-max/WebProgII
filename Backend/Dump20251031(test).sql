CREATE DATABASE  IF NOT EXISTS `proyecto_base_web` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyecto_base_web`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: webprogdb
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `quests`
--

DROP TABLE IF EXISTS `quests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quests` (
  `idQuests` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descrip` varchar(255) DEFAULT NULL,
  `rango` char(1) NOT NULL,
  `pregunta` text NOT NULL,
  `sol1` text NOT NULL,
  `sol2` text NOT NULL,
  `sol3` text NOT NULL,
  `sol4` text NOT NULL,
  `resp` text NOT NULL,
  PRIMARY KEY (`idQuests`),
  UNIQUE KEY `idQuests_UNIQUE` (`idQuests`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quests`
--

LOCK TABLES `quests` WRITE;
/*!40000 ALTER TABLE `quests` DISABLE KEYS */;
INSERT INTO `quests` VALUES (1,'Test','test','A','Que','so','tal','payaso','loco','so'),(2,'Test2','nose','C','Nose','pass','cruel','nada','todo','pass');
/*!40000 ALTER TABLE `quests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quests_has_users`
--

DROP TABLE IF EXISTS `quests_has_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quests_has_users` (
  `quests_idQuests` int NOT NULL,
  `users_idUsers` int NOT NULL,
  PRIMARY KEY (`quests_idQuests`,`users_idUsers`),
  KEY `fk_quests_has_users_users1_idx` (`users_idUsers`),
  KEY `fk_quests_has_users_quests_idx` (`quests_idQuests`),
  CONSTRAINT `fk_quests_has_users_quests` FOREIGN KEY (`quests_idQuests`) REFERENCES `quests` (`idQuests`),
  CONSTRAINT `fk_quests_has_users_users1` FOREIGN KEY (`users_idUsers`) REFERENCES `users` (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quests_has_users`
--

LOCK TABLES `quests_has_users` WRITE;
/*!40000 ALTER TABLE `quests_has_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `quests_has_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUsers` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `puntos_xp` int NOT NULL DEFAULT '0',
  `nivel` int NOT NULL DEFAULT '1',
  `rol` char(1) NOT NULL DEFAULT 'U',
  PRIMARY KEY (`idUsers`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rick','Sanchez','carac@ola.es','$2b$10$/6CMdYBQmIyTql.9rFLRouGcBlAj6tfaYi8boddzeu0O6U5rvzEga',0,1,'U');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-04 17:57:39
