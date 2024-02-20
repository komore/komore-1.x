resource "aws_iam_role" "cloudwatch" {
  name               = "api-gateway-cloudwatch"
  description        = "Account-wide API Gateway logging role"
  assume_role_policy = data.aws_iam_policy_document.assume.json
}

resource "aws_iam_role_policy" "cloudwatch" {
  name   = "cloudwatch"
  role   = aws_iam_role.cloudwatch.id
  policy = data.aws_iam_policy_document.cloudwatch.json
}

data "aws_iam_policy_document" "assume" {
  statement {
    effect = "Allow"
    sid    = "Allow assuming the API Gateway service role"

    principals {
      type        = "Service"
      identifiers = ["apigateway.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

data "aws_iam_policy_document" "cloudwatch" {
  statement {
    effect = "Allow"
    sid    = "Allow managing CloudWatch logs"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:DescribeLogGroups",
      "logs:DescribeLogStreams",
      "logs:PutLogEvents",
      "logs:GetLogEvents",
      "logs:FilterLogEvents"
    ]

    resources = ["*"]
  }
}
