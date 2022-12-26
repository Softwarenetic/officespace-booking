resource "aws_instance" "app" {
    ami           = data.aws_ami.ubuntu.id
    instance_type = "t3.micro"
    key_name = var.key_name
    tags = {
        Name = "${var.environment}-app-wbs"
    }
    depends_on = [aws_security_group.vpc-https]
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

}
resource "null_resource" "wait2connect_app" {
 provisioner "remote-exec" {
    connection {
      host         = aws_instance.app.public_dns
      user         = "ubuntu"
      private_key  = file(var.key)
    }

    inline = ["echo 'connected!'","sudo apt update",
      "sudo apt install -y nginx git npm nodejs"]
  }
  depends_on = [
    aws_instance.app
  ]
  }


resource "null_resource" "wait2connect_db" {
 provisioner "remote-exec" {
    connection {
      host         = aws_instance.psql.public_dns
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
