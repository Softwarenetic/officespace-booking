resource "aws_s3_bucket" "frontend-bucket" {
  bucket = format("%-%-frontend", var.environment, var.bucket)

  versioning {
    enabled = true
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  tags = {
    Name        = format("%-%-frontend", var.environment, var.bucket)
    Environment = var.environment
  }
}

resource "aws_s3_bucket" "frontend-bucket-logs" {
  bucket = format("%-%-frontend-logs", var.environment, var.bucket)

  versioning {
    enabled = true
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  tags = {
    Name        = format("%-%-frontend", var.environment, var.bucket)
    Environment = var.environment
  }
}

resource "aws_s3_bucket_acl" "logs-acl" {
  bucket = aws_s3_bucket.frontend-bucket-logs.id
  acl    = "private"
}
