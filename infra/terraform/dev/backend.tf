terraform {
  backend "s3" {
    bucket         = "wbs-terraform-infrastructure"
    key            = "dev/terraform.tfstate"
    region         = "us-east-2"
    encrypt        = true
    kms_key_id     = "alias/wbs-terraform-infrastructure"
    dynamodb_table = "wbs-terraform-infrastructure"
  }
}