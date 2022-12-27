# ================================================
# VPC MODULE
# ================================================

module "vpc-dev" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.4"

  name = var.environment

  cidr = "10.1.0.0/22"

  azs              = data.aws_availability_zones.ireland.names
  public_subnets   = ["10.1.1.0/25", "10.1.1.128/25"]
  private_subnets  = ["10.1.2.0/25", "10.1.2.128/25"]
  database_subnets = ["10.1.3.0/25", "10.1.3.128/25"]

  enable_nat_gateway     = true
  single_nat_gateway     = false
  one_nat_gateway_per_az = false
  enable_vpn_gateway     = false
  enable_dns_hostnames   = true
  enable_dns_support     = true
  create_vpc             = true
  create_igw = true

  vpc_tags = {
    Name = format("%-vpc", var.environment)
  }

}

resource "aws_security_group" "vpc-https" {
  name        = "allow_https"
  description = "Allow HTTPS inbound"
  vpc_id      = module.vpc-dev.vpc_id

  ingress {
    from_port         = 443
    to_port           = 443
    protocol          = "tcp"
    cidr_blocks       = ["0.0.0.0/0"]
    description       = "Allow HTTPS inbound"
  } 

  ingress {
    from_port         = 80
    to_port           = 80
    protocol          = "tcp"
    cidr_blocks       = ["0.0.0.0/0"]
    description       = "Allow HTTP inbound"
  }


  ingress {
    from_port         = 22
    to_port           = 22
    protocol          = "tcp"
    cidr_blocks       = ["0.0.0.0/0"]#[module.vpc-dev.vpc_cidr_block, "${local.ifconfig_co_json.ip}/32"]
    description       = "Allow SSH inbound and my IP"
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow_https"
  }
}
resource "aws_security_group" "psql" {
    name        = "allow_psql"
    description = "Allow PSQL inbound"
    vpc_id      = module.vpc-dev.vpc_id

    
    ingress {
        from_port         = 22
        to_port           = 22
        protocol          = "tcp"
        cidr_blocks       = ["0.0.0.0/0"]#[module.vpc-dev.vpc_cidr_block, "${local.ifconfig_co_json.ip}/32"]
        description       = "Allow SSH inbound and my IP"
    }
    ingress {
        from_port         = 5432
        to_port           = 5432
        protocol          = "tcp"
        cidr_blocks       = ["0.0.0.0/0"]
        description       = "Allow PSQL connection inbound and my IP"
    }

    egress {
        from_port        = 0
        to_port          = 0
        protocol         = "-1"
        cidr_blocks      = ["0.0.0.0/0"]
        ipv6_cidr_blocks = ["::/0"]
    }

    tags = {
        Name = "allow_psql"
    }
}

locals {
  ifconfig_co_json = jsondecode(data.http.my_public_ip.body)
}