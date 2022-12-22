#  SECURITY GROUP FOR ECS service (awsvpc mode only)

resource "aws_security_group" "ecs_sg" {
  name        = format("%v-security-group", var.microservice)
  description = "allow inbound acces from ALB only"
  vpc_id      = var.vpc_id

  ingress {
    protocol        = "TCP"
    from_port       = var.app_port
    to_port         = var.app_port
    security_groups = [aws_security_group.alb.id]

  }

  egress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 0
    protocol    = "-1"
    to_port     = 0
  }
}

#  ALB SECURITY GROUP, EDIT TO RESTRICT ACCESS TO THE APPLICATION

resource "aws_security_group" "alb" {
  name   = format("%v-%v-alb-sg", var.environment, var.microservice)
  vpc_id = var.vpc_id

  ingress {
    protocol    = "TCP"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "TCP"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "TCP"
    from_port   = var.app_port
    to_port     = var.app_port
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 0
    protocol    = "-1"
    to_port     = 0
  }
}