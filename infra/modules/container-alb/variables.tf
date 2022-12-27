# ================================================
# ECS CLUSTER VARIABLES
# ================================================

variable "microservice" {
  type        = string
  default     = "backend"
  description = "Microservice name"
}
variable "environment" {
  type        = string
  default     = "dev"
  description = "Environment name"
}
variable "cluster_name" {
  type        = string
  default     = ""
  description = "Cluster name"
}
variable "cluster_id" {
  type        = string
  default     = ""
  description = "Cluster ID"
}

variable "ecs_task_execution_role_name" {
  description = "ECS task execution role name"
  default     = "myEcsTaskExecutionRole"
}


# ================================================
# FARGATE VARIABLES
# ================================================

variable "fargate_memory" {
  default     = "2048"
  description = "The ECS Fargate task memory"
}
variable "fargate_cpu" {
  default     = "1024"
  description = "The ECS Fargate task CPU"
}
variable "app_count" {
  description = "number of docker containers to run"
}
variable "app_port" {
  description = "port exposed by docker image"
  default     = 80
}
variable "app_image" {
  default     = "nginx:latest"
  description = "Image of microservice"
}
variable "az_count" {
  default     = 1
  description = "Amount of avaliability zones for microservices"
  type        = number
}



# ================================================
# ALB VARIABLES
# ================================================

variable "alb_tls_cert_arn" {
  type        = string
  description = "ARN of SSL certificate"
}
variable "health_check_path" {
  type        = string
  default     = "/"
  description = "Health check path"
}

variable "health_check_code" {
  type        = string
  default     = "200"
  description = "Health check path"
}

variable "health_check_code_interval" {
  type        = string
  default     = "30"
  description = "Health check path"
}

# ================================================
# VPC VARIABLES
# ================================================

variable "vpc_id" {
  type        = string
  description = "VPC ID where microcervice will be deployed"
}

variable "public_subnets_list" {
  type        = list(string)
  description = "List of public subnets where microcervice will be deployed"
}

variable "private_subnets_list" {
  type        = list(string)
  description = "List of private subnets where microcervice will be deployed"
}

