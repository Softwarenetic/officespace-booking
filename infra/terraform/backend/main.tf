 resource "aws_kms_key" "backend_kms_key" { 
  description             = "This key is used to encrypt bucket objects"
  deletion_window_in_days = 10
  enable_key_rotation     = true
  tags = {
    Name = "backend-kms-key"
  }
}
resource "aws_kms_alias" "backend_key_alias" {
  name          = "alias/wbs-terraform-infrastructure"
  target_key_id = aws_kms_key.backend_kms_key.key_id
}
resource "aws_s3_bucket" "backend_s3" {
  bucket        = "wbs-terraform-infrastructure"
  force_destroy = true
  tags = {
    Name = "wbs-terraform-infrastructure"
  }
}
resource "aws_s3_bucket_acl" "backend_bucket_acl" {
  bucket = aws_s3_bucket.backend_s3.id
  acl    = "private"
}
resource "aws_s3_bucket_versioning" "backend_s3_versioning" {
  bucket = aws_s3_bucket.backend_s3.id
  versioning_configuration {
    status = "Enabled"
  }
}
resource "aws_s3_bucket_server_side_encryption_configuration" "backend_s3_encryption" {
  bucket = aws_s3_bucket.backend_s3.bucket
  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = aws_kms_key.backend_kms_key.arn
      sse_algorithm     = "aws:kms"
    }
  }
}
resource "aws_s3_bucket_public_access_block" "backend_block_access" {
  bucket = aws_s3_bucket.backend_s3.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
resource "aws_dynamodb_table" "backend_dynamodb_state" {
  name           = "wbs-terraform-infrastructure"
  hash_key       = "LockID"
  read_capacity  = 1
  write_capacity = 1
  attribute {
    name = "LockID"
    type = "S"
  }
  tags = {
    Name = "wbs-terraform-infrastructure"
  }
}