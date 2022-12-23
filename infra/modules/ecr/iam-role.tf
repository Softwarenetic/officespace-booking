resource "aws_iam_policy" "ecr_policy" {
  name        = "ecr_policy"
  path        = "/"
  description = "ecr policy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:GetRepositoryPolicy",
          "ecr:DescribeRepositories",
          "ecr:ListImages",
          "ecr:DescribeImages",
          "ecr:BatchGetImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload",
          "ecr:PutImage"
        ],
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iam_role" "ecr" {
  name = "ecr-iam-role"
  assume_role_policy = jsonencode({

    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "",
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : "${var.user}"
        },
        "Action" : "sts:AssumeRole",
      }
    ]
  })

}

# ECS task execution role policy attachment
resource "aws_iam_role_policy_attachment" "ecr" {
  role       = aws_iam_role.ecr.name
  policy_arn = aws_iam_policy.ecr_policy.arn
}