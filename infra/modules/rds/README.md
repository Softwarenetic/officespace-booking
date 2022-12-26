<!-- BEGIN_TF_DOCS -->
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
| [aws_db_instance.rds-postgres](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance) | resource |
| [aws_db_parameter_group.db-params](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_parameter_group) | resource |
| [aws_db_subnet_group.db-subnet](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_subnet_group) | resource |
| [aws_security_group.rds-sg](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_db_password"></a> [db\_password](#input\_db\_password) | RDS root user password | `string` | n/a | yes |
| <a name="input_db_snapshot"></a> [db\_snapshot](#input\_db\_snapshot) | ID of DB snapshot if you create db with data from another db | `string` | `""` | no |
| <a name="input_db_username"></a> [db\_username](#input\_db\_username) | db username | `string` | `"admin"` | no |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment name | `string` | `"dev"` | no |
| <a name="input_instance_class"></a> [instance\_class](#input\_instance\_class) | db instance type | `string` | `"db.t3.micro"` | no |
| <a name="input_parameter_group"></a> [parameter\_group](#input\_parameter\_group) | Parameter group for db | `string` | `"test"` | no |
| <a name="input_publicly_accessible_enable"></a> [publicly\_accessible\_enable](#input\_publicly\_accessible\_enable) | Public access to db. Set true for public accesibility | `bool` | n/a | yes |
| <a name="input_rds_subnet_cidr"></a> [rds\_subnet\_cidr](#input\_rds\_subnet\_cidr) | CIDR block for db subnet | `list(string)` | n/a | yes |
| <a name="input_rds_subnet_id"></a> [rds\_subnet\_id](#input\_rds\_subnet\_id) | Subnet ID for db | `list(string)` | n/a | yes |
| <a name="input_rds_vpc"></a> [rds\_vpc](#input\_rds\_vpc) | VPC ID for db | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_db_pwd"></a> [db\_pwd](#output\_db\_pwd) | n/a |
| <a name="output_rds_arn"></a> [rds\_arn](#output\_rds\_arn) | RDS instance ARN |
| <a name="output_rds_hostname"></a> [rds\_hostname](#output\_rds\_hostname) | RDS instance hostname |
| <a name="output_rds_port"></a> [rds\_port](#output\_rds\_port) | RDS instance port |
| <a name="output_rds_username"></a> [rds\_username](#output\_rds\_username) | RDS instance root username |
<!-- END_TF_DOCS -->