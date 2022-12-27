variable "bucket" {
  type        = string
  default     = "user"
  description = "Bucket name(user/admin)"
}

variable "environment" {
  type        = string
  default     = "dev"
  description = "Environment name"
}
