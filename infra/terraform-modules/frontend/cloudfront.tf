resource "aws_cloudfront_distribution" "frontend-cloudfront" {
  enabled             = true
  default_root_object = var.default_root
  origin {
    domain_name = aws_s3_bucket.frontend-bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.frontend-bucket.Name
  }

  logging_config {
    bucket          = aws_s3_bucket.frontend-bucket-logs.bucket_domain_name
    include_cookies = false
    prefix          = "sunday-dev-cloudfront-logs/"
  }

  aliases = [local.acm_dns_name[0]]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.frontend-bucket.Name

    forwarded_values {
      query_string = true
      headers      = ["Origin"]
      cookies {
        forward = "none"
      }
    }


    #viewer_protocol_policy = "allow-all"
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  custom_error_response {
    error_code         = 404
    response_page_path = "/index.html"
    response_code      = 200

  }
  # Cache behavior with precedence 0,1 .............

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      #   restriction_type = "whitelist"
      #   locations        = ["US", "CA", "GB", "DE", "AE"]
      restriction_type = "none"
    }
  }

  tags = {
    Name = "sunday-cloudfront-${var.environment}"
  }


  depends_on = [
    aws_s3_bucket.frontend-bucket
  ]
}