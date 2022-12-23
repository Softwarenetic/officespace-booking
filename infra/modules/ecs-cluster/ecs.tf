resource "aws_ecs_cluster" "enegix" {
  name = "${var.environment}-cluster"
}



