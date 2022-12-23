resource "aws_cloudwatch_log_group" "backend_logs" {
  name              = format("%v-%v-group", var.environment, var.microservice)
  retention_in_days = 30

  tags = {
    Name = format("%v-log-group", var.microservice)
  }
}

resource "aws_cloudwatch_log_stream" "backend_log_stream" {
  name           = format("%v-log-stream", var.microservice)
  log_group_name = aws_cloudwatch_log_group.backend_logs.name
}
