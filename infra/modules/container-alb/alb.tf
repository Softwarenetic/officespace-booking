resource "aws_lb" "alb" {
  name               = format("%v-%v-load-balancer", var.environment, var.microservice)
  subnets            = var.public_subnets_list
  load_balancer_type = "application"
  internal           = false
  security_groups    = [aws_security_group.alb.id]
}

resource "aws_lb_target_group" "alb" {
  name        = format("%v-%v-target-group", var.environment, var.microservice)
  port        = 80
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"


  health_check {
    healthy_threshold   = "3"
    interval            = var.health_check_code_interval
    protocol            = "HTTP"
    matcher             = var.health_check_code
    timeout             = "3"
    path                = var.health_check_path
    unhealthy_threshold = "2"
  }
}

#  REDIRECT ALL TRAFFIC FROM ALB TO THE TARGET GROUP


resource "aws_alb_listener" "https" {
  load_balancer_arn = aws_lb.alb.id
  port              = 443
  protocol          = "HTTPS"

  ssl_policy      = "ELBSecurityPolicy-2016-08"
  certificate_arn = var.alb_tls_cert_arn

  default_action {
    target_group_arn = aws_lb_target_group.alb.id
    type             = "forward"
  }
}

resource "aws_alb_listener" "http" {
  load_balancer_arn = aws_lb.alb.id
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = 443
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }

}

resource "aws_alb_listener" "container" {
  load_balancer_arn = aws_lb.alb.id
  port              = var.app_port
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = 80
      protocol    = "HTTP"
      status_code = "HTTP_301"
    }
  }
}