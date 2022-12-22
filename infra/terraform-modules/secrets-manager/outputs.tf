output "secret_arn" {
  value       = aws_secretsmanager_secret.enegix-secrets.arn
  description = "ARN of secretsmanager"
}