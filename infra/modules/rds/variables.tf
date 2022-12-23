variable "db_password" {
  description = "RDS root user password"
  type        = string
  sensitive   = true
}


variable "instance_class" {
  description = "db instance type"
  type        = string
  default     = "db.t3.micro"
}

variable "db_username" {
  type        = string
  description = "db username"
  default     = "admin"
  sensitive   = true
}

variable "publicly_accessible_enable" {
  description = "Public access to db. Set true for public accesibility"
  type        = bool
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "dev"
}

variable "parameter_group" {
  type        = string
  description = "Parameter group for db"
  default     = "test"
}

variable "rds_subnet_cidr" {
  type        = list(string)
  description = "CIDR block for db subnet"
}

variable "db_snapshot" {
  type        = string
  description = "ID of DB snapshot if you create db with data from another db"
  default     = ""
}

variable "rds_vpc" {
  type        = string
  description = "VPC ID for db"
}

variable "rds_subnet_id" {
  type        = list(string)
  description = "Subnet ID for db"
}