output "db_pwd" {
  value     = nonsensitive(var.db_password)
  sensitive = true
}

output "rds_hostname" {
  description = "RDS instance hostname"
  value       = aws_db_instance.rds-postgres.address
}

output "rds_port" {
  description = "RDS instance port"
  value       = aws_db_instance.rds-postgres.port
}

output "rds_username" {
  description = "RDS instance root username"
  value       = nonsensitive(var.db_username)
  sensitive   = true
}
output "rds_arn" {
  description = "RDS instance ARN"
  value       = aws_db_instance.rds-postgres.arn
}