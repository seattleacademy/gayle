CREATE TABLE `courses` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `stu_id` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `grad_year` int(11) DEFAULT NULL,
  `gender` varchar(11) DEFAULT NULL,
  `advisor_id` varchar(50) DEFAULT NULL,
  `tri_num` int(11) DEFAULT NULL,
  `dept` varchar(11) DEFAULT NULL,
  `course` varchar(50) DEFAULT NULL,
  `teacher` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stu_id` (`stu_id`),
  KEY `advisor_id` (`advisor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33859 DEFAULT CHARSET=utf8;