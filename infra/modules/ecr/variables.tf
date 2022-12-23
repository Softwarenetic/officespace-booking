variable "user" {
  description = "IAM user ID for IAM role"
  type        = string
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "dev"
}