-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema musimundos
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categories_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories_products` (
  `idcategories` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`conditions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`conditions` (
  `idconditions` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idconditions`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products` (
  `idproducts` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NULL,
  `dimensions` VARCHAR(45) NOT NULL,
  `categories_idcategories` INT UNSIGNED NOT NULL,
  `conditions_idconditions` INT UNSIGNED NOT NULL,
  `discount` INT UNSIGNED NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `qualities` VARCHAR(500) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `stock` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idproducts`),
  INDEX `fk_products_categories_idx` (`categories_idcategories` ASC) VISIBLE,
  INDEX `fk_products_conditions1_idx` (`conditions_idconditions` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`categories_idcategories`)
    REFERENCES `mydb`.`categories_products` (`idcategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_conditions1`
    FOREIGN KEY (`conditions_idconditions`)
    REFERENCES `mydb`.`conditions` (`idconditions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`genders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`genders` (
  `idgenders` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idgenders`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categories_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories_users` (
  `idcategories_users` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategories_users`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `idusers` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `phoneNumber` INT UNSIGNED NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `genders_idgenders` INT UNSIGNED NOT NULL,
  `categories_users_idcategories_users` INT UNSIGNED NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idusers`),
  INDEX `fk_users_genders1_idx` (`genders_idgenders` ASC) VISIBLE,
  INDEX `fk_users_categories_users1_idx` (`categories_users_idcategories_users` ASC) VISIBLE,
  CONSTRAINT `fk_users_genders1`
    FOREIGN KEY (`genders_idgenders`)
    REFERENCES `mydb`.`genders` (`idgenders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_categories_users1`
    FOREIGN KEY (`categories_users_idcategories_users`)
    REFERENCES `mydb`.`categories_users` (`idcategories_users`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productsRemoved`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`productsRemoved` (
  `idproductsRemoved` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `dimensions` VARCHAR(45) NOT NULL,
  `conditions_idconditions` INT UNSIGNED NOT NULL,
  `categories_products_idcategories` INT UNSIGNED NOT NULL,
  `discount` INT UNSIGNED NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `qualities` VARCHAR(500) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `stock` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idproductsRemoved`),
  INDEX `fk_productsRemoved_conditions1_idx` (`conditions_idconditions` ASC) VISIBLE,
  INDEX `fk_productsRemoved_categories_products1_idx` (`categories_products_idcategories` ASC) VISIBLE,
  CONSTRAINT `fk_productsRemoved_conditions1`
    FOREIGN KEY (`conditions_idconditions`)
    REFERENCES `mydb`.`conditions` (`idconditions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productsRemoved_categories_products1`
    FOREIGN KEY (`categories_products_idcategories`)
    REFERENCES `mydb`.`categories_products` (`idcategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carts` (
  `idcarts` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `products_idproducts` INT UNSIGNED NOT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  `amount` INT UNSIGNED NOT NULL,
  `price_total` INT NULL,
  PRIMARY KEY (`idcarts`),
  INDEX `fk_carts_products1_idx` (`products_idproducts` ASC) VISIBLE,
  INDEX `fk_carts_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_carts_products1`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `mydb`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `idorders` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `carts_idcarts` INT UNSIGNED NOT NULL,
  `users_idusers` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idorders`),
  INDEX `fk_orders_carts1_idx` (`carts_idcarts` ASC) VISIBLE,
  INDEX `fk_orders_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_orders_carts1`
    FOREIGN KEY (`carts_idcarts`)
    REFERENCES `mydb`.`carts` (`idcarts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
