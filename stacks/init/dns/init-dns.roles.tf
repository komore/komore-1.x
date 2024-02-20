data "aws_iam_policy_document" "key" {
  statement {
    effect = "Allow"
    sid    = "Allow KMS key management from the Route53 DNSSEC service"

    principals {
      type        = "Service"
      identifiers = ["dnssec-route53.amazonaws.com"]
    }

    actions = [
      "kms:DescribeKey",
      "kms:GetPublicKey",
      "kms:Sign",
      "kms:Verify"
    ]

    resources = ["*"]
  }

  statement {
    effect = "Allow"
    sid    = "Enable IAM user permissions"

    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]
    }

    actions   = ["kms:*"]
    resources = ["*"]
  }
}

data "aws_caller_identity" "current" {}
