resource "aws_ecs_service" "backend" {
  name            = format("%v-%v", var.environment, var.microservice)
  cluster         = var.cluster_id
  task_definition = aws_ecs_task_definition.backend.arn
  desired_count   = var.app_count
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.alb.id]
    subnets          = var.private_subnets_list
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.backend.id
    container_name   = var.microservice
    container_port   = var.app_port
  }

  depends_on = [aws_alb_listener.http, aws_iam_role_policy_attachment.ecs_task_execution_role]
}


resource "aws_ecs_task_definition" "backend" {
  family                   = format("%v-%v", var.environment, var.microservice)
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = data.template_file.backend.rendered
}

