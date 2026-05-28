# Git access — collaborators

Repo: https://github.com/skacperski/ccsv3  
Default branch: `main`

## Clone (HTTPS)

```bash
git clone https://github.com/skacperski/ccsv3.git
cd ccsv3
```

## Auth (required for push)

You must be logged in as your GitHub user (**not** the repo owner’s account).

**Option A — GitHub CLI (recommended)**

```bash
gh auth login
gh auth setup-git
```

**Option B — Personal Access Token**

1. GitHub → Settings → Developer settings → Personal access tokens  
2. Scope: `repo` (classic) or repository write (fine-grained on `skacperski/ccsv3`)  
3. When Git asks for password, paste the token (not your GitHub password).

## Remote check

```bash
git remote -v
# origin  https://github.com/skacperski/ccsv3.git (fetch)
# origin  https://github.com/skacperski/ccsv3.git (push)
```

## Typical errors

| Message | Fix |
|---------|-----|
| `Permission denied` / `403` | Wrong GitHub account in credential manager; run `gh auth login` as yourself |
| `Repository not found` | No access yet — accept collaborator invite in email/GitHub notifications |
| `protected branch` | Use a feature branch + Pull Request (when branch protection is enabled) |

## Workflow

```bash
git checkout -b feature/your-change
git add .
git commit -m "describe change"
git push -u origin feature/your-change
```

Open a PR to `main` on GitHub.
