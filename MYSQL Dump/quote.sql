DROP DATABASE IF EXISTS quote;
CREATE DATABASE quote;
use quote;

CREATE TABLE IF NOT EXISTS quote.message (
    `id` INT NOT NULL AUTO_INCREMENT,
    `quotation` TEXT(1024) CHARACTER SET utf8,
    `author` VARCHAR(255) CHARACTER SET utf8,
PRIMARY KEY (`id`));



INSERT INTO message (`author`,`quotation`) VALUES ('Ellen Ullman','We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.');
INSERT INTO message (`author`,`quotation`) VALUES ('Anonymous','The best thing about a boolean is even if you are wrong, you are only off by a bit.');
INSERT INTO message (`author`,`quotation`) VALUES ('Grace Hopper','If it is a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.');
INSERT INTO message (`author`,`quotation`) VALUES ('C-3PO','The city’s central computer told you?  R2D2, you know better than to trust a strange computer!');
INSERT INTO message (`author`,`quotation`) VALUES ('Bjarne Stroustrup','I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.');
INSERT INTO message (`author`,`quotation`) VALUES ('Jeremy Keith','Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand');
INSERT INTO message (`author`,`quotation`) VALUES ('Grace Hopper','Java is to JavaScript as ham is to hamster.');
