resource "aws_secretsmanager_secret" "enegix-secrets" {
  name = "${var.environment}-secret"
}