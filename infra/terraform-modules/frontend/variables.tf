variable "bucket" {
  type        = string
  default     = "user"
  description = "Bucket name(user/admin)"
}


variable "enviroment" {
  type        = string
  default     = "dev"
  description = "Enviroment name"
}

variable "versioning" {
  type        = bool
  default     = true
  description = "Enable versioning"
}
