resource "aws_db_instance" "rds-postgres" {
  instance_class          = var.instance_class
  allocated_storage       = 5
  engine                  = "postgres"
  engine_version          = "13.7"
  username                = var.db_username
  password                = var.db_password
  db_subnet_group_name    = aws_db_subnet_group.db-subnet.name
  vpc_security_group_ids  = [aws_security_group.rds-sg.id]
  parameter_group_name    = aws_db_parameter_group.db-params.name
  publicly_accessible     = var.publicly_accessible_enable
  skip_final_snapshot     = true
  snapshot_identifier     = var.db_snapshot
  backup_retention_period = 14
}

resource "aws_db_subnet_group" "db-subnet" {
  name       = "${var.environment}-subnet-group"
  subnet_ids = var.rds_subnet_id
}

resource "aws_db_parameter_group" "db-params" {
  name   = "${var.parameter_group}-group"
  family = "postgres13"

  parameter {
    name  = "log_connections"
    value = "1"
  }
}

resource "aws_security_group" "rds-sg" {
  name   = "${var.environment}-rds_sg"
  vpc_id = var.rds_vpc


  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = var.rds_subnet_cidr
  }
}