-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `uid` int NOT NULL,
  `cat` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'11 Food Items for vegans','<p>The 11 foods or food groups that healthy vegans are encouraged to include in their diet are:</p><p><br></p><p>1. Legumes (beans, lentils, peas)</p><p>2. Nuts, nut butters, and seeds</p><p>3. Hemp, flax, and chia seeds</p><p>4. Tofu and other minimally processed meat substitutes (like tempeh and seitan)</p><p>5. Calcium-fortified plant milks and yogurts</p><p>6. Seaweed (such as spirulina, chlorella, kelp, nori)</p><p>7. Nutritional yeast (especially fortified with B12)</p><p>8. Sprouted and fermented plant foods (such as tempeh, miso, sauerkraut, kimchi)</p><p>9. Whole grains, cereals, and pseudocereals (such as spelt, teff, amaranth, quinoa)</p><p>10. Choline-rich foods (like tofu, cauliflower, broccoli, quinoa)</p><p>11. Fruits and vegetables (including those that can substitute animal products in recipes)</p><p><br></p><p>- Vegans avoid animal products, so their diet should include nutrient-rich plant foods to prevent deficiencies.</p><p>- Key foods for vegans include legumes, nuts, seeds (like hemp, flax, chia), tofu, tempeh, seitan, and fortified plant milks for protein, iron, calcium, and B12.</p><p>- Sprouted and fermented foods boost nutrient absorption and provide probiotics and vitamin K2.</p><p>- Seaweed provides iodine and DHA; however, consumption should be moderated due to iodine levels.</p><p>- Whole grains like spelt, teff, quinoa offer protein and nutrients; choline-rich foods like tofu and cauliflower support brain and liver health.</p><p>- Fruits and vegetables add essential vitamins and minerals, and some can act as substitutes for animal products in recipes.</p><p>- A well-planned vegan diet including these foods helps maintain health and prevent nutrient deficiencies; supplements may be necessary if dietary intake is insufficient.</p><p><br></p><p>These foods help ensure vegans get adequate nutrients for health and to avoid deficiencies.</p>','1750324137163food_Vegan_pexels-photo-1640772.jpeg','2025-06-19 14:08:54',3,'food'),(4,'Enaby 30','<p>I was browsing an IKEA store yesterday, and happened across the&nbsp;<a href=\"https://www.ikea.com/us/en/catalog/products/40401473/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(74, 132, 174);\">ENEBY 30 Bluetooth speaker</a>&nbsp;set up in a \"living room\" near their gadgets section. I wasn\'t in a hurry or anything, and I was curious that IKEA would even be selling something like that, so I figured I\'d stop and test it out.</p><p>After pairing my iPhone with it — which was a breeze, I might add — I tried a few songs in Apple Music and the&nbsp;<a href=\"https://youtu.be/z85gwyBpev8\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(74, 132, 174);\">live version of Mutemath\'s \"Used To\"</a>, and I was blown away how good this thing sounded, even when I cranked it loud. (Sorry for that, everyone in the store who probably hated me for a minute.) The highs were clear even at upper volumes, and the bass was surprisingly sonorous. While I wouldn\'t tell you to expect miracles from a furniture store speaker, this one gives a lot of bang for its buck, and the minimalist look is right up my alley.</p>','17503232786259CB2F5DE-5115-496B-8BE1-D9F711F93724.jpeg','2025-06-19 14:24:38',3,'technology');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-19 15:34:37
