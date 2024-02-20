resource "github_repository" "komore" {
  name                   = var.repository_name
  description            = "Full-stack framework for TypeScript & Node"
  visibility             = "private"
  homepage_url           = "https://${var.domain_name}"
  has_downloads          = false
  has_discussions        = false
  has_issues             = true
  has_projects           = false
  has_wiki               = false
  allow_merge_commit     = false
  allow_squash_merge     = false
  allow_rebase_merge     = true
  allow_auto_merge       = false
  delete_branch_on_merge = true
  auto_init              = false
  archive_on_destroy     = true
  vulnerability_alerts   = true
  allow_update_branch    = true
}

resource "github_branch" "main" {
  branch     = "main"
  repository = github_repository.komore.name
}

resource "github_branch_default" "default" {
  branch     = github_branch.main.branch
  repository = github_repository.komore.name
}
