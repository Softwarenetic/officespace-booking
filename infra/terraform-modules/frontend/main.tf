resource "aws_s3_bucket" "frontend-bucket" {
  bucket = format("%-%-frontend",var.enviroment, var.bucket)
  
  versioning {
    enabled = var.versioning
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  tags = {
    Name        = format("%-%-frontend",var.enviroment, var.bucket)
    Environment = var.enviroment
  }
}

resource "aws_s3_bucket" "frontend-bucket" {
  bucket = format("%-%-frontend",var.enviroment, var.bucket)
  
  versioning {
    enabled = var.versioning
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  tags = {
    Name        = format("%-%-frontend",var.enviroment, var.bucket)
    Environment = var.enviroment
  }
}
resource "aws_s3_bucket_acl" "b_acl" {
  bucket = aws_s3_bucket.frontend-bucket.id
  acl    = "private"
}

locals {
  s3_origin_id = "myS3Origin"
}

