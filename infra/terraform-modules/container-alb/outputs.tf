output "alb_hostname" {
  value = aws_lb.alb.*.dns_name
}
output "alb_arn" {
  value = aws_lb.alb.*.arn
}