# GitHub Profile Repository (coderj001/coderj001)
This is a special GitHub profile repository that displays as the user's GitHub profile README. It contains profile information, technology badges, GitHub stats, and automated activity updates.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively
This repository contains NO buildable code, tests, or deployable applications. It is purely a profile display repository.

### Repository Structure
- `README.md` - Main profile content with badges, stats, and activity
- `.github/workflows/update_activity.yml` - Automated workflow that updates recent activity every 6 hours
- `.github/copilot-instructions.md` - This instructions file

### Basic Operations
- Clone the repository: `git clone https://github.com/coderj001/coderj001.git`
- Check repository status: `git status`
- View repository structure: `ls -la` (shows only README.md and .github/ directory)

## Validation
Always perform these validation steps when making changes:

### YAML Workflow Validation
- `yamllint .github/workflows/update_activity.yml` - NEVER CANCEL: Takes 5-10 seconds. Set timeout to 30+ seconds.
- Note: The workflow may show style warnings about missing `---` document start and truthy values - these are acceptable for GitHub workflows

### README.md Content Validation
- Check line count and structure: `wc -l README.md && head -10 README.md`
- Verify sections are intact: `grep -n "^##" README.md` to see all section headers
- **CRITICAL**: Always verify the activity section markers are preserved:
  - `<!--START_SECTION:activity-->` 
  - `<!--END_SECTION:activity-->`
- The jamesgeorge007/github-activity-readme action requires these markers to function

### Manual Testing After Changes
- **ALWAYS** verify README.md renders correctly by viewing it in a markdown preview
- Check that badge URLs follow the shields.io pattern: `https://img.shields.io/badge/...`
- Ensure GitHub stats URLs point to correct username: `username=coderj001`
- Validate that all section headers use proper markdown syntax (##, ###)

## Common Tasks

### Updating Profile Information
- Edit the intro section (lines 1-16) for personal branding updates
- Modify technology badges in sections:
  - Languages (lines 20-34)
  - Frameworks (lines 36-47)
  - Tools (lines 49-64)
  - Databases (lines 66-75)

### Badge Management
- All badges use shields.io format: `https://img.shields.io/badge/[LABEL]-[MESSAGE]-[COLOR]?style=for-the-badge&logo=[LOGO]&logoColor=[LOGOCOLOR]`
- Maintain consistent styling: `style=for-the-badge`
- **NEVER** modify the activity section (lines 87-98) manually - it's auto-updated by workflow

### Workflow Management
- The update_activity.yml workflow runs every 6 hours via cron: `0 */6 * * *`
- Uses `jamesgeorge007/github-activity-readme@master` action
- Requires `GITHUB_TOKEN` secret (automatically provided)
- Updates max 10 lines of recent activity (`MAX_LINES: 10`)

## Repository Characteristics
- **NO BUILD PROCESS**: This repository does not build, compile, or deploy anything
- **NO TESTS**: There are no unit tests, integration tests, or test frameworks
- **NO DEPENDENCIES**: No package.json, requirements.txt, or similar dependency files
- **NO CODE**: Contains only markdown content and YAML configuration
- **AUTO-UPDATES**: Recent activity section updates automatically via GitHub Actions

## Validation Commands Reference
Quick reference for common validation tasks:

```bash
# Repository structure check
ls -la
find . -type f -name "*.md" -o -name "*.yml"

# YAML validation (NEVER CANCEL - 10 seconds max)
yamllint .github/workflows/update_activity.yml

# Content validation
wc -l README.md
grep -n "##" README.md
grep -A5 -B5 "activity" README.md

# Git operations
git status
git log --oneline -5
```

## Critical Warnings
- **NEVER** remove or modify the activity section markers (`<!--START_SECTION:activity-->` and `<!--END_SECTION:activity-->`)
- **NEVER** manually edit the content between activity markers - it will be overwritten
- **ALWAYS** preserve the exact formatting of GitHub stats table (lines 79-81)
- **DO NOT** add build commands, test commands, or deployment scripts - this repository has none

## Expected File Sizes and Timing
- README.md: ~98 lines, ~7.8KB
- Workflow validation: 5-10 seconds maximum
- Profile updates via workflow: automatic every 6 hours
- Repository operations: instantaneous (no build/compile steps)

Remember: This is a profile showcase repository, not a development project. Focus on content presentation, badge accuracy, and maintaining the automated activity updates.