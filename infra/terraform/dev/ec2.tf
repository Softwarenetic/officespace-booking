resource "aws_instance" "app" {
    ami           = data.aws_ami.ubuntu.id
    instance_type = "t3.micro"
    key_name = var.key_name
    tags = {
        Name = "${var.environment}-app-wbs"
    }
    depends_on = [aws_security_group.vpc-https]
    subnet_id = module.vpc-dev.public_subnets[0]
    security_groups = [aws_security_group.vpc-https.id]
}

resource "aws_eip" "app-ip" {
  instance = aws_instance.app.id    
}



resource "aws_instance" "psql" {
    ami           = data.aws_ami.ubuntu.id
    instance_type = "t3.micro"
    key_name = var.key_name
    tags = {
        Name = "${var.environment}-db-wbs"
    }
    depends_on = [aws_security_group.psql]
    subnet_id = module.vpc-dev.public_subnets[0]
    security_groups = [aws_security_group.psql.id]
}

resource "null_resource" "wait2connect_app" {
 provisioner "remote-exec" {
    connection {
      type = "ssh"
      host         = aws_instance.app.public_ip
      user         = "ubuntu"
      private_key  = file(var.key)
    }

    inline = ["echo 'connected!'","sudo apt update",
      "sudo apt install -y nginx git npm nodejs"]
  }
  depends_on = [
    aws_instance.app, null_resource.wait2connect_db
  ]
  }


resource "null_resource" "wait2connect_db" {
 provisioner "remote-exec" {
    connection {
      type = "ssh"
      host         = aws_instance.psql.public_ip
      user         = "ubuntu"
      private_key  = file(var.key)
    }


    inline = ["echo 'connected!'","sudo apt update",
      "sudo apt psql"]
  }
  depends_on = [
    aws_instance.psql
  ]
  }
