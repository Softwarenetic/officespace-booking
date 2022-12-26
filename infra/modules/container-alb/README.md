# container-alb

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_alb_listener.container](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener) | resource |
| [aws_alb_listener.http](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener) | resource |
| [aws_alb_listener.https](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/alb_listener) | resource |
| [aws_cloudwatch_log_group.backend_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) | resource |
| [aws_cloudwatch_log_stream.backend_log_stream](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_stream) | resource |
| [aws_ecs_service.backend](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service) | resource |
| [aws_ecs_task_definition.backend](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition) | resource |
| [aws_iam_role.ecs_task_execution_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role_policy_attachment.ecs_task_execution_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) | resource |
| [aws_lb.alb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb) | resource |
| [aws_lb_target_group.alb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group) | resource |
| [aws_security_group.alb](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) | resource |
| [aws_security_group.ecs_sg](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_alb_tls_cert_arn"></a> [alb\_tls\_cert\_arn](#input\_alb\_tls\_cert\_arn) | ARN of SSL certificate | `string` | n/a | yes |
| <a name="input_app_count"></a> [app\_count](#input\_app\_count) | number of docker containers to run | `any` | n/a | yes |
| <a name="input_app_image"></a> [app\_image](#input\_app\_image) | Image of microservice | `string` | `"nginx:latest"` | no |
| <a name="input_app_port"></a> [app\_port](#input\_app\_port) | port exposed by docker image | `number` | `80` | no |
| <a name="input_az_count"></a> [az\_count](#input\_az\_count) | Amount of avaliability zones for microservices | `number` | `1` | no |
| <a name="input_cluster_id"></a> [cluster\_id](#input\_cluster\_id) | Cluster ID | `string` | `""` | no |
| <a name="input_cluster_name"></a> [cluster\_name](#input\_cluster\_name) | Cluster name | `string` | `""` | no |
| <a name="input_ecs_task_execution_role_name"></a> [ecs\_task\_execution\_role\_name](#input\_ecs\_task\_execution\_role\_name) | ECS task execution role name | `string` | `"myEcsTaskExecutionRole"` | no |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment name | `string` | `"dev"` | no |
| <a name="input_fargate_cpu"></a> [fargate\_cpu](#input\_fargate\_cpu) | The ECS Fargate task CPU | `string` | `"1024"` | no |
| <a name="input_fargate_memory"></a> [fargate\_memory](#input\_fargate\_memory) | The ECS Fargate task memory | `string` | `"2048"` | no |
| <a name="input_health_check_code"></a> [health\_check\_code](#input\_health\_check\_code) | Health check path | `string` | `"200"` | no |
| <a name="input_health_check_code_interval"></a> [health\_check\_code\_interval](#input\_health\_check\_code\_interval) | Health check path | `string` | `"30"` | no |
| <a name="input_health_check_path"></a> [health\_check\_path](#input\_health\_check\_path) | Health check path | `string` | `"/"` | no |
| <a name="input_microservice"></a> [microservice](#input\_microservice) | Microservice name | `string` | `"backend"` | no |
| <a name="input_private_subnets_list"></a> [private\_subnets\_list](#input\_private\_subnets\_list) | List of private subnets where microcervice will be deployed | `list(string)` | n/a | yes |
| <a name="input_public_subnets_list"></a> [public\_subnets\_list](#input\_public\_subnets\_list) | List of public subnets where microcervice will be deployed | `list(string)` | n/a | yes |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | VPC ID where microcervice will be deployed | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_alb_arn"></a> [alb\_arn](#output\_alb\_arn) | n/a |
| <a name="output_alb_hostname"></a> [alb\_hostname](#output\_alb\_hostname) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
